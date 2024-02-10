import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_API_URL
const Login = ({ updateUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    },)
    const handLogin = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError(true)
            return false;
        }
        try {
            let result = await fetch(`${BASE_URL}/login`, {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json();
            if (result.user && result.auth) {
                localStorage.setItem("user", JSON.stringify(result.user));
                localStorage.setItem("token", JSON.stringify(result.auth));
                updateUser(result.user);
                navigate('/');
            } else {
                // Check for different login scenarios
                if (result.result === 'Email not registered') {
                    alert(result.result);
                } else if (result.result === 'Account not verified. Please verify your account.') {
                    alert(result.result);
                } else if (result.result === 'Incorrect password') {
                    alert(result.result);
                } else {
                    alert('Login failed. Please try again.');
                }
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Please try again later.');
        }
    }

    useEffect(() => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
    }, []);
    return (
        <div div className="container-fluid h-custom" action="post" data-component="Login" >
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-6 my-lg-5 py-lg-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1 my-lg-5 py-lg-5">
                    <form>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="user-name" style={{ marginLeft: "0px" }}>Email address</label>
                            <input type="email" id="user-name" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" placeholder="Enter a valid email address" required />
                            {error && !email && <span className='invalid-input'>Enter valid email</span>}
                        </div>
                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="user-pass" style={{ marginLeft: "0px" }}>Password</label>
                            <input type="password" id="user-pass" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" placeholder="Enter password" required />
                            {error && !password && <span className='invalid-input'>Enter correct password</span>}
                        </div>
                        <div className="d-flex  justify-content-between align-items-center">
                            <Link to="/Forgetpassword" className="text-body">Forgot password?</Link>
                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button onClick={handLogin} type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup" className="link-danger">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
export default Login