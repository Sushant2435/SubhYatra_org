import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_API_URL

const Reset_password = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const { id, token } = useParams();  // Use useParams to get id and token from the URL

    useEffect(() => {
        // You can use id and token here or pass them to other functions as needed
        console.log("ID:", id);
        console.log("Token:", token);
    }, [id, token]);

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}/reset-password/${id}/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: password,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                alert("Password Update successfully");
                navigate("/login")
            }
        } catch (error) {
            console.log("hello");
            console.error('Error:', error);
        }
    };

    return (
        <div className='mt-10 py-5 d-flex justify-content-center'>
            <form action="">
                <div className=''>
                    <label htmlFor="user_password m-3">Enter new password</label>
                    <input
                        type='password'
                        id='user_password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="m-3"
                    />
                    <button className='m-3' onClick={handleResetPassword} type="button">submit</button>
                </div>
            </form>
        </div>
    );
};

export default Reset_password;
