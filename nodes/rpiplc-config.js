const rpiplc = require("@industrial-shields/librpiplc");

module.exports = function(RED) {
	function rpiplcConfigNode(config) {
		RED.nodes.createNode(this, config);

		this.version = config.version
		this.model = config.model;

		this.instance = rpiplc(this.version, this.model);
	}

	RED.nodes.registerType("rpiplc-config", rpiplcConfigNode);
}
