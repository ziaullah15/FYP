import React from "react";
import Navbar from "./components/Navbar"
import './App.css';
import Welcome from "./components/Welcome";
// import About from "./Pages/About/About.js";
import Auction from "./Pages/Service/Auction"
import News from "./Pages/News/News";

import {Routes , Route } from "react-router-dom" 
import Bidding from "./Pages/Service/Bidding";
import Minting from "./Pages/Service/Minting";
import Buynft from "./Pages/Service/Buynft";
// import Buynft from "./Pages/Service/Buynft";
import CLA from "./Pages/Service/CLA";
import FinalizeAuction from "./Pages/Service/FinalizeAuction";
import Listnft from "./Pages/Service/Listnft";
import Transaction from "./Pages/Transaction/Transection";
// import Login from "./Pages/Login/Login";
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="my-5"></div>
      
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/news" element={<News></News>} ></Route>
        <Route path="/minting" element={<Minting></Minting>} ></Route>
        <Route path="/auction" element={<Auction></Auction>} ></Route>
        <Route path="/bidding" element={<Bidding></Bidding>} ></Route>
        <Route path="/buynft" element={<Buynft></Buynft>} ></Route>
        <Route path="/cla" element={<CLA></CLA>} ></Route>
        <Route path="/finalauction" element={<FinalizeAuction></FinalizeAuction>} ></Route>
        <Route path="/listnft" element={<Listnft></Listnft>} ></Route>
        <Route path="/transaction" element={<Transaction></Transaction>} ></Route>
        {/* <Route path="/login" element={<Login></Login>} ></Route> */}
        

     </Routes>

     <Footer></Footer>
        {/* <Navbar></Navbar>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <div className="mt-5"></div>
       <Welcome></Welcome>   
       <div className="mt-5"></div>
       <Transiction></Transiction>
       <div className="mt-5"></div>
       <Footer></Footer> */}


       
     
    </>
  );
}

export default App;
