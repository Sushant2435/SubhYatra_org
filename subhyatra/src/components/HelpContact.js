import React, { useState, useEffect } from 'react'
import Newsletter from './NewsLetter'
import { Link } from 'react-router-dom'
import ContactTickit from './Pages/ContactTickit'

const Contact = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [accordionOpenIndex, setAccordionOpenIndex] = useState(null);

    useEffect(() => {
        // Function to handle scrolling to the search result
        const scrollToResult = () => {
            if (searchResults.length > 0) {
                const element = searchResults[0]; // Assuming we scroll to the first result
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        scrollToResult();
    }, [searchResults]);
    const handleSearch = () => {
        // Clear previous search highlights and results
        document.querySelectorAll('.highlight').forEach(element => {
            element.classList.remove('highlight');
        });

        // Search logic
        const foundElements = document.querySelectorAll('*');
        const results = [];

        foundElements.forEach(element => {
            const text = element.innerText || element.textContent;
            if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
                results.push(element);
                element.classList.add('highlight');
                // Check if the result is within an accordion item and open it
                const accordionItem = element.closest('.accordion-item');
                if (accordionItem) {
                    const accordionIndex = Array.from(accordionItem.parentNode.children).indexOf(accordionItem);
                    setAccordionOpenIndex(accordionIndex);
                }
            }
        });

        setSearchResults(results);
    };
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
                            <div className="d-flex align-items-center justify-content-end help-img ">
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
                                        <p>FAQ, short For frequently asked questions, is
                                            a list of commonly asked questions and
                                            answers about a specific topic.</p>
                                        <Link to="/comingup " className="link-primary fw-semibold">View FAQ<i className="fa-solid fa-arrow-right ms-2"></i></Link>
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
                                        <Link to="/comingup" className="link-primary fw-semibold">Browse Guides<i className="fa-solid fa-arrow-right ms-2"></i></Link>
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
                                            youre in the right place. Contact us For more
                                            detailed support.</p>
                                        <Link className="link-primary fw-semibold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Submit a Request<i className="fa-solid fa-arrow-right ms-2"></i></Link>
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
                                            <strong>What is included in the travel package?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Our travel packages typically include accommodation, meals, transportation, guided tours, and various activities. Specific inclusions vary by package, so please refer to the detailed itinerary for your selected tour.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <strong>How do I book a tour with Subh Yatra?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Booking a tour with Subh Yatra is easy. Simply visit our website, choose your desired package, and click on the "Book Now" button. You can also contact our customer service team for assistance with your booking.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <strong>What is your cancellation policy?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Our cancellation policy varies depending on the tour package and the time of cancellation. Generally, cancellations made well in advance receive a full or partial refund. Please review the specific cancellation terms for your selected tour or contact our support team for detailed information.
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
                                <h2 className="mb-5 h1 fw-semibold">Can't find what you're looking For?</h2>
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
                                            <ContactTickit />
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
                                            <p>The good news is that you’re not alone, and you’re in the right place. Contact us For more detailed
                                                support.</p>
                                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                Submit a tickit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className="my-5 bg-light py-5">
                <ul className="list-unstyled mb-0 d-flex justify-content-between flex-wrap  w-50 container text-center">
                    <li className='col-lg-2 col-md-12 col-sm-12 col-12'>
                        <i className="fas fa-map-marker-alt fa-2x "></i>
                        <p className='mt-3' >544 Third Floor, centeral tower, Rajiv chowk Gurgaon</p>
                    </li>
                    <li className='col-lg-2 col-md-12 mt-md-4 mt-sm-4 mt-lg-0 col-sm-12 col-12 mt-4'>
                        <i className="fas fa-phone  fa-2x"></i>
                        <div className="mt-3">
                            <div>+ 01 234 567 89</div>
                            <span>+91 9675804042</span>
                        </div>
                    </li>
                    <li className='col-lg-3 col-md-12 mt-md-4 mt-sm-4 mt-lg-0 col-sm-12 col-12 mt-4'>
                        <i className="fas fa-envelope fa-2x"></i>
                        <div className='mt-3 '>
                            sharmasushant245@gmail.com
                        </div>
                    </li>
                </ul>
            </section >
            <Newsletter />
        </>
    )
}
export default Contact
