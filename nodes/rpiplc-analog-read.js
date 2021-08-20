module.exports = function(RED) {
	function rpiplcAnalogReadNode(config) {
		RED.nodes.createNode(this, config);

		this.rpiplc = RED.nodes.getNode(config.rpiplc);

		this.on("input", msg => {
			let pin = config.pin;

			if (this.rpiplc && pin) {
				msg.payload = this.rpiplc.instance.analogRead(pin);
				this.send(msg);
			}
		});

		this.on("close", done => {
			done();
		});

		if (this.rpiplc) {
			this.rpiplc.instance.pinMode(config.pin, this.rpiplc.instance.INPUT);
		}
	}

	RED.nodes.registerType("rpiplc-analog-read", rpiplcAnalogReadNode);
}
