# node-red-librpiplc
### by Industrial Shields

**node-red-librpiplc** provides a Node-RED wrapper for the librpiplc C library, enabling applications to interface with the GPIOs of Raspberry Pi based Industrial Shields PLCs:
* Analog reads and write
* Digital reads and writes
* Relay controlling
* Other pins (like DE/RE)

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
Where `<tag-version>` is the version number you wish to download. Before this unification, you had to choose between versions 1.X.X (for V3 PLCs) or 2.X.X (for V4 PLCs). As of 3.X.X, this library is compatible with all our Raspberry PLCs regardless of it's version. You can check the available versions in here: https://github.com/Industrial-Shields/node-red-librpiplc/tags


## Usage
This library provides one node of configuration and five nodes:
1. **[PLC config](#rpiplc-config)**: Node to select both the version and the model of the PLC to use.
1. **[Analog Read](#analog-read)**: Gets the value of an analog input.
1. **[Analog Write](#analog-write)**: Sets a value of an analog output.
1. **[Digital Read](#digital-read)**: Gets the value of a digital input.
1. **[Digital Write](#digital-write)**: Sets a value of a digital output.
1. **[PLC set config](#rpiplc-set-config)**: If given a custom configuration, change the PLC version and model being used.


### <a name="rpiplc-config"></a>PLC config

Set both the version and model of the PLC in which Node-RED is running. Or, if you want to set the PLC configuration programatically, check `Select through "plc set config" node` and follow the documentation of the [PLC set config](#rpiplc-set-config) node.

**WARNING: You should only have ONE configuration node, because they can interfere with each other when configuring the C library.**

![rpiplc-config](https://github.com/user-attachments/assets/a2e92849-8d47-4d2f-8c30-fa750d0aa6f3)



### <a name="analog-read"></a>Analog Read

Returns the analog read of a pin as a payload. It also returns a `msg.rc` attribute to check if the analog read was successful.

If the selected pin is `Message passed` or if the configuration node is custom, this node will read the `msg.pin` attribute to determine which pin to read from.

This node (as well as the C library) returns an integer in the range of 16 bits. However, the maximum reading value will depend on the PLC being used. For instance, the analog inputs of all Raspberry PLCs, from V3 to V6, operate up to 12 bits (i.e., 0 to 4095), and TouchBerry Pi analog inputs up to 11 bits (i.e., 0 to 2047).

![analog-read](https://github.com/user-attachments/assets/f39ea5aa-f487-4492-92c2-fd0624eb6757)



### <a name="analog-write"></a>Analog Write

Writes an analog value in the specified pin. It returns a `msg.rc` attribute to check if the analog read was successful.

If the selected pin is `Message passed` or if the configuration node is custom, this node will read the `msg.pin` attribute to determine which pin to read from.

If the Value field is empty, this node will read the `msg.payload` attribute to determine which value will write to the pin. It must be an integer between 0 and 65535 (16-bit).

This node (as well as the C library) has an accepted range of 16 bits. However, the maximum value must be adjusted depending on the PLC being used. For instance, the analog outputs of all Raspberry PLCs, from V3 to V6, operate up to 12 bits (i.e., 0 to 4095).

![analog-write](https://github.com/user-attachments/assets/9819cea0-a19e-4180-b1f0-895ad8f596dd)



### <a name="digital-read"></a>Digital Read

Returns the digital read of a pin as a payload. It also returns a `msg.rc` attribute to check if the digital read was successful.

If the selected pin is `Message passed` or if the configuration node is custom, this node will read the `msg.pin` attribute to determine which pin to read from.

![digital-read](https://github.com/user-attachments/assets/1ae24960-ed1f-4d51-9957-06731bae31b9)



### <a name="digital-write"></a>Digital Write

Writes a digital value in the specified pin. It returns a `msg.rc` attribute to check if the digital write was successful.

If the selected pin is `Message passed` or if the configuration node is custom, this node will read the `msg.pin` attribute to determine which pin to read from.

The Value field can take as possible values `HIGH`, `LOW` or `Message passed`. If `Message passed`, the payload can take the following values:
- `"HIGH"` or `"LOW"` strings.
- `"1"` or `"0"` strings.
- A boolean (either `true` or `false`).
- A number (either `1` or `0`)

![digital-write](https://github.com/user-attachments/assets/346fd3c2-bbce-4a85-ab1d-bfe07bbc4e9f)



### <a name="rpiplc-set-config"></a>PLC set configuration

This node allows programmers to change the version and model of the PLC being used while executing the Node-RED flows.

To change these settings, send a message with the attributes `msg.version` and `msg.model`. Check the following sections for a list of available [versions](#available-versions) and [models](#available-models). The node will return a payload containing a number whether the library was initialized successfully with the new configuration (0 if correctly initialized; otherwise, some error occurred).

**WARNING: This node needs to be configured with a custom configuration node, that is, checking the `Select through "plc set config" node` box. Otherwise it will raise an exception every time a message is passed to it.**

![rpiplc-set-config](https://github.com/user-attachments/assets/409b9a5a-8685-4279-9882-13e5b0213680)



### <a name="available-versions"></a>Available PLC versions
```
RPIPLC_V3 (deprecated)
RPIPLC_V4
RPIPLC_V6

UPSAFEPI_V6

GATEBERRY_V9

TOUCHBERRY_PI_V1
```


### <a name="available-models"></a>Available PLC models
```
RPIPLC_CPU
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

UPSAFEPI (for UPSafePis)

GATEBERRY (for GateBerries)

TOUCHBERRY_PI (for TouchBerry Pis)
```
