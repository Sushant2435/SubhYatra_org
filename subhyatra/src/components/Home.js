
// Component: UserProfile.js
import React, { useState } from 'react'
import TopSight from './CultureSight'
import TopCities from './TopCities'
import Partner from './Partner'
import ReviewList from './ClientReview'
import ChatBot from 'react-simple-chatbot'
const steps = [
    {
        id: "Greet",
        message: "Hello, Welcome to our shop",
        trigger: "Done",
    },
    {
        id: "Done",
        message: "Please enter your name!",
        trigger: "waiting1",
    },
    {
        id: "waiting1",
        user: true,
        trigger: "Name",
    },
    {
        id: "Name",
        message: "Hi {previousValue}, Please select your issue",
        trigger: "issues",
    },
    {
        id: "issues",
        options: [
            {
                value: "React",
                label: "React",
                trigger: "React",
            },
            { value: "Angular", label: "Angular", trigger: "Angular" },
        ],
    },
    {
        id: "React",
        message:
            "Thanks for letting your React issue, Our team will resolve your issue ASAP",
        end: true,
    },
    {
        id: "Angular",
        message:
            "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
        end: true,
    },
];


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
