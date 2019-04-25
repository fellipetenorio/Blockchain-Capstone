// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var account = "0xFE95D4d08861fc5430a660CD94905a0E8Da9ed0b";

module.exports = function(deployer, network, accounts) {
  deployer.deploy(SquareVerifier).then(() => {
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
  });
};
