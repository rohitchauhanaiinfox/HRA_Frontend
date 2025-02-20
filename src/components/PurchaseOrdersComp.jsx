import React, { useEffect } from 'react'
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.js';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const PurchaseOrderLayer = () => {
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
        <div className="row d-flex justify-content-between">
            <div className="card basic-data-table">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-20">
                        <button type="submit" className="btn btn-primary-600">Add Purchase Order</button>
                    </div>
                    <table
                        className="table bordered-table mb-0"
                        id="dataTable"
                        data-page-length={10}
                    >
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="form-check style-check d-flex align-items-center">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">S.L</label>
                                    </div>
                                </th>
                                <th scope="col">Invoice</th>
                                <th scope="col">Name</th>
                                <th scope="col">Issued Date</th>
                                <th scope="col" className='dt-orderable-asc dt-orderable-desc'>Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-check style-check d-flex align-items-center">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">01</label>
                                    </div>
                                </td>
                                <td>
                                    <Link to="#" className="text-primary-600">
                                        #526534
                                    </Link>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="assets/images/user-list/user-list1.png"
                                            alt=""
                                            className="flex-shrink-0 me-12 radius-8"
                                        />
                                        <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                            Kathryn Murphy
                                        </h6>
                                    </div>
                                </td>
                                <td>25 Jan 2024</td>
                                <td>$200.00</td>
                                <td>
                                    {" "}
                                    <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                                        Paid
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        to="#"
                                        className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="iconamoon:eye-light" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="lucide:edit" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="mingcute:delete-2-line" />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="card basic-data-table mt-20">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-20">
                        <button type="submit" className="btn btn-primary-600" data-bs-toggle="modal" data-bs-target="#addcustomer">Assign Purchase Order</button>
                    </div>
                    <table
                        className="table bordered-table mb-0"
                        id="dataTable"
                        data-page-length={10}
                    >
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="form-check style-check d-flex align-items-center">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">S.L</label>
                                    </div>
                                </th>
                                <th scope="col">Invoice</th>
                                <th scope="col">Name</th>
                                <th scope="col">Issued Date</th>
                                <th scope="col" className='dt-orderable-asc dt-orderable-desc'>Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-check style-check d-flex align-items-center">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">01</label>
                                    </div>
                                </td>
                                <td>
                                    <Link to="#" className="text-primary-600">
                                        #526534
                                    </Link>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="assets/images/user-list/user-list1.png"
                                            alt=""
                                            className="flex-shrink-0 me-12 radius-8"
                                        />
                                        <h6 className="text-md mb-0 fw-medium flex-grow-1">
                                            Kathryn Murphy
                                        </h6>
                                    </div>
                                </td>
                                <td>25 Jan 2024</td>
                                <td>$200.00</td>
                                <td>
                                    {" "}
                                    <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                                        Paid
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        to="#"
                                        className="w-32-px h-32-px me-8 bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="iconamoon:eye-light" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="w-32-px h-32-px me-8 bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="lucide:edit" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="w-32-px h-32-px me-8 bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                                    >
                                        <Icon icon="mingcute:delete-2-line" />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}

export default PurchaseOrderLayer