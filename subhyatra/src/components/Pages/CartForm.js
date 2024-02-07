import React from 'react'

const Cart_form = () => {
    return (
        <div className="col-md-4 col-sm-6 col-12 bg-light">
            <p className="p-2 text-end fw-bold text-danger background-pink">Save up to 20%</p>
            <div className='px-4'>
                <div className="mb-4">
                    <h5 className="text-uppercase">Price/Person</h5>
                    <h5>₹ 132.00</h5>
                </div>
                <form className="g-3 needs-validation" noValidate>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="adult" className="form-label">Total adults</label>
                            <input type="number" className="form-control" id="adult" required />
                            <div className="invalid-feedback">Please provide a valid number.</div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" id="date" required />
                            <div className="invalid-feedback">Please provide a valid date.</div>
                        </div>
                    </div>
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name" required />
                    <div className="invalid-feedback">
                        Please fill Your Name
                    </div>
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" required />
                    <div className="invalid-feedback">
                        Looks good!
                    </div>
                    <label htmlFor="address" className="form-label">Full Address</label>
                    <input type="text" className="form-control" id="address" required />
                    <div className="invalid-feedback">
                        Please provide a valid address.
                    </div>
                    <div className="col-12 mt-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label" htmlFor="invalidCheck">Agree to terms and conditions</label>
                            <div className="invalid-feedback">You must agree before submitting.</div>
                        </div>
                    </div>
                    {/* Total price */}
                    <div className="d-flex justify-content-between mt-4 position-relative">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>₹ 106.00 <small className="text-danger"><del>From ₹ 132.00</del></small></h5>
                    </div>
                    {/* Submit button */}
                    <div className="col-12 mt-4">
                        <button className="btn btn-primary w-100" type="submit">Book Now</button>
                    </div>
                </form>
                <div className='mt-4'>
                    <i className="fa-solid fa-clock-rotate-left pe-3"></i>
                    <span><a href='#' className='text-dark'>Reserve now & pay later</a> to book your spot and pay nothing</span>
                </div>
            </div>
        </div>
    )
}

export default Cart_form
