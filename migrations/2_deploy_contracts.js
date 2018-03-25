const SimpleStorage = artifacts.require("./SimpleStorage.sol");
const TutorialToken = artifacts.require("./TutorialToken.sol");
const ComplexStorage = artifacts.require("./ComplexStorage.sol");
const Water = artifacts.require("./Water.sol");
const WellsFargone = artifacts.require("./WellsFargone.sol");

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
