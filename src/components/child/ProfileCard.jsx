import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = () => {
    const targetDate = new Date("2025-02-28T00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="col-xxl-3 col-lg-6">
            <div className="nft-promo-card card radius-12 overflow-hidden position-relative z-1 mb-4">
                <img
                    src="assets/images/nft/nft-gradient-bg.png"
                    className="position-absolute start-0 top-0 w-100 h-100 z-n1"
                    alt=""
                />
                <div className="nft-promo-card__inner d-flex align-items-center">
                    {/* <div className="nft-promo-card__thumb w-100">
                        <img
                            src="assets/images/nft/nf-card-img.png"
                            alt=""
                            className="w-100 h-100 object-fit-cover"
                        />
                    </div> */}
                    <div className="flex-grow-1">
                        <h4 className="mb-16 text-white">
                            Welcome John
                        </h4>

                        <div className="d-flex align-items-center flex-wrap mt-24 gap-16">

                            <Link
                                to="/add-employee"
                                className="btn rounded-pill btn-primary radius-8 px-28 py-11"
                            >
                                Add Employee
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nft-promo-card card radius-12 overflow-hidden position-relative z-1 bg-gradient-end-4" >

                <div className="nft-promo-card__inner d-flex align-items-center">
                    {/* <div className="nft-promo-card__thumb w-100">
                        <img
                            src="assets/images/nft/nf-card-img.png"
                            alt=""
                            className="w-100 h-100 object-fit-cover"
                        />
                    </div> */}
                    <div className="flex-grow-1">
                        <h5 className="mb-16">Next Invoice</h5>
                        <div className="d-flex justify-content-between text-center mt-3">
                            <div>
                                <p className="text-2xl fw-bold">{timeLeft.days}</p>
                                <span className="text-sm">Days</span>
                            </div>
                            <div>
                                <p className="text-2xl fw-bold">{timeLeft.hours}</p>
                                <span className="text-sm">Hours</span>
                            </div>
                            <div>
                                <p className="text-2xl fw-bold">{timeLeft.minutes}</p>
                                <span className="text-sm">Mins</span>
                            </div>
                            <div>
                                <p className="text-2xl fw-bold">{timeLeft.seconds}</p>
                                <span className="text-sm">Secs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard