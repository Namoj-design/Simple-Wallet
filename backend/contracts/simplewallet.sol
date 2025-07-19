// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleWallet {
    address public owner;

    // Events for logging deposits and withdrawals
    event Deposit(address indexed sender, uint256 amount);
    event Withdrawal(address indexed receiver, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict access
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // Allow contract to receive ETH via receive()
    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    // Fallback function to receive ETH if no other function matches
    fallback() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    // Withdraw function (only by owner)
    function withdraw(uint256 _amount) public onlyOwner {
        require(address(this).balance >= _amount, "Insufficient balance");
        payable(owner).transfer(_amount);
        emit Withdrawal(owner, _amount);
    }

    // Get contract balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
