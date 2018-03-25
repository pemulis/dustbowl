const SimpleStorage = artifacts.require("./SimpleStorage.sol");
const TutorialToken = artifacts.require("./TutorialToken.sol");
const ComplexStorage = artifacts.require("./ComplexStorage.sol");
const WaterToken = artifacts.require("./WaterToken.sol");
const WellsFargone = artifacts.require("./WellsFargone.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(ComplexStorage);
  deployer.deploy(WaterToken);
  deployer.deploy(WellsFargone);
};
