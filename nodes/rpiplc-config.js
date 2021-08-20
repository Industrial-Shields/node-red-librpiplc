const rpiplc = require('@industrialshields/rpiplc');

module.exports = function(RED) {
	function rpiplcConfigNode(config) {
		RED.nodes.createNode(this, config);

		this.model = config.model;

		this.instance = rpiplc(this.model);
	}

	RED.nodes.registerType("rpiplc-config", rpiplcConfigNode);
}
