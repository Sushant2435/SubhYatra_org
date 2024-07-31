import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_API_URL

const CreateProdcut = () => {
    const [title, setTitle] = useState("");
    const [type, settype] = useState("");
    const [image, setImage] = useState("");
    const [isVideo, setisVideo] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [discount, setDiscount] = useState("");
    const [duration, setduration] = useState("");
    const [price, setPrice] = useState("");
    const [review_count, setReviewCount] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const [cityname, setCityName] = useState("");
    const [cityimageurl, setCityimageurl] = useState("");
    const [page_description, setPageDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const [error, setError] = useState(false)
    const product_user = JSON.parse(localStorage.getItem('user'))._id;
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const Pid = searchParams.get('id');
    const images = {
        image1,
        image2,
        image3
    };
    const addProduct = async () => {
        if (!title || !type || !image || !isVideo || !image1 || !image2 || !image3 || !duration || !time || !description || !cityname || !page_description) {
            setError(true)
            return false;
        }
        let result = await fetch(`${BASE_URL}/add-product`, {
            method: 'post',
            body: JSON.stringify({ product_user, title, type, image, isVideo, images, discount, duration, price, review_count, time, description, cityname, cityimageurl, page_description }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        result = await result.json();
        alert("This type new card has beed added in your user type list");
        Navigate("/")
        setTitle("");
        settype("");
        setImage("");
        setisVideo("");
        setImage1("");
        setImage2("");
        setImage3("");
        setDiscount("");
        setduration("");
        setPrice("");
        setReviewCount("");
        setTime("");
        setDescription("");
        setCityName("");
        setCityimageurl("");
        setPageDescription("");
        setError(false);
    }
    useEffect(() => {
        if (Pid) {
            setUpdateMode(true);
            getProductDetails();
        }
    }, [Pid]);
    const getProductDetails = async () => {
        let result = await fetch(`${BASE_URL}/update-product/${Pid}`);
        result = await result.json();
        setTitle(result.title)
        settype(result.type)
        setImage(result.image)
        setisVideo(result.isVideo)
        setImage1(result.images.image1)
        setImage2(result.images.image2)
        setImage3(result.images.image3)
        setDiscount(result.discount)
        setduration(result.duration)
        setTime(result.time)
        setCityimageurl(result.cityimageurl)
        setDescription(result.description)
        setPageDescription(result.page_description)
        setCityName(result.cityname)
        setPrice(result.price)
        setReviewCount(result.review_count)
    }
    const updateProduct = async () => {
        let result = await fetch(`${BASE_URL}/update-product/${Pid}`, {
            method: 'put',
            body: JSON.stringify({ product_user, title, type, image, images, isVideo, discount, duration, price, review_count, time, description, cityname, cityimageurl, page_description }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        result = await result.json();
        alert("Your Data updated successfully");

    }
    const handleButtonClick = () => {
        if (updateMode) {
            updateProduct();
        } else {
            addProduct();
        }
    };
    return (
        <div className=" mb-5" style={{ marginTop: "80px" }}>
            <div className="pt-5 pb-5 container bg-secondary rounded">
                <h1 className="text-center ">Create New Product</h1>
                <form id="createProductForm">
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="title">Title</label>
                                <input type="email" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                                {error && !title && <span className='invalid-input'>Enter Correct title of the card</span>}
                            </div>
                        </div>
                        <div className="col">
                            <select className="form-select mt-6" value={type} onChange={(e) => settype(e.target.value)} aria-label="form-select">
                                <option value="" selected>Select the type of Product</option>
                                <option value="nature">Nature</option>
                                <option value="food">Food</option>
                                <option value="activities">Activities</option>
                                <option value="culture">Culture</option>
                            </select>
                            {error && !type && <span className='invalid-input'>Select a valid type of card</span>}
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="image">Image Link</label>
                                <input type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} className="form-control" />
                                {error && !image && <span className='invalid-input'>Enter correct url</span>}
                            </div>
                        </div>
                        <div className="col">
                            <select className="form-select mt-6" value={isVideo} onChange={(e) => setisVideo(e.target.value)} aria-label="form-select">
                                <option value="" selected>Select the type for page its Video/image</option>
                                <option value="true">video</option>
                                <option value="false">image</option>
                            </select>
                            {error && !isVideo && <span className='invalid-input'>Select one</span>}
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="image1">Image/Video Link 1</label>
                                <input type="url" id="image1" value={image1} onChange={(e) => setImage1(e.target.value)} className="form-control" />
                                {error && !image1 && <span className='invalid-input'>Enter correct image url</span>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="image2">Image/Video Link 2</label>
                                <input type="url" id="image2" value={image2} onChange={(e) => setImage2(e.target.value)} className="form-control" />
                                {error && !image2 && <span className='invalid-input'>Enter correct image url</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="image3">Image/Video Link 3</label>
                                <input type="url" id="image3" value={image3} onChange={(e) => setImage3(e.target.value)} className="form-control" />
                                {error && !image3 && <span className='invalid-input'>Enter correct image url</span>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="form6Example2">Duration</label>
                                <input type="text" id="form6Example2" value={duration} onChange={(e) => setduration(e.target.value)} className="form-control" />
                                {error && !duration && <span className='invalid-input'>Enter duration of the plan</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div data-mdb-input-init className="form-outline">
                                <label className="form-label fw-bold" for="discount">Discount</label>
                                <input type="number" id="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="price">Price</label>
                                <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
                                {error && !price && <span className='invalid-input'>Enter Amount</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="review_count">Review Count</label>
                                <input type="number" id="review_count" value={review_count} onChange={(e) => setReviewCount(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="time">Time</label>
                                <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} className="form-control" />
                                {error && !time && <span className='invalid-input'>Enter time of the plan</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="cityname">City Name</label>
                                <input type="text" id="cityname" value={cityname} onChange={(e) => setCityName(e.target.value)} className="form-control" />
                                {error && !cityname && <span className='invalid-input'>Enter City Name</span>}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label fw-bold" for="cityimageurl">City Image URL</label>
                                <input type="url" id="cityimageurl" value={cityimageurl} onChange={(e) => setCityimageurl(e.target.value)} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label fw-bold" for="page_description">Page Title Description</label>
                        <textarea className="form-control" value={page_description} onChange={(e) => setPageDescription(e.target.value)} id="page_description" rows="2" maxLength="100"></textarea>
                        {error && !description && <span className='invalid-input'>Enter page title description</span>}
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label fw-bold" for="description">Description</label>
                        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows="4"></textarea>
                        {error && !description && <span className='invalid-input'>Enter correct image url</span>}
                    </div>
                    <div className="text-center">
                        <button onClick={handleButtonClick} type="button" className="btn btn-primary text-center mb-4 fw-bold px-4">{updateMode ? 'Update Product' : 'Add Product'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateProdcut