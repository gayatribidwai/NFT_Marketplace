import React from 'react';

export default function Cart({ cartItems }) {
  const myComponent = {
    width: '230px',
    height: '420px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    justify: 'center'
  };

  return (
    <>
      <div className="container">
      <p style={{ fontWeight: 'bold', fontSize: '2rem' }}>My Cart</p>
        <div style={myComponent}>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id}>
                <img src={item.imageUrl} alt={item.name} style={{ maxWidth: '200px' }} />
                <h3>{item.name}</h3>
                <p>Price: {item.price} Eth</p>
                {/* <button  className="btn-dark">Remove</button> */}
              </div>
            ))
          ) : (
            <p>.</p>
          )}
        </div>
      </div>
      {/* <button type="button" class="btn btn-primary btn-lg">Pay</button> */}
    </>
  );
}









// import React from "react";

// export default function Cart()
// {
//       const myComponent = {
//     width: '100%',
//     height: '520px',
//     overflowX: 'hidden',
//     overflowY: 'scroll'
// };
//     return(
//         <>
//         <div className="container">
//             <div style={myComponent} >

//             </div>
//         </div>
//         </>
//     );
// }