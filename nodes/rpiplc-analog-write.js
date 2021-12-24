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
				this.rpiplc.instance.analogWrite(pin, value);
			}
			this.send(msg);
		});

		this.on("close", done => {
			done();
		});

		if (this.rpiplc) {
			this.rpiplc.instance.pinMode(config.pin, this.rpiplc.instance.OUTPUT);
		}
	}

	RED.nodes.registerType("rpiplc-analog-write", rpiplcAnalogWriteNode);
}
