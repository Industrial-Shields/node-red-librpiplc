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
	function rpiplcConfigNode(config) {
		RED.nodes.createNode(this, config);

		this.isCustom = config.isCustom;

		this.version = config.version;
		this.model = config.model;

		if (!this.isCustom) {
			try {
				this.instance = rpiplc(this.version, this.model);
				const rc = this.instance.rc;
				if (rc != 0 && rc != 1) {
					throw new Error(`Error while initialising rpiplc instance: rc = ${rc}`);
				}
				this.initializedPins = {};
			}
			catch (e) {
				throw new Error(`Error while initialising rpiplc instance: ${e}`);
			}
		}
	}

	RED.nodes.registerType("rpiplc-config", rpiplcConfigNode);
}
