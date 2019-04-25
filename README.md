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

OpenSea MarketPlace Storefront: 

`https://rinkeby.opensea.io/category/realestatedifferentv2`

Contract address: 
`0x9186EFe84eA992d98b746993389180daBf67cFD9`

Account address: `0xFE95D4d08861fc5430a660CD94905a0E8Da9ed0b`

Contract ABI: 

`/build/contracts/SolnSquareVerifier.json`

## Tokens:

Minted Token. Transaction: 0x2db07f958e889881ce6bdc0c2e4375661bba306eae1c6d5382f36b13e9da9671
Minted Token. Transaction: 0xfd458af6c21517086d991faf04a39a678f5ce739a12d6786b95b8eaad45ccf4c
Minted Token. Transaction: 0xc97b66cfd330a245ed4dfea45dac80655882d722cc93b39000b58cf77743cd4a - FAIL
Minted Token. Transaction: 0xa92973beef8a560cc96fc9b199706cede778702c854b1ec39dce5580682da3f9
Minted Token. Transaction: 0x50fbb1f1e7f4e0e55ab8876edb7fceadcdbf09a1877c69e7de2bb538e91fa347
Minted Token. Transaction: 0xdd824da21ceefcae2d5ae0e5b4d72016beca5745591ba04dc89148fd8ffd7bd9
Minted Token. Transaction: 0xe609f093d7b19c734837c532a34cc6e0f40d0d897ab6de8547b031237a30e666
Minted Token. Transaction: 0xbf2fc200aa70e944b06b2f269ee72dcab40bae207a04c55115bd8d3ba64a0357
Minted Token. Transaction: 0x07f127801fe6dfcbcf8a57d3bf58f9e4f52769d525ee1fc2465c6b114ca86a8e - FAIL
Minted Token. Transaction: 0x6cfb8040d3bab13802c93c091e89ddfa77abd87071dc4bc2d4c5e6e6e48b1249

OpenSea Link : https://rinkeby.opensea.io/assets/realestatedifferentv2

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
