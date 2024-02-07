
// Component: UserProfile.js
import React, { useState } from 'react'
import TopSight from './CultureSight'
import TopCities from './TopCities'
import Partner from './Partner'
import ReviewList from './ClientReview'
import ChatBot from 'react-simple-chatbot'
import { steps } from './Pages/chatbot'
const Home = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };
    return (
        <div data-component="Home">
            <div className="main-container position-relative image-fluid">
                <div className="headline text-center">

                    <h1 className="text-white display-4 fw-bold">Travel memories you will never forget</h1>
                    <p className="text-white display fw-bold">Exploring the Gurgaon by subh yatra</p>
                    <p className="text-white display1">Learn more..... </p>

                </div>
                <div className='chatbot-container'>
                    {showChatbot && <ChatBot steps={steps} />}
                </div>
                <button onClick={toggleChatbot} className="toggle-chatbot-button button">
                    Chat Now
                </button>
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
