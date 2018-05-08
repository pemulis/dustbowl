pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract Water is MintableToken {
  string public name = "Water";
  string public symbol = "💧";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 0;

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
