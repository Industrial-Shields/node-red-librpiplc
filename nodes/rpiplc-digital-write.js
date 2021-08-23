module.exports = function(RED) {
	function rpiplcDigitalWriteNode(config) {
		RED.nodes.createNode(this, config);

		this.rpiplc = RED.nodes.getNode(config.rpiplc);

		this.on("input", msg => {
			if (this.rpiplc && config.pin) {
				let value = parseInt(config.value) || this.rpiplc.instance.LOW;

				if (typeof msg.payload == 'number') {
					value = msg.payload > 0 ? this.rpiplc.instance.HIGH : this.rpiplc.instance.LOW;
				} else if (typeof msg.payload == 'boolean') {
					value = msg.payload ? this.rpiplc.instance.HIGH : this.rpiplc.instance.LOW;
				} else if (msg.payload === 'HIGH') {
					value = this.rpiplc.instance.HIGH;
				} else if (msg.payload === 'LOW') {
					value = this.rpiplc.instance.LOW;
				}

				this.rpiplc.instance.digitalWrite(config.pin, value);
			}
		});

		this.on("close", done => {
			done();
		});

		if (this.rpiplc) {
			this.rpiplc.instance.pinMode(config.pin, this.rpiplc.instance.OUTPUT);
		}
	}

	RED.nodes.registerType("rpiplc-digital-write", rpiplcDigitalWriteNode);
}
