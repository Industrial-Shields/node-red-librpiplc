module.exports = function(RED) {
	function rpiplcAnalogReadNode(config) {
		RED.nodes.createNode(this, config);

		this.rpiplc = RED.nodes.getNode(config.rpiplc);

		this.on("input", msg => {
			let pin = config.pin;
			if (pin == "Message passed") {
				pin = msg.pin
				if (!pin) {
					throw new Error("Pin was not passed by message");
				}
			}

			if (this.rpiplc && pin) {
				if (!this.rpiplc.instance) {
					throw new Error("RPIPLC instance not defined. Please use rpiplc set config node");
				}

				msg.payload = this.rpiplc.instance.analogRead(pin);
				msg.rc = 0;
				this.send(msg);
			}
		});

		this.on("close", done => {
			done();
		});
	}

	RED.nodes.registerType("rpiplc-analog-read", rpiplcAnalogReadNode);
}
