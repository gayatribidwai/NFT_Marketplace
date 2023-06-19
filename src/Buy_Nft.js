// import React from 'react';
// import './style.css';
// import Nft from './Nft';
// import PropTypes from 'prop-types';

// export default function Buy_Nft() {
//   const myComponent = {
//     width: '100%',
//     height: '520px',
//     overflowX: 'hidden',
//     overflowY: 'scroll'
// };
//   return (
//     <>
//     <div className="container">
//       <div style={myComponent} >
//         <Nft />
//       </div> 
//     <div className="btn">
// <button type="button" class="btn btn-primary btn-lg">My Cart</button>
// </div>
//     </div>
    
//     </>
//   );
// }









import React from 'react';
import './style.css';
import Nft from './Nft';
import Cart from './Cart';
import PropTypes from 'prop-types';
// import React, { useState } from 'react';


export default function Buy_Nft() {
  const myComponent = {
    width: '100%',
    height: '520px',
    overflowX: 'hidden',
    overflowY: 'scroll'
};


// const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <div className="container">
      <div style={myComponent} >
      <Nft />
      {/* <Cart cartItems={cartItems} /> */}
  </div> 

<div className="btn">

</div>
    </div>
    
    </>
  );
}






