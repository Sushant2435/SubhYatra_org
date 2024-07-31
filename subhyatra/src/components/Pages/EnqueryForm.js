import React, { useState } from 'react'
const BASE_URL = process.env.REACT_APP_API_URL


const EnqueryForm = () => {
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile_number: '',
        city: '',
        Totalperson: '',
        Date: '',
        description: '',
        duration: ''
    });
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    const handleSubmit = async () => {
        if (!formData.email || !formData.Totalperson || !formData.Date || !formData.description || !formData.duration || !formData.mobile_number || !formData.city || !formData.name) {
            setError(true);
            return false;
        }
        try {
            const response = await fetch(`${BASE_URL}/enquiry`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                // Handle success, e.g., show a success message or redirect to a thank you page.
                alert('Enquiry submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    mobile_number: '',
                    city: '',
                    Totalperson: '',
                    Date: '',
                    description: '',
                    duration: ''
                });
                setError(false);
            } else {
                // Handle errors, e.g., show an error message to the user.
                console.error('Enquiry submission failed.');
            }
        } catch (error) {
            console.error('Error during API call:', error);
        }
    };
    return (
        <div className="modal modal-lg modal fade  " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="  modal-dialog modal-dialog-centered  ">
                <div className="modal-content enquery-bg ">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex flex-wrap-reverse justify-content-center">
                        <div className='col-lg-6 col-md-11 col-sm-11 col-12 px-4 mt-sm-4 mt-lg-0 mt-md-4 mt-4 '>
                            <h1 className='ps-3 pb-3 fw-bold'>How It Works</h1>
                            <ul className="custom-list">
                                <li>Tell us details of your holiday plan.</li><br />
                                <li>After you submit the form, one of our travel experts will get back to you with customised holiday package based on your requirement, within 24 hours.</li><br />
                                <li>Grab the deal and start packing your bags for an indelible holiday with SubhYatra.</li><br />
                            </ul>
                            <div className='text-center'>
                                <a href="https://www.linkedin.com/in/sushant-sharma-dev/" target="_blank" className="me-4 social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/sushant-sharma-dev/" target="_blank" className="me-4 social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/sushant-sharma-dev/" target="_blank" className="me-4 social-icon">
                                    <i className="fab fa-instagram"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/sushant-sharma-dev/" target="_blank" className="me-4 social-icon">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                            <div className='my-4'>
                                <hr />
                            </div>
                            <div className='text-center'>
                                <div>
                                    <i className="fas fa-phone text-secondary"></i> <span className='text-secondary fw-bold'>Call Us for details</span>
                                    <p className='text-danger fw-bold display-7 mt-4'>+91 9675804042</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-10 col-sm-10 col-11'>
                            <h1 className='pb-3 fw-bold'>Request a <span className='text-danger'>QUOTE</span></h1>
                            <form className="g-3 needs-validation" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="Totalperson" className="form-label">Total Person</label>
                                        <input type="number" className="form-control" value={formData.Totalperson} onChange={handleInputChange} id="Totalperson" required />
                                        {error && !formData.Totalperson && <span className='invalid-input'>Enter a valid number </span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="Date" className="form-label">Travel Date</label>
                                        <input type="date" className="form-control" value={formData.Date} onChange={handleInputChange} id="Date" required />
                                        {error && !formData.Date && <span className='invalid-input'>Enter valid date</span>}
                                    </div>
                                </div>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" value={formData.email} onChange={handleInputChange} id="email" required />
                                {error && !formData.email && <span className='invalid-input'>Enter valid email</span>}
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" id="name" value={formData.name} onChange={handleInputChange} className="form-control" required />
                                        {error && !formData.name && <span className='invalid-input'>Enter valid email</span>}

                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="city" className="form-label">Your City Name</label>
                                        <input type="text" className="form-control" value={formData.city} onChange={handleInputChange} id="city" required />
                                        {error && !formData.city && <span className='invalid-input'>Enter a valid city</span>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="duration" className="form-label">Duration of stay</label>
                                        <input type="text" className="form-control" value={formData.duration} onChange={handleInputChange} id="duration" required />
                                        {error && !formData.duration && <span className='invalid-input'>Enter duration in days</span>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="mobile_number" className="form-label">Contact Number</label>
                                        <input type="number" className="form-control" value={formData.mobile_number} onChange={handleInputChange} id="mobile_number" required />
                                        <div className="invalid-feedback">Please provide a valid Number</div>
                                        {error && !formData.mobile_number && <span className='invalid-input'>Enter a valid Mobile number</span>}
                                    </div>
                                </div>
                                <label htmlFor="description" className="form-label">Travel description </label>
                                <textarea type="text" className="form-control" value={formData.description} onChange={handleInputChange} id="description" required />
                                <div className='mt-3 text-center rounded-pill'>
                                    <button type="button" onClick={handleSubmit} className="btn btn-primary rounded-pill px-5">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EnqueryForm
