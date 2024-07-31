import React, { useState, useRef, useEffect } from 'react';
import EnqueryForm from './Pages/EnqueryForm';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ searchHandle }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarRef = useRef(null);
    const searchInputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [scrolled, setScrolled] = useState(false); // State to track if scrolled
    const location = useLocation();

    let auth = localStorage.getItem('user');
    let user = auth ? JSON.parse(auth) : null;
    let user_type = user ? user.userType : null;

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const handleNavbarItemClick = () => {
        setShowSidebar(false);
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

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        // Check if on home screen and input length is 3 and not scrolled yet
        if (location.pathname === '/' && value.length === 3 && !scrolled) {
            window.scrollTo({ top: window.scrollY + window.innerHeight });
            setScrolled(true); // Set scrolled to true to prevent further scrolls
        }
        searchHandle(e);
    };


    const handleScroll = () => {
        if (window.scrollY === 0) {
            setScrolled(false); // Reset scrolled state when scrolled to the top
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#e3f2fd" }}>
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
                            <li onClick={handleNavbarItemClick} ><Link to="/" className="nav-link me-4">
                                <div data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Enquiry</span> </div>
                            </Link>
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
                            {user_type === "Admin" &&
                                <li onClick={handleNavbarItemClick}>
                                    <Link to="/CreateProduct" className="nav-link me-4">Create Product </Link>
                                </li>}
                            <li className="nav-item mt-1 ">
                                <input ref={searchInputRef} className="search-input py-1 " placeholder='Search' type="text" onChange={handleSearchChange} value={inputValue} name="" id="" />
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
            </nav >
            <EnqueryForm />
        </div >
    )
}

export default Navbar;
