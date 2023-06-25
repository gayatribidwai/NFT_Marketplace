import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Pay from './contracts/Pay.json';

export default function ContractConnector({ onConnected }) {
  const [contractInstance, setContractInstance] = useState(null);
  const [contractAddress, setContractAddress] = useState('');
  const [contractBalance, setContractBalance] = useState(0);
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    connectContract();
  }, []);

  const connectContract = async () => {
    if (connecting) return; // Avoid multiple connection attempts

    try {
      setConnecting(true);

      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const networkId = await web3.eth.net.getId();

      const deployedNetwork = Pay.networks[networkId];
      if (!deployedNetwork) {
        throw new Error('Contract not deployed on the current network');
      }

      const address = deployedNetwork.address;
      const instance = new web3.eth.Contract(Pay.abi, address);

      setContractInstance(instance);
      setContractAddress(address);

      // const balance = await instance.methods.getBalance().call();
      // setContractBalance(balance);

       onConnected(instance);

       const balance = await web3.eth.getBalance(address);
      setContractBalance(web3.utils.fromWei(balance, 'ether'));

    } catch (error) {
      console.error(error);
    } finally {
      setConnecting(false);
    }
  };

  return (
    <>
      <div>
        <p>Contract Address: {contractAddress}</p>
        <p>Initial Balance: {contractBalance}</p>
      </div>
      {/* {contractAddress && <p>Contract Address: {contractAddress}</p>} */}
    </>
  );
}









// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import PayContract from './contracts/Pay.json'; // Replace with the actual path to your Pay contract JSON file

// export default function ContractConnector({ onConnected , total}) {
//   const [contractInstance, setContractInstance] = useState(null);
//   const [contractAddress, setContractAddress] = useState('');
//   const [contractBalance, setContractBalance] = useState(0);

//   useEffect(() => {
//     connectContract();
//   }, []);

//   const connectContract = async () => {
//     try {
//       // Create a new instance of web3
//       const web3 = new Web3(window.ethereum);

//       // Request access to the user's MetaMask account
//       await window.ethereum.enable();

//       // Get the network ID
//       const networkId = await web3.eth.net.getId();

//       // Get the deployed contract address from the contract JSON file
//       const deployedNetwork = PayContract.networks[networkId];
//       const address = deployedNetwork.address;

//       // Create an instance of the contract
//       const instance = new web3.eth.Contract(PayContract.abi, address);
//     // const instance = new web3.eth.Contract(PayContract.abi, 0xd9145CCE52D386f254917e481eB44e9943F39138);
        
//       // Set the contract instance and address in the state
//       setContractInstance(instance);
//       setContractAddress(address);

//       // Invoke the callback function with the contract instance
//       onConnected(instance);

//       // Fetch and set the contract balance
//       const balance = await instance.methods.getBalance().call();
//       setContractBalance(balance);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//     <div>
//       <p>Contract Address: {contractAddress}</p>
//       {/* <p>Contract Address: 0xd9145CCE52D386f254917e481eB44e9943F39138</p> */}
//       <p>Contract Balance: {contractBalance}</p>
//     </div>
//     {contractAddress && <p>Contract Address: {contractAddress}</p>}</>
//   );
// }
