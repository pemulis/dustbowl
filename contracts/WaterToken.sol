pragma solidity ^0.4.19;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract WaterToken is MintableToken {
  string public name = "Water";
  string public symbol = "💧";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 1000;

  function WaterToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
