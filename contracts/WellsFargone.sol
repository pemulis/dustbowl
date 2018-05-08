pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol';

contract WellsFargone is MintedCrowdsale {
  constructor(uint256 _rate, address _wallet, MintableToken _token) public Crowdsale(_rate, _wallet, _token) {

  }
}
