import React from 'react'
import Newsletter from './NewsLetter'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <section className="py-7 bg-light">
                <div className="container">
                    <div className="row  align-items-center justify-content-center">
                        <div className="col-md-6 col-12 ">
                            <h1 className="fw-bold mb-1 display-4">How can we help you?</h1>
                            <p className="mb-5 text-dark ">Have questions? Search through our Help Center</p>
                            <div className="pe-md-6">
                                <form className="d-flex align-items-center">
                                    <span className="position-absolute ps-3">
                                        <i className="fe fe-search text-muted"></i>
                                    </span>
                                    <input type="search" className=" shadow-sm form-control ps-6 border-0 py-3 smooth-shadow-md" placeholder="Enter a question, topic or keyword" />
                                </form>
                            </div>
                            <span className=" mt-2 d-block">... or choose a category to quickly find the help you need</span>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="d-flex align-items-center justify-content-end help-img">
                                <img src="https://img.freepik.com/free-photo/young-beautiful-woman-casual-clothes-wearing-headset-with-microphone-smiling-making-call-me-gesture-sitting-table-with-laptop-blue-wall-working-office_141793-128259.jpg?w=900&t=st=1702456263~exp=1702456863~hmac=aa7b8c73666aa0266cb2b6c74d838ad3d814872ca0b68042c9880247fe68ac7e" alt="girlsetting" width="400" className="text-center img-fluid help-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-n1">
                <div className="container mt-n1">
                    <div className="card rounded-3 shadow">
                        <div className="row">
                            <div className="col-md-4  col-12 border-end-md ">
                                <div className=" border-bottom border-bottom-md-0 mb-3 mb-lg-0">
                                    <div className="p-5">
                                        <div className="mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle text-primary">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                            </svg>
                                        </div>
                                        <h3 className="fw-semibold"><Link to="help-center-faq.html " className=" text-dark text-decoration-none text-inherit">FAQs</Link></h3>
                                        <p>FAQ, short htmlFor frequently asked questions, is
                                            a list of commonly asked questions and
                                            answers about a specific topic.</p>
                                        <Link to="#" className="link-primary fw-semibold">View FAQ<i className="fa-solid fa-arrow-right ms-2"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4  col-12  border-end-md">
                                <div className="border-bottom border-bottom-md-0 mb-3 mb-lg-0">
                                    <div className="p-5">
                                        <div className="mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book text-primary">
                                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="fw-semibold"><Link to="help-center-guide.html" className="text-dark text-decoration-none text-inherit">Guides &amp; Resources</Link>
                                        </h3>
                                        <p>UI Style Guides are a design &amp; development tool that brings cohesion to a digital product user interface &amp; experience</p>
                                        <Link to="#" className="link-primary fw-semibold">Browse Guides<i className="fa-solid fa-arrow-right ms-2"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4  col-12">
                                <div>
                                    <div className="p-5">
                                        <div className="mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#754ffe" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-life-buoy text-primary">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <circle cx="12" cy="12" r="4"></circle>
                                                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                                                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                                                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                                                <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                                                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                                            </svg>
                                        </div>
                                        <h3 className="fw-semibold"><Link to="help-center-support.html" className="text-dark text-decoration-none text-inherit">Support</Link></h3>
                                        <p>The good news is that youre not alone, and
                                            youre in the right place. Contact us htmlFor more
                                            detailed support.</p>
                                        <Link to="#" className="link-primary fw-semibold">Submit a Request<i className="fa-solid fa-arrow-right ms-2"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="py-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-2 col-lg-6  col-12">
                            <div className="mb-8 pe-lg-14">
                                <h2 className="pe-lg-12 mb-4 h1 fw-semibold">Most frequently asked
                                    questions</h2>
                                <p className="lead text-secondary">Here are the most frequently asked questions
                                    you may check before getting started</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-2 col-lg-8 col-12">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="pb-lg-16 my-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-2 col-lg-4  col-12">
                            <div className="mb-8">
                                <h2 className="mb-5 h1 fw-semibold">Can't find what you're looking htmlFor?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-lg-2 col-lg-8  col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="card border mb-md-0 mb-4">
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle text-primary">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                </svg>
                                            </div>
                                            <h3 className="mb-2 fw-semibold">Contact us</h3>
                                            <p>Geeks is here to help. We can provide you with the support you need. Just contact us
                                                and our team will reply quick to you.</p>
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                Contact
                                            </button>
                                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title fw-bold" id="staticBackdropLabel">Contact us</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="card bg-light" >
                                                                <div className="text-dark  rgba-stylish-strong px-5 z-depth-2">
                                                                    <div className="md-form mt-4">
                                                                        <label htmlFor="Form-email5 ">Your name</label>
                                                                        <input type="text" id="Form-email5" className="form-control white-text" />
                                                                    </div>

                                                                    <div className="md-form mt-4">
                                                                        <label htmlFor="Form-pass5" className="">Your mail</label>
                                                                        <input type="text" id="Form-pass5" className="form-control" />
                                                                    </div>

                                                                    <div className="md-form my-4">
                                                                        <label htmlFor="message5">Your message</label>
                                                                        <textarea type="text" id="message5" name="message5" rows="2" className="form-control md-textarea white-text"></textarea>

                                                                    </div>

                                                                    <div className="row d-flex align-items-center">

                                                                        <div className="text-center mb-3 col-md-12">
                                                                            <button type="button" className="btn btn-success btn-block btn-rounded z-depth-1 waves-effect waves-light px-4 fw-bold text-dark">Submit</button>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="card border">
                                        <div className="card-body py-4">
                                            <div className="mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#754ffe" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-life-buoy text-primary">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <circle cx="12" cy="12" r="4"></circle>
                                                    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                                                    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                                                    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                                                    <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                                                    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                                                </svg>
                                            </div>
                                            <h3 className="mb-2 fw-semibold">Support</h3>
                                            <p>The good news is that you’re not alone, and you’re in the right place. Contact us htmlFor more detailed
                                                support.</p>
                                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                Submit a tickit
                                            </button>
                                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title fw-bold" id="staticBackdropLabel">Raise support tickit</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="card bg-light" >
                                                                <div className="text-dark  rgba-stylish-strong px-5 z-depth-2">
                                                                    <div className="md-form mt-4">
                                                                        <label htmlFor="Form-email5 ">Your name</label>
                                                                        <input type="text" id="Form-email5" className="form-control white-text" />
                                                                    </div>
                                                                    <div className="md-form mt-4">
                                                                        <label htmlFor="Form-pass5" className="">Your mail</label>
                                                                        <input type="text" id="Form-pass5" className="form-control" />
                                                                    </div>
                                                                    <div className="md-form my-4">
                                                                        <label htmlFor="message5">Your message</label>
                                                                        <textarea type="text" id="message5" name="message5" rows="2" className="form-control md-textarea white-text"></textarea>
                                                                    </div>
                                                                    <div className="row d-flex align-items-center">
                                                                        <div className="text-center mb-3 col-md-12">
                                                                            <button type="button" className="btn btn-success btn-block btn-rounded z-depth-1 waves-effect waves-light px-4 fw-bold text-dark">Submit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="my-5 bg-light py-5">
                <ul className="list-unstyled mb-0 d-flex justify-content-between  w-50 container text-center">
                    <li className='col-2'>
                        <i className="fas fa-map-marker-alt fa-2x "></i>
                        <p className='mt-3' >544 Third Floor, centeral tower, Rajiv chowk Gurgaon</p>
                    </li>
                    <li className='col-2'>
                        <i className="fas fa-phone  fa-2x"></i>
                        <div className="mt-3">
                            <div>+ 01 234 567 89</div>
                            <span>+91 9675804042</span>
                        </div>
                    </li>
                    <li>
                        <i className="fas fa-envelope  fa-2x"></i>
                        <div className='mt-3'>
                            <div>sharmasushant245@gmail.com</div>
                        </div>
                    </li>
                </ul>
            </section >
            <Newsletter />
        </>
    )
}
export default Contact
