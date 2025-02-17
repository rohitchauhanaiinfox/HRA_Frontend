import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const NextInvoice = () => {
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
            <div className="card h-100">
                <div className="card-body p-24">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                        <h6 className="mb-2 fw-bold text-lg mb-0">Next Invoice</h6>
                        <Icon icon="solar:clock-circle-outline" className="text-primary" width={24} />
                    </div>

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
    );
};

export default NextInvoice;
