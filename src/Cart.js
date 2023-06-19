import React from 'react';

export default function Cart({ cartItems }) {
  const myComponent = {
    width: '100%',
    height: '520px',
    overflowX: 'hidden',
    overflowY: 'scroll'
  };

  return (
    <>
      <div className="container">
        <div style={myComponent}>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id}>
                <img src={item.imageUrl} alt={item.name} style={{ maxWidth: '200px' }} />
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
            ))
          ) : (
            <p>.</p>
          )}
        </div>
      </div>
      
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