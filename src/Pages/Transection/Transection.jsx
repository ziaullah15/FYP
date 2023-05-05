import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

function Transection() {

  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    axios.get("https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0x055DD0C93b5ea880d7a30CD21Ce3E75558592781&startblock=0&endblock=99999999&sort=asc&apikey=HMQTPNNEXRIN1SJQ69BKH87M3T8G1W7M6K")
      .then((response) => {
        console.log(response)
        if (response.data.result.length === 0) {
          console.log("Data is Null");
          setErr("This Account Has No NFTs");
        } else {
          console.log(response.data.result);
          console.log("Data Received");
          setData(response.data.result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <div style={{ overflowX: 'auto' }}>
      <Container className="TransactionSection margin_top ">
        <h2 className='text-center'>Transactions</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Block Number</th>
              <th>Transaction Hash</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((tx) => (
              <tr key={tx.hash}>
                <td>{tx.blockNumber}</td>
                <td>{tx.hash}</td>
                <td>{tx.from}</td>
                <td>{tx.to}</td>
                <td>{tx.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p>{err}</p>
      </Container>
    </div>
  )
}

export default Transection;
