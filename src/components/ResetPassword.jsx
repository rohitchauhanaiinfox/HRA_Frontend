import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from "react";
import React from 'react';
import { apiPost } from "../services/client";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

const ResetPasswordLayer = () => {
    const [password, setPassword] = useState(null);
    const [confrimPassword, setConfirmPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const queyParam = new URLSearchParams(location.search);
    const token = queyParam.get('token');

    const resetPassword = async () => {
        try {
            console.log("login user.. ");
            setLoading(true);
            const data = { password, confrimPassword, token };
            console.log(data);
            const res = await apiPost('auth/change-password', data);
            console.log('response', res);

            if (res?.data?.status === true) {
                localStorage.setItem('token', res?.data?.token);
                localStorage.setItem('role', res?.data?.role);
                navigate(`/`);
                // if (res?.data?.role === 'user') {
                //     navigate(`/dashboard`);
                // } else if (res?.data?.role === 'admin') {
                //     navigate(`/admin-dashboard`);
                // } else if (res?.data?.role === 'superadmin') {
                //     navigate('/superadmin-dashboard');
                // }
            } else { }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="auth bg-base d-flex flex-wrap">
            <ToastContainer />
            <div className="auth-left d-lg-block d-none">
                <div className="d-flex align-items-center flex-column h-100 justify-content-center">
                    <img
                        src="assets/images/login.jpg"
                        alt=""
                        className="w-100 h-100 object-fit-cover"
                    />
                </div>
            </div>
            <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
                <div className="max-w-464-px mx-auto w-100">
                    <div className='sign-in-div'>
                        <h4 className="mb-12">Reset your password</h4>
                        <p className="mb-32 text-secondary-light text-lg">
                            Please enter your details.
                        </p>
                    </div>

                    <div className="position-relative mb-20">
                        <div className="icon-field">
                            <span className="icon top-50 translate-middle-y">
                                <Icon icon="solar:lock-password-outline" />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"} // Toggle type here
                                className="form-control h-56-px bg-neutral-50 radius-12"
                                id="your-password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$"
                                title="Password must be at least 8 characters long, contain at least one uppercase letter and one number."
                            />
                        </div>
                        <span
                            className="toggle-password cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
                            onClick={() => setShowPassword(!showPassword)} // Toggle visibility state
                        >
                            <Icon icon={showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"} />
                        </span>
                    </div>
                    <div className="position-relative mb-20">
                        <div className="icon-field">
                            <span className="icon top-50 translate-middle-y">
                                <Icon icon="solar:lock-password-outline" />
                            </span>
                            <input
                                type={showPassword ? "text" : "password"} // Toggle type here
                                className="form-control h-56-px bg-neutral-50 radius-12"
                                id="your-password"
                                placeholder="ConfirmPassword"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$"
                                title="Password must be at least 8 characters long, contain at least one uppercase letter and one number."
                            />
                        </div>
                        <span
                            className="toggle-password cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
                            onClick={() => setShowPassword(!showPassword)} // Toggle visibility state
                        >
                            <Icon icon={showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"} />
                        </span>
                    </div>
                    {loading ? (
                        <button
                            className="btn btn-primary-600 text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                        >
                            Loading...
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary-600 text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                            onClick={resetPassword}
                        >
                            Reset Password
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ResetPasswordLayer;