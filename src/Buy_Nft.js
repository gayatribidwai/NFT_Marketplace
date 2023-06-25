import React, { useState } from 'react';
import './style.css';
import { nftsData } from './nftsData';
import Nft from './Nft';
import Cart from './Cart';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import ContractConnector from './ContractConnector';
import Pay from './contracts/Pay.json';
import Web3 from 'web3';

export default function Buy_Nft() {
  const myComponent = {
    width: '250px',
    height: '420px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    justify: 'center'
  };

 
  const [contractInstance, setContractInstance] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [contractAddress, setContractAddress] = useState('');
  const [contractBalance, setContractBalance] = useState(0);
  const [availableNftsData, setAvailableNftsData] = useState(nftsData);

  const addToCart = (item) => {
    // Check if the item already exists in cartItems
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!itemExists) {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };



  const handlePayEther = async () => {
    try {
      // Ensure the contractInstance is available (connected to the contract)
      if (!contractInstance) {
        console.error('Contract instance is not available');
        return;
      }

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const senderAddress = accounts[0];
  
  
      // Call the payEther function and initiate the transaction
      await contractInstance.methods.payEther().send({ value: totalPrice , from: senderAddress });
  
      // Transaction successful
      console.log('Payment transaction completed.');
  
      const web3 = new Web3(window.ethereum);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Pay.networks[networkId];
      if (!deployedNetwork) {
        throw new Error('Contract not deployed on the current network');
      }

      const balance = await contractInstance.methods.getBalance().call();
      console.log(balance);
      setContractBalance(web3.utils.fromWei(balance, 'ether'));
      
          // Clear the cartItems state
          
            
          // Remove selected items from the buy panel
          const selectedItemsIds = cartItems.map((item) => item.id);
          const updatedNftsData = availableNftsData.filter((item) => !selectedItemsIds.includes(item.id));
          setAvailableNftsData(updatedNftsData);
          setCartItems([]);
      
    } catch (error) {
      console.error('Payment transaction failed:', error);
    }

  };

  // const handlePayment = async () => {
  //   // Perform payment processing or any necessary operations here

  //   // Clear the cartItems state
  //   setCartItems([]);

  //   // Remove selected items from the buy panel
  //   const selectedItemsIds = cartItems.map((item) => item.id);
  //   const updatedNftsData = availableNftsData.filter((item) => !selectedItemsIds.includes(item.id));
  //   setAvailableNftsData(updatedNftsData);
  // };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleConnected = (instance) => {
    // Do something with the contract instance
    setContractInstance(instance);
    console.log('Hey Connected to contract:', instance);
  };

  const BuyPanel = () => (
    <div className="card" style={{ display: 'flex', flexWrap: 'wrap' }}>

       {/* {availableNftsData.map((nft) => (
              <div key={nft.id}>
                <img src={nft.imageUrl} alt={nft.name} style={{ maxWidth: '200px' }} />
                <h3>{nft.name}</h3>
                <p>Price: ${nft.price}</p>
                <button onClick={() => addToCart(nft)}>Add to Cart</button>
              </div>
            ))} */}

      {availableNftsData.map((nft) => (
        <div key={nft.id} style={{ marginRight: '10px', marginBottom: '10px' }}>
          <img src={nft.imageUrl} alt={nft.name} style={{ maxWidth: '200px' }} />
          
          <div style={{ textAlign: 'center' }}>
          <h3>{nft.name}</h3>
          <p>Price: {nft.price} Gwei</p>
          </div>
          
          <button onClick={() => addToCart(nft)} className="btn btn-dark">Add to Cart</button>
        </div>
      ))}
    </div>
  );

  return (
    <>
    <div>
      {/* <h1>NFT Marketplace</h1> */}
      <div style={{ textAlign: 'center' }}>
  <h1 style={{ display: 'inline-block' }}>NFT Marketplace</h1>
</div>

      <ContractConnector onConnected={handleConnected} />
      <div>
        {/* <p>Contract Address: {contractAddress}</p> */}
        <p>Updated Balance: {contractBalance}</p>
      </div>
    </div>
    <Navbar/>
      <div className="container">
        <div className="buy-panel-container">
          <div style={myComponent}><BuyPanel /></div>
        </div>
        <div className="container">
        <div className="div">
        <div style={{ display: 'inline-block' }}>
        
        {/* <button type="button" className="btn-lg"> My Cart </button> */}
        
        <p>Total Price: {totalPrice} Gwei</p>
          {cartItems.length > 0 && (
            <button type="button" className="btn-success btn-lg" onClick={handlePayEther}>Pay</button>

          )}
           
          
          <Cart cartItems={cartItems} />
          {totalPrice > 0 && (
            <ContractConnector total={totalPrice} />
          )}
       </div>
       </div>
       </div>
        </div>
    </>
  );
}



























// import React, { useState } from 'react';
// import './style.css';
// import { nftsData } from './nftsData';
// import Nft from './Nft';
// import Cart from './Cart';
// import PropTypes from 'prop-types';
// import Web3 from 'web3';
// import PayContract from './contracts/Pay.json';


// export default function Buy_Nft() {
//   const myComponent = {
//     width: '250px',
//     height: '420px',
//     overflowX: 'hidden',
//     overflowY: 'scroll',
//     justify: 'center'
//   };

//   const [cartItems, setCartItems] = useState([]);
//   const [availableNftsData, setAvailableNftsData] = useState(nftsData);

//   const addToCart = (item) => {
//     // Check if the item already exists in cartItems
//     const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);

//     if (!itemExists) {
//       setCartItems((prevItems) => [...prevItems, item]);
//     }
//   };

//   const handlePayment = () => {
//     // Perform payment processing or any necessary operations here

//     // Clear the cartItems state
//     setCartItems([]);

//     // Remove selected items from the buy panel
//     const selectedItemsIds = cartItems.map((item) => item.id);
//     const updatedNftsData = availableNftsData.filter((item) => !selectedItemsIds.includes(item.id));
//     setAvailableNftsData(updatedNftsData);
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <>
//       <div className="container">
//         <div style={myComponent}>
//           <div className="card">
//             {availableNftsData.map((nft) => (
//               <div key={nft.id}>
//                 <img src={nft.imageUrl} alt={nft.name} style={{ maxWidth: '200px' }} />
//                 <h3>{nft.name}</h3>
//                 <p>Price: ${nft.price}</p>
//                 <button onClick={() => addToCart(nft)}>Add to Cart</button>
//               </div>
//             ))}
//           </div>
//           <button type="button" className="btn btn-primary btn-lg">
//             My Cart
//           </button>
//           {cartItems.length > 0 && (
//             <button type="button" className="btn btn-primary btn-lg" onClick={handlePayment}>
//               Pay
//             </button>
//           )}
//           <p>Total Price: ${totalPrice}</p>
//           <Cart cartItems={cartItems} />
//         </div>
//       </div>
//     </>
//   );
// }
