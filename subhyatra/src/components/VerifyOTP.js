import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_API_URL


const VerifyOTP = ({ updateUser }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const userId = localStorage.getItem('UserId')
    const navigate = useNavigate();


    const handleInputChange = (index, value) => {
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < inputRefs.length - 1 && value.length === 1) {
                inputRefs[index + 1].current.focus();
            }
        }
    };

    const handleArrowKeyPress = (index, direction) => {
        if (direction === 'left' && index > 0) {
            inputRefs[index - 1].current.focus();
        } else if (direction === 'right' && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleVerifyClick = async () => {
        try {
            const fullOtp = otp.join('');
            const response = await fetch(`${BASE_URL}/verifyOTP`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    otp: fullOtp,
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Verification Response:', data);
            if (data.status === 'VERIFIED') {
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('token', data.auth);
                alert("You successfull verified your account")
                updateUser(data.user);
                navigate('/')
            } else if (data.message == "FAILED") {
                alert("Please Enter a correct OTP")
            }
            else if (data.message == "Account record does not exist or has been verified already.Please sign up or login") {
                alert("Account record does not exist or has been verified already.Please sign up or login")
                navigate('/login');
            } else {
                alert('OTP verification failed. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error.message);
        }
    };
    const handleResendClick = async () => {
        try {
            const response = await fetch(`${BASE_URL}/resendOTP`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Resend OTP Response:', data);

            if (data.status === 'PENDING') {
                alert('New OTP sent successfully.');
            } else {
                alert('Failed to resend OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error resending OTP:', error.message);
        }
    };

    return (
        <div className='mt-10'>
            <section className="container-fluid bg-body-tertiary d-block">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4" style={{ minWidth: "500px" }}>
                        <div className="card bg-white mb-5 mt-5 border-0" style={{ boxShadow: "0 12px 15px rgba(0, 0, 0, 0.02)" }}>
                            <div className="card-body p-5 text-center">
                                <h4>Verify</h4>
                                <p>Your code was sent to you via email</p>
                                <div className="otp-field mb-4">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="number"
                                            value={digit}
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'ArrowLeft') {
                                                    handleArrowKeyPress(index, 'left');
                                                } else if (e.key === 'ArrowRight') {
                                                    handleArrowKeyPress(index, 'right');
                                                }
                                            }}
                                            maxLength="1"
                                            ref={inputRefs[index]}
                                        />
                                    ))}
                                </div>

                                <button className="btn btn-primary mb-3" onClick={handleVerifyClick}>
                                    Verify
                                </button>

                                <p className="resend text-muted mb-0">
                                    Didn't receive code? <a href="#" onClick={handleResendClick}>Request again</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default VerifyOTP;
