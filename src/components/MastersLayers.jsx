import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiPost, apiGet, apiPut } from '../services/client';
import { toast, ToastContainer } from 'react-toastify';
import { RiseLoader } from "react-spinners";
import { Modal } from 'bootstrap';

const MastersLayer = () => {
    const [buttonLoading, setButtonLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setname] = useState('');
    const [status, setstatus] = useState('Active');
    const [comment, setcomment] = useState('');
    const [allJobs, setAllJobs] = useState([]);
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState({
        jobRoleName: "",
        title: "",
        notes: ""
    });

    useEffect(() => {
        getAllJobs();
    }, []);

    const addJobRole = async (id) => {
        setButtonLoading(true);
        try {
            const data = {
                name,
                status: status == "Active" ? "1" : "0",
                comment
            };
            const res = await apiPost('users/jobroles', data);
            if (res?.data?.status == true) {
                getAllJobs();
                toast.success(res?.data?.message);
                setButtonLoading(false);
                setname('');
                setcomment('');
            } else {
                toast.error(res?.data?.message);
                setButtonLoading(false);
            }

        } catch (error) {
            console.error("Error fetching employee:", error);
            setButtonLoading(false);
        }
    }


    const getAllJobs = async () => {
        setLoading(true);
        try {
            const res = await apiGet('users/jobroles');
            console.log(res);

            if (res.data.status === true) {
                const roles = res?.data?.data;
                setAllJobs(roles);
                setLoading(false);

            }
            else {
                toast.error(res?.data?.message);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching roles:", error);
            setLoading(false);
        }
    };

    const updateRole = async (roleId, modalId) => {
        setButtonLoading(true);
        try {
            const data = {
                id: roleId,
                name: selectedRole.jobRoleName,
                comment: selectedRole.notes,
                status: selectedRole.title === 'Active' ? "1" : "0"
            };
            const res = await apiPut(`users/jobroles`, data);
            if (res?.data?.status == true) {
                toast.success(res?.data?.message);
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
                }, 300);
                await getAllJobs();
                setButtonLoading(false);
            } else {
                toast.error(res?.message);
                setButtonLoading(false);
            }

        } catch (error) {
            toast.error(error?.response?.data?.error);
            console.error("Error fetching customers:", error);
            setButtonLoading(false);
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
                    <div className="row gy-4">
                        <ToastContainer />
                        <div className="col-lg-12">
                            <div className="card h-100">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row gy-3 mb-10">
                                                {/* Personal Information */}
                                                <div className="col-md-3">
                                                    <label className="form-label">Job Role Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                        value={name}
                                                        onChange={(e) => setname(e.target.value)}
                                                    />

                                                </div>
                                                <div className="col-md-3">
                                                    <label className="form-label">Status</label>
                                                    <select
                                                        className="form-control"
                                                        value={status}
                                                        onChange={(e) => setstatus(e.target.value)}
                                                    >
                                                        <option value="Active">Active</option>
                                                        <option value="Inactive">Inactive</option>
                                                    </select>
                                                </div>
                                                {/* comment */}
                                                <div className="row mt-40">
                                                    <div className="col-12">
                                                        <label className="form-label">Comment</label>
                                                        <textarea
                                                            className="form-control"
                                                            rows="3"
                                                            placeholder=""
                                                            value={comment}
                                                            onChange={(e) => setcomment(e.target.value)}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                {buttonLoading ? (
                                                    <button
                                                        className="col-md-2 btn btn-primary-600 text-sm btn-sm px-12 py-16 radius-8 m-2 mt-20"
                                                    >
                                                        Loading...
                                                    </button>
                                                ) : (
                                                    <button
                                                        type='button'
                                                        className="col-md-2 btn btn-primary-600 text-sm btn-sm px-12 py-16  radius-8 m-2 mt-20"
                                                        onClick={addJobRole}
                                                    >
                                                        Submit
                                                    </button>
                                                )}

                                            </div>

                                        </div>

                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className="col-lg-12 mt-20">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table basic-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Comment</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {allJobs.length > 0 ? (
                                                    allJobs.map((role, index) => (
                                                        <tr key={index}>
                                                            <td>{role.name}</td>
                                                            <td>{role.comment}</td>
                                                            <td >
                                                                <span className={`bg-${role?.status === '1' ? 'success-focus' : 'danger-focus'} text-${role?.status === '1' ? 'success-main' : 'danger-main'} px-24 py-4 rounded-pill fw-medium text-sm`}>
                                                                    {role.status == "1" ? "Active" : "Inactive"}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-primary-600 btn-sm"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target={`#addCustomer${index}`}
                                                                    onClick={() => setSelectedRole({
                                                                        jobRoleName: role.name,
                                                                        title: role.status == "1" ? "Active" : "Inactive",
                                                                        notes: role.comment
                                                                    }
                                                                    )}
                                                                >
                                                                    Edit
                                                                </button>

                                                                <div className="modal fade" id={`addCustomer${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                                                        <div className="modal-content">
                                                                            <div className="modal-header">
                                                                                <h1 className="modal-title fs-5">Edit Role</h1>
                                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                            </div>
                                                                            <div className="modal-body">
                                                                                <form>
                                                                                    <div className="col-md-12">
                                                                                        <div className="card">
                                                                                            <div className="card-body">
                                                                                                <div className="row gy-3 mb-50">
                                                                                                    <div className="col-lg-12">
                                                                                                        <form>
                                                                                                            <div className="col-md-12">

                                                                                                                <div className="row gy-3 mb-10">
                                                                                                                    <div className="col-md-3">
                                                                                                                        <label className="form-label">Role</label>
                                                                                                                        <input
                                                                                                                            type="text"
                                                                                                                            className="form-control"
                                                                                                                            placeholder=""
                                                                                                                            value={selectedRole.jobRoleName}
                                                                                                                            onChange={(e) => setSelectedRole({ ...selectedRole, jobRoleName: e.target.value })}
                                                                                                                        />

                                                                                                                    </div>
                                                                                                                    <div className="col-md-3">
                                                                                                                        <label className="form-label">Status</label>
                                                                                                                        <select
                                                                                                                            className="form-control"
                                                                                                                            value={selectedRole.title}
                                                                                                                            onChange={(e) => setSelectedRole({ ...selectedRole, title: e.target.value })}
                                                                                                                        >
                                                                                                                            <option value="Active">Active</option>
                                                                                                                            <option value="Inactive">Inactive</option>
                                                                                                                        </select>
                                                                                                                    </div>
                                                                                                                    <div className="row mt-40">
                                                                                                                        <div className="col-12">
                                                                                                                            <label className="form-label">Comment</label>
                                                                                                                            <textarea
                                                                                                                                className="form-control"
                                                                                                                                rows="3"
                                                                                                                                placeholder=""
                                                                                                                                value={selectedRole.notes}
                                                                                                                                onChange={(e) => setSelectedRole({ ...selectedRole, notes: e.target.value })}
                                                                                                                            ></textarea>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>

                                                                                                            </div>


                                                                                                        </form>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                            <div className="modal-footer">
                                                                                <button type="button" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8" data-bs-dismiss="modal">Cancel</button>
                                                                                <button className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                                                                    disabled={buttonLoading}
                                                                                    onClick={() => updateRole(role?.id, `#addCustomer${index}`)}
                                                                                >
                                                                                    Submit
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>

                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="text-center">No data available</td>
                                                    </tr>
                                                )}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* card end */}
                        </div>
                    </div>
                </>
            )}
        </>
    );

};

export default MastersLayer;
