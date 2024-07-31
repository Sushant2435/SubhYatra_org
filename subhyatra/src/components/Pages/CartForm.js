import React, { useContext, useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { ProductsContext } from '../../App';
const BASE_URL = process.env.REACT_APP_API_URL;
const KEY_ID = "rzp_test_TfKEKDyIOAAVCo";

const Cart_form = ({ selectedProductId }) => {
    const { products } = useContext(ProductsContext);
    const filteredProducts = products.filter(item => item._id === selectedProductId);
    const selectedProduct = filteredProducts[0];

    const [adults, setAdults] = useState(1);
    const [totalPrice, setTotalPrice] = useState(selectedProduct.price);
    const [totalDiscountPrice, setTotalDiscountPrice] = useState(selectedProduct.price);
    const auth = localStorage.getItem('user');
    const user = auth ? JSON.parse(auth) : null;

    const handleAdultsChange = (e) => {
        const newAdults = parseInt(e.target.value, 10);
        const totalDiscountedPrice = selectedProduct.price - (selectedProduct.price * selectedProduct.discount / 100);
        setAdults(newAdults);
        setTotalPrice(newAdults * selectedProduct.price);
        setTotalDiscountPrice(newAdults * totalDiscountedPrice);
    };

    const handlePayment = async () => {
        try {
            const res = await fetch(`${BASE_URL}/order`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    amount: totalDiscountPrice, // Razorpay expects amount in paisa, so multiply by 100
                    currency: "INR", // Assuming INR currency
                })
            });

            const data = await res.json();
            console.log(data)
            handlePaymentVerify(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePaymentVerify = async (data) => {
        const options = {
            key: KEY_ID,
            amount: data.amount,
            currency: data.currency,
            name: user.name, // Use user's name from local storage
            description: "Test Mode",
            order_id: data.id,
            handler: async (response) => {
                console.log("Payment response:", response);
                try {
                    const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/verify`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        })
                    });

                    const verifyData = await res.json();

                    if (verifyData.message) {
                        toast.success(verifyData.message);
                    }
                } catch (error) {
                    console.log(error);
                    toast.error('Failed to verify payment');
                }
            },
            theme: {
                color: "#5f63b8"
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div className="col-md-5 col-lg-4 col-sm-9 col-11 bg-light">
            <p className="p-2 text-end fw-bold text-danger background-pink">Save up to {selectedProduct.discount}%</p>
            <div className='px-4'>
                <div className="mb-4">
                    <h5 className="text-uppercase">Price/Person</h5>
                    <h5>₹ {selectedProduct.price.toFixed(2)}</h5>
                </div>
                <form className="g-3 needs-validation" noValidate>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="adult" className="form-label">Total adults</label>
                            <input
                                type="number"
                                className="form-control"
                                id="adult"
                                value={adults}
                                onChange={handleAdultsChange}
                                required
                                min="1"
                            />
                            <div className="invalid-feedback">Please provide a valid number.</div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" id="date" required />
                            <div className="invalid-feedback">Please provide a valid date</div>
                        </div>
                    </div>
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={user.name} id="Name" required />
                    <div className="invalid-feedback">
                        Please fill Your Name
                    </div>
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" value={user.email} id="Email" required />
                    <div className="invalid-feedback">
                        Looks good!
                    </div>
                    <label htmlFor="address" className="form-label">Full Address</label>
                    <input type="text" className="form-control" id="address" required />
                    <div className="invalid-feedback">
                        Please provide a valid address.
                    </div>
                    <label htmlFor="zipcode" className="form-label">Pin</label>
                    <input type="number" className="form-control" id="zipcode" required />
                    <div className="invalid-feedback">
                        Please provide a valid pin.
                    </div>
                    <div className="col-12 mt-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" htmlFor="invalidCheck">Agree to terms and conditions</label>
                            <div className="invalid-feedback">You must agree before submitting.</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4 position-relative">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>₹ {isNaN(adults) ? '0.00' : totalDiscountPrice.toFixed(2)}   <small className="text-danger"><del>From ₹ {isNaN(totalPrice) ? '0.00' : totalPrice.toFixed(2)}</del></small></h5>
                    </div>
                    <div className="col-12 mt-4">
                        <button onClick={handlePayment} className="btn btn-primary w-100" type="button">Book Now</button>
                    </div>
                    <Toaster />
                </form>
                <div className='mt-4'>
                    <i className="fa-solid fa-clock-rotate-left pe-3"></i>
                    <span><a href='#' data-bs-toggle="modal" data-bs-target="#exampleModal" className='text-dark'>Reserve now & pay later</a> to book your spot and pay nothing</span>
                </div>
            </div>
        </div>
    );
};

export default Cart_form;
