// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Pay{
    function payEther() public payable
    {

    }
    function getBalance() public view returns(uint)
    {
        return address(this).balance;
    }
}

