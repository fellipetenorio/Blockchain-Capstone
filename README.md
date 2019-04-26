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
Minted Token. Transaction: 0xfd0f34c887942fda1033ef13dddb0a6661cb2deb272867f22d221d60497ef92f
Minted Token. Transaction: 0xa92973beef8a560cc96fc9b199706cede778702c854b1ec39dce5580682da3f9
Minted Token. Transaction: 0x50fbb1f1e7f4e0e55ab8876edb7fceadcdbf09a1877c69e7de2bb538e91fa347
Minted Token. Transaction: 0xdd824da21ceefcae2d5ae0e5b4d72016beca5745591ba04dc89148fd8ffd7bd9
Minted Token. Transaction: 0xe609f093d7b19c734837c532a34cc6e0f40d0d897ab6de8547b031237a30e666
Minted Token. Transaction: 0xbf2fc200aa70e944b06b2f269ee72dcab40bae207a04c55115bd8d3ba64a0357
Minted Token. Transaction: 0x2575b37d1293c77b609090be9ec84e3504bdebf6b7381477d23a40b2f7ad8614
Minted Token. Transaction: 0x6cfb8040d3bab13802c93c091e89ddfa77abd87071dc4bc2d4c5e6e6e48b1249
0xba1504989ef542f4fcbbfc50daff9be7b4b2ab7a368d19a65bf5a04146787d32
0x41072e503ae7a90efad1b6eda1e32f71ec4499c21ae2d96cf03364a14aefa8f0
0x300a3eeae839af52fe357af65aa7986bb4527d2dca9cfdd9bf32a7895cdac882


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


https://rinkeby.etherscan.io/tx/0x3c333cce7ff8ef1b503849edbe158c19d1998ff33c1aee5e24f87c32cadbe1e6
https://rinkeby.etherscan.io/tx/0x72f1749e2c70522119a05860b9ab54e3e420edb4bfed84ddd72d4d154c454c3c
https://rinkeby.etherscan.io/tx/0x0f37b595861c00226cae4389166b7f4d7a86583acd00f976a013fffacfd62984
https://rinkeby.etherscan.io/tx/0x34a39d4be12a50be595b5eea3b3aad530bbd3dad65563a08df07e805ceab7143
https://rinkeby.etherscan.io/tx/0xf99d218eebd72b3d7d5b50cf54bea99e4c1c76cd5c98e61477d92442a33ec35c
https://rinkeby.etherscan.io/tx/0x0e28dd4439498bbb46cb9d2da8a7678841b90a9893c03c0afaaa45cfe17579c8
https://rinkeby.etherscan.io/tx/0x55802c483e9e640ba928106c7539050e54de0771d5d8e30c4e3fe3f1501743ce
https://rinkeby.etherscan.io/tx/0x300a3eeae839af52fe357af65aa7986bb4527d2dca9cfdd9bf32a7895cdac882
https://rinkeby.etherscan.io/tx/0xedbb346cc0a4237ed24cbab4fd2fac599eafc4016167a59138ce6dda996c98f1
https://rinkeby.etherscan.io/tx/0x41072e503ae7a90efad1b6eda1e32f71ec4499c21ae2d96cf03364a14aefa8f0
https://rinkeby.etherscan.io/tx/0xba1504989ef542f4fcbbfc50daff9be7b4b2ab7a368d19a65bf5a04146787d32
https://rinkeby.etherscan.io/tx/0xfd0f34c887942fda1033ef13dddb0a6661cb2deb272867f22d221d60497ef92f
https://rinkeby.etherscan.io/tx/0xc469c73612c718965ed9663c9f584d0a7a987a5c21242d2396d3690980dc21e7
https://rinkeby.etherscan.io/tx/0x2575b37d1293c77b609090be9ec84e3504bdebf6b7381477d23a40b2f7ad8614