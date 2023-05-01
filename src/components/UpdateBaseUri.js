import { ethers } from 'ethers';
import React, { useState } from 'react'
import ContractABI from './Contract/contractABI.json'

function UpdateBaseUri() {


    const [URI, setURi] = useState('');
    const [status, setStatus] = useState('');




    var Uri = (event) => {
        setURi(event.target.value)
    }


    var submit = (event) => {
        event.preventDefault()

        if (URI === '') {
            setStatus("Gives Proper Data")
        }
        else {
            var uri = URI
        }


        async function BaseUriUpdate() {
            if (typeof window.ethereum !== 'undefined') {
                setStatus("wait")
                try {
                    const data = "0xD9D9AbDC7270b946c9f4112d9B927fa3Dd8E2A87";
                    const providers = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = providers.getSigner();
                    const contract = new ethers.Contract(data, ContractABI, signer);
                    const sendTX = await contract.BaseUriUpdate(uri)
                    await sendTX.wait()
                    console.log(sendTX)
                    setStatus("Successfully Done")

                }
                catch (err) {
                    if(URI === ''){
                        setStatus("Gives Proper Data")   
                    }else{
                        setStatus(err.error.message)
                        console.log(err)
                    }
                }
            }
            else {
                setStatus("Not Working")

            }
        }
        BaseUriUpdate()


    }


    return (
        <>

            <div className="container py-5 ">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="card shadow-lg p-3 mb-5 bg-body rounded border border-5" >
                        <div className=" g-0">

                            <div className=" align-items-center">
                                <div className="card-body p-lg-3 p-4 text-black">

                                    <form onSubmit={submit}>

                                        <div className="d-flex align-items-center mb-3 pb-1">

                                            <span className="h4 fw-bold mb-0">UpdateBaseUri</span>
                                        </div>

                                        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

                                        <div className="form-outline mb-3">
                                            <input name='URI' value={URI} onChange={Uri} type="text" id="form2Example17" className="form-control" placeholder='Enter your BaseURi' />
                                            {/* <label className="form-label" Htmlfor="form2Example17">Account Address</label> */}
                                        </div>



                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-outline-success" type="submit" >UpdateBaseUri</button>
                                            <p className='text-danger mt-1'>{status}</p>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}

                </div>
            </div>
        </>
    )
}

export default UpdateBaseUri