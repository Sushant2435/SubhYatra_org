import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    let auth = localStorage.getItem('user');
    let user = auth ? JSON.parse(auth) : null;
    return (
        <div>
            <footer className="text-center  bg-dark text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block text-white">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/sushant-sharma-dev/" target="_blank" className="me-4 text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/sushant-sharma-dev/" target="_blank" className="me-4 text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sushant-sharma-dev/" target="_blank" className="me-4 text-white">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sushant-sharma-dev/" target="_blank" className="me-4 text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sushant-sharma-dev/" target="_blank" className="me-4 text-white">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sushant-sharma-dev/" target="_blank" className="me-4 text-white">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-white">
                                    <i className="fas fa-gem me-3 text-white"></i>Subh Yatra
                                </h6>
                                <p className="text-white">

                                    Discover unforgettable journeys with Subh Yatra, offering curated tours from serene beaches to majestic mountains. Experience adventure, culture, and relaxation with our expertly crafted travel packages.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-white">
                                    Categories
                                </h6>
                                <p>
                                    <Link to="/nature" className="text-white  footer-link">Nature</Link>
                                </p>
                                <p>
                                    <Link to="/culture" className="text-white  footer-link">Culture</Link>
                                </p>
                                <p>
                                    <Link to="/food" className="text-white  footer-link">Food</Link>
                                </p>
                                <p>
                                    <Link to="/activities" className="text-white  footer-link">Activitis</Link>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-white"> Usefull links
                                </h6>
                                {user && (
                                    <p>
                                        <Link to={`/profile/${user._id}`} className="text-white  footer-link">Profile Information</Link>
                                    </p>
                                )}
                                <p>
                                    <Link to="/wishlist" className="text-white  footer-link">Wishlist</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-white  footer-link">Orders</Link>
                                </p>
                                <p>
                                    <Link to="Help" className="text-white  footer-link">Help</Link>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
                                <p className="text-white"><i className="fas fa-home me-3"></i> Sector 11 Gurgaon, Haryana 122001</p>
                                <p className="text-white">
                                    <i className="fas fa-envelope me-3 "></i>
                                    sharmasushant245@gmail.com
                                </p>
                                <p className="text-white"><i className="fas fa-print me-3 "></i> +91 9675804042</p>
                                <p className="text-white"><i className="fas fa-phone me-3 "></i> +91 7454652880</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2024 Copyright:
                    <a href="https://yatrasubh.netlify.app/" target="_blank" className="text-white ms-3 fw-bold" to="/">yatrasubh.netlify.app</a>
                </div>
            </footer >
        </div>
    )
}

export default Footer