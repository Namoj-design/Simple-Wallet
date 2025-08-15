// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ReentrancyGuard.sol";

contract SimpleWallet is ReentrancyGuard {
    address public owner;

    event Deposit(address indexed sender, uint256 amount);
    event Withdrawal(address indexed receiver, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    fallback() external payable {
        emit Deposit(msg.sender, msg.value);
    }


    function withdraw(uint256 _amount) public onlyOwner nonReentrant {
        require(address(this).balance >= _amount, "Insufficient balance");
        payable(owner).transfer(_amount);
        emit Withdrawal(owner, _amount);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
