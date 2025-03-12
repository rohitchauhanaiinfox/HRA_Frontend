import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.js';
import { Icon } from '@iconify/react';
import { apiGet, apiPut } from '../../services/client';
import { RiseLoader } from "react-spinners";
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const TimesheetLayer = () => {
    const [timesheets, setTimesheets] = useState([]);
    const [loading, setLoading] = useState(false);
    const tableRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        getTimeSheet();
    }, []);

    useEffect(() => {
        if (timesheets.length > 0) {
            if (!$.fn.DataTable.isDataTable(tableRef.current)) {
                $(tableRef.current).DataTable({
                    pageLength: 10,
                    ordering: false,
                    destroy: true,
                });
            }
        }
    }, [timesheets]);

    const getTimeSheet = async () => {
        setLoading(true);
        try {
            const res = await apiGet('timesheets/all');
            if (res.data.status === true) {
                setTimesheets(res.data.data);
            }
        } catch (error) {
            console.error("Error fetching timesheets:", error);
        } finally {
            setLoading(false);
        }
    };

    const approve = async (id, status) => {
        try {
            const data = { status: status };
            const res = await apiPut(`timesheets/approve-decline/${id}`, data);
            if (res.data.status === true) {
                toast.success(res.data.message);
                getTimeSheet();
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error("Error approving timesheet");
            console.error("Error fetching timesheets:", error);
        } finally {
        }
    };

    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <RiseLoader color="#077f91" size={30} />
                </div>
            ) : (
                <div className="card basic-data-table">
                    <ToastContainer />
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between mb-20">
                            <h3 className="text-lg font-semibold text-primary-600 mb-2">TimeSheet</h3>
                            {localStorage.getItem('role') === 'emp' && (
                                <button
                                    type="submit"
                                    className="btn btn-primary-600"
                                    onClick={() => {
                                        navigate('/addTimesheet');
                                    }}
                                >
                                    Add TimeSheet
                                </button>
                            )}

                        </div>
                        <table ref={tableRef} className="table bordered-table mb-0" id="dataTable">
                            <thead>
                                <tr>
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
                                                {/* Show Buttons Only If Status is Pending */}
                                                {localStorage.getItem('role') === "admin" && timesheet?.status === "1" && (
                                                    <>
                                                        <Icon
                                                            icon="mdi:check-circle"
                                                            className="text-success"
                                                            style={{ fontSize: "25px", cursor: "pointer" }}
                                                            onClick={() => approve(timesheet.timesheet_id, "2")}
                                                        />
                                                        <Icon
                                                            icon="mdi:close-circle"
                                                            className="text-danger"
                                                            style={{ fontSize: "25px", cursor: "pointer" }}
                                                            onClick={() => approve(timesheet.timesheet_id, "3")}
                                                        />
                                                    </>
                                                )}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default TimesheetLayer;
