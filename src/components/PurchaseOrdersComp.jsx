import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.js';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { apiGet, apiPost } from '../services/client';
import { RiseLoader } from 'react-spinners';
import { Modal } from "bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PurchaseOrderLayer = () => {
    const [allPurchaseOrder, setPurchaseOrder] = useState([]);
    const [allAssignOrder, setAssignOrder] = useState([]);
    const [loading, setLoading] = useState(false);
    const [po_name, setPoName] = useState('');
    const [customer_name, setCustomerName] = useState('');
    const [hourly_rate, setHourlyRate] = useState('');
    const [start_date, setStartDate] = useState(new Date());
    const [end_date, setEndDate] = useState(new Date());
    const [status, setStatus] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);
    const [customers, setCustomer] = useState([]);
    const [employees, setEmployee] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showEndCalendar, setShowEndCalendar] = useState(false);
    const [selectedCustomerId, setSelectedCustomerId] = useState(0);
    const [selectedPurchaseOrderId, setSelectedPurchaseOrderId] = useState("");
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(0);
    const [assignStatus, setAssignStatus] = useState("active");
    const [errors, setErrors] = useState({});
    const [error, setError] = useState({});

    const validate = () => {
        let errors = {};
        if (!selectedCustomerId) errors.selectedCustomerId = "Customer Name is required";
        if (!selectedPurchaseOrderId) errors.selectedPurchaseOrderId = "PO Name is required";
        if (!selectedEmployeeId) errors.selectedEmployeeId = "Employee selection is required";
        if (!status) errors.status = "Status is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validateForm = () => {
        let errors = {};
        if (!po_name.trim()) errors.poName = "PO Name is required";
        if (!selectedCustomerId) errors.selectedCustomerId = "Customer Name is required";
        if (!hourly_rate || isNaN(hourly_rate) || hourly_rate <= 0) errors.hourlyRate = "Enter a valid hourly rate";
        if (!start_date) errors.startDate = "Start Date is required";
        if (!end_date) errors.endDate = "End Date is required";
        if (start_date && end_date && new Date(end_date) < new Date(start_date)) {
            errors.endDate = "End Date cannot be before Start Date";
        }
        if (!status.trim()) errors.status = "Status is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully");

        }
    };

    useEffect(() => {
        const storedCustomers = JSON.parse(localStorage.getItem("customers"));
        if (storedCustomers) {
            setCustomer(storedCustomers);
        }
        const storedEmployees = JSON.parse(localStorage.getItem("employee"));
        if (storedEmployees) {
            setEmployee(storedEmployees);
        }
        getPurchaseOrder();
        getAssignOrder();
    }, []);

    const getPurchaseOrder = async () => {
        setLoading(true);
        try {
            const res = await apiGet('purchase_orders/get');
            if (res.data.status == true) {
                console.log(res.data.data);
                setPurchaseOrder(res.data.data);
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

    const addPurchaseOrder = async () => {
        setButtonLoading(true);
        if (!validateForm()) {
            setButtonLoading(false);
            return;
        }
        try {
            const data = {
                po_name,
                customer_name: selectedCustomerId,
                hourly_rate,
                start_date,
                end_date,
                status
            }
            const res = await apiPost('purchase_orders/add', data);
            if (res?.data?.status == true) {
                const modalElement = document.getElementById('addcustomer');
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
                getPurchaseOrder();
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

    const addAssignOrder = async (modalId) => {
        setButtonLoading(true);
        if (!validate()) {
            setButtonLoading(false);
            return;
        }
        try {
            const data = {
                purchase_order_id: parseInt(selectedPurchaseOrderId, 10),
                user_id: parseInt(selectedEmployeeId, 10),
                status: assignStatus == 'active' ? "1" : "0",
            }
            const res = await apiPost('purchase_orders/assign-orders/add', data);
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
                getAssignOrder();
                toast.success(res?.data?.message);
                setButtonLoading(false);
            } else {
                toast.error(res?.message);
                setButtonLoading(false);
            }

        } catch (error) {
            console.error("Error fetching employee:", error);
            setButtonLoading(false);
        }
    }

    const getAssignOrder = async () => {
        setLoading(true);
        try {
            const res = await apiGet('purchase_orders/assign-orders/get');
            if (res.data.status == true) {
                console.log(res.data.data);
                setAssignOrder(res.data.data);
                if ($.fn.DataTable.isDataTable("#dataTb")) {
                    $("#dataTb").DataTable().destroy();
                }
                setTimeout(() => {
                    $("#dataTb").DataTable({
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
        const table = $('#dataTable').DataTable({
            pageLength: 10,
            ordering: false,
        });
        const tb = $('#dataTb').DataTable({
            pageLength: 10,
            ordering: false,
        });
        return () => {
            table.destroy(true);
            tb.destroy(true);
        };
    }, []);

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <RiseLoader color="#077f91" size={30} />
                </div>
            ) : (
                <>
                    <div className="row mb-16">
                        <ToastContainer />
                        <div className="col-6">
                            <div className="card basic-data-table">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-20">
                                        <button type="submit" className="btn btn-primary-600" data-bs-toggle="modal" data-bs-target="#addcustomer"
                                        >Add Purchase Order</button>
                                        <div className="modal fade" id="addcustomer" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Purchase Order</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="col-md-12">
                                                                <div className="row gy-3 mb-50">
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">PO Name</label>
                                                                        <input type="text" className="form-control" value={po_name} onChange={(e) => setPoName(e.target.value)} />
                                                                        {errors.poName && <small className="text-danger">{errors.poName}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Customer Name</label>
                                                                        <select className="form-control" value={selectedCustomerId} onChange={(e) => setSelectedCustomerId(e.target.value)}>
                                                                            <option value="">Select Customer</option>
                                                                            {customers.map((customer, index) => (
                                                                                <option key={index} value={customer.customer_id}>{customer.customer_name}</option>
                                                                            ))}
                                                                        </select>
                                                                        {errors.selectedCustomerId && <small className="text-danger">{errors.selectedCustomerId}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Hourly Rate</label>
                                                                        <input type="text" className="form-control" value={hourly_rate} onChange={(e) => setHourlyRate(e.target.value)} />
                                                                        {errors.hourlyRate && <small className="text-danger">{errors.hourlyRate}</small>}
                                                                    </div>
                                                                    <div className="col-md-3 position-relative">
                                                                        <label className="form-label">Start Date</label>
                                                                        <input type="text" className="form-control" value={start_date} readOnly onClick={() => setShowCalendar(!showCalendar)} />
                                                                        {errors.startDate && <small className="text-danger">{errors.startDate}</small>}
                                                                        {showCalendar && <Calendar onChange={(date) => { setStartDate(date.toISOString().split('T')[0]); setShowCalendar(false); }} value={start_date} />}
                                                                    </div>
                                                                    <div className="col-md-3 position-relative">
                                                                        <label className="form-label">End Date</label>
                                                                        <input type="text" className="form-control" value={end_date} readOnly onClick={() => setShowEndCalendar(!showEndCalendar)} />
                                                                        {errors.endDate && <small className="text-danger">{errors.endDate}</small>}
                                                                        {showEndCalendar && <Calendar onChange={(date) => { setEndDate(date.toISOString().split('T')[0]); setShowEndCalendar(false); }} value={end_date} />}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Status</label>
                                                                        <input type="text" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)} />
                                                                        {errors.status && <small className="text-danger">{errors.status}</small>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8" data-bs-dismiss="modal">Cancel</button>
                                                        {buttonLoading ? (
                                                            <button
                                                                className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                                            >
                                                                Loading...
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                                                onClick={addPurchaseOrder}
                                                            >
                                                                Submit
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="over-main">
                                        <table
                                            className="table bordered-table mb-0"
                                            id="dataTable"
                                            data-page-length={10}
                                        >
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
                                                {allPurchaseOrder ? <>
                                                    {allPurchaseOrder?.map((employee, index) => (
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
                                                                    ? new Date(employee?.start_date).toLocaleDateString('en-GB', {
                                                                        day: '2-digit', month: 'short', year: 'numeric'
                                                                    })
                                                                    : 'N/A'}
                                                            </td>
                                                            <td>
                                                                {employee?.end_date
                                                                    ? new Date(employee?.end_date).toLocaleDateString('en-GB', {
                                                                        day: '2-digit', month: 'short', year: 'numeric'
                                                                    })
                                                                    : 'N/A'}
                                                            </td>
                                                            <td>
                                                                <span className={`bg-${employee?.status?.toLowerCase() === "active"
                                                                    ? 'success-focus'
                                                                    : employee?.status?.toLowerCase() === "pending"
                                                                        ? 'danger-focus'
                                                                        : 'warning-focus'
                                                                    } text-${employee?.status?.toLowerCase() === "active"
                                                                        ? 'success-main'
                                                                        : employee?.status?.toLowerCase() === "pending"
                                                                            ? 'danger-main'
                                                                            : 'warning-main'
                                                                    } px-24 py-4 rounded-pill fw-medium text-sm`}
                                                                >
                                                                    {employee?.status}
                                                                </span>
                                                            </td>

                                                        </tr>
                                                    ))}</> : <>No data Found</>

                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">

                            <div className="card basic-data-table mt-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between mb-20">
                                        <button type="submit" className="btn btn-primary-600" data-bs-toggle="modal" data-bs-target="#addAssign"
                                        > Assign Purchase Order</button>
                                        <div className="modal fade" id="addAssign" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Assign Purchase Order</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="col-md-12">
                                                                <div className="row gy-3 mb-50">
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Customer Name</label>
                                                                        <select className="form-control" value={selectedCustomerId} onChange={(e) => setSelectedCustomerId(e.target.value)}>
                                                                            <option value="">Select Customer</option>
                                                                            {customers.map((customer, index) => (
                                                                                <option key={index} value={customer.customer_id}>{customer.customer_name}</option>
                                                                            ))}
                                                                        </select>
                                                                        {errors.selectedCustomerId && <small className="text-danger">{errors.selectedCustomerId}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">PO Name</label>
                                                                        <select className="form-control" value={selectedPurchaseOrderId} onChange={(e) => setSelectedPurchaseOrderId(e.target.value)}>
                                                                            <option value="">Select PO</option>
                                                                            {allPurchaseOrder.map((po, index) => (
                                                                                <option key={index} value={po.purchase_order_id}>{po.po_name}</option>
                                                                            ))}
                                                                        </select>
                                                                        {errors.selectedPurchaseOrderId && <small className="text-danger">{errors.selectedPurchaseOrderId}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Employee</label>
                                                                        <select className="form-control" value={selectedEmployeeId} onChange={(e) => setSelectedEmployeeId(e.target.value)}>
                                                                            <option value="">Select Employee</option>
                                                                            {employees.map((employee, index) => (
                                                                                <option key={index} value={employee.id}>{employee.username}</option>
                                                                            ))}
                                                                        </select>
                                                                        {errors.selectedEmployeeId && <small className="text-danger">{errors.selectedEmployeeId}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Status</label>
                                                                        <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                                                            <option value="">Select Status</option>
                                                                            <option value="active">Active</option>
                                                                            <option value="inactive">Inactive</option>
                                                                        </select>
                                                                        {errors.status && <small className="text-danger">{errors.status}</small>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8" data-bs-dismiss="modal">Cancel</button>
                                                        {buttonLoading ? (
                                                            <button
                                                                className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                                            >
                                                                Loading...
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                                                onClick={() => addAssignOrder("#addAssign")}
                                                            >
                                                                Submit
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <table
                                        className="table bordered-table mb-0"
                                        id="dataTb"
                                        data-page-length={10}
                                    >
                                        <thead>
                                            <tr>
                                                <th scope="col">User Id</th>
                                                <th scope="col">PO ID</th>
                                                <th scope="col">Start Date</th>
                                                <th scope="col">End Date</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allAssignOrder ? <>
                                                {allAssignOrder?.map((employee, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <span className="text-primary-600 fw-semibold flex-grow-1">
                                                                    {employee?.user_id}
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>{employee?.purchase_order_id}</td>
                                                        <td>
                                                            {employee?.created_at
                                                                ? new Date(employee?.created_at).toLocaleDateString('en-GB', {
                                                                    day: '2-digit', month: 'short', year: 'numeric'
                                                                })
                                                                : 'N/A'}
                                                        </td>
                                                        <td>
                                                            {employee?.updated_at
                                                                ? new Date(employee?.updated_at).toLocaleDateString('en-GB', {
                                                                    day: '2-digit', month: 'short', year: 'numeric'
                                                                })
                                                                : 'N/A'}
                                                        </td>
                                                        <td>
                                                            {employee?.status === "1" ? "In Progress" : employee?.status === "2" ? "Completed" : employee?.status}
                                                        </td>

                                                    </tr>
                                                ))}</> : <>No data Found</>

                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>



                    </div >


                </>
            )}
        </>
    );
}

export default PurchaseOrderLayer