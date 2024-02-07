import React from 'react'
import { cityData } from './array/array1'
import { Link } from 'react-router-dom'

const TopSight = () => {
    return (
        <div className=' container my-5'>
            <h2 className="text-center" tabIndex="0">
                Top Sights You Can't Miss
            </h2>
            <div className="row row-cols-1 row-cols-md-3 mt-4">
                {cityData.map((data) => (
                    <Link to="/comingup" href='#' className="col-lg-3" key={data.id}>
                        <div className="card-image" style={{ backgroundImage: `url(${data.image})` }}>
                            <div className=' px-3 pt-2'>
                                <span className="badge bg-primary text-uppercase">{data.cityname}</span><br />
                                <span className="badge bg-light text-dark">{data.activity}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default TopSight
