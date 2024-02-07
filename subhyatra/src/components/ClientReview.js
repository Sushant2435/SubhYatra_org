import React from "react";
import { reviewsData } from "./array/array1";

const ClientReview = ({ review }) => {
    const renderStars = (numStars) => {
        const stars = [];
        const fullStars = Math.floor(numStars);
        const hasHalfStar = numStars % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i className="fas fa-star fa-sm text-warning" key={i}></i>);
        }

        if (hasHalfStar) {
            stars.push(<i className="fas fa-star-half-alt fa-sm text-warning" key="half"></i>);
        }

        return stars;
    };
    return (

        <div className="d-flex text-center">
            <div className=" mb-5 mb-md-0" key={review.id}>
                <div className="d-flex justify-content-center mb-4">
                    <img src={review.image} className="rounded-circle shadow-1-strong" alt={review.name} width="150" height="150" />
                </div>
                <h5 className="mb-3">{review.name}</h5>
                <h6 className="text-primary mb-3">{review.role}</h6>
                <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2"></i>{review.quote}
                </p>
                <ul className="list-unstyled d-flex justify-content-center mb-0">
                    {renderStars(review.rating)}
                </ul>
            </div>
        </div>
    )
}
const ReviewList = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-xl-8 text-center">
                    <h3 className="mb-4">What Our Clients Say About SubhYatra</h3>
                    <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                        numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                        quisquam eum porro a pariatur veniam.
                    </p>
                </div>
            </div>
            <section className="container">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-3">
                    {reviewsData.map((review, index) => (
                        <div key={index} className="col">
                            <ClientReview review={review} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ReviewList;
