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
			if (this.rpiplc && config.pin) {
				let pin = config.pin;
				if (pin == "Message passed") {
					pin = msg.pin
					if (!pin) {
						throw new Error("Pin was not passed by message");
					}
				}

				let value = 0;
				if (config.value != '') {
					value = parseInt(config.value);
				} else if (typeof msg.payload == 'number') {
					value = msg.payload > 0 ? this.rpiplc.instance.HIGH : this.rpiplc.instance.LOW;
				} else if (typeof msg.payload == 'boolean') {
					value = msg.payload ? this.rpiplc.instance.HIGH : this.rpiplc.instance.LOW;
				} else if (msg.payload === 'HIGH') {
					value = this.rpiplc.instance.HIGH;
				} else if (msg.payload === 'LOW') {
					value = this.rpiplc.instance.LOW;
				}

				if (!this.rpiplc.instance) {
					throw new Error("RPIPLC instance not defined. Please use rpiplc set config node");
				}

				try {
					msg.rc = this.rpiplc.instance.digitalWrite(pin, value);
				}
				catch {
					throw new Error(`Pin ${pin} is not available for the current configuration (currently ${this.rpiplc.version}/${this.rpiplc.model})`);
				}
				this.send(msg);
			}
		});

		this.on("close", done => {
			done();
		});
	}

	RED.nodes.registerType("rpiplc-digital-write", rpiplcDigitalWriteNode);
}
