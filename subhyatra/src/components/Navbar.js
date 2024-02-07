// File name  Navbar.js 
import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const sidebarRef = useRef(null);
    let auth = localStorage.getItem('user');
    let user = auth ? JSON.parse(auth) : null;
    let user_type = user ? user.userType : null;
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const handleNavbarItemClick = () => {
        setShowSidebar(false); // Close sidebar when a navbar item is clicked
    };
    useEffect(() => {
        const closeSidebar = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setShowSidebar(false);
            }
        };

        document.addEventListener('mousedown', closeSidebar);
        return () => {
            document.removeEventListener('mousedown', closeSidebar);
        };
    }, []);

    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <button onClick={toggleSidebar} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div ref={sidebarRef} className={`collapse navbar-collapse ${showSidebar ? 'show' : ''}`} id="navbarSupportedContent">
                        <div className="sidebar-header d-flex justify-content-end">
                            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                                {showSidebar ? (
                                    <i className="fas fa-times"></i>
                                ) : (
                                    <i className="fas fa-bars"></i>
                                )}
                            </button>
                        </div>
                        <Link className="navbar-brand mt-1 mt-lg-0 py-0 logo" to="/">
                            <img
                                src="../images/shubh_logo.png"
                                height="60"
                                width="100"
                                alt="Subh logo"
                                loading="lazy"
                            />
                        </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li onClick={handleNavbarItemClick} ><Link to="/wishlist" className="nav-link me-4">
                                <span>Wishlist</span> <i className="hello fa-sharp fa-regular fa-heart icon-color"></i>
                            </Link>
                            </li>
                            <li className="dropdown "><Link to="/" className=" dropdown-toggle nav-link me-4" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li onClick={handleNavbarItemClick}><Link className="dropdown-item" to="/nature">Nature</Link></li>
                                    <li onClick={handleNavbarItemClick}><Link className="dropdown-item" to="/culture">Culture</Link></li>
                                    <li onClick={handleNavbarItemClick}><Link className="dropdown-item" to="/food">Food</Link></li>
                                    <li onClick={handleNavbarItemClick}><Link className="dropdown-item" to="/activities">Activities</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item" onClick={handleNavbarItemClick}>
                                <Link className="nav-link me-4" to="/Help">
                                    {showSidebar ? (
                                        <>
                                            <span>Help</span> <i className="fa-regular fa-circle-question icon-color"></i>
                                        </>
                                    ) : (
                                        <i className="fa-regular fa-circle-question icon-color"></i>
                                    )}
                                </Link>
                            </li>
                            <li className="nav-item" onClick={handleNavbarItemClick}>
                                <Link className="nav-link me-4" to="/">
                                    {showSidebar ? (
                                        <>
                                            <span>Notification</span> <i className="fas fa-bell"></i>
                                        </>
                                    ) : (
                                        <i className="fas fa-bell"></i>
                                    )}
                                </Link>
                            </li>
                            {user_type == "Admin" ?
                                <li onClick={handleNavbarItemClick}>
                                    <Link to="/CraeteProduct" className="nav-link me-4">Create Product </Link>
                                </li> : null}
                            <li className="nav-item mt-1 ">
                                <input className="search-input py-1 " placeholder='Search' type="text" name="" id="" />
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center me-4">
                        {auth ? (
                            <Link to={`/profile/${user._id}`} className="circle border-0">
                                <span className="letter">{user.name[0]}</span>
                            </Link>
                        ) : (
                            <Link to="/login" className="text-reset me-3">Login</Link>
                        )
                        }
                    </div>
                </div>
            </nav>

        </div>

    )
}
export default Navbar
