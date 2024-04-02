module.exports = function(RED) {
	function rpiplcAnalogWriteNode(config) {
		RED.nodes.createNode(this, config);

		this.rpiplc = RED.nodes.getNode(config.rpiplc);

		this.on("input", msg => {
			let pin = config.pin;
			let value = 0;
			if (config.value != '') {
				value = parseInt(config.value) || 0;
			} else if (typeof msg.payload == 'number') {
				value = msg.payload;
			}

			if (this.rpiplc && pin) {
				if (!this.rpiplc.instance) {
					throw new Error("RPIPLC instance not defined. Please use rpiplc set config node");
				}
				this.rpiplc.instance.analogWrite(pin, value);
			}
		});

		this.on("close", done => {
			done();
		});
	}

	RED.nodes.registerType("rpiplc-analog-write", rpiplcAnalogWriteNode);
}
