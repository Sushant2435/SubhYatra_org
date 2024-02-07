import React from "react";
import { Link } from "react-router-dom";
import { Partners } from "./array/array1";
const Partner = () => {
    return (

        <section className="container my-5 py-5">
            <h2 className="text-center pb-md-2" tabIndex="0">
                Partners
            </h2>
            <div className="row row-cols-1 row-cols-md-2 my-4">
                {Partners.map((data, index) => (
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3" key={index}>
                        <div className="text-decoration-none">
                            <div className="card border shadow-sm  partner-card p-2">
                                <img src={data.image} className="card-img-top" height="100" alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-3">
                <Link type="button" className="btn btn-outline-primary" to="/comingup">
                    VIEW All
                </Link>
            </div>
        </section>
    )
}
export default Partner