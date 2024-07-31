import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 30);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft('EXPIRED');
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div id="intro" className="p-5 text-center bg-image shadow-1-strong mt-10"
            style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/205.jpg')" }}>
            <div className="mask intro" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white px-4">
                        <h1 className="mb-3">Coming Soon!</h1>
                        <h3 id="time-counter" className="border border-light my-4 p-4">{timeLeft}</h3>
                        <p>We're working hard to finish the development of this site.</p>
                        <p>Until then, have a look at our other pages</p>
                        <Link to="/" className="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                            role="button" rel="nofollow">Goto the Home page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;
