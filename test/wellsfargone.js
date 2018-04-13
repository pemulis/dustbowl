const Water = artifacts.require('Water');
const WellsFargone = artifacts.require('WellsFargone');

contract('WellsFargone', function(accounts) {
  const rate = new web3.BigNumber(1000);
  const wallet = accounts[1];

  let waterInstance;
  let wellsFargoneInstance;

  beforeEach(async function () {
    waterInstance = await Water.new();
    wellsFargoneInstance = await WellsFargone.new(rate, wallet, Water.address);
    await waterInstance.transferOwnership(wellsFargoneInstance.address);
  });

  it("should transfer ownership of Water to WellsFargone", async() => {
    let waterOwner = await waterInstance.owner();
    assert.equal(waterOwner, wellsFargoneInstance.address);
  });
});
