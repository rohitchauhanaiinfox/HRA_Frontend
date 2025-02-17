import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import { apiPost } from "../services/client";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

const ForgotPasswordLayer = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const ResetPassword = async () => {
        try {
            setLoading(true);
            const data = { email };
            console.log(data);
            const res = await apiPost('auth/forgot-password', data);
            console.log('response', res);

            if (res?.data?.status === true) {
                toast.success(res.data.message);
            } else {
                toast.error("Invalid Email");
            }
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <section className="auth forgot-password-page bg-base d-flex flex-wrap">
                <ToastContainer />
                <div className="auth-left d-lg-block d-none">
                    <div className="d-flex align-items-center flex-column h-100 justify-content-center">
                        <img src="assets/images/forgot_password.jpg" alt=""
                            className="w-100 h-100 object-fit-cover" />
                    </div>
                </div>
                <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
                    <div className="max-w-464-px mx-auto w-100">
                        <div>
                            <h4 className="mb-12">Forgot Password</h4>
                            <p className="mb-32 text-secondary-light text-lg">
                                Enter the email address associated with your account and we will
                                send you a link to reset your password.
                            </p>
                        </div>
                        <form action="#">
                            <div className="icon-field">
                                <span className="icon top-50 translate-middle-y">
                                    <Icon icon="mage:email" />
                                </span>
                                <input
                                    type="email"
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    placeholder="Enter Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
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
                                    onClick={ResetPassword}
                                >
                                    Reset
                                </button>
                            )}
                            <div className="text-center">
                                <Link to="/" className="text-primary-600 fw-bold mt-24">
                                    Back to Sign In
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-body p-40 text-center">
                            <div className="mb-32">
                                <img src="assets/images/auth/envelop-icon.png" alt="" />
                            </div>
                            <h6 className="mb-12">Verify your Email</h6>
                            <p className="text-secondary-light text-sm mb-0">
                                Thank you, check your email for instructions to reset your password
                            </p>
                            <button
                                type="button"
                                className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                            >
                                Skip
                            </button>
                            <div className="mt-32 text-sm">
                                <p className="mb-0">
                                    Don’t receive an email?{" "}
                                    <Link to="/resend" className="text-primary-600 fw-semibold">
                                        Resend
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ForgotPasswordLayer