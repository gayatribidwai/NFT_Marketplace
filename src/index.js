import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Buy_Nft from './Buy_Nft';
import Mint from './Mint';
import Wallet_Cart from './Wallet_cart'
import Cart from './Cart';
import reportWebVitals from './reportWebVitals';
import ContractConnector from './ContractConnector';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navbar/> */}
    <Wallet_Cart/>
    {/* <Mint/> */}
    {/* <ContractConnector/> */}
  <Buy_Nft />
    <Cart/>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
