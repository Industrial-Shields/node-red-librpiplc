# Changelog

All notable changes to this project will be documented in this file.

## [4.0.2] - 2025-07-11

### 🐛 Bug Fixes

- Add relays at RPIPLC digital write ([c8d6786](c8d67863ff56d84d1c8767a4844aa79677ea9d90))


## [4.0.1] - 2025-07-08

### 🐛 Bug Fixes

- Add QX mapping that matches TouchBerry serigraphy ([fc12f46](fc12f46fe04565f9ebd272066b5ba19f77435e50))


### 💼 Other

- Bump library version ([d8b1b5a](d8b1b5a9b8b598fc2af3b22a12371265504f30e7))

- Create .npmignore ([3bd3658](3bd3658e60439cc55eeb64791ff2673cecbbbab1))


### 🎨 Styling

- Make all PLC default names pretty ([881b669](881b669114f65eb2ec9df958e7bca3908ad438b4))


## [4.0.0] - 2025-07-03

### 🚀 Features

- Merge branch 'new-pins-enum' ([5d727cc](5d727ccb6abddf694093f38c88f773edae0f26ff))


## [archive/new-pins-enum] - 2025-07-03

### 🚀 Features

- If available, return RPIPLC RC of initialization as msg.payload in set config ([b795e89](b795e8932dfcc2eb3076a8b4539ec1a3b4177fb4))

- Digital-write node with support for multiple models ([e40a50c](e40a50c946d1604a6ed8b8492639390a82bf2e89))

- Digital-read node with support for multiple models ([29104cc](29104cc3509a54a99bed3e57b3fc97edc40f66de))

- Analog-write node with support for multiple models ([9536f39](9536f3950f55e07bb5502e95533b3d3eb0c3e8b1))

- Possibility to add extra RPi PLC pins in the selectors ([448d057](448d057d2cc2f5ff7a5af8b117583f02158613a4))

- Re-configure pinMode if analog-read pin is not an INPUT ([1d6e029](1d6e029e48cd8667cbfa778813491616ba0490d7))

- Only call pinMode if the pin wasn't initialized ([3ee5815](3ee581552dec698345981d49d773d0d29dbc7fe5))

- Throw exception when librpiplc couldn't be initialized ([88591f1](88591f1bd5c29e356fe96ef3d1066657c96f3473))


### 🐛 Bug Fixes

- Only set digital write to HIGH if the payload is a numeric '1'. ([cb71689](cb716894d7c8e602d7140ea6721907129836f9e5))

- CUSTOM pin not being detected as valid ([0bff9b3](0bff9b36fba7b747ba31eeca964f4563847e211c))

- I/O labels in write nodes ([01c15dc](01c15dc1deb7a06765687e1d1a70c12b3ccb10c3))

- Replace if "Message passed" was already set in the node ([2e64a3c](2e64a3cdab3055f26be022733d4d0b1a79366802))


### 💼 Other

- Bump library version ([a62dfa9](a62dfa9b2e0e0dc54c4326a710c76e1d78528e9f))

- Bump package version and librpiplc version ([077eb7a](077eb7ad1e86962c63baa4cfedc28edda97602c1))

- Update README ([e964496](e96449688c49e4a6840c7ebe104ff9b8876ede9d))


### 🚜 Refactor

- Don't hard-code "Message passed" pin ([6472427](64724276960e30a8004a623367647815ec9408a7))

- Initial support for multiple PLCs ([78a3838](78a383875ce7b8be1c0758f4485381b2b0f5871e))


### 📚 Documentation

- Add CHANGELOG generation config ([32ada87](32ada879622c27830f08e2c9c1cecf06faeb4c75))

- Update documentation inside Node-RED ([364b805](364b8052495765fe6eb306baa84a1048b96e5a81))

- Document all the nodes of the library + Update supported version and models ([cc06b73](cc06b73a245c14dfa29443104c43835eacecf174))


### 🎨 Styling

- Rename all "rpiplc" references to the generic term "plc" ([c35692d](c35692d9fc0d1a90232fef59eb17cee671952278))

- Present custom configurations as lowercase in node names ([13d6670](13d667053e487047f7643ae2f0d282596d52742d))


## [3.0.1] - 2024-04-30

### 🐛 Bug Fixes

- Fix HTML show when changing between custom configuration ([ac5367b](ac5367b76e1045fb87608c94a122417e092a32a1))


### 💼 Other

- Bump version to v3.0.1 ([8df6c88](8df6c88b062125795903fd31f084153b991f36a4))


## [3.0.0] - 2024-04-24

### 💼 Other

- Change name of RPIPLC V5 to RPIPLC V6 to avoid future confusion ([916c47d](916c47d963f0ccf836de0b59569917178ad399d4))

- Update git repo field + Add package-lock.json ([cf0eee2](cf0eee218baf31f9eafedd89ab9c8f7edc48702e))

- License the library under the LGPL-3.0-or-later and tests under the GPL-3.0-or-later ([2597e1b](2597e1b857632bce44155bfacc7eea05ac0d35f7))

- Update README + Add basic examples ([5609103](56091033616d75e0c6f6a6a25ed4b3cbe51e3319))

- Remove underscore from config module default name ([5c6f147](5c6f147c47a83c2b9a4a83eb140fe4b315b85ea9))

- Return "return code" in all read and write nodes ([c5429c7](c5429c7a5997db15c043584e3f1a5e5face91329))

- Specify "Message passed" in digital write node ([7ffab6c](7ffab6c40ba7c480a886b46687858a59f5e04367))

- Possibility to pass pin through message ([066bf7b](066bf7b257235428bac8e7325c94a6e739945c65))

- Add exceptions to rpiplc-set-config, rpiplc-config and reads and writes + Make writes return their return code ([69c03c8](69c03c8a034f3cebfcfd92ced0a25b7d8efb45d9))

- New node to configure version and model on the fly + Remove pinModes + Enable PWM pins as analog and enable all pins if using custom configuration ([a42d56b](a42d56b8788e96caad4103ca7e35f89a0abf7bf1))

- Rename library to node-red-librpiplc + Adapt for librpiplc v3.0.0 ([e3ed7f5](e3ed7f501c9d7c11d495c6c0623d517d62b6a188))

- Update README.md ([7beff8d](7beff8d79310a05090701b649b889adbce274233))

- Update README.md

Tag explanation for RPI PLC v3/v4 added. ([086faf7](086faf740907e61ed5753f4bee0e9766b83b740e))


## [2.0.1] - 2022-08-22

### 🐛 Bug Fixes

- Bug fixes with respect to the IOs and Update for RPI PLC v4. ([e21649b](e21649bf672217e898330e64a7ece8ee9d01b19f))


### 💼 Other

- Faulty pin strings causing "TypeError: Wrong argument" ([35badaa](35badaa3112181e7a170c59f38f1372543ee9627))


## [1.0.7] - 2021-12-24

### 🐛 Bug Fixes

- Bug fix: outputs:1 ([d7148df](d7148df2fde04314104e8aed0a2b1703b1e4d7c6))


### 💼 Other

- 1.0.7 ([53e3486](53e34860347a68a394b3339569b9c4866964d86d))

- Add "this.send(msg)" ([47578c9](47578c9240171b2136424545838f71cbc2747ab5))

- Add an output: "Outputs: 1" ([cf854d6](cf854d6b51fb7a8e67228cac304435e2dcf28192))

- Add "this.send(msg)" ([819cfc8](819cfc86a90fbb22bfa31e727b465d4b18dc5927))


## [1.0.6] - 2021-10-20

### 💼 Other

- 1.0.6 ([55384ba](55384ba133abb3dedde83e461b1b84638e82978a))

- Write nodes get priority in front of msg.payload ([22f3aa3](22f3aa3d59a069292ee8941ab8e8be8fe901b0b8))

- Update rpiplc-digital-write.html ([8411cac](8411cac2ef200b1065914c031edfb974395977f7))

- Update rpiplc-digital-read.html ([fdce7dc](fdce7dce56f72b3d3402506c4fda35e79ad4b763))

- Update rpiplc-analog-write.html ([001ca19](001ca19d0d3e379e7f6f6b4d9e11bf9618111e9a))

- Update rpiplc-analog-read.html ([3860903](3860903f5f9c5f7be7baf12ed9694c364c4fb838))


## [1.0.5] - 2021-08-23

### 💼 Other

- 1.0.5 ([f482b28](f482b28e4e47285e52c490ce839d02c2289835bb))

- Update rpiplc-digital-write.html ([0388299](038829927ce442da51fe5299ae8dbaff9fdc221b))

- Update rpiplc-analog-write.html ([67f3381](67f33819bd4f04226b96937d3fb8b35c284241d4))

- Update rpiplc-digital-write.html ([c0c6fd9](c0c6fd947758c91eac2ee1565bc06f67b96ba0b9))

- Update rpiplc-digital-write.html ([ce08b50](ce08b5039d777832bbfc4f62bf0fd5dcfadc0c57))

- Update rpiplc-digital-read.html ([9ed94ee](9ed94ee03bb9eccbdb86c64679ef4131b9436b8e))

- Update rpiplc-analog-write.html ([677ab04](677ab044f78ad7a3ec842e1054421522729d9ed1))

- Update rpiplc-analog-read.html ([fd0b6ae](fd0b6ae18d0ae803161a74a49b83a1b3493caa46))

- Update rpiplc-analog-read.html ([eb7a858](eb7a85873cde15bbe298b82dd378f4737e1fe6fd))

- Update README.md ([0b5d427](0b5d427a0cfec50255004240165eb5d1754ab495))

- Add repository info into package.json ([22abdbd](22abdbdc8cb80a5130a3699ff2e50e375a2ede88))


## [1.0.4] - 2021-08-23

### 💼 Other

- 1.0.4 ([25f04a1](25f04a167e4aa809059fdf90e979b4085f780a44))

- Update README.md ([b8d2b14](b8d2b143ada695838b712f341059c3346d6cc283))


## [1.0.3] - 2021-08-23

### 💼 Other

- 1.0.3 ([e4f2e47](e4f2e472431db11fbecdef09637a36e194494bd1))

- Add relays and format nodes names ([61d884e](61d884eb54b11d24f720ab21ae738ec6bf59002b))

- Use rpiplc-node-addon v1.0.1 ([ab30d3a](ab30d3a1bfa994c9c5acb8b974ed1865048fcf94))


## [1.0.2] - 2021-08-20

### 💼 Other

- 1.0.2 ([062703c](062703cdbdbdcdb492be34d2644b37dcdbfac87a))

- Update some texts ([1a262a6](1a262a6d9ca751e34f29fca5e41c6ac1c81254c2))

- Set nodes colors ([7dbffad](7dbffad0fc36265d26aa2169dfe68e4f9c05e037))


## [1.0.1] - 2021-08-20

### 💼 Other

- 1.0.1 ([bfaddda](bfaddda1bb58ad9bbeb625d02ab0e9d0eb33ff5a))

- Create README.md ([dfceccd](dfceccd4c34448adf8a9c61a78470160fe55f28d))

- First commit ([1de971d](1de971d5287c4c76f1bb883fe88ade5b9018ae46))


<!-- generated by git-cliff -->
