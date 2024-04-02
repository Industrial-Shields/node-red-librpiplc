module.exports = function(RED) {
	function rpiplcDigitalWriteNode(config) {
		RED.nodes.createNode(this, config);

		this.rpiplc = RED.nodes.getNode(config.rpiplc);

		this.on("input", msg => {
			if (this.rpiplc && config.pin) {
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
				this.rpiplc.instance.digitalWrite(config.pin, value);
			}
		});

		this.on("close", done => {
			done();
		});
	}

	RED.nodes.registerType("rpiplc-digital-write", rpiplcDigitalWriteNode);
}
