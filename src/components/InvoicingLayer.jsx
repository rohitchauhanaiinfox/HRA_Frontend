import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.js';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link, useNavigate } from 'react-router-dom';
import { apiGet } from '../services/client';
import { RiseLoader } from 'react-spinners';


const InvoicingLayer = () => {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getInvoices = async () => {
        setLoading(true);
        try {
            const res = await apiGet('invoices/get');
            if (res.data.status == true) {
                console.log(res.data.data);
                setInvoices(res.data.data);

                if ($.fn.DataTable.isDataTable("#dataTable")) {
                    $("#dataTable").DataTable().destroy();
                }

                setTimeout(() => {
                    $("#dataTable").DataTable({
                        pageLength: 10,
                        ordering: false,
                    });
                }, 0);
                setLoading(false);
            } else {
                setLoading(false);
            }

        } catch (error) {
            console.error("Error fetching employee:", error);
            setLoading(false);
        }
    };
    useEffect(() => {
        getInvoices();
    }, []);

    useEffect(() => {
        const table = $('#dataTable').DataTable({
            pageLength: 10,
            ordering: false,
        });
        return () => {
            table.destroy(true);
        };
    }, []);

    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <RiseLoader color="#077f91" size={30} />
                </div>
            ) : (
                <>
                    <div className="card basic-data-table">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-20">
                                <h3 className="text-lg font-semibold text-primary-600 mb-2">Invoicing</h3>
                                <button type="submit" className="btn btn-primary-600"
                                    onClick={() => {
                                        navigate('/addInvoice');
                                    }}
                                >Add Invoice</button>
                            </div>
                            <table className="table bordered-table mb-0" id="dataTable" data-page-length={10}>
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
                                            {/* <td className="text-center">
                                    <button className="btn btn-primary-600 btn-sm">Edit</button>
                                </td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </>

    );
};

export default InvoicingLayer;
