import React, { useState } from "react";
const BASE_URL = process.env.REACT_APP_API_URL

const CreateProdcut = () => {
    const [title, setTitle] = useState("");
    const [producttype, setProducttype] = useState("");
    const [imageType, setImageType] = useState("");
    const [image, setImage] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [discount, setDiscount] = useState("");
    const [duration, setduration] = useState("");
    const [price, setPrice] = useState("");
    const [ReviewCount, setReviewCount] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    const addProduct = async () => {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const images = {
            image1,
            image2,
            image3
        };
        let result = await fetch(`${BASE_URL}/add-product`, {
            method: 'post',
            body: JSON.stringify({ userId, title, producttype, image, image, images, discount, duration, price, ReviewCount, time, description }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json();
        alert("product added");
    }
    return (
        <div className=" mb-5" style={{ marginTop: "80px" }}>
            <div className="pt-5 pb-5 container bg-secondary rounded">
                <h1 className="text-center ">Create New Product</h1>
                <form>
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label fw-bold" for="T=title">Title</label>
                                <input type="email" id="title" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <select class="form-select mt-6" value={producttype} onChange={(e) => setProducttype(e.target.value)} aria-label="form-select">
                                <option value="" selected>Select the type of Product</option>
                                <option value="Nature">Nature</option>
                                <option value="Food">Food</option>
                                <option value="Activitis">Activities</option>
                                <option value="Culture">Culture</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label fw-bold" for="image">Image Link</label>
                                <input type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <select class="form-select mt-6" value={imageType} onChange={(e) => setImageType(e.target.value)} aria-label="form-select">
                                <option value="" selected>Select the type for page its Video/image</option>
                                <option value="true">video</option>
                                <option value="false">image</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label fw-bold" for="image1">Image/Video Link 1</label>
                                <input type="url" id="image1" value={image1} onChange={(e) => setImage1(e.target.value)} class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label fw-bold" for="image2">Image/Video Link 2</label>
                                <input type="url" id="image2" value={image2} onChange={(e) => setImage2(e.target.value)} class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label fw-bold" for="image3">Image/Video Link 3</label>
                                <input type="url" id="image3" value={image3} onChange={(e) => setImage3(e.target.value)} class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label fw-bold" for="form6Example2">Duration</label>
                                <input type="text" id="form6Example2" value={duration} onChange={(e) => setduration(e.target.value)} class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <div data-mdb-input-init class="form-outline">
                                <label class="form-label fw-bold" for="discount">Discount</label>
                                <input type="number" id="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label fw-bold" for="price">Price</label>
                                <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label fw-bold" for="review_count">Review Count</label>
                                <input type="number" id="review_count" value={ReviewCount} onChange={(e) => setReviewCount(e.target.value)} class="form-control" />
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <label class="form-label fw-bold" for="time">Time</label>
                                <input type="text" id="time" value={time} onChange={(e) => setTime(e.target.value)} class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label fw-bold" for="description">Description</label>
                        <textarea class="form-control" value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows="4"></textarea>
                    </div>
                    <div className="text-center">
                        <button onClick={addProduct} type="submit" class="btn btn-primary text-center mb-4 fw-bold px-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateProdcut