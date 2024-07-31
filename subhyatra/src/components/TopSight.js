import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../App';

const TopSight = () => {
    const { products } = useContext(ProductsContext);
    let auth = localStorage.getItem('user');
    let user = auth ? JSON.parse(auth) : null;
    let user_type = user ? user.userType : null;

    const uniqueCitiesSet = new Set(products.map(item => item.cityname));

    if (!products || !products.length) {
        return (
            <div className="container my-5">
                <h2 className="text-center" tabIndex="0">
                    Top Sights You Can't Miss
                </h2>
                <div class="d-flex align-items-center justify-content-center bg-light" style={{ height: "300px", width: "100%" }}>
                    <div class="text-center">
                        <div class="spinner-border" role="status"></div>
                        <span class="ms-2">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h2 className="text-center" tabIndex="0">
                Top Sights You Can't Miss
            </h2>
            <div className="row row-cols-1 row-cols-md-3 mt-4">
                {Array.from(uniqueCitiesSet).map(cityName => {
                    const cityData = products.filter(city => city.cityname === cityName);
                    const totalActivities = cityData.length;

                    return (
                        <Link
                            to={`/VisitPage?page=${cityData[0].cityname}`}
                            href="#"
                            className="col-lg-3"
                            key={cityName}
                        >
                            <div className="card-image position-relative" style={{ backgroundImage: `url(${cityData[0].image})` }}>
                                <div className="px-3 pt-2">
                                    <span className="badge bg-primary text-uppercase">{cityName}</span><br />
                                    <span className="badge bg-light text-dark">{`Total Activities: ${totalActivities}`}</span>
                                    {user_type === "Admin" && <Link to={`/CreateProduct?id=${cityData[0]._id}`} type='button' className='position-absolute top-0 end-0 text-danger border-0 btn'><i className="far fa-edit "></i></Link>}

                                </div>
                            </div>

                        </Link>
                    );
                })}
            </div >
        </div >
    );
};

export default TopSight;
