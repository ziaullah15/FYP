import React from "react"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}

      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto"><a href="index.html">NFT Marketplace</a></h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li >
                <div className="dropdown">
                  <Link to={"/"}>Services</Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                      <Link to={"/minting"} className="dropdown-item">Minting</Link>
                    </li>
                    <li>
                      <Link to={"/auction"} className="dropdown-item">Auction</Link>
                    </li>
                    <li>
                      <Link to={"/bidding"} className="dropdown-item">Bidding</Link>
                    </li>
                    <li>
                      <Link to={"/buynft"} className="dropdown-item">BuyNFT</Link>
                    </li>
                    <li>
                      <Link to={"/cla"} className="dropdown-item">CLA</Link>
                    </li>
                    <li>
                      <Link to={"/finalauction"} className="dropdown-item">Finalize Auction</Link>
                    </li>
                    <li>
                      <Link to={"/listnft"} className="dropdown-item">ListNFT</Link>
                    </li>


                  </ul>

                </div>
              </li>
              <li>
              <Link to={"/transection"}>Transaction</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* !-- .navbar --> */}

          {/* <Link to={"/login"} className="get-started-btn">Login</Link> */}

        </div>
      </header>
      {/* <!-- End Header --> */}


    </>
  )
}

export default Navbar