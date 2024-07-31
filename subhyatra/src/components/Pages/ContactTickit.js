import React, { useState } from 'react';
const BASE_URL = process.env.REACT_APP_API_URL
const ContactTickit = () => {
    const [error, setError] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError(true);
            return false;
        }
        try {
            const response = await fetch(`${BASE_URL}/customerTickit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Tickit submitted successfully');
                await setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                setError(false);
            } else {
                alert('Try after some time');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="staticBackdropLabel">Raise support ticket</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="card bg-light">
                                <div className="text-dark rgba-stylish-strong px-5 z-depth-2">
                                    <div className="md-form mt-4">
                                        <label htmlFor="Form-email5">Your name</label>
                                        <input type="text" id="name" className="form-control white-text" value={formData.name} onChange={handleChange} />
                                        {error && !formData.name && <span className='invalid-input'>Enter valid name</span>}

                                    </div>
                                    <div className="md-form mt-4">
                                        <label htmlFor="Form-pass5">Your mail</label>
                                        <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} />
                                        {error && !formData.email && <span className='invalid-input'>Enter valid email</span>}

                                    </div>
                                    <div className="md-form my-4">
                                        <label htmlFor="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="3" value={formData.message} className="form-control md-textarea white-text" onChange={handleChange}></textarea>
                                        {error && !formData.message && <span className='invalid-input'>Enter valid message</span>}
                                    </div>
                                    <div className="row d-flex align-items-center">
                                        <div className="text-center mb-3 col-md-12">
                                            <button type="button" className="btn btn-success btn-rounded px-4 fw-bold text-dark" onClick={handleSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactTickit;
