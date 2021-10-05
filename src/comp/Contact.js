import React from 'react'
import { useState } from 'react'
import "../App.css"

const Contact = () => {
    const [data, updatevalue] = useState({
        fname: '',
        mobno: '',
        email: '',
        message: '',
        adress: '',
    })
    const update = (event) => {
        const { value, name } = event.target;

        updatevalue({
            ...data,
            [name]: value
        })
    }
    const formsubmit = async (event) => {

        const { fname, mobno, email, message, adress } = data;
        const res = await fetch("https://liabltech-frontend-default-rtdb.firebaseio.com/reactForm.json", {
            method: 'POST',
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fname,
                mobno,
                email,
                message,
                adress,
            })

        })
       
        event.preventDefault();

      
    }

    return (


        <>
            <div className='container-fluid '>
                <div className='row '>
                    <div className='col-12 mx-auto'>
                        <h1 className='text-center bg-dark text-light'>Get Starded Today!</h1>
                        <div className='container contact_div'>
                            <div className='row'>
                                <div className='col-md-6 mx-auto'>
                                    <form >
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div className='row'>
                                                    <div className="mb-3 col-6">
                                                        <label for="exampleFormControlInput1" className="form-label">FirstName</label>
                                                        <input required value={data.fname} type="text" onChange={update} name='fname' className="form-control" id="exampleFormControlInput1" placeholder="FirstName" />
                                                    </div>
                                                    <div className="mb-3 col-6">
                                                        <label for="exampleFormControlInput1" className="form-label">LasttName</label>
                                                        <input required value={data.mobno} onChange={update} name='mobno' type="number" className="form-control" id="exampleFormControlInput1" placeholder="LasttName" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='col-12'>
                                            <div className='row'>
                                                <div className="mb-3 col-6">
                                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                                    <input required value={data.email} onChange={update} name='email' type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                                </div>
                                                <div className="mb-3 col-6">
                                                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                                                    <input required value={data.adress} onChange={update} name='adress' type="text" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
                                                </div>

                                            </div>
                                        </div>


                                      
                                        <button className="btn"
                                         type="submit" className="btn btn-outline-warning" onClick={formsubmit}>Submit</button>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Contact
