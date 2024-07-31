
// Component: UserProfile.js
import React, { useState } from 'react'
import TopSight from './TopSight'
import TopCities from './TopCities'
import Partner from './Partner'
import ReviewList from './ClientReview'
const Home = () => {

    return (
        <div data-component="Home">
            <div className="main-container position-relative image-fluid">
                <div className="headline text-center">

                    <h1 className="text-white display-4 fw-bold">Travel memories you will never forget</h1>
                    <p className="text-white display fw-bold">Exploring the Gurgaon by subh yatra</p>
                    <p className="text-white display1">Learn more..... </p>

                </div>
            </div>
            <div className='container mt-5'>
                <TopSight />
            </div>
            <div className='container mt-5 text-center' >
                <TopCities />
            </div>
            <div className='container mt-5 text-center' >
                <ReviewList />
            </div>
            <div className='container mt-3'>
                <Partner />
            </div>
        </div>

    )
}

export default Home
