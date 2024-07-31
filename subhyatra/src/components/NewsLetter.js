import React from 'react'

const Newsletter = () => {
    return (
        <div className="subscription mb-3 bg-white">
            <div className="container">
                <div className="row">
                    <div className="subscription-wrapper text-white">
                        <div className="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
                            <h3 className="flex-fill">Subscribe <br /> to our newsletter</h3>
                            <form action="#" className="row flex-fill">
                                <div className="col-lg-7 my-md-2 my-2">
                                    <input type="email" className="form-control px-4 border-0 w-100 text-md-left" id="email" placeholder="Your Email" name="email" />
                                </div>
                                <div className="col-lg-5 my-md-2 my-2">
                                    <button type="submit" className="subscribe-button subscribe-button-color btn-lg border-0 w-100 fw-bold">Subscribe Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
