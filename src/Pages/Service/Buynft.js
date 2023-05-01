import React, { useState } from "react";
import Abi from "../../components/Contract/contractABI.json";
import { Container, Button, Form } from "react-bootstrap";
import { ethers } from "ethers";

function Auction() {
  // const [TokenAddr , setTokenAddr] = useState("");
  // const [buyAmount , setbuyAmount] = useState();
  const [Id, setId] = useState(0);
  const [price, setPrice] = useState(0);
  // const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState("");

  async function tokenURI() {
    if (typeof window.ethereum !== "undefined") {
      setStatus("Wait...");

      try {
        const data = "0x055DD0C93b5ea880d7a30CD21Ce3E75558592781";
        const providers = new ethers.providers.Web3Provider(window.ethereum);
        const signer = providers.getSigner();
        const contract = new ethers.Contract(data, Abi, signer);
        const sendTX = await contract.buyNft(Id, price);
        // await sendTX.wait()
        console.log(sendTX);
        const check = sendTX.toString();
        console.log(check);
        // setStatus(check)
      } catch (error) {
        console.log(error);
      }
    }
  }

  // const tokenAddressFunc =(e)=>{

  //   const data = e.target.value;
  //   setTokenAddr(data)
  //   console.log(TokenAddr)

  // }
  // const buyFunction =(e) =>{
  //   const data = e.target.value;
  //   setbuyAmount(data)
  //   console.log(buyAmount)
  // };

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
  // const durationFunction =(e) =>{
  //   const data = e.target.value;
  //   setDuration(data)
  //   console.log(duration)
  // }

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
                <h2 className="text-center">Buying</h2>
              </div>
            </div>
          </div>
          <Container className="Auction">
            {/* <h2>Buying</h2> */}

            <Form>
              <Form.Group controlId="bidAmount">
                {/* <Form.Label>Enter token Address</Form.Label>
          <Form.Control type="text" value={TokenAddr} onChange={tokenAddressFunc} /> */}
                {/* <Form.Label>Enter Buy Amount(wei)</Form.Label>
          <Form.Control type="number" value={buyAmount} onChange={buyFunction} /> */}
                <Form.Label>Enter ID (number)</Form.Label>
                <Form.Control type="number" value={Id} onChange={idFunction} />
                <Form.Label>Enter Price (ERC20)</Form.Label>
                <Form.Control
                  type="number"
                  value={price}
                  onChange={priceFunction}
                />
                {/* <Form.Label>Enter Duration (Time)</Form.Label>
          <Form.Control type="number" value={duration} onChange={durationFunction} /> */}
              </Form.Group>
              <Button className="my-2" variant="primary" onClick={tokenURI}>
                Buy Now
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
