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
			}
			catch (e) {
				throw new Error(`Error while initialising rpiplc instance: ${e}`);
			}
		}
	}

	RED.nodes.registerType("rpiplc-config", rpiplcConfigNode);
}
