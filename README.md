# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 
This repo is a fork of: https://github.com/udacity/Blockchain-Capstone

To setup the project run in terminal:

`npm i`

## Software Version

`truffle version`

Truffle v5.0.13 (core: 5.0.13)
Solidity - 0.5.2 (solc-js)
Node v10.15.3
Web3.js v1.0.0-beta.37

## Tests
To test you will need ganache. Assuming you prefer CLI:

`ganache-cli`

To test the contracts change to contract folder and test:

`cd eth-contracts`

Now test every test file:

`truffle test test/TestERC721Mintable.js`

`truffle test test/TestSquareVerifier.js`

`truffle test test/TestSolnSquareVerifier.js`

# Deploy
To deploy in rinkeby network:

`truffle migrate --network rinkeby`

OpenSea Link : https://rinkeby.opensea.io/category/realestatedifferent
contract address: 0x9186EFe84eA992d98b746993389180daBf67cFD9
account address: 0xFE95D4d08861fc5430a660CD94905a0E8Da9ed0b
contract ABI: /build/contracts/SolnSquareVerifier.json
Minted Token. Transaction: 0x2db07f958e889881ce6bdc0c2e4375661bba306eae1c6d5382f36b13e9da9671
Minted Token. Transaction: 0x6815bbe88c80de15a15137c79b79cf3c625fde04ec12a6878ad938c9f760a7f5
Minted Token. Transaction: 0xd45a80c2ab8dcd9fe008ef08527abfcb004f79113f1f846ad8d73cea7b04713a
Minted Token. Transaction: 0xbcaa9e1a8676653065e6185fe331d29d3d5cc23f07daae3ed1f4ba849dea46a6
Minted Token. Transaction: 0x0dec339923819f91f9bfea4d06daec59aeb7b31913125bc64302de5d6463a0ac
Minted Token. Transaction: 0x24c8ce904472428757e3d08e61a949a6b736fb63e6a20e97392fbc789ed2a4b1
Minted Token. Transaction: 0x823ddbf9a5a9ee614974845b0bf6fd4c604c910c458df04e352291a6e3f2bc27
Minted Token. Transaction: 0x129a642ed18e1d155ac65600b5791947bf4b8aca44ca547528948c71c9f62613
Minted Token. Transaction: 0x8453eb548e58af1c9a3cc30b34f458463a5ceed28e1036dc4a9762b2e29f87e0
Minted Token. Transaction: 0x171d89fde631e806d3a8eaded60d8a2262c1892f31ff5653c14f175e45dbb8b8

OpenSea Link : https://rinkeby.opensea.io/category/realstatedifferent

change the configuration data in the `mintConfig.json` file and then run

`node mint.js`

The tokens can then be put up for sale on OpenSea Marketplace.

Go to https://docs.opensea.io/docs/getting-started to see how it is done.

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
