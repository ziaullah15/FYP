// import React, { useState } from 'react'
// import Abi from "../../components/Contract/contractABI.json"
// import { Container, Button, Form } from 'react-bootstrap';
// import { ethers } from 'ethers';

// function Auction() {

//   // const [TokenAddr , setTokenAddr] = useState("");
//   // const [bidAmount , setbidAmount] = useState("");
//   const [Id , setId] = useState(0);
//   const [price, setPrice] = useState(0);
//   // const [duration, setDuration] = useState(0);
//   const [status , setStatus] = useState("");
  

//   async function tokenURI() {

//     if (typeof window.ethereum !== 'undefined'){
//       setStatus("Wait...")
      
//           try {
//               const data = "0x055DD0C93b5ea880d7a30CD21Ce3E75558592781";
//               const providers = new ethers.providers.Web3Provider(window.ethereum);
//               const signer = providers.getSigner();
//               const contract = new ethers.Contract(data, Abi, signer);
//               const sendTX = await contract.bidding(Id , price)
//               // await sendTX.wait()
//               console.log(sendTX)
//               const check = sendTX.toString()
//               console.log(check)
//               setStatus("Sucessfully Completed")
//               // setStatus(check)
//       }
//       catch (error) {
//           console.log(error)
//           setStatus("something went wrong")
//       }
//     }    
//   }

//   // const tokenAddressFunc =(e)=>{
    
//   //   const data = e.target.value;
//   //   setTokenAddr(data)
//   //   console.log(TokenAddr)   

//   // }
//   // const bidFunction =(e) =>{
//   //   const data = e.target.value;
//   //   setbidAmount(data)
//   //   console.log(bidAmount)
//   // };

//   const idFunction =(e) =>{
//     const data = e.target.value;
//     setId(data)
//     console.log(Id)
//   }
//   const priceFunction =(e) =>{
//     const data = e.target.value;
//     setPrice(data)
//     console.log(price)
//   }
//   // const durationFunction =(e) =>{
//   //   const data = e.target.value;
//   //   setDuration(data)
//   //   console.log(duration)
//   // }


//   return ( 
//     <>
//      <section className='justify-content-center jumbotron breadcumb no-bg d-flex align-items-center justify-content-center
// '>
//     <div className='mainbreadcumb'>
//       <div className='container'>
//         <div className='row m-10-hor'>
//           <div className='col-12'>
//             <h2 className='text-center'>Bidding</h2>
//           </div>
//         </div>
//           </div>
//           <Container className="Auction ">
//       {/* <h2>Bidding</h2> */}

//       <Form>
//         <Form.Group controlId="bidAmount">
//           {/* <Form.Label>Enter token Address</Form.Label>
//           <Form.Control type="text" value={TokenAddr} onChange={tokenAddressFunc} /> */}
//           {/* <Form.Label>Enter Bid Amount </Form.Label>
//           <Form.Control type="text" value={bidAmount} onChange={bidFunction} /> */}
//           <Form.Label>Enter ID (number)</Form.Label>
//           <Form.Control type="number" value={Id} onChange={idFunction} />
//           <Form.Label>Enter Price </Form.Label>
//           <Form.Control type="number" value={price} onChange={priceFunction} />
//           {/* <Form.Label>Enter Duration (Time)</Form.Label>
//           <Form.Control type="number" value={duration} onChange={durationFunction} /> */}
//         </Form.Group>
//         <Button className='my-2' variant="primary" onClick={tokenURI}>Bid Now</Button>
//         <p className='text-center'>{status}</p>
//       </Form>
//     </Container>
//     </div>
//       </section>
//     </>
//   )
// }

// export default Auction

import React, { useState } from "react";
import Abi from "../../components/Contract/contractABI.json";
import { Container, Button, Form } from "react-bootstrap";
import { ethers } from "ethers";

function Auction() {
  const [Id, setId] = useState(0);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");

  async function tokenURI() {
    if (typeof window.ethereum !== "undefined") {
      setStatus("Waiting for confirmation...");

      try {
        const data = "0x055DD0C93b5ea880d7a30CD21Ce3E75558592781";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(data, Abi, signer);
        const parsedPrice = ethers.utils.parseUnits(price.toString(), 18);
        const options = { value: parsedPrice };
        const tx = await contract.bidding(Id, parsedPrice, options);
        await tx.wait();
        console.log(tx);
        setStatus("Transaction successful");
      } catch (error) {
        console.log(error);
        setStatus(error.message);
      }
    } else {
      setStatus("Please install Metamask to use this feature");
    }
  }

  const idFunction = (e) => {
    const data = e.target.value;
    setId(data);
    console.log(Id);
  };
  const priceFunction = (e) => {
    const data = e.target.value;
    setPrice(data);
    console.log(price);
  };

  return (
    <>
      <section
        className="justify-content-center jumbotron breadcumb no-bg d-flex align-items-center justify-content-center
"
      >
        <div className="mainbreadcumb">
          <div className="container">
            <div className="row m-10-hor">
              <div className="col-12">
                <h2 className="text-center">Bidding</h2>
              </div>
            </div>
          </div>
          <Container className="Auction">
            <Form>
              <Form.Group controlId="bidAmount">
                <Form.Label>Enter ID (number)</Form.Label>
                <Form.Control type="number" value={Id} onChange={idFunction} />
                <Form.Label>Enter Bid</Form.Label>
                <Form.Control
                  type="number"
                  value={price}
                  onChange={priceFunction}
                />
              </Form.Group>
              <Button className="my-2" variant="primary" onClick={tokenURI}>
                Bid Now
              </Button>
              <p className="text-center">{status}</p>
            </Form>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Auction;