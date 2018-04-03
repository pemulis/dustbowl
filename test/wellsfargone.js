const Water = artifacts.require("Water");
const WellsFargone = artifacts.require('WellsFargone');

contract('WellsFargone', function(accounts) {
  it("should mint 1000000000000000000000 water tokens when users send 1 ether", function() {
    return WellsFargone.deployed().then(function(wellsFargoneInstance) {
      web3.eth.sendTransaction({from:accounts[0],to:wellsFargoneInstance.address,value:web3.toWei(1, "ether")});
      return Water.deployed().totalSupply_;
    });
  });
});
