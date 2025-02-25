import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.js';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link, useNavigate } from 'react-router-dom';
import { apiGet, apiPost } from '../../services/client';
import { RiseLoader } from "react-spinners";
import { toast, ToastContainer } from 'react-toastify';
import { Modal } from "bootstrap";

const EmployeeLayer = () => {
    const [allEmployee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [new_password, setnew_password] = useState(null);
    const [confirm_password, setconfirm_password] = useState(null);

    const getEmployee = async () => {
        setLoading(true);
        try {
            const res = await apiGet('users/emps');
            if (res.data.status == true) {
                console.log(res.data.data);
                setEmployee(res.data.data);

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


    const changePassword = async (id, modalId) => {
        setButtonLoading(true);
        try {
            const data = {
                id,
                new_password,
                confirm_password
            }
            const res = await apiPost('users/change_password', data);
            if (res?.data?.status == true) {
                const modalElement = document.getElementById(modalId);
                if (modalElement) {
                    const modalInstance = Modal.getInstance(modalElement);
                    if (modalInstance) {
                        modalInstance.hide();
                    }
                }
                setTimeout(() => {
                    document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove());
                    document.body.classList.remove('modal-open');
                    document.body.style.overflow = "";
                    document.body.style.paddingRight = "";
                    document.documentElement.style.overflow = "auto";
                    document.documentElement.style.height = "auto";
                }, 300);
                getEmployee();
                toast.success(res?.data?.message);
                setButtonLoading(false);
            } else {
                toast.error(res?.data?.message);
                setButtonLoading(false);
            }

        } catch (error) {
            console.error("Error fetching employee:", error);
            setButtonLoading(false);
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        getEmployee();
    }, []);

    useEffect(() => {
        const table = $("#dataTable").DataTable({
            pageLength: 10,
            destroy: true,
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
                                <h3 className="text-lg font-semibold text-primary-600 mb-2">Employee</h3>
                                <button type="submit" className="btn btn-primary-600"
                                    onClick={() => {
                                        navigate('/add-employee');
                                    }}
                                >Add Employee</button>
                            </div>
                            <table
                                className="table bordered-table mb-0"
                                id="dataTable"
                                data-page-length={10}
                            >
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">ECode</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">DOJ</th>
                                        <th scope="col">Bank Name</th>
                                        <th scope="col">Account No</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allEmployee ? <>
                                        {allEmployee?.map((employee, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-primary-600 fw-semibold flex-grow-1">
                                                            {employee?.username}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>{employee?.profile.emp_code}</td>
                                                <td>{employee?.username}</td>
                                                <td>{employee?.job_role}</td>
                                                <td>
                                                    {employee?.date_joined
                                                        ? new Date(employee?.date_joined).toLocaleDateString('en-GB', {
                                                            day: '2-digit', month: 'short', year: 'numeric'
                                                        })
                                                        : 'N/A'}
                                                </td>
                                                <td>{employee?.bank_detail.bank_name}</td>
                                                <td>{employee?.bank_detail.account_number}</td>
                                                <td >
                                                    <span className={`bg-${employee?.status === 'active' ? 'success-focus' : 'danger-focus'} text-${employee?.status === 'active' ? 'success-main' : 'danger-main'} px-24 py-4 rounded-pill fw-medium text-sm`}>
                                                        {employee?.status == "active" ? "Active" : "Inactive"}
                                                    </span>
                                                </td>
                                                <td className="text-center">
                                                    <div className="d-flex align-items-center justify-content-center gap-2">
                                                        <button className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target={`#changePass${index}`}>
                                                            <Icon icon="mdi:key" width="16" height="16" />
                                                        </button>
                                                        <div class="modal fade" id={`changePass${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-l">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Change Password</h1>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <div className="col-md-12">
                                                                            <label className="form-label text-start d-block">New Password</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-left"
                                                                                value={new_password}
                                                                                onChange={(e) => setnew_password(e.target.value)}
                                                                            />
                                                                        </div>
                                                                        <div className="col-md-12 mt-3 ">
                                                                            <label className="form-label  text-start d-block">Confirm Password</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control form-left"
                                                                                value={confirm_password}
                                                                                onChange={(e) => setconfirm_password(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8" data-bs-dismiss="modal">Cancel</button>
                                                                        {buttonLoading ? (
                                                                            <button
                                                                                className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                                                            >
                                                                                Loading...
                                                                            </button>
                                                                        ) : (
                                                                            <button
                                                                                className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                                                                onClick={() => changePassword(employee?.id, `changePass${index}`)}
                                                                            >
                                                                                Submit
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className="btn btn-primary-600 btn-sm"
                                                            onClick={() => navigate('/edit-employee', { state: { id: employee.id } })}
                                                        >Edit</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}</> : <>No data Found</>

                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default EmployeeLayer