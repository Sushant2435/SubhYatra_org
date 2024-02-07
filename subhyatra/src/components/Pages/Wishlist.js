import React, { useState, useEffect } from 'react'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
const BASE_URL = process.env.REACT_APP_API_URL
const Wishlist = () => {
    const [wishList, setWishList] = useState([]);
    const auth = localStorage.getItem('user');
    let userId = null;
    const [showSuccess, setShowSuccess] = useState(false);
    const showSuccessMessage = () => {
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 600);
    };

    if (auth) {
        userId = JSON.parse(auth)._id;
    }

    useEffect(() => {
        if (userId) {
            getWishListData();
        }
    }, [userId]);

    const getWishListData = async () => {
        try {
            let result = await fetch(`${BASE_URL}/wishlist`);

            if (result.ok) {
                const data = await result.json();
                const userWishList = data.filter(item => item.userId == userId);
                setWishList(userWishList);
            } else {
                throw new Error('Request failed with status:', result.status);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    const deleteProduct = async (id) => {
        try {
            let result = await fetch(`${BASE_URL}/delete-from-wishlist/${id}`, {
                method: "Delete",
            });

            if (result.ok) {
                // Remove the deleted item from the local state (wishList)
                setWishList(prevWishList => prevWishList.filter(item => item._id !== id));
            } else {
                throw new Error('Failed to delete item from wishlist');
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }
    return (
        <div className='pt-6'>
            <Link to="/" className='ms-4 text-dark'><i className="fa-solid fa-arrow-left me-2"></i>Home</Link>
            <div className="container bcontent  mb-3">
                <nav className='navbar'>
                    <div className='btn-group '>
                        <button className="btn-group__item active">Upcoming</button>
                        <button className="btn-group__item">Past</button>
                    </div>
                </nav>
                {wishList.length !== 0 ? (
                    <div className='row f-flex justify-content-center my-5'>

                        {wishList.map((data) => (
                            <div className="card mb-3 col-lg-6 col-md-5 col-sm-7 ms-4 px-0 " style={{ maxWidth: "540px" }} key={data._id}>
                                <div className="row g-0 position-relative">
                                    <div className="col-md-12 col-lg-5 col-sm-12">
                                        <img src={`${data.image}`}
                                            className="img-fluid rounded-start h-100 w-100" alt="..." />
                                    </div>
                                    <div className='rounded-circle border height40 widht40 bg-dark position-absolute border-0 margin-top'>
                                        <i className="hello fa-sharp fa-regular fa-heart fa-2x text-danger  fw-bold red-heart"></i>
                                    </div>
                                    <div className="col-md-12 col-lg-7 col-sm-12">
                                        <div className='float-end'>
                                            <Rating />
                                        </div>
                                        <div className="card-body mt-4">
                                            <h5 className="card-title">
                                                {data.title}
                                            </h5>
                                            <p className="card-text">
                                                {data.description}
                                            </p>
                                            <p className="card-text">
                                                <Link to={`/visitpage/?page=${data._id.split('_')[1]}`} type="button" className="btn text-decoration-none btn btn-success rounded-pill">
                                                    Find things to do
                                                </Link>
                                                <button onClick={(e) => { e.preventDefault(); deleteProduct(data._id); showSuccessMessage() }} type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" key={data.id} className='border-0 bg-light float-end mt-3'>
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div id="successMessage" className={`alert alert-danger fixed-top text-center ${showSuccess ? 'd-block' : 'd-none'}`}>
                            Your item deleted successfully from your wishlist.
                        </div>
                    </div>
                ) : (
                    <h1 className='text-center my-5 fw-bold py-5'>Your Wishlist is empty</h1>
                )}

            </div >
        </div>
    )
}

export default Wishlist
