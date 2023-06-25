import React, { useState } from 'react';
import { nftsData } from './nftsData';
import Cart from './Cart';

export default function Nft() {
  
  return (
    <>
      
      
    </>
  );
}




// import React, { useState } from 'react';
// import { nftsData } from './nftsData';

// export default function Buy_Nft() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   return (
//     <>
//       <div className="card">
//         {nftsData.map((nft) => (
//           <div key={nft.id}>
//             <img src={nft.imageUrl} alt={nft.name} style={{ maxWidth: '200px' }} />
//             <h3>{nft.name}</h3>
//             <p>Price: ${nft.price}</p>
//             <button onClick={() => addToCart(nft)} >Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }





// import React from "react"
// import img1 from './Photos/f1.jpeg'
// import { nftsData } from './nftsData';

// export default function Buy_Nft() 
// {

//     //check code
//     const [cartItems, setCartItems] = useState([]);
//     const addToCart = (item) => {
//         setCartItems((prevItems) => [...prevItems, item]);
//       };
    
//     return(
//         <>
//             <div className="card" >
        
//                 {nftsData.map((nft) => (
//         <div key={nft.id}>
//           <img src={nft.imageUrl} alt={nft.name} style={{ maxWidth: '200px' }} />
//           <h3>{nft.name}</h3>
//           <p>Price: ${nft.price}</p>
//           {/* <button>Add to Cart</button> */}
//           <button onClick={() => addToCart(selectedItem)}>Add to Cart</button>
//         </div>
//       ))}
//             </div>
//         </>
//     )
// }

















// import React from "react"
// import img1 from './Photos/f1.jpeg'

// export default function Buy_Nft() 
// {
//     return(
//         <>
//             <div className="card" >
//                 <img src={img1} className="card-img-top" alt="..."/>
//                 <div className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">Price:0.1 Eth</p>
//                     <a href="#" className="btn btn-primary">Add to Cart</a>
//                 </div>
//             </div>
//         </>
//     )
// }

