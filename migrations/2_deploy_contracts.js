const SimpleStorage = artifacts.require("./SimpleStorage.sol");
const TutorialToken = artifacts.require("./TutorialToken.sol");
const ComplexStorage = artifacts.require("./ComplexStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(ComplexStorage);
};
