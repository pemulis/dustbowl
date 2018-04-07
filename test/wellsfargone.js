const Water = artifacts.require("Water");
const WellsFargone = artifacts.require('WellsFargone');

contract('WellsFargone', async(accounts) => {
  const rate = new web3.BigNumber(1000);
  const wallet = accounts[1];

  const waterInstance = await Water.new({from: accounts[0]});
  const wellsFargoneInstance = await WellsFargone.new(rate, wallet, Water.address);

  it("should transfer ownership of Water to WellsFargone", async() => {
    waterInstance.transferOwnership(WellsFargone.address);
    let waterOwner = waterInstance.owner;
    assert.equal(waterOwner, WellsFargone.address);
  });
});

/* These tests aren't working. Going to try to rewrite async/await style. */

/*
contract('WellsFargone', function(accounts) {
  it("should mint 1000000000000000000000 water tokens when user sends 1 ether", function() {
    return WellsFargone.deployed().then(function(wellsFargoneInstance) {
      web3.eth.sendTransaction({from:accounts[0],to:wellsFargoneInstance.address,value:web3.toWei(1, "ether")});
      return Water.deployed();
    }).then(function(waterInstance) {
      return waterInstance.methods.totalSupply.call();
    }).then(function(supply) {
      assert.equal(supply, 1000000000000000000000);
    });
  });
});
*/
