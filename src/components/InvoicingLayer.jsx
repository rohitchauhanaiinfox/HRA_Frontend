import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.js';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const InvoicingLayer = () => {
    const data = [
        {
            "Customer Name": "John Doe",
            "Invoice Month": "Nov",
            "Invoice Date": "11/15/2024",
            "Invoice Due Date": "11/20/2024",
            "Invoice Number": "INV1",
            "Total Amount": "$1200",
            "Invoice Status": "Sent"
        },
        {
            "Customer Name": "Jane Smith",
            "Invoice Month": "Nov",
            "Invoice Date": "11/10/2024",
            "Invoice Due Date": "11/17/2024",
            "Invoice Number": "INV2",
            "Total Amount": "$890",
            "Invoice Status": "Draft"
        },
        {
            "Customer Name": "Mike Johnson",
            "Invoice Month": "Nov",
            "Invoice Date": "11/12/2024",
            "Invoice Due Date": "11/18/2024",
            "Invoice Number": "INV3",
            "Total Amount": "$560",
            "Invoice Status": "Sent"
        },
        {
            "Customer Name": "Emily Davis",
            "Invoice Month": "Nov",
            "Invoice Date": "11/09/2024",
            "Invoice Due Date": "11/16/2024",
            "Invoice Number": "INV4",
            "Total Amount": "$300",
            "Invoice Status": "Sent"
        },
        {
            "Customer Name": "Chris Brown",
            "Invoice Month": "Nov",
            "Invoice Date": "11/11/2024",
            "Invoice Due Date": "11/19/2024",
            "Invoice Number": "INV5",
            "Total Amount": "$450",
            "Invoice Status": "Draft"
        },
        {
            "Customer Name": "Sarah Wilson",
            "Invoice Month": "Nov",
            "Invoice Date": "11/14/2024",
            "Invoice Due Date": "11/21/2024",
            "Invoice Number": "INV6",
            "Total Amount": "$650",
            "Invoice Status": "Sent"
        },
        {
            "Customer Name": "Tom Hardy",
            "Invoice Month": "Nov",
            "Invoice Date": "11/20/2024",
            "Invoice Due Date": "11/28/2024",
            "Invoice Number": "INV7",
            "Total Amount": "$77",
            "Invoice Status": "Sent"
        },
        {
            "Customer Name": "Sophia Miller",
            "Invoice Month": "Nov",
            "Invoice Date": "11/22/2024",
            "Invoice Due Date": "11/29/2024",
            "Invoice Number": "INV8",
            "Total Amount": "$980",
            "Invoice Status": "Draft"
        },
        {
            "Customer Name": "Oliver Clark",
            "Invoice Month": "Nov",
            "Invoice Date": "11/23/2024",
            "Invoice Due Date": "12/01/2024",
            "Invoice Number": "INV9",
            "Total Amount": "0",
            "Invoice Status": "Sent"
        },
        {
            "Customer Name": "Liam Martinez",
            "Invoice Month": "Nov",
            "Invoice Date": "11/25/2024",
            "Invoice Due Date": "12/05/2024",
            "Invoice Number": "INV10",
            "Total Amount": "0",
            "Invoice Status": "Sent"
        }
    ];
    const [invoices, setInvoices] = useState(data);

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
        <div className="card basic-data-table">
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-20">
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">Invoicing</h3>
                    <button type="submit" className="btn btn-primary-600">Add Invoice</button>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <span className="text-primary-600 fw-semibold flex-grow-1">
                                            {invoice["Customer Name"]}
                                        </span>
                                    </div>
                                </td>
                                <td>{invoice["Invoice Month"]}</td>
                                <td>{invoice["Invoice Date"]}</td>
                                <td>{invoice["Invoice Due Date"]}</td>
                                <td>{invoice["Invoice Number"]}</td>
                                <td>{invoice["Total Amount"]}</td>
                                <td >
                                    <span className={`bg-${invoice["Invoice Status"] === "Sent" ? 'success-focus' : 'danger-focus'} text-${invoice["Invoice Status"] === "Sent" ? 'success-main' : 'danger-main'} px-24 py-4 rounded-pill fw-medium text-sm`}>
                                        {invoice["Invoice Status"]}
                                    </span>
                                </td>
                                <td className="text-center">
                                    <button className="btn btn-primary-600 btn-sm">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoicingLayer;
