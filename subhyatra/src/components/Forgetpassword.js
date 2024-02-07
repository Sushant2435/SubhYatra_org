import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_API_URL
const Forgetpassword = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setError(true)
            return false;
        }
        try {
            const response = await fetch(`${BASE_URL}/forget-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (data.status === "Email sent successfully") {
                alert('Email sent successfully. Check your inbox for the reset link.');
            } else {
                if (response.status === 400 || data.status === "User not Exists!!") {
                    alert('User not exists. Please provide a valid email.');
                } else {
                    setStatus(data.status);
                }
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Something went wrong. Please try again later.');
        }

    };

    return (
        <div className='mt-10 py-5 d-flex justify-content-center'>
            <div className="card text-center" style={{ width: "400px" }}>
                <div className="card-header h5 text-white bg-primary">Password Reset</div>
                <div className="card-body px-5">
                    <p className="card-text py-4">
                        Enter your email address and we'll send you an email with instructions to reset your password.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline">
                            <input type="email" id="typeEmail" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} className="form-control my-1" />
                            <label className="form-label" htmlFor="typeEmail">Enter Your Registered Email</label>
                            {error && !email && <span className='invalid-input'>Enter valid email</span>}
                        </div>
                        <button type='submit' className="btn btn-primary px-4 mt-4">Reset password</button>
                    </form>
                    <p className="mt-3 text-center">{status}</p>
                    <div className="d-flex justify-content-between mt-4">
                        <Link className="text-success" to="/login">Login</Link>
                        <Link className="text-danger" to="/signup">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgetpassword;
