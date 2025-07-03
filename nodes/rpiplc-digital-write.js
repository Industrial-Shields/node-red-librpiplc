/*
 * Copyright (c) 2024 Industrial Shields. All rights reserved
 *
 * This file is part of node-red-librpiplc.
 *
 * node-red-librpiplc is free software: you can redistribute
 * it and/or modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation, either version
 * 3 of the License, or (at your option) any later version.
 *
 * node-red-librpiplc is distributed in the hope that it will
 * be useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

module.exports = function(RED) {
	function rpiplcDigitalWriteNode(config) {
		RED.nodes.createNode(this, config);

		this.rpiplc = RED.nodes.getNode(config.rpiplc);

		this.on("input", msg => {
			// Value validations
			let value = config.value || msg.payload;
			if (value === "HIGH"
				|| value === "1"
				|| (typeof value === "number" && value == 1)
				|| (typeof value === "boolean" && value)) {
				value = this.rpiplc.instance.HIGH;
			}
			else if (value === "LOW"
				|| value === "0"
				|| value === 0
				|| (typeof value === "boolean" && !value)) {
				value = this.rpiplc.instance.LOW;
			}
			else {
				throw new Error(`Invalid payload sent: ${value}`);
			}

			let pin = config.pin;
			if (pin == "Message passed" || pin == "CUSTOM") {
				pin = msg.pin
				if (!pin) {
					throw new Error("Pin was not passed by message");
				}
			}

			if (this.rpiplc && pin) {
				const initializedPins = this.rpiplc.initializedPins;

				if (!this.rpiplc.instance || typeof initializedPins !== "object") {
					throw new Error("PLC instance not defined. Please use the 'plc set config' node");
				}

				if (initializedPins[pin] !== this.rpiplc.instance.OUTPUT) {
					const pinModeRC = this.rpiplc.instance.pinMode(pin, this.rpiplc.instance.OUTPUT);
					if (pinModeRC != 0) {
						const errorMsg = `Pin ${pin} couldn't be configured (rc = ${pinModeRC})`;
						throw new Error(errorMsg);
					}
					initializedPins[pin] = this.rpiplc.instance.OUTPUT;
				}

				msg.rc = this.rpiplc.instance.digitalWrite(pin, value);
				this.send(msg);
			}
		});

		this.on("close", done => {
			done();
		});
	}

	RED.nodes.registerType("rpiplc-digital-write", rpiplcDigitalWriteNode);
}
