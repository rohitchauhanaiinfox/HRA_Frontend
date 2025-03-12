import React from "react";

import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'

const InvoicingCard = ({ invoices }) => {

    return (
        <>
            <div className="col-xxl-6 col-lg-6 col-sm-12">
                <div className="card h-100">
                    <div className="card-body p-24">
                        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                            <h6 className="mb-2 fw-bold text-lg mb-0">Invoice</h6>
                            <Link
                                to="/invoicing"
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
                                        <th>Customer Name</th>
                                        <th>Invoice Month</th>
                                        <th>Invoice Date</th>
                                        <th>Invoice Due Date</th>
                                        <th>Invoice Number</th>
                                        <th>Total Amount</th>
                                        <th>Invoice Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map((invoice, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="text-primary-600 fw-semibold flex-grow-1">
                                                        {invoice?.customer_name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>{invoice?.invoice_month}</td>
                                            <td>{invoice?.invoice_date
                                                ? new Date(invoice?.invoice_date).toLocaleDateString('en-GB', {
                                                    day: '2-digit', month: 'short', year: 'numeric'
                                                })
                                                : 'N/A'}</td>
                                            <td>{invoice?.due_date
                                                ? new Date(invoice?.due_date).toLocaleDateString('en-GB', {
                                                    day: '2-digit', month: 'short', year: 'numeric'
                                                })
                                                : 'N/A'}</td>
                                            <td>{invoice?.invoice_number}</td>
                                            <td>{invoice?.grand_total}</td>
                                            <td >
                                                <span className={`bg-${invoice?.invoice_status === "Completed" ? 'success-focus' : 'danger-focus'} text-${invoice?.invoice_status === "Completed" ? 'success-main' : 'danger-main'} px-24 py-4 rounded-pill fw-medium text-sm`}>
                                                    {invoice?.invoice_status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {(invoices?.length === 0 || invoices == null) && (
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

export default InvoicingCard;