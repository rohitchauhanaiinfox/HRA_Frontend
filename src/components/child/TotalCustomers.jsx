import React from "react";
import { Link } from "react-router-dom";

const TotalCustomer = () => {
    return (
        <div className='col-xxl-6 col-lg-6 col-sm-12'>
            <div className='card'>
                <div className='card-body p-20'>
                    <div className='row g-3'>
                        <div className='col-12'>
                            <div className='row g-3'>
                                <div className='col-sm-6'>
                                    <div className='radius-8 h-100 text-center p-20 bg-gradient-end-1'>
                                        <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-lilac-200 border border-lilac-400 text-lilac-600'>
                                            <i className='ri-user-fill' />
                                        </span>
                                        <span className='text-neutral-700 d-block'>
                                            Total Customers
                                        </span>
                                        <h6 className='mb-0 mt-4'>2</h6>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='radius-8 h-100 text-center p-20 bg-gradient-end-2'>
                                        <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-success-200 border border-success-400 text-success-600'>
                                            <i className='ri-group-fill' />
                                        </span>
                                        <span className='text-neutral-700 d-block'>
                                            Total Employees
                                        </span>
                                        <h6 className='mb-0 mt-4'>4</h6>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='radius-8 h-100 text-center p-20 bg-gradient-end-3'>
                                        <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-info-200 border border-info-400 text-info-600'>
                                            <i className='ri-file-list-2-fill' />
                                        </span>
                                        <span className='text-neutral-700 d-block'>Total Invoices</span>
                                        <h6 className='mb-0 mt-4'>6</h6>
                                    </div>
                                </div>
                                <div className='col-sm-6'>
                                    <div className='radius-8 h-100 text-center p-20 bg-gradient-end-5'>
                                        <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-danger-200 border border-danger-400 text-danger-600'>
                                            <i className='ri-shopping-cart-2-fill' />
                                        </span>
                                        <span className='text-neutral-700 d-block'>Total Orders</span>
                                        <h6 className='mb-0 mt-4'>10</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalCustomer;
