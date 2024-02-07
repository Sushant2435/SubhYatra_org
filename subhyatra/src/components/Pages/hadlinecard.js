import React from 'react'
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { headingCards } from '../array/array1';
const HadlineCard = ({ handleRating }) => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto">
            {headingCards.map((data) => (
                <Link to={`/pages/adventure?page=${data.id}`} className="col-lg-3 text-decoration-none" key={data.id}>
                    <div className="card">
                        <div className="position-relative zoom-container image-container">
                            <img src={`.${data.image}`} className="card-img-top zoom-image"
                                alt="Hollywood Sign on The Hill" />
                            <p className="position-absolute top-0 start-260 text-white cursor"><i className="hello fa-sharp fa-regular fa-heart fa-2x"></i></p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase text-secondary">{data.title}</h5>
                            <p className="card-text fw-bold">
                                Guugram city: This is a longer card with supporting text below
                            </p>
                            <small>1 Hour</small>
                            <p className="text-dark">From ₹ 12342 per person</p>

                            <div className='App'>
                                <Rating
                                    onClick={handleRating}
                                /* Available Props */
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}




export default HadlineCard
