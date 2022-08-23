# node-red-contrib-rpiplc-node
A collection of Node-RED nodes for using analog inputs, analog outputs, digital inputs and digital outputs from Raspberry PLC of Industrial Shields®.

<a href="https://www.npmjs.com/package/node-red-contrib-rpiplc-node"><img title="npm version" src="https://badgen.net/npm/v/node-red-contrib-rpiplc-node"></a>
<a href="https://www.npmjs.com/package/node-red-contrib-rpiplc-node"><img title="npm downloads" src="https://badgen.net/npm/dt/node-red-contrib-rpiplc-node"></a>



## Install
To install the stable version use the Menu - Manage palette - Install option and search for node-red-contrib-rpiplc-node, or run the following command in your Node-RED user directory, typically ~/.node-red

```
npm i node-red-contrib-rpiplc-node@<version>
```
    version = 1.X.X = RPI PLC Version 3
    
    version = 2.X.X = RPI PLC Version 4
    
    You can find the available tags here: https://github.com/Industrial-Shields/node-red-contrib-rpiplc-node/tags

## Usage
Provides four nodes:
1. **[Analog Read](#analog-read)**: Gets the value of an analog input.
2. **[Analog Write](#analog-write)**: Sets a value of an analog output.
3. **[Digital read](#digital-read)**: Gets the value of a digital input.
4. **[Digital write](#digital-write)**: Sets a value of a digital output.



### <a name="analog-read"></a>1. Analog Read

Reads the value from the specified analog pin. The Raspberry PLC model and input pin must be selected.

![analog-read](https://user-images.githubusercontent.com/61695455/130433880-cc4007e6-60df-4f32-a01d-0aa74b52a5c7.png)


### <a name="analog-write"></a>2. Analog Write
Writes an analog value (PWM wave) to a pin. The Raspberry PLC model, input pin and a value between 0 and 4095 must be set.

![analog-write](https://user-images.githubusercontent.com/61695455/130433860-c204c9e9-101b-4a5e-9ef9-c05293de6632.png)


### <a name="digital-read"></a>3. Digital Read
Reads the value from a specified digital pin, either HIGH or LOW. The Raspberry PLC model and input pin must be selected.

![digital-read](https://user-images.githubusercontent.com/61695455/130433842-ee026f14-8c37-4f69-99ba-fe1d5baa2b08.png)


### <a name="digital-write"></a>4. Digital Write
Writes a HIGH or a LOW value to a digital pin. The Raspberry PLC model, input pin and value must be set.

![digital-write](https://user-images.githubusercontent.com/61695455/130433826-61f2cbc8-9d93-4284-b1c4-7931d99da6d2.png)
