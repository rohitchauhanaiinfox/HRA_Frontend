import React from "react";

import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'

const InvoicingCard = () => {
    return (
        <>
            <div className="col-xxl-6 col-lg-6 col-sm-12">
                <div className="card h-100">
                    <div className="card-body p-24">
                        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                            <h6 className="mb-2 fw-bold text-lg mb-0">Invoice</h6>
                            <Link
                                to="#"
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
                                        <th scope="col">Invoice Month</th>
                                        <th scope="col">Invoice Date</th>
                                        <th scope="col">Invoice Number</th>
                                        <th scope="col">Invoice Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                    Dianne Russell
                                                </span>
                                            </div>
                                        </td>
                                        <td>#6352148</td>
                                        <td>iPhone 14 max</td>
                                        <td>2</td>
                                        <td>$5,000.00</td>
                                        <td className="text-center">
                                            {" "}
                                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                                                Paid
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user2.png"
                                                    alt=""
                                                    className="flex-shrink-0 me-12 radius-8"
                                                />
                                                <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                    Wade Warren
                                                </span>
                                            </div>
                                        </td>
                                        <td>#6352148</td>
                                        <td>Laptop HPH </td>
                                        <td>3</td>
                                        <td>$1,000.00</td>
                                        <td className="text-center">
                                            {" "}
                                            <span className="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user3.png"
                                                    alt=""
                                                    className="flex-shrink-0 me-12 radius-8"
                                                />
                                                <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                    Albert Flores
                                                </span>
                                            </div>
                                        </td>
                                        <td>#6352148</td>
                                        <td>Smart Watch </td>
                                        <td>7</td>
                                        <td>$1,000.00</td>
                                        <td className="text-center">
                                            {" "}
                                            <span className="bg-info-focus text-info-main px-24 py-4 rounded-pill fw-medium text-sm">
                                                Shipped
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user4.png"
                                                    alt=""
                                                    className="flex-shrink-0 me-12 radius-8"
                                                />
                                                <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                    Bessie Cooper
                                                </span>
                                            </div>
                                        </td>
                                        <td>#6352148</td>
                                        <td>Nike Air Shoe</td>
                                        <td>1</td>
                                        <td>$3,000.00</td>
                                        <td className="text-center">
                                            {" "}
                                            <span className="bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm">
                                                Canceled
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="assets/images/users/user5.png"
                                                    alt=""
                                                    className="flex-shrink-0 me-12 radius-8"
                                                />
                                                <span className="text-lg text-secondary-light fw-semibold flex-grow-1">
                                                    Arlene McCoy
                                                </span>
                                            </div>
                                        </td>
                                        <td>#6352148</td>
                                        <td>New Headphone </td>
                                        <td>5</td>
                                        <td>$4,000.00</td>
                                        <td className="text-center">
                                            {" "}
                                            <span className="bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm">
                                                Canceled
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoicingCard;