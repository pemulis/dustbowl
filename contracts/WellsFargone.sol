pragma solidity ^0.4.19;

import 'openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';

contract WellsFargone is MintedCrowdsale {
  function WellsFargone (uint256 _rate, address _wallet, MintableToken _token) public Crowdsale(_rate, _wallet, _token) {

  }
}
