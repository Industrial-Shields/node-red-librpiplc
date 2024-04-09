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

const rpiplc = require("@industrial-shields/librpiplc");

module.exports = function(RED) {
	function rpiplcCustomConfigNode(config) {
		RED.nodes.createNode(this, config);

		this.rpiplc = RED.nodes.getNode(config.rpiplc);

		this.on("input", msg => {
			if (!this.rpiplc.isCustom) {
				throw new Error("The given PLC configuration is NOT custom");
			}

			try {
				this.rpiplc.instance = rpiplc(msg.version, msg.model);
				this.rpiplc.version = msg.version;
				this.rpiplc.model = msg.model;
			}
			catch (e) {
				throw new Error(`Unable to initialise the rpiplc instance: ${e.message}`);
			}

			if (this.rpiplc.instance) {
				msg.payload = 0;
			}
			else {
				msg.payload = -1;
			}

			this.send(msg);
		});

		this.on("close", done => {
			done();
		});
	}

	RED.nodes.registerType("rpiplc-set-config", rpiplcCustomConfigNode);
}
