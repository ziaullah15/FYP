import { ethers } from 'ethers';
import React, { useState } from 'react'
import ContractABI from './Contract/contractABI.json'

function PublicMinting() {

    const [tokenId, setTokenId] = useState('');
    // const [hash, setHash] = useState('');
    const [uri, setTokenUri] = useState('');
    const [status, setStatus] = useState('');




    var tokenID = (event) => {
        setTokenId(event.target.value)
    }

    var Uri = (event) => {
        setTokenUri(event.target.value)
    }
    // var nftName = (event) => {
    //     setNFTname(event.target.value)
    // }


    var submit = (event) => {
        event.preventDefault()

        if (tokenId === '' || uri === '') {
            setStatus("Gives Proper Data")
        }
        else {
            var token = tokenId
            var uriHash = uri
            // var nftName = NFTname
        }


        async function publicMint() {
            if (typeof window.ethereum !== 'undefined') {
                setStatus("wait")
                try {
                    const data = "0xDaaeE8b61CA6d58E1def7479ddC56540451f60b2";
                    const providers = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = providers.getSigner();
                    const contract = new ethers.Contract(data, ContractABI, signer);
                    const sendTX = await contract.mint(token, uriHash)
                    await sendTX.wait()
                    console.log(sendTX)
                    setStatus("Successfully Done")
                    
                }
                catch (err) {
                    if(tokenId === '' || uri === ''){
                        setStatus("Gives Proper Data")
                     
                    }else {
                        console.log(err.error.message)
                        setStatus(err.error.message)
                    }
                   

              

                }
            }
            else {
                setStatus("Not Working")

            }
        }
        publicMint()

    }
    return (
        <>

            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center ">
                    {/* <div className="col "> */}
                    <div className="card shadow-lg p-3 mb-5 bg-body rounded border border-5" >
                        <div className=" g-0">

                            <div className=" align-items-center">
                                <div className="card-body p-lg-3 p-4 text-black">

                                    <form onSubmit={submit}>

                                        <div className="d-flex align-items-center mb-3 pb-1">

                                            <span className="h4 fw-bold mb-0">PublicMinting</span>
                                        </div>

                                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                                        <div className="form-outline mb-3">
                                            <input name='tokenId' value={tokenId} onChange={tokenID} type="number" id="form2Example17" className="form-control" placeholder='Enter NFT token ID' />
                                            {/* <label className="form-label" Htmlfor="form2Example17">Account Address</label> */}
                                        </div>

                                        <div className="form-outline mb-3">
                                            <input name='uri' value={uri} onChange={Uri} type="text" id="form2Example27" className="form-control " placeholder='Enter Metadata Hash' />
                                            {/* <label className="form-label" Htmlfor="form2Example27"> Balance</label> */}
                                        </div>

                                        {/* <div className="form-outline mb-3">
                                            <input name='NFTname' value={NFTname} onChange={nftName} type="text" id="form2Example27" className="form-control " placeholder='Enter NFT name' />
                                            {/* <label className="form-label" Htmlfor="form2Example27">Text Message</label> */}
                                        {/* </div> */}

                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-outline-success" type="submit" >Mint NFT</button>
                                            <p className='text-danger mt-1'>{status}</p>

                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default PublicMinting