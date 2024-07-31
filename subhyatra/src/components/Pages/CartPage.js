import React, { useContext, useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import { useLocation } from "react-router-dom";
import HadlineCard from "./hadlinecard";
import Cart_form from "./CartForm";
import { pageData } from "../array/pagedata";
import ReviewList from "../ClientReview";
import { ProductsContext } from '../../App'

const CartPage = () => {
    const { products } = useContext(ProductsContext);
    const [content, setContent] = useState(null);
    console.log(content)

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const contentId = searchParams.get('page');

    useEffect(() => {
        const contentData = products.find(item => item._id === contentId);
        setContent(contentData ? [contentData] : null);
    }, [products, contentId]);

    if (!content) {
        return <div className="text-danger">Loading...</div>;
    }
    return (
        <div className='my-5 pt-5 mb-5'>
            <span className='text-uppercase'>{content[0]?.title}</span>
            <h2 className="fw-bold" >{content[0]?.heading}</h2>
            <div>
                <div className='App ms-2'>
                    <Rating /> <span> 4/5 :  {content[0]?.review_count} Reviews Activity</span>
                </div>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {content.map((item, index) => (
                        Object.entries(item.images).map(([key, value], idx) => (
                            <div key={key + idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`} style={{ height: "600px" }}>
                                {item.isVideo ? (
                                    <video className="img-fluid w-100" autoPlay loop muted>
                                        <source src={value} type="video/mp4" style={{ maxHeight: "500px" }} />
                                    </video>
                                ) : (
                                    <img src={value} alt="" className="d-block w-100" style={{ objectFit: "cover", height: "600px" }} />
                                )}
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Summer Paradise</h5>
                                    <p>Enjoy the beauty and the adventure of this place</p>
                                </div>
                            </div>
                        ))
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="d-flex flex-wrap justify-content-center align-item-center me-3 mt-5">
                <div className="col-lg-6 col-md-6 col-sm-9 col-11 ms-2 align-item-center justify-content-center">
                    <h3 className='fw-bold'>About this activity</h3>
                    {pageData.map((item) => (
                        <div className='mt-2' key={item.id}>
                            <h5 className='mt-4'><i className="fa-regular fa-square-check pe-3"></i>{item.title}</h5>
                            <p className="ms-6 text-muted">{item.description}</p>
                        </div>
                    ))}
                </div>
                <Cart_form selectedProductId={contentId} />
            </div>
            <hr className="mt-5" />
            <div className="mt-5  mx-5">
                <h3 className='fw-bold mb-5'>Experience</h3>

                <h4>Highlights</h4>
                <ul>
                    <li>Visit a local organic farm, pick some fresh vegetables and collect the eggs</li>
                    <li>Benefit from a small group size and individual cooking stations</li>
                    <li>Create your very own curry paste with the help and guidance of your English-speaking instructor</li>
                    <li>Visit the local market to learn about the important ingredients in your dishes</li>
                </ul>
                <hr className='mt-4' />
                <h4>Full Description</h4>
                <p>Learn how to make authentic Thai dishes with this fun, small-group cooking className in Chiang Mai as you prepare classic dishes using ingredients from a local market. Choose between a half-day className during the morning or the evening and cook three or four dishes, or go for the full-day className to cook an extra two courses!</p>
                <hr className='mt-4' />
                <h4 >Includes</h4>
                <ol>
                    <li>Walking</li>
                    <li>Staying</li>
                    <li>BreakFast</li>
                    <li>Lunch</li>
                    <li>Pick up and drop-off service</li>
                    <li>English/Hindi instructor</li>
                    <li>Welcome drink</li>
                    <li>Market visit</li>
                </ol>
                <hr className='mt-4' />
                <h4>Important information</h4>
                <h5>What to bring</h5>
                <ul>
                    <li>Comfort Shoes</li>
                    <li>Sun hat</li>
                </ul>
                <h5>Not Allowed</h5>

                <ul>
                    <li>Pets</li>
                </ul>
                <h5>Know before you go</h5>
                <ul>
                    <li>This tour is applicable for non-Thai residents only</li>
                    <li>Hotel pick up is available within 10 kilometers of the city center of Chiangmai</li>
                    <li>Vegetarian and halal options are available</li>
                </ul>
                <hr className='mt-4' />
            </div>
            <ReviewList />
            <div className="py-5" >
                <h1 className='container'>You might also like..........</h1>
                <HadlineCard />
            </div>
        </div >
    )
}

export default CartPage