import React from 'react'
import { inspiringData } from './array/array1'
import { Link } from 'react-router-dom'

const TopCities = () => {
    return (
        <div className=' container my-5'>
            <h2 className="text-center pb-md-2" tabIndex="0">
                Top Cities You Can't Miss
            </h2>
            <div className="row row-cols-1 row-cols-md-2 mb-4">
                {inspiringData.map((data) => (
                    <div className="col-lg-2" key={data.id}>
                        <div className="card-image position-relative" style={{ backgroundImage: `url(${data.image})` }}>
                            <div className='px-3 position-absolute bottom-span bottom-0'>
                                <span className="text-uppercase text-white fw-bold d-flex">{data.cityname}</span><br />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopCities
