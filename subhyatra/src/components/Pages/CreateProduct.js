import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_API_URL;

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        title: "",
        type: "",
        image: "",
        isVideo: "",
        image1: "",
        image2: "",
        image3: "",
        discount: "",
        duration: "",
        price: "",
        review_count: "",
        time: "",
        description: "",
        cityname: "",
        cityimageurl: "",
        page_description: ""
    });
    const [updateMode, setUpdateMode] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const Pid = searchParams.get('id');
    const product_user = JSON.parse(localStorage.getItem('user'))._id;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const addProduct = async () => {
        const requiredFields = ["title", "type", "image", "isVideo", "image1", "image2", "image3", "duration", "time", "description", "cityname", "page_description"];
        const isValid = requiredFields.every((field) => formData[field]);

        if (!isValid) {
            setError(true);
            return;
        }

        const result = await fetch(`${BASE_URL}/add-product`, {
            method: 'POST',
            body: JSON.stringify({ ...formData, product_user, images: { image1: formData.image1, image2: formData.image2, image3: formData.image3 } }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        await result.json();
        alert("This type new card has been added to your user type list");
        navigate("/");
        setFormData({
            title: "",
            type: "",
            image: "",
            isVideo: "",
            image1: "",
            image2: "",
            image3: "",
            discount: "",
            duration: "",
            price: "",
            review_count: "",
            time: "",
            description: "",
            cityname: "",
            cityimageurl: "",
            page_description: ""
        });
        setError(false);
    };

    const getProductDetails = async () => {
        const result = await fetch(`${BASE_URL}/update-product/${Pid}`);
        const data = await result.json();
        setFormData(data);
    };

    const updateProduct = async () => {
        const result = await fetch(`${BASE_URL}/update-product/${Pid}`, {
            method: 'PUT',
            body: JSON.stringify({ ...formData, product_user, images: { image1: formData.image1, image2: formData.image2, image3: formData.image3 } }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        await result.json();
        alert("Your Data updated successfully");
    };

    const handleButtonClick = () => {
        if (updateMode) {
            updateProduct();
        } else {
            addProduct();
        }
    };

    useEffect(() => {
        if (Pid) {
            setUpdateMode(true);
            getProductDetails();
        }
    }, [Pid]);

    const FormInput = ({ label, name, type = "text", isSelect = false, options = [] }) => (
        <div className="col">
            <div className="form-outline">
                <label className="form-label fw-bold" htmlFor={name}>{label}</label>
                {isSelect ? (
                    <select className="form-select mt-2" name={name} value={formData[name]} onChange={handleInputChange} aria-label="form-select">
                        <option value="" disabled>Select {label}</option>
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                ) : (
                    <input type={type} id={name} name={name} value={formData[name]} onChange={handleInputChange} className="form-control" />
                )}
                {error && !formData[name] && <span className='invalid-input'>Enter {label.toLowerCase()}</span>}
            </div>
        </div>
    );

    return (
        <div className="mb-5" style={{ marginTop: "80px" }}>
            <div className="pt-5 pb-5 container bg-secondary rounded">
                <h1 className="text-center">Create New Product</h1>
                <form id="createProductForm">
                    <div className="row mb-4">
                        <FormInput label="Title" name="title" type="text" />
                        <FormInput label="Type" name="type" isSelect options={[
                            { value: "nature", label: "Nature" },
                            { value: "food", label: "Food" },
                            { value: "activities", label: "Activities" },
                            { value: "culture", label: "Culture" }
                        ]} />
                    </div>
                    <div className="row mb-4">
                        <FormInput label="Image Link" name="image" type="url" />
                        <FormInput label="Type for Page (Video/Image)" name="isVideo" isSelect options={[
                            { value: "true", label: "Video" },
                            { value: "false", label: "Image" }
                        ]} />
                    </div>
                    <div className="row mb-4">
                        <FormInput label="Image/Video Link 1" name="image1" type="url" />
                        <FormInput label="Image/Video Link 2" name="image2" type="url" />
                    </div>
                    <div className="row mb-4">
                        <FormInput label="Image/Video Link 3" name="image3" type="url" />
                        <FormInput label="Duration" name="duration" type="text" />
                    </div>
                    <div className="row mb-4">
                        <FormInput label="Discount" name="discount" type="number" />
                        <FormInput label="Price" name="price" type="text" />
                    </div>
                    <div className="row mb-4">
                        <FormInput label="Review Count" name="review_count" type="number" />
                        <FormInput label="Time" name="time" type="text" />
                    </div>
                    <div className="row mb-4">
                        <FormInput label="City Name" name="cityname" type="text" />
                        <FormInput label="City Image URL" name="cityimageurl" type="url" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label fw-bold" htmlFor="page_description">Page Title Description</label>
                        <textarea className="form-control" name="page_description" value={formData.page_description} onChange={handleInputChange} id="page_description" rows="2" maxLength="100"></textarea>
                        {error && !formData.page_description && <span className='invalid-input'>Enter page title description</span>}
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label fw-bold" htmlFor="description">Description</label>
                        <textarea className="form-control" name="description" value={formData.description} onChange={handleInputChange} id="description" rows="4"></textarea>
                        {error && !formData.description && <span className='invalid-input'>Enter correct description</span>}
                    </div>
                    <div className="text-center">
                        <button onClick={handleButtonClick} type="button" className="btn btn-primary text-center mb-4 fw-bold px-4">{updateMode ? 'Update Product' : 'Add Product'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
