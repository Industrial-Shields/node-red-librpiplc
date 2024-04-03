module.exports = function(RED) {
	function rpiplcDigitalReadNode(config) {
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

				try {
					msg.payload = this.rpiplc.instance.digitalRead(pin);
				}
				catch {
					throw new Error(`Pin ${pin} is not valid for this configuration`)
				}
				this.send(msg);
			}
		});

		this.on("close", done => {
			done();
		});
	}

	RED.nodes.registerType("rpiplc-digital-read", rpiplcDigitalReadNode);
}
