import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_API_URL

const UpdateProfile = ({ onProfileUpdate }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mobile_number, setMObileNumber] = useState("");
    const params = useParams();

    useEffect(() => {
        getUserDetails();
    }, []);
    const getUserDetails = async () => {
        let result = await fetch(`${BASE_URL}/user-update/${params.id}`);
        result = await result.json();
        setName(result.name)
        setAddress(result.address)
        setMObileNumber(result.mobile_number)
    }
    const updateUser = async (e) => {
        e.preventDefault();
        let result = await fetch(`${BASE_URL}/user/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, address, mobile_number }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        result = await result.json();
        onProfileUpdate({ name, address, mobile_number });
    }
    return (
        <div className="modal fade" id="profileModal" tabIndex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-dark" id="profileModalLabel">Update your Information</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="form-outline mb-4">
                                <label className='text-dark' htmlFor="user-name">Name</label>
                                <input type="text" id="user-name" className="form-control" value={name} placeholder='Your name' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-outline mb-4">
                                <label className='text-dark' htmlFor="user-name">Address</label>
                                <input type="text" id="form1Example2" className="form-control" value={address} placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="form-outline mb-4">
                                <label className='text-dark' htmlFor="user-name">Mobile Number</label>
                                <input type="number" id="form1Example4" className="form-control" placeholder='Mobile Number' value={mobile_number} onChange={(e) => setMObileNumber(e.target.value)} />
                            </div>
                            {/* <button type="submit" className="btn btn-primary btn-block">Sign in</button> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={updateUser} type="button" data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>

                </div>
            </div>
        </div >

    )
}

export default UpdateProfile
