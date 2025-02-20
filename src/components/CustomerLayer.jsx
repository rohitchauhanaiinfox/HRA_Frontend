import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.js';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { apiGet, apiPost } from '../services/client';
import { toast, ToastContainer } from 'react-toastify';

const CustomerLayer = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [customer_name, setCustomerName] = useState("");
    const [company_name, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [billing_cycle, setbilling_cycle] = useState("weekly");
    const [paymentTerms, setPaymentTerms] = useState("");
    const [title, setTitle] = useState("Mr");
    const [first_name, setFirstName] = useState("");
    const [middle_name, setMiddleName] = useState("");
    const [last_name, setLastName] = useState("");
    const [company_display_name, setCompanyDisplayName] = useState("");
    const [mobile_number, setMobileNumber] = useState("");
    const [fax, setFax] = useState("");
    const [other, setOther] = useState("");
    const [website, setWebsite] = useState("");
    const [notes, setNotes] = useState("");
    const [contact_person_salutation, setContactPersonSalutation] = useState("Mr");
    const [contact_person_first_name, setContactPersonFirstName] = useState("");
    const [contact_person_middle_name, setContactPersonMiddleName] = useState("");
    const [contact_person_last_name, setContactPersonLastName] = useState("");
    const [contact_person_email, setContactPersonEmail] = useState("");
    const [contact_person_work_phone, setContactPersonWorkPhone] = useState("");
    const [contact_person_mobile_no, setContactPersonMobileNo] = useState("");
    const [billing_address, setbilling_address] = useState({
        current_street_address_1: "",
        current_street_address_2: "",
        current_country: "",
        current_state: "",
        current_city: "",
        current_zip_code: "",
    });
    const [shipping_address, setshipping_address] = useState({
        current_street_address_1: "",
        current_street_address_2: "",
        current_country: "",
        current_state: "",
        current_city: "",
        current_zip_code: "",
    });

    useEffect(() => {
        getCustomers();
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

    const getCustomers = async () => {
        try {
            const res = await apiGet('customers');
            console.log(res);
            setCustomers(res?.data);

            if ($.fn.DataTable.isDataTable("#dataTable")) {
                $("#dataTable").DataTable().destroy();
            }

            setTimeout(() => {
                $("#dataTable").DataTable({
                    pageLength: 10,
                    ordering: false,
                });
            }, 0);
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };


    const addCustomer = async () => {
        setLoading(true);
        const data = {
            customer_name: first_name + " " + last_name,
            company_name,
            email,
            phone_number,
            billing_cycle,
            paymentTerms,
            title,
            first_name,
            middle_name,
            last_name,
            company_display_name,
            mobile_number,
            fax,
            other,
            website,
            notes,
            contact_person_salutation,
            contact_person_first_name,
            contact_person_middle_name,
            contact_person_last_name,
            contact_person_email,
            contact_person_work_phone,
            contact_person_mobile_no,
            billing_address,
            shipping_address
        };
        console.log(data);
        const res = await apiPost('customers/add', data);
        console.log('response', res);
        if (res?.data?.status === true) {
            toast.success(res?.data?.message);
            getCustomers();
            setLoading(false);
        } else {
            setLoading(false);
        }
    }

    return (
        <div className="card basic-data-table">
            <ToastContainer />
            <div className="card-title m-3">
                <div className="d-flex align-items-center justify-content-between ">
                    <h3 className="text-lg font-semibold text-primary-600 mb-2">Customers</h3>
                    <button type="submit" className="btn btn-primary-600" data-bs-toggle="modal" data-bs-target="#addcustomer">Add Customer</button>
                    <div class="modal fade" id="addcustomer" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Customer</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="row gy-3 mb-50">
                                                        {/* Personal Information */}
                                                        <div className="col-md-3">
                                                            <label className="form-label">Title</label>
                                                            <select className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}>
                                                                <option value="Mr">Mr</option>
                                                                <option value="Miss">Miss</option>
                                                                <option value="Mrs">Mrs</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">First Name</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Middle Name</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={middle_name} onChange={(e) => setMiddleName(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Last Name</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Company Name</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={company_name} onChange={(e) => setCompanyName(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Company Display Name</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={company_display_name} onChange={(e) => setCompanyDisplayName(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Email</label>
                                                            <input type="email" className="form-control" placeholder=""
                                                                value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Phone</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Mobile Number</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={mobile_number} onChange={(e) => setMobileNumber(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Fax</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={fax} onChange={(e) => setFax(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Other</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={other} onChange={(e) => setOther(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Website</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={website} onChange={(e) => setWebsite(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    {/* Billing Address */}
                                                    <div className="row mb-4">
                                                        <h5 className="card-title">Billing Address</h5>
                                                        <div className="col-md-4">
                                                            <label className="form-label">Street Address 1</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={billing_address.current_street_address_1} onChange={(e) => setbilling_address({
                                                                    ...billing_address,
                                                                    current_street_address_1: e.target.value
                                                                })} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label">Street Address 2</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={billing_address.current_street_address_2} onChange={(e) => setbilling_address({
                                                                    ...billing_address,
                                                                    current_street_address_2: e.target.value
                                                                })} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label">Country</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={billing_address.current_country} onChange={(e) => setbilling_address({
                                                                    ...billing_address,
                                                                    current_country: e.target.value
                                                                })} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label">City</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={billing_address.current_city} onChange={(e) => setbilling_address({
                                                                    ...billing_address,
                                                                    current_city: e.target.value
                                                                })} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label">State</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={billing_address.current_state} onChange={(e) => setbilling_address({
                                                                    ...billing_address,
                                                                    current_state: e.target.value
                                                                })} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label">Zip Code</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={billing_address.current_zip_code} onChange={(e) => setbilling_address({
                                                                    ...billing_address,
                                                                    current_zip_code: e.target.value
                                                                })} />
                                                        </div>
                                                    </div>
                                                    {/* Shipping Address */}
                                                    <div className="row mt-40">
                                                        <h5 className="card-title">Shipping Address</h5>
                                                        <div className="col-md-4">
                                                            <label className="form-label">Street Address 1</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={shipping_address.current_street_address_1} onChange={(e) => setshipping_address({
                                                                    ...shipping_address,
                                                                    current_street_address_1: e.target.value
                                                                })} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label">Street Address 2</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={shipping_address.current_street_address_2} onChange={(e) => setshipping_address({
                                                                    ...shipping_address,
                                                                    current_street_address_2: e.target.value
                                                                })} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label">Country</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={shipping_address.current_country} onChange={(e) => setshipping_address({
                                                                    ...shipping_address,
                                                                    current_country: e.target.value
                                                                })} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label">City</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={shipping_address.current_city} onChange={(e) => setshipping_address({
                                                                    ...shipping_address,
                                                                    current_city: e.target.value
                                                                })} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label">State</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={shipping_address.current_state} onChange={(e) => setshipping_address({
                                                                    ...shipping_address,
                                                                    current_state: e.target.value
                                                                })} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label">Zip Code</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={shipping_address.current_zip_code} onChange={(e) => setshipping_address({
                                                                    ...shipping_address,
                                                                    current_zip_code: e.target.value
                                                                })} />
                                                        </div>
                                                    </div>
                                                    {/* Notes */}
                                                    <div className="row mt-40">
                                                        <div className="col-12">
                                                            <label className="form-label">Notes</label>
                                                            <textarea
                                                                className="form-control"
                                                                rows="3"
                                                                placeholder=""
                                                                value={notes}
                                                                onChange={(e) => setNotes(e.target.value)}></textarea>
                                                        </div>
                                                    </div>

                                                    {/* Payments Section */}
                                                    <div className="row mt-40">
                                                        <h5 className="card-title">Payments</h5>
                                                        <div className="col-md-6">
                                                            <label className="form-label">Billing Cycle</label>
                                                            <select className="form-control" value={billing_cycle} onChange={(e) => setbilling_cycle(e.target.value)}>
                                                                <option>Weekly</option>
                                                                <option>BIWeekly</option>
                                                                <option>Monthly</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="form-label">Payment Terms</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} />
                                                        </div>
                                                    </div>

                                                    {/* Contact Person Section */}
                                                    <div className="row mt-40">
                                                        <h5 className="card-title">Contact Person</h5>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Salutation</label>
                                                            <select className="form-control" value={contact_person_salutation} onChange={(e) => setContactPersonSalutation(e.target.value)}>
                                                                <option>Mr</option>
                                                                <option>Mrs</option>
                                                                <option>Miss</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">First Name</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={contact_person_first_name}
                                                                onChange={(e) => setContactPersonFirstName(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Middle Name</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={contact_person_middle_name}
                                                                onChange={(e) => setContactPersonMiddleName(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Last Name</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={contact_person_last_name}
                                                                onChange={(e) => setContactPersonLastName(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Email</label>
                                                            <input type="email" className="form-control" placeholder=""
                                                                value={contact_person_email}
                                                                onChange={(e) => setContactPersonEmail(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Work Phone</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={contact_person_work_phone}
                                                                onChange={(e) => setContactPersonWorkPhone(e.target.value)} />
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label className="form-label">Mobile Number</label>
                                                            <input type="text" className="form-control" placeholder=""
                                                                value={contact_person_mobile_no}
                                                                onChange={(e) => setContactPersonMobileNo(e.target.value)} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8" data-bs-dismiss="modal">Cancel</button>
                                    {loading ? (
                                        <button
                                            className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                        >
                                            Loading...
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                            onClick={addCustomer}
                                        >
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="card-body">
                <table
                    className="table bordered-table mb-0"
                    id="dataTable"
                    data-page-length={10}
                >
                    <thead>
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers ? <>
                            {customers?.map((customer, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="text-primary-600 fw-semibold flex-grow-1">
                                                {customer?.customer_name}
                                            </span>
                                        </div>
                                    </td>
                                    <td>{customer?.company_name}</td>
                                    <td>{customer?.email}</td>
                                    <td >
                                        <span className={`bg-${customer?.status === '1' ? 'success-focus' : 'danger-focus'} text-${customer?.status === '1' ? 'success-main' : 'danger-main'} px-24 py-4 rounded-pill fw-medium text-sm`}>
                                            {customer.status == "1" ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <button className="btn btn-primary-600 btn-sm">Edit</button>
                                    </td>
                                </tr>
                            ))}</> : <>No data Found</>

                        }

                    </tbody>
                </table>
            </div>
        </div >

    )
}

export default CustomerLayer