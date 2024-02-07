import React, { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_API_URL
const Signup = ({ updateUser }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [mobile_number, setMobileNumber] = useState("");
    const [address, setAddress] = useState("");
    const [userType, setUserType] = useState("")
    const [secretKey, setSecretKey] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const collectData = async (e) => {
        e.preventDefault();
        if (!userType || !name || !email || !password || !mobile_number) {
            setError(true)
            return false;
        }
        try {
            if (userType === "Admin" && secretKey !== "YatraSubh245") {
                alert("Invalid Admin");
            } else {
                let result = await fetch(`${BASE_URL}/register`, {
                    method: "post",
                    body: JSON.stringify({ name, email, password, userType, mobile_number, address }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await result.json();

                if (data.user && data.auth) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("token", JSON.stringify(data.auth));
                    updateUser(data.user);
                    navigate('/');
                } else if (data.error == "Email already registered") {
                    alert("Your email Already registered, Please try to login")
                }
            }
        } catch (error) {
            alert("Server error message:", error);

        }

    }
    return (
        <div className="bg-white border rounded-5 pt-6">
            <section className="py-3 px-5 w-100" style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}>
                <div className="row">
                    <div className="col-12">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mt-4">Sign up</p>
                                        <form>
                                            <div className="d-flex ms-5 px-4 mb-2 ">
                                                Register As
                                                <div className="form-check ms-5">
                                                    <input className="form-check-input" type="radio" id="userType" name="userType" value="User" onChange={(e) => setUserType(e.target.value)} />
                                                    <label className="form-check-label" htmlFor="userType">
                                                        User
                                                    </label>
                                                </div>
                                                <div className="form-check ms-4">
                                                    <input className="form-check-input" type="radio" id="adminType" name="userType" value="Admin" onChange={(e) => setUserType(e.target.value)} />
                                                    <label className="form-check-label" htmlFor="adminType">
                                                        Admin
                                                    </label>
                                                </div>
                                            </div>
                                            {error && !userType && <span className='invalid-input pb-3' style={{ marginLeft: "70px" }}>Select a user type</span>}
                                            {userType === "Admin" ? <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg mb-4 me-5 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="secret-key" style={{ marginLeft: "0px" }}>Secret Key</label>
                                                    <input type="text" id="secret-key" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} className="form-control" />
                                                </div>
                                            </div> :
                                                null}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg mb-4 me-5 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="user-name" style={{ marginLeft: "0px" }}>Your Name</label>
                                                    <input type="email" id="user-name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" required />
                                                    {error && !name && <span className='invalid-input'>Enter valid name</span>}

                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg mb-4 me-5 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="user-email" style={{ marginLeft: "0px" }} > Your Email</label>
                                                    <input type="email" id="user-email" onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                                                    {error && !email && <span className='invalid-input'>Enter valid email</span>}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-map-marker-alt fa-lg mb-4 me-5 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="user-address" style={{ marginLeft: "0px" }} > Your Address</label>
                                                    <input type="text" id="user-address" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required />
                                                    {error && !address && <span className='invalid-input'>Enter your address</span>}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-mobile-alt fa-lg mb-4 me-5 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="user-number" style={{ marginLeft: "0px" }} >Mobile Number</label>
                                                    <PhoneInput
                                                        id="user-number"
                                                        className="form-control"
                                                        value={mobile_number}
                                                        onChange={(value) => setMobileNumber(value)}
                                                        required
                                                    />
                                                    {error && !mobile_number && <span className='invalid-input'>Enter your Mobile Number</span>}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg mb-3 me-5 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="user-pass" style={{ marginLeft: "0px" }}>Password</label>
                                                    <input type="password" id="user-pass" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button onClick={collectData} type="button" className="btn btn-primary btn-lg">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}
export default Signup