import React, { useContext } from 'react'
import { Rating } from 'react-simple-star-rating';
import { ProductsContext } from '../../App';
import EnqueryForm from './EnqueryForm';
import { Link } from 'react-router-dom';
const HadlineCard = ({ handleRating, cityname }) => {
    const { products } = useContext(ProductsContext)
    const filteredCards = products.filter(card => card.cityname === cityname);
    let auth = localStorage.getItem('user');
    let user = auth ? JSON.parse(auth) : null;
    let user_type = user ? user.userType : null;
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto">
            {filteredCards.map((data) => (
                <div className="col-lg-3 text-decoration-none" key={data.id}>
                    <div className="card">
                        <div className="position-relative zoom-container image-container">
                            <img src={`${data.image}`} className="card-img-top zoom-image" alt="Image" />
                            <div className="position-absolute top-0 start-260 text-white cursor">
                                <div className='App'>
                                    <Rating onClick={handleRating} />
                                </div>
                            </div>
                            {user_type === "Admin" && <Link to={`/CreateProduct?id=${data._id}`} type='button' className='position-absolute top-0 end-0 text-danger border-0 btn'><i className="far fa-edit "></i></Link>}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase text-secondary">{data.title}</h5>
                            <p className="card-text fw-bold">
                                Guugram city: This is a longer card with supporting text below
                            </p>
                            <EnqueryForm />
                            <button className='rounded-pill btn px-3 py-2 bg-success text-white border-0' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Send Enequiry</button>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    )
}




export default HadlineCard
