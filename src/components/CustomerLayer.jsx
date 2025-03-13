
import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import 'datatables.net-dt/js/dataTables.dataTables.js';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { apiGet, apiPost } from '../services/client';
import { toast, ToastContainer } from 'react-toastify';
import { RiseLoader } from 'react-spinners';

const CustomerLayer = () => {
    const [customers, setCustomers] = useState([]);
    const [buttonLoading, setButtonLoading] = useState(false);
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
        current_state: "",
        current_city: "",
        current_country: "",
        current_zip_code: "",
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};
        if (!first_name) newErrors.firstName = "First Name is required";
        if (!last_name) newErrors.lastName = "Last Name is required";
        if (!email) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format";
        if (!phone_number) newErrors.phoneNumber = "Phone number is required";
        else if (!/^\d{10}$/.test(phone_number)) newErrors.phoneNumber = "Invalid phone number";
        if (!company_name) newErrors.companyName = "Company Name is required";
        if (!company_display_name) newErrors.companyDisplayName = "Company Display Name is required";
        if (!mobile_number) newErrors.mobileNumber = "Mobile Number is required";
        if (!fax) newErrors.fax = "Fax is required";
        if (!other) newErrors.other = "Other field is required";
        if (!website) newErrors.website = "Website is required";
        if (!billing_address.current_street_address_1) newErrors.current_street_address_1 = "Street Address 1 is required";
        if (!billing_address.current_country) newErrors.current_country = "Country is required";
        if (!billing_address.current_city) newErrors.current_city = "City is required";
        if (!billing_address.current_state) newErrors.current_state = "State is required";
        if (!billing_address.current_zip_code) newErrors.current_zip_code = "Zip Code is required";
        if (!shipping_address.current_street_address_1) newErrors.shipping_street_address_1 = "Street Address 1 is required";
        if (!shipping_address.current_country) newErrors.shipping_country = "Country is required";
        if (!shipping_address.current_city) newErrors.shipping_city = "City is required";
        if (!shipping_address.current_state) newErrors.shipping_state = "State is required";
        if (!shipping_address.current_zip_code) newErrors.shipping_zip_code = "Zip Code is required";
        if (!notes) newErrors.notes = "Notes are required";
        if (!billing_cycle) newErrors.billingCycle = "Billing Cycle is required";
        if (!paymentTerms) newErrors.paymentTerms = "Payment Terms are required";
        if (!contact_person_first_name) newErrors.contactPersonFirstName = "First Name is required";
        if (!contact_person_last_name) newErrors.contactPersonLastName = "Last Name is required";
        if (!contact_person_email) newErrors.contactPersonEmail = "Email is required";
        if (!contact_person_mobile_no) newErrors.contactPersonMobileNo = "Mobile Number is required";
        if (!contact_person_work_phone) newErrors.workPhone = "Work Phone is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

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
        setLoading(true);
        try {
            const res = await apiGet('customers');
            console.log(res);
            localStorage.setItem("customers", JSON.stringify(res.data));
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
            setLoading(false);

        } catch (error) {
            setLoading(false);
            console.error("Error fetching customers:", error);
        }
    };


    const addCustomer = async () => {
        setButtonLoading(true);
        if (!validate()) {
            setButtonLoading(false);
            return;
        }
        try {
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
                await getCustomers();
                setButtonLoading(false);
            } else {
                setButtonLoading(false);
            }
        } catch (error) {
            setButtonLoading(false);
            console.log('Something went wrong');
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            toast.error("Please fill all the required fields");
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
                    <div className="card basic-data-table">
                        <ToastContainer />
                        <div className="card-title m-3">
                            <div className="d-flex align-items-center justify-content-between ">
                                <h3 className="text-lg font-semibold text-primary-600 mb-2">Customers</h3>
                                <button type="submit" className="btn btn-primary-600" data-bs-toggle="modal" data-bs-target="#addcustomer">Add Customer</button>
                                <div className="modal fade" id="addcustomer" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Customer</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="col-md-12">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="row gy-3 mb-50">
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Title</label>
                                                                        <select className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}>
                                                                            <option value="">Select</option>
                                                                            <option value="Mr">Mr</option>
                                                                            <option value="Miss">Miss</option>
                                                                            <option value="Mrs">Mrs</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">First Name</label>
                                                                        <input type="text" className="form-control" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                                                        {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Middle Name</label>
                                                                        <input type="text" className="form-control" value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Last Name</label>
                                                                        <input type="text" className="form-control" value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                                                        {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Company Name</label>
                                                                        <input type="text" className="form-control" value={company_name} onChange={(e) => setCompanyName(e.target.value)} />
                                                                        {errors.companyName && <small className="text-danger">{errors.companyName}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Company Display Name</label>
                                                                        <input type="text" className="form-control" value={company_display_name} onChange={(e) => setCompanyDisplayName(e.target.value)} />
                                                                        {errors.companyDisplayName && <small className="text-danger">{errors.companyDisplayName}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Email</label>
                                                                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                                        {errors.email && <small className="text-danger">{errors.email}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Phone</label>
                                                                        <input type="text" className="form-control" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
                                                                        {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Mobile Number</label>
                                                                        <input type="text" className="form-control" value={mobile_number} onChange={(e) => setMobileNumber(e.target.value)} />
                                                                        {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Fax</label>
                                                                        <input type="text" className="form-control" value={fax} onChange={(e) => setFax(e.target.value)} />
                                                                        {errors.fax && <small className="text-danger">{errors.fax}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Other</label>
                                                                        <input type="text" className="form-control" value={other} onChange={(e) => setOther(e.target.value)} />
                                                                        {errors.other && <small className="text-danger">{errors.other}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Website</label>
                                                                        <input type="text" className="form-control" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                                                        {errors.website && <small className="text-danger">{errors.website}</small>}
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-4">
                                                                    <h5 className="card-title">Billing Address</h5>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Street Address 1</label>
                                                                        <input type="text" className="form-control" value={billing_address.current_street_address_1} onChange={(e) => setbilling_address({ ...billing_address, current_street_address_1: e.target.value })} />
                                                                        {errors.current_street_address_1 && <small className="text-danger">{errors.current_street_address_1}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Street Address 2</label>
                                                                        <input type="text" className="form-control" value={billing_address.current_street_address_2} onChange={(e) => setbilling_address({ ...billing_address, current_street_address_2: e.target.value })} />
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Country</label>
                                                                        <input type="text" className="form-control" value={billing_address.current_country} onChange={(e) => setbilling_address({ ...billing_address, current_country: e.target.value })} />
                                                                        {errors.current_country && <small className="text-danger">{errors.current_country}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">City</label>
                                                                        <input type="text" className="form-control" value={billing_address.current_city} onChange={(e) => setbilling_address({ ...billing_address, current_city: e.target.value })} />
                                                                        {errors.current_city && <small className="text-danger">{errors.current_city}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">State</label>
                                                                        <input type="text" className="form-control" value={billing_address.current_state} onChange={(e) => setbilling_address({ ...billing_address, current_state: e.target.value })} />
                                                                        {errors.current_state && <small className="text-danger">{errors.current_state}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Zip Code</label>
                                                                        <input type="text" className="form-control" value={billing_address.current_zip_code} onChange={(e) => setbilling_address({ ...billing_address, current_zip_code: e.target.value })} />
                                                                        {errors.current_zip_code && <small className="text-danger">{errors.current_zip_code}</small>}
                                                                    </div>
                                                                </div>
                                                                <div className="row mb-4">
                                                                    <h5 className="card-title">Shipping Address</h5>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Street Address 1</label>
                                                                        <input type="text" className="form-control" value={shipping_address.current_street_address_1} onChange={(e) => setshipping_address({ ...shipping_address, current_street_address_1: e.target.value })} />
                                                                        {errors.shipping_street_address_1 && <small className="text-danger">{errors.shipping_street_address_1}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Street Address 2</label>
                                                                        <input type="text" className="form-control" value={shipping_address.current_street_address_2} onChange={(e) => setshipping_address({ ...shipping_address, current_street_address_2: e.target.value })} />
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Country</label>
                                                                        <input type="text" className="form-control" value={shipping_address.current_country} onChange={(e) => setshipping_address({ ...shipping_address, current_country: e.target.value })} />
                                                                        {errors.shipping_country && <small className="text-danger">{errors.shipping_country}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">City</label>
                                                                        <input type="text" className="form-control" value={shipping_address.current_city} onChange={(e) => setshipping_address({ ...shipping_address, current_city: e.target.value })} />
                                                                        {errors.shipping_city && <small className="text-danger">{errors.shipping_city}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">State</label>
                                                                        <input type="text" className="form-control" value={shipping_address.current_state} onChange={(e) => setshipping_address({ ...shipping_address, current_state: e.target.value })} />
                                                                        {errors.shipping_state && <small className="text-danger">{errors.shipping_state}</small>}
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <label className="form-label">Zip Code</label>
                                                                        <input type="text" className="form-control" value={shipping_address.current_zip_code} onChange={(e) => setshipping_address({ ...shipping_address, current_zip_code: e.target.value })} />
                                                                        {errors.shipping_zip_code && <small className="text-danger">{errors.shipping_zip_code}</small>}
                                                                    </div>
                                                                </div>
                                                                <div className="row mt-40">
                                                                    <div className="col-12">
                                                                        <label className="form-label">Notes</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            rows="3"
                                                                            placeholder=""
                                                                            value={notes}
                                                                            onChange={(e) => setNotes(e.target.value)}></textarea>
                                                                        {errors.notes && <small className="text-danger">{errors.notes}</small>}
                                                                    </div>
                                                                </div>

                                                                {/* Payments Section */}
                                                                <div className="row mt-40">
                                                                    <h5 className="card-title">Payments</h5>
                                                                    <div className="col-md-6">
                                                                        <label className="form-label">Billing Cycle</label>
                                                                        <select className="form-control" value={billing_cycle} onChange={(e) => setbilling_cycle(e.target.value)}>
                                                                            <option value="">Select Billing Cycle</option>
                                                                            <option>Weekly</option>
                                                                            <option>BIWeekly</option>
                                                                            <option>Monthly</option>
                                                                        </select>
                                                                        {errors.billingCycle && <small className="text-danger">{errors.billingCycle}</small>}
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label className="form-label">Payment Terms</label>
                                                                        <input type="text" className="form-control" placeholder="" value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} />
                                                                        {errors.paymentTerms && <small className="text-danger">{errors.paymentTerms}</small>}
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
                                                                        <input type="text" className="form-control" value={contact_person_first_name} onChange={(e) => setContactPersonFirstName(e.target.value)} />
                                                                        {errors.contactPersonFirstName && <small className="text-danger">{errors.contactPersonFirstName}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Middle Name</label>
                                                                        <input type="text" className="form-control" value={contact_person_middle_name} onChange={(e) => setContactPersonMiddleName(e.target.value)} />

                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Last Name</label>
                                                                        <input type="text" className="form-control" value={contact_person_last_name} onChange={(e) => setContactPersonLastName(e.target.value)} />
                                                                        {errors.contactPersonLastName && <small className="text-danger">{errors.contactPersonLastName}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Email</label>
                                                                        <input type="email" className="form-control" value={contact_person_email} onChange={(e) => setContactPersonEmail(e.target.value)} />
                                                                        {errors.contactPersonEmail && <small className="text-danger">{errors.contactPersonEmail}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Work Phone</label>
                                                                        <input type="text" className="form-control" value={contact_person_work_phone} onChange={(e) => setContactPersonWorkPhone(e.target.value)} />
                                                                        {errors.workPhone && <small className="text-danger">{errors.workPhone}</small>}
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Mobile Number</label>
                                                                        <input type="text" className="form-control" value={contact_person_mobile_no} onChange={(e) => setContactPersonMobileNo(e.target.value)} />
                                                                        {errors.contactPersonMobileNo && <small className="text-danger">{errors.contactPersonMobileNo}</small>}
                                                                    </div>
                                                                </div>
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
                                        {/* <th scope="col">Action</th> */}
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
                                                        {customer?.status == "1" ? "Active" : "Inactive"}
                                                    </span>
                                                </td>
                                                {/* <td className="text-center">
                                        <button className="btn btn-primary-600 btn-sm">Edit</button>
                                    </td> */}
                                            </tr>
                                        ))}</> : <>No data Found</>

                                    }

                                </tbody>
                            </table>
                        </div>
                    </div >
                </>
            )}
        </>
    );
}
export default CustomerLayer
