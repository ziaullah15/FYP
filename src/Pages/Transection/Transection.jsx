import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { ethers } from 'ethers';
import Abi from "../../components/Contract/contractABI.json"



function Transection() {

  const [transactions, setTransactions] = useState([]);
  const contractAddress = "0xD9D9AbDC7270b946c9f4112d9B927fa3Dd8E2A87";
  useEffect(() => {
   
    const abi = Abi;
    const provider = new ethers.providers.InfuraProvider('ropsten', 'your_infura_project_id'); // zia use your ropsten or infura as you want
    const contract = new ethers.Contract(contractAddress, abi, provider);

    const getTransactions = async () => {
      const blockNumber = await provider.getBlockNumber();
      const events = await contract.queryFilter('Transfer', blockNumber - 10000, blockNumber);
      const txs = events.map((event) => {
        const { blockNumber, transactionHash, args } = event;
        return { blockNumber, transactionHash, from: args[0], to: args[1], value: args[2] };
      });
      setTransactions(txs);
    };

    getTransactions();
  }, [contractAddress]);

  return (
    <>
    
    <Container className="TransactionSection margin_top">
      <h2>Transactions</h2>
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
          {transactions.map((tx) => (
            <tr key={tx.transactionHash}>
              <td>{tx.blockNumber}</td>
              <td>{tx.transactionHash}</td>
              <td>{tx.from}</td>
              <td>{tx.to}</td>
              <td>{ethers.utils.formatEther(tx.value)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
      
    </>
  )
}

export default Transection