const Water = artifacts.require("Water");
const WellsFargone = artifacts.require("WellsFargone");

module.exports = function(deployer, network, accounts) {
  const rate = new web3.BigNumber(1000);
  const wallet = accounts[1];

  deployer.deploy(Water).then(function() {
    return deployer.deploy(WellsFargone, rate, wallet, Water.address);
  }).then(function() {
    return Water.deployed();
  }).then(function(instance) {
    waterRights = instance;
    waterRights.transferOwnership(WellsFargone.address);
  });
};
