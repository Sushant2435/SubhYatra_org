import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UpdateProfile from "./updateProfile";
const Profile = ({ updateUser }) => {
    const [userDetails, setUserDetails] = useState(getUserDetailsFromLocalStorage);
    const navigate = useNavigate();

    function getUserDetailsFromLocalStorage() {
        const auth = localStorage.getItem('user');
        return auth ? JSON.parse(auth) : null;
    }
    // Update the user_details or trigger a fetch to update the profile information
    const handleProfileUpdate = (updatedInfo) => {
        const updatedDetails = { ...userDetails, ...updatedInfo };
        localStorage.setItem('user', JSON.stringify(updatedDetails));
        setUserDetails(updatedDetails);
    };
    const logout = () => {
        localStorage.clear();
        updateUser("");
        navigate('/login');
    }
    return (
        <div>
            <section className="pt-6" style={{ backgroundColor: "#f4f5f7" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center justify-content-center text-white"
                                        style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                        <div className="profile-circle border-0 my-5 mx-5 ">
                                            <span className="user-name img-fluid align-item-center " >{userDetails.name[0]}</span>
                                        </div>
                                        <h5>{userDetails.name}</h5>
                                        <p>Customer</p>
                                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#profileModal"><i className="far fa-edit"></i></button>
                                    </div>
                                    <UpdateProfile onProfileUpdate={handleProfileUpdate} />

                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6>Information</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Email</h6>
                                                    <p className="text-muted">{userDetails.email}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Your Id</h6>
                                                    <p className="text-muted">{userDetails._id}</p>
                                                </div>
                                            </div>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>Your Address</h6>
                                                    <p className="text-muted">{userDetails.address}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>Your Mobile Number</h6>
                                                    <p className="text-muted">{userDetails.mobile_number}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start">
                                                <Link onClick={logout} to="/login">Logout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Profile