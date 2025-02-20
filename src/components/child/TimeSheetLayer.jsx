import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.js';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const TimesheetLayer = () => {
    const data = [
        {
            "Customer Name": "Hamlet",
            "username": "hamlet123",
            "week/month": "week",
            "salary_mode": "Hourly",
            "hours": 13,
            "overtime_hours": 4,
            "hourly_rate": "$2",
            "total_salary": "$34",
            "Status": "Approved"
        },
        {
            "Customer Name": "Ron",
            "username": "ron_007",
            "week/month": "month",
            "salary_mode": "Fixed",
            "hours": 160,
            "overtime_hours": 10,
            "hourly_rate": "$15",
            "total_salary": "$2500",
            "Status": "Pending"
        },
        {
            "Customer Name": "Draco",
            "username": "draco_sly",
            "week/month": "week",
            "salary_mode": "Hourly",
            "hours": 40,
            "overtime_hours": 8,
            "hourly_rate": "$18",
            "total_salary": "$900",
            "Status": "Rejected"
        },
        {
            "Customer Name": "Sophia",
            "username": "sophia_m",
            "week/month": "week",
            "salary_mode": "Hourly",
            "hours": 35,
            "overtime_hours": 5,
            "hourly_rate": "$12",
            "total_salary": "$480",
            "Status": "Approved"
        },
        {
            "Customer Name": "Oliver",
            "username": "oliver_w",
            "week/month": "month",
            "salary_mode": "Fixed",
            "hours": 150,
            "overtime_hours": 15,
            "hourly_rate": "$20",
            "total_salary": "$3000",
            "Status": "Pending"
        },
        {
            "Customer Name": "Emily",
            "username": "emily_d",
            "week/month": "week",
            "salary_mode": "Hourly",
            "hours": 45,
            "overtime_hours": 5,
            "hourly_rate": "$10",
            "total_salary": "$500",
            "Status": "Approved"
        },
        {
            "Customer Name": "Chris",
            "username": "chris_b",
            "week/month": "week",
            "salary_mode": "Hourly",
            "hours": 38,
            "overtime_hours": 2,
            "hourly_rate": "$16",
            "total_salary": "$640",
            "Status": "Approved"
        },
        {
            "Customer Name": "Liam",
            "username": "liam_m",
            "week/month": "month",
            "salary_mode": "Fixed",
            "hours": 170,
            "overtime_hours": 12,
            "hourly_rate": "$22",
            "total_salary": "$3700",
            "Status": "Pending"
        }
    ]

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
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">Time Sheet</h3>
                </div>
                <table className="table bordered-table mb-0" id="dataTable" data-page-length={10}>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Username</th>
                            <th>Week/Month</th>
                            <th>Salary Mode</th>
                            <th>Hours</th>
                            <th>Overtime Hours</th>
                            <th>Hourly Rate</th>
                            <th>Total Salary</th>
                            <th>Status</th>
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
                                <td>{invoice["username"]}</td>
                                <td>{invoice["week/month"]}</td>
                                <td>{invoice["salary_mode"]}</td>
                                <td>{invoice["hours"]}</td>
                                <td>{invoice["overtime_hours"]}</td>
                                <td>{invoice["hourly_rate"]}</td>
                                <td>{invoice["total_salary"]}</td>
                                <td >
                                    <span className={`bg-${invoice["Status"] === "Approved" ? 'success-focus' : 'danger-focus'} text-${invoice["Status"] === "Approved" ? 'success-main' : 'danger-main'} px-24 py-4 rounded-pill fw-medium text-sm`}>
                                        {invoice["Status"]}
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

export default TimesheetLayer;
