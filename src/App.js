import React, { useState } from 'react';
import ContractConnector from './ContractConnector';

function App() {
  const [total, setTotal] = useState(0);

  const handleConnected = (contractInstance) => {
    // Do something with the contract instance
    console.log('Connected to contract:', contractInstance);

  };

  return (
    <div>
      <h1>My App</h1>
      <ContractConnector onConnected={handleConnected} />
    </div>
  );
}

export default App;















// import React from 'react';
// import ContractConnector from './ContractConnector';

// function App() {
//   const handleContractConnected = () => {
//     // Logic to execute when the contract connection is established
//     console.log('Contract connected!');
//   };

//   return (
//     <div>
//       <h1>NFT Marketplace</h1>
//       <ContractConnector onConnected={handleContractConnected} />
//     </div>
//   );
// }

// export default App;




















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <>
//     <div>
//       <p></p>
//     </div>
    
//     </>
//   );
// }

// export default App;
