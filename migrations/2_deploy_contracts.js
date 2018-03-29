const SimpleStorage = artifacts.require("SimpleStorage");
const TutorialToken = artifacts.require("TutorialToken");
const ComplexStorage = artifacts.require("ComplexStorage");
const Water = artifacts.require("Water");
const WellsFargone = artifacts.require("WellsFargone");

module.exports = function(deployer, network, accounts) {
  const rate = new web3.BigNumber(1000);
  const wallet = accounts[1];

  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(ComplexStorage);
  return deployer
    .then(() => {
        return deployer.deploy(Water);
    })
    .then(() => {
        return deployer.deploy(
            WellsFargone,
            rate,
            wallet,
            Water.address
        );
    });
};
