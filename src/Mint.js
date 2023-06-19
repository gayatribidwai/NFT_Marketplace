import React, { useState } from 'react';
import { create } from 'ipfs-http-client';

const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: 'e039fa36a4a2461282c69d8cf8099d6a',
  },
});

function Mint() {
  const [ipfsUrl, setIpfsUrl] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const { cid } = await ipfs.add(file);
      const url = `https://ipfs.io/ipfs/${cid}`;
      setIpfsUrl(url);
      setUploadedImage(URL.createObjectURL(file));
      console.log('File uploaded to IPFS:', url);
    } catch (error) {
      console.error('Error uploading file to IPFS:', error);
    }
  };

  return (
    <>
    <div className="container">
      <label>
        <p>Upload Image</p>
        <input
          placeholder="upload"
          type="file"
          onChange={handleFileUpload}
        />
      </label>
      {ipfsUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={uploadedImage} alt="Uploaded" />
        </div>
      )}
      </div>
    </>
  );
}

export default Mint;










// import React from "react";
// export default function Mint()
// {
//     const m = {
//         width: '100%',
//         height: '520px',
        
//     };
    
//     return(
//         <>
//         <div className="container">
//         <div>
//             <form>
//             <div className={m}>
//             <label>
//                 Name: 
//                 <input type="text" name="name" />
//             </label>
//             </div>
//             <div>
//             <label>
//                 Price: 
//                 <input type="text" name="name" />
//             </label>
//             </div>
//             <button type="submit" className="btn btn-primary mb-3">Mint</button>
//             </form>
//         </div>
//         </div>
//         </>
//     );
// }