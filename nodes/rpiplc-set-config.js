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
