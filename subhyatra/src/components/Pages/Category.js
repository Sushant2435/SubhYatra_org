import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import TopSight from '../TopSight'
import TopCities from '../TopCities'
import { ProductsContext } from '../../App'
import addToWishlist from '../../global function/Jsfunction'
const PageCategory = () => {
    const { products, setProducts } = useContext(ProductsContext);
    const [showSuccess, setShowSuccess] = useState(false);
    const pageType = useLocation().pathname;
    console.log(pageType)
    let auth = localStorage.getItem('user');
    let user = auth ? JSON.parse(auth) : null;
    let user_type = user ? user.userType : null;
    const filteredProducts = products.filter(item => {
        return item.type === pageType.substring(1);
    })
    const handleAddToWishlist = (card) => {
        addToWishlist(card);
    };
    const showSuccessMessage = () => {
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 600);
    };
    return (
        <>
            <div className='pt-6 container pb-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {filteredProducts.map((card) => (
                        <div className="col-lg-3" key={card._id}>
                            <div className="card">
                                <Link to={`/cart?page=${card._id}`} className="position-relative zoom-container">
                                    <div className='image-container'>
                                        <img src={card.image} className="card-img-top zoom-image w-100 h-100 object-fit-cover" alt="Hollywood Sign on The Hill" />
                                    </div>
                                    <button
                                        onClick={(e) => { e.preventDefault(); handleAddToWishlist(card); showSuccessMessage() }} // Pass the entire card object to addToWishlist
                                        type="button"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Click to add item to your wishlist"
                                        className="position-absolute top-0 text-white cursor border-0 bg-transparent"
                                    >
                                        <i className="fa-sharp fa-regular fa-heart fa-2x heart-hover"></i>
                                    </button>
                                    {user_type === "Admin" && <Link to={`/CreateProduct?id=${card._id}`} type='button' className='position-absolute top-0 end-0 text-danger border-0 btn'><i className="far fa-edit "></i></Link>}
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title text-uppercase text-secondary">{card.title}</h5>
                                    <p className="card-text fw-bold">{card.page_description}</p>
                                    <small>{card.duration}</small>
                                    <p className="text-dark">{card.price}</p>
                                    <div className="App">
                                        <Rating />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="successMessage" className={`alert alert-success fixed-top text-center ${showSuccess ? 'd-block' : 'd-none'}`}>
                    Your item Added successfully from your wishlist.
                </div>
            </div>
            <TopSight />
            <TopCities />
        </>
    )
}
export default PageCategory
