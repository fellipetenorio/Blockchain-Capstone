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
contract address:    
account address:     
contract ABI: /build/contracts/SolnSquareVerifier.json
Minted Token. Tx: 
Minted Token. Tx: 
Minted Token. Tx: 
Minted Token. Tx: 
Minted Token. Tx: 
Minted Token. Tx: 
Minted Token. Tx: 
Minted Token. Tx: 
Minted Token. Tx: 
Minted Token. Tx: 
Minted Token. Tx: 

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
