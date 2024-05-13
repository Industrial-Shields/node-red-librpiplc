# node-red-librpiplc
### by Industrial Shields

**node-red-librpiplc** provides a Node-RED wrapper for the librpiplc C library, enabling applications to interface with the GPIOs of Raspberry Pi based Industrial Shields PLCs:
* Analog reads and write
* Digital reads and writes
* Relay controlling

<a href="https://www.npmjs.com/package/@industrial-shields/node-red-librpiplc"><img title="npm version" src="https://badgen.net/npm/v/@industrial-shields/node-red-librpiplc"></a>
<a href="https://www.npmjs.com/package/@industrial-shields/node-red-librpiplc"><img title="npm version" src="https://badgen.net/npm/dt/@industrial-shields/node-red-librpiplc"></a>


## Licensing
This library is licensed under the LGPL-3.0-or-later. The test programs are licensed under the GPL-3.0-or-later.


## Prerequisites

### One of our PLCs: https://www.industrialshields.com/


### Installing librpiplc

You must first install the [librpiplc](https://github.com/Industrial-Shields/librpiplc), as this library depends on it.



## Installing

To install the stable version use the Node-RED Menu -> Manage palette -> Install option, and search for `@industrial-shields/node-red-librpiplc`. Or you can also run the following command in your Node-RED user directory, typically ~/.node-red:
```
npm install @industrial-shields/node-red-librpiplc@<tag-version>
```
Where `<tag-version>` is the version number you wish to download. Before this unification, you had to choose between versions 1.X.X (for V3 PLCs) or 2.X.X (for V4 PLCs). As of 3.X.X, this library is compatible with all our Raspberry PLCs regardless of it's version. At the moment of writing, this library is available to Raspberry PLCs V6, V4 and V3.
You can check the available versions in here: https://github.com/Industrial-Shields/node-red-librpiplc/tags


## Usage
Provides four nodes:
1. **[Analog Read](#analog-read)**: Gets the value of an analog input.
1. **[Analog Write](#analog-write)**: Sets a value of an analog output.
1. **[Digital read](#digital-read)**: Gets the value of a digital input.
1. **[Digital write](#digital-write)**: Sets a value of a digital output.
1. [Available PLC versions](#available-versions)
1. [Available PLC models](#available-models)


### <a name="analog-read"></a>Analog Read

Reads the value from the specified analog pin. You have to provide both the version and the model of the Raspberry PLC you are using. Then select an input pin.

![analog-read](https://user-images.githubusercontent.com/61695455/130433880-cc4007e6-60df-4f32-a01d-0aa74b52a5c7.png)


### <a name="analog-write"></a>Analog Write

Writes an analog value (a PWM wave) in the specified analog pin. You have to provide both the version and the model of the Raspberry PLC you are using. Then select an output pin and specify a value between 0 and 4095 (0-10V).

![analog-write](https://user-images.githubusercontent.com/61695455/130433860-c204c9e9-101b-4a5e-9ef9-c05293de6632.png)


### <a name="digital-read"></a>Digital Read
Reads the value from a specified digital pin, either HIGH or LOW. You have to provide both the version and the model of the Raspberry PLC you are using. Then select the input pin that will be read.

![digital-read](https://user-images.githubusercontent.com/61695455/130433842-ee026f14-8c37-4f69-99ba-fe1d5baa2b08.png)


### <a name="digital-write"></a>Digital Write
Writes a value to a specified digital pin. You have to provide both the version and the model of the Raspberry PLC you are using. Then select the input pin that will be written, and a value (either HIGH or LOW).

![digital-write](https://user-images.githubusercontent.com/61695455/130433826-61f2cbc8-9d93-4284-b1c4-7931d99da6d2.png)

### <a name="rpiplc-set-config"></a>RPIPLC set configuration
Before the update that introduced this node, you had to specify for every node which version and model you were using in order to get the correct mapping. Now you can mark a rpiplc-config node as "Custom", and change it's version and model injecting a message to this node with the ".version" and ".model" fields. You can check which [versions](#available-versions) and [models](#available-models) are available in the following sections.


### <a name="available-versions"></a>Available PLC versions
```
RPIPLC_V3 (deprecated)
RPIPLC_V4
RPIPLC_V5
```


### <a name="available-models"></a>Available PLC models
```
RPIPLC_19R
RPIPLC_21
RPIPLC_38AR
RPIPLC_38R
RPIPLC_42
RPIPLC_50RRA
RPIPLC_53ARR
RPIPLC_54ARA
RPIPLC_57AAR
RPIPLC_57R
RPIPLC_58
```
