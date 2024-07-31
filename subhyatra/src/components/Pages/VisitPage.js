import React, { useContext, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import HadlineCard from './hadlinecard';
import ReviewList from '../ClientReview';
import { ProductsContext } from '../../App';

const VisitPage = () => {
    const { products } = useContext(ProductsContext);
    console.log(products)
    const [content, setContent] = useState(null);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const cityname = searchParams.get('page');

    useEffect(() => {
        const contentData = products.filter(item => item.cityname === cityname);
        setContent(contentData.length ? contentData : null);
    }, [products, cityname]);

    return (

        <div className="mt-10">
            {content && content.length > 0 && (
                <>
                    <div className="banner-container" style={{ backgroundImage: `url(${content[0]?.image})` }}>
                        <h1 className="white">Mharoo <b>{content[0]?.cityname}</b></h1>
                        <h3 className="white">{content[0]?.title}</h3>
                        <Link to={`/cart?page=${content[0]?._id}`} className="Book-button button" type='button'>
                            Book Now
                        </Link>
                    </div>
                    <div className="container my-5">
                        {content && content.length > 0 && (
                            <>
                                <h3 className="orange">Welcome To</h3>
                                <h1>Subhyatra Tour Packages</h1>
                                <div className="detail">{content[0]?.description}</div>
                            </>
                        )}
                    </div>
                    <div className="my-5 mx-4">
                        <h3 className='text-center'>Most Popular {content[0]?.cityname} Tour Packages</h3>
                        <HadlineCard cityname={cityname} />
                    </div>
                    <div className='my-5'>
                        <ReviewList />
                    </div>
                </>
            )};
        </div>
    );
};

export default VisitPage;
