import React, { useEffect, useState } from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js';
import CustomersCards from "./child/CustomersCards";
import ProfileCard from "./child/ProfileCard";
import NextInvoice from "./child/NextInvoice";
import InvoicingCard from "./child/Invoicing";
import TotalCustomer from "./child/TotalCustomers";
import Investment from "./child/InvestmentChart";
import { RiseLoader } from "react-spinners";
import { apiGet } from "../services/client";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [timesheets, setTimeSheet] = useState([]);
    const [role, setRole] = useState('');
    const [allAssignOrder, setAssignOrder] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    const getCustomers = async () => {
        setLoading(true);
        try {
            const res = await apiGet('customers');
            setCustomers((res?.data ?? []).slice(0, 5));
            setTimeout(() => setLoading(false), 1000);
        } catch (error) {
            console.error("Error fetching customers:", error);
            setLoading(false);
        }
    };

    const getAssignOrder = async () => {
        setLoading(true);
        try {
            const res = await apiGet('purchase_orders/employeesassignorder/get');
            if (res.data.status == true) {
                console.log(res.data.data);
                setAssignOrder(res.data.data);
                setLoading(false);
            } else {
                setLoading(false);
            }

        } catch (error) {
            console.error("Error fetching employee:", error);
            setLoading(false);
        }
    };

    const getInvoices = async () => {
        setLoading(true);
        try {
            const res = await apiGet('invoices/get');
            if (res.data.status === true) {
                setInvoices((res?.data?.data ?? []).slice(0, 5));
            }
            setLoading(false);
        } catch (error) {
            console.error("Error fetching invoices:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        const roles = localStorage.getItem("role");
        setRole(roles);

        if (roles) {
            if (roles === "admin") {
                getCustomers();
                getInvoices();
            } else {
                getTimeSheet();
                getAssignOrder();
            }
        }

        return () => clearInterval(timer);
    }, []);


    const getTimeSheet = async () => {
        setLoading(true);
        try {
            const res = await apiGet("timesheets/get");
            console.log(res.data.data);

            if (res.data.status === true) {
                setTimeSheet((res?.data.data ?? []).slice(0, 5));
            }
        } catch (error) {
            console.error("Error fetching timesheets:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <RiseLoader color="#077f91" size={30} />
                </div>
            ) : (
                <>
                    {role === "admin" ? (
                        <>
                            <div className="row mb-16">
                                <ProfileCard />
                                <TotalCustomer />
                                <Investment />
                            </div>
                            <div className="row mb-16">
                                <CustomersCards customers={customers} />
                                <InvoicingCard invoices={invoices} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="row mb-16">
                                <div className="col-6 d-flex">
                                    <div className="nft-promo-card card radius-12 overflow-hidden position-relative z-1 mb-4 w-100 h-100">
                                        <img
                                            src="assets/images/nft/nft-gradient-bg.png"
                                            className="position-absolute start-0 top-0 w-100 h-100 z-n1 object-cover"
                                            alt=""
                                        />
                                        <div className="nft-promo-card__inner d-flex align-items-center h-100 p-4">
                                            <div className="flex-grow-1 text-white">
                                                <h4 className="mb-16 text-white">Hello, User</h4>
                                                <p>
                                                    {currentTime.toLocaleDateString("en-US", {
                                                        weekday: "long",
                                                        month: "long",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    })},{" "}
                                                    {currentTime.toLocaleTimeString("en-US", {
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                        second: "numeric",
                                                        hour12: true,
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 d-flex">
                                    <div className="card w-100 h-100">
                                        <div className="card-body p-24">
                                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                                                <h6 className="text-lg font-semibold text-primary-600 mb-2">Assign Orders</h6>
                                            </div>
                                            <div className="table-responsive scroll-sm">
                                                <table className="table bordered-table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Customer Name</th>
                                                            <th scope="col">PO Name</th>
                                                            <th scope="col">PO ID</th>
                                                            <th scope="col">Hourly Rate</th>
                                                            <th scope="col">Start Date</th>
                                                            <th scope="col">End Date</th>
                                                            <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allAssignOrder?.length > 0 ? (
                                                            allAssignOrder.map((employee, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="text-primary-600 fw-semibold flex-grow-1">
                                                                                {employee?.customer_name}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>{employee?.po_name}</td>
                                                                    <td>{employee?.purchase_order_id}</td>
                                                                    <td>{employee?.hourly_rate}</td>
                                                                    <td>
                                                                        {employee?.start_date
                                                                            ? new Date(employee.start_date).toLocaleDateString('en-GB', {
                                                                                day: '2-digit', month: 'short', year: 'numeric'
                                                                            })
                                                                            : 'N/A'}
                                                                    </td>
                                                                    <td>
                                                                        {employee?.end_date
                                                                            ? new Date(employee.end_date).toLocaleDateString('en-GB', {
                                                                                day: '2-digit', month: 'short', year: 'numeric'
                                                                            })
                                                                            : 'N/A'}
                                                                    </td>
                                                                    <td>{employee?.status}</td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td colSpan="7" className="text-center">No data Found</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-12 col-lg-6 col-sm-12">
                                <div className="card h-100">
                                    <div className="card-body p-24">
                                        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                                            <h6 className="text-lg font-semibold text-primary-600 mb-2">TimeSheet</h6>

                                        </div>
                                        <div className="table-responsive scroll-sm">
                                            <table className="table bordered-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Username</th>
                                                        <th>Week/Month</th>
                                                        <th>Salary Mode</th>
                                                        <th>Hours</th>
                                                        <th>Overtime Hours</th>
                                                        <th>Hourly Rate</th>
                                                        <th>Total Salary</th>
                                                        <th>Total Salary</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {timesheets.map((timesheet, index) => (
                                                        <tr key={index}>
                                                            <td>{timesheet?.user_name}</td>
                                                            <td>{timesheet?.week_month}</td>
                                                            <td>{timesheet?.salary_mode}</td>
                                                            <td>{timesheet?.hours}</td>
                                                            <td className="text-center">{timesheet?.overtime_hours}</td>
                                                            <td>{timesheet?.hourly_rate}</td>
                                                            <td>{timesheet?.total_salary}</td>
                                                            <td>
                                                                <span className={`bg-${timesheet?.status === "2"
                                                                    ? 'success-focus'
                                                                    : timesheet?.status === "3"
                                                                        ? 'danger-focus'
                                                                        : 'warning-focus'
                                                                    } text-${timesheet?.status === "2"
                                                                        ? 'success-main'
                                                                        : timesheet?.status === "3"
                                                                            ? 'danger-main'
                                                                            : 'warning-main'
                                                                    } px-24 py-4 rounded-pill fw-medium text-sm`}
                                                                >
                                                                    {timesheet?.status === "2"
                                                                        ? "Approved"
                                                                        : timesheet?.status === "3"
                                                                            ? "Rejected"
                                                                            : "Pending"
                                                                    }
                                                                </span>
                                                            </td>
                                                            <td className="text-center">
                                                                <span className="d-flex align-items-center gap-1">
                                                                    <Icon
                                                                        icon="mdi:image"
                                                                        className="me-2"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target={`#imageModal-${index}`}
                                                                        style={{ fontSize: "25px", cursor: "pointer" }}
                                                                    />
                                                                    {/* Modal */}
                                                                    <div className="modal fade" id={`imageModal-${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header">
                                                                                    <h1 className="modal-title fs-5">View TimeSheet</h1>
                                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                                </div>
                                                                                <div className="modal-body text-center">
                                                                                    {timesheet?.image ? (
                                                                                        <img
                                                                                            src={timesheet?.image}
                                                                                            alt="Timesheet"
                                                                                            className="img-fluid rounded shadow-lg"
                                                                                            style={{ maxWidth: "100%", height: "auto" }}
                                                                                        />
                                                                                    ) : (
                                                                                        <p className="text-danger">No Image Available</p>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* {timesheet?.status === "1" && (
                                                                    <>
                                                                        <Icon icon="mdi:check-circle" className="text-success" style={{ fontSize: "25px", cursor: "pointer" }}
                                                                            onClick={() => approve(timesheet.timesheet_id, "2")} />
                                                                        <Icon icon="mdi:close-circle" className="text-danger" style={{ fontSize: "25px", cursor: "pointer" }}
                                                                            onClick={() => approve(timesheet.timesheet_id, "3")} />
                                                                    </>
                                                                )} */}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default HomePage;
