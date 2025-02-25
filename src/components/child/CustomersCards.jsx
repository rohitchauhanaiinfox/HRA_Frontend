import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js';
import { apiGet } from "../../services/client";
import { ClimbingBoxLoader } from "react-spinners";

const CustomersCards = ({ customers }) => {
    return (
        <>
            <div className="col-xxl-6 col-lg-6">
                <div className="card h-100">
                    <div className="card-body p-15">
                        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                            <h6 className="mb-2 fw-bold text-lg mb-0">Customers</h6>
                            <Link
                                to="/customer"
                                className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                            >
                                View All
                                <Icon
                                    icon="solar:alt-arrow-right-linear"
                                    className="icon"
                                />
                            </Link>
                        </div>
                        <div className="table-responsive scroll-sm">
                            <table className="table bordered-table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Customer Name</th>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers?.map((customer) => (
                                        <tr key={customer.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="text-secondary-light fw-semibold flex-grow-1">
                                                        {customer?.customer_name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>{customer.company_name}</td>
                                            <td>{customer.email}</td>
                                            <td className="text-center">
                                                <span className={`bg-${customer?.status === '1' ? 'success-focus' : 'danger-focus'} text-${customer?.status === '1' ? 'success-main' : 'danger-main'} px-24 py-4 rounded-pill fw-medium text-sm`}>
                                                    {customer?.status == "1" ? "Active" : "Inactive"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {(customers?.length === 0 || customers == null) && (
                                        <tr>
                                            <td colSpan="6" className="text-center">No data found</td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomersCards;
