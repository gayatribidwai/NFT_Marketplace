// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider

// import React, {useState} from 'react'
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const Wallet_Card = () => {
	const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  const connectToMetamask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.enable();
        setAccount(accounts[0]);
        console.log(account);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Metamask not found.');
    }
  };

  useEffect(() => {
    const fetchAccountBalance = async () => {
      if (window.ethereum && account) {
        try {
          const web3 = new Web3(window.ethereum);
          console.log("account balance");
          const balance = await web3.eth.getBalance(account);
          const formattedBalance = web3.utils.fromWei(balance, 'ether');
          setBalance(formattedBalance);
        } catch (error) {
          console.log(error);
        }
      }
    };
  

    fetchAccountBalance();
  }, [account]);


	return(
		<>
			<div className="App">
      <button type="button" className="btn btn-outline-primary" onClick={connectToMetamask}>
        Metamask
      </button>
      {account && (
        <div>
          Connected Account: {account}
          <br />
          Balance: {balance} ETH
        </div>
      )}
    </div>
		</>
	);
}

export default Wallet_Card;