import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import MasterLayout from "../masterLayout/MasterLayout";
import { apiGet, apiPost } from "../services/client";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { toast, ToastContainer } from 'react-toastify';

const AddInvoice = () => {
    const [customer, setCustomer] = useState('');
    const [purchaseOrderId, setPurchaseOrderId] = useState('');
    const [invoice, setInvoice] = useState('');
    const [orderNo, setOrderNo] = useState('');
    const [invoiceDate, setInvoiceDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [terms, setTerms] = useState('');
    const [invoiceMonth, setInvoiceMonth] = useState('');
    const [subject, setSubject] = useState('');
    const [productService, setProductService] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [rate, setRate] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [selectedCustomerId, setSelectedCustomerId] = useState(0);
    const [customersOrders, setCustomersOrders] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showEndCalendar, setShowEndCalendar] = useState(false);
    const [discountType, setDiscountType] = useState('');
    const [discountValue, setDiscountValue] = useState();
    const [tax, setTax] = useState("");
    const [userTerms, setUserTerms] = useState('');
    const [customerNotes, setCoustomerNotes] = useState('');
    const [grandTotal, setGrandTotal] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        const storedCustomers = JSON.parse(localStorage.getItem("customers"));
        if (storedCustomers) {
            setCustomers(storedCustomers);
        }
    }, []);

    const getCustomersOrders = async (customer_id) => {
        try {
            const res = await apiGet(`purchase_orders/get/${customer_id}/orders`);
            if (res.data.status == true) {
                console.log(res.data.data);
                setCustomersOrders(res.data.data);
            } else {
            }

        } catch (error) {
            console.error("Error fetching employee:", error);
        }
    };

    const addInvoice = async () => {
        setButtonLoading(true);
        try {
            const data = {
                customer_name: selectedCustomerId,
                purchase_order: purchaseOrderId,
                invoice_date: invoiceDate,
                due_date: dueDate,
                terms: terms,
                invoice_month: invoiceMonth,
                subject: subject,
                discount_type: discountType,
                discount_value: discountValue,
                tax: tax,
                terms_and_condition: userTerms,
                customer_notes: customerNotes,
                sub_total: totalAmount,
                tax_rate: rate,
                grand_total: grandTotal,
                invoice_status: "Pending",
                invoice_items: [{
                    product_service: productService,
                    description: description,
                    quantity: quantity,
                    rate: rate,
                    total_amount: totalAmount,
                }]

            }
            const res = await apiPost('invoices/add', data);
            if (res?.data?.status == true) {
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

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const calculateTotal = (rt) => {
        const total = (parseFloat(quantity) || 0) * (parseFloat(rt) || 0);
        setTotalAmount(total.toFixed(0));
    };

    function calculateGrandTotal() {
        let discountAmount = 0;
        if (discountType === "percentage") {
            discountAmount = (totalAmount * discountValue) / 100;
        } else if (discountType === "flat") {
            discountAmount = discountValue;
        }
        const discountedTotal = totalAmount - discountAmount;

        const finalTotal = discountedTotal < 0 ? 0 : discountedTotal;

        const taxAmount = (finalTotal * tax) / 100;

        const grandTotal = finalTotal + taxAmount;

        setGrandTotal(grandTotal.toFixed(0));
    }


    return (
        <>
            <MasterLayout>
                <div className="col-md-12">
                    <ToastContainer />
                    <div className="card">
                        <div className="card-body">
                            <div className="row gy-3 mb-50">
                                <h6 className="mb-0 fw-bold text-lg mt-20 text-primary-600 border-bottom border-primary-600 pb-2 w-100">Add Invoice</h6>
                                <div className="col-md-3">
                                    <label className="form-label">Customer Name</label>
                                    <select
                                        className="form-control"
                                        value={selectedCustomerId}
                                        onChange={(e) => {
                                            const customer_id = e.target.value;
                                            setSelectedCustomerId(customer_id);
                                            const selectedCustomer = customers.find(cust => cust.customer_id === customer_id);
                                            setSubject(selectedCustomer ? `${selectedCustomer.customer_name} - Invoice` : "Invoice");
                                            if (customer_id) {
                                                getCustomersOrders(customer_id);
                                            } else {
                                                setCustomersOrders([]);
                                            }
                                        }}
                                    >
                                        <option value="">Select Customer</option>
                                        {customers.map((customer, index) => (
                                            <option key={index} value={customer.customer_id}>
                                                {customer.customer_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Purchase Order Id</label>
                                    <select
                                        className="form-control"
                                        value={purchaseOrderId}
                                        onChange={(e) => setPurchaseOrderId(e.target.value)
                                        }
                                    >
                                        <option value="">Select Order</option>
                                        {customersOrders.map((customer, index) => (
                                            <option key={index} value={customer.purchase_order_id}>
                                                {customer.po_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* <div className="col-md-3">
                                    <label className="form-label">Invoice</label>
                                    <input type="text" className="form-control" placeholder=""
                                        value={invoice} onChange={(e) => setInvoice(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Order Number</label>
                                    <input type="text" className="form-control" placeholder=""
                                        value={orderNo} onChange={(e) => setOrderNo(e.target.value)} />
                                </div> */}
                                <div className="col-md-3 position-relative">
                                    <label className="form-label">Invoice Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Select Start Date"
                                        value={invoiceDate}
                                        readOnly
                                        onClick={() => setShowCalendar(!showCalendar)}
                                    />
                                    {showCalendar && (
                                        <div className="position-absolute bg-white shadow-lg p-2 z-index-1000">
                                            <Calendar
                                                onChange={(date) => {
                                                    setInvoiceDate(formatDate(date));
                                                    setShowCalendar(false);
                                                }}
                                                value={invoiceDate}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3 position-relative">
                                    <label className="form-label">End Date</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Select End Date"
                                        value={dueDate}
                                        readOnly
                                        onClick={() => setShowEndCalendar(!showEndCalendar)}
                                    />
                                    {showEndCalendar && (
                                        <div className="position-absolute bg-white shadow-lg p-2 z-index-1000">
                                            <Calendar
                                                onChange={(date) => {
                                                    setDueDate(formatDate(date));
                                                    setShowEndCalendar(false);
                                                }}
                                                value={dueDate}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Terms</label>
                                    <select
                                        className="form-control"
                                        value={terms}
                                        onChange={(e) => setTerms(e.target.value)}
                                    >
                                        <option value="due_on_receipt">Due on Receipt</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Invoice Month</label>
                                    <select
                                        className="form-control"
                                        value={invoiceMonth}
                                        onChange={(e) => setInvoiceMonth(e.target.value)}
                                    >
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Subject</label>
                                    <input type="text" readOnly className="form-control" placeholder=""
                                        value={subject} onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                            </div>
                            <h6 className="mb-0 fw-bold text-lg m-0 text-primary-600 border-bottom border-primary-600 pb-2 w-100">
                                Invoice Items
                            </h6>
                            <div className="row gy-3 mt-10">
                                <div className="col-md-2 mt-15">
                                    <label className="form-label">Product/Service</label>
                                    <input type="text" className="form-control" placeholder=""
                                        value={productService} onChange={(e) => setProductService(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-2 mt-15">
                                    <label className="form-label">Description</label>
                                    <input type="text" className="form-control" placeholder=""
                                        value={description} onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-2 mt-15">
                                    <label className="form-label">Quantity</label>
                                    <input type="text" className="form-control" placeholder=""
                                        value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-2 mt-15">
                                    <label className="form-label">Rate</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        value={rate}
                                        onChange={(e) => {
                                            const newRate = e.target.value;
                                            setRate(newRate);
                                            calculateTotal(newRate);
                                            calculateGrandTotal();
                                        }}
                                    />
                                </div>
                                <div className="col-md-2 mt-15">
                                    <label className="form-label">Total Amount</label>
                                    <input type="text" className="form-control" placeholder=""
                                        value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)}
                                    />
                                </div>
                            </div>
                            <h6 className="mb-0 fw-bold text-lg mt-20 text-primary-600 border-bottom border-primary-600 pb-2 w-100">
                                Tax & Discount
                            </h6>
                            <div className="row gy-3 mt-10 ">
                                <div className="col-lg-7 seven-col">
                                    <div className="col-md-4 mt-15">
                                        <label className="form-label">Discount Type</label>
                                        <select
                                            className="form-control"
                                            value={discountType}
                                            onChange={(e) => {
                                                setDiscountType(e.target.value);
                                                calculateGrandTotal();
                                            }}
                                        >
                                            <option value="">Select Discount Type</option>
                                            <option value="flat">Flat</option>
                                            <option value="percentage">Percentage</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mt-15">
                                        <label className="form-label">Discount Value</label>
                                        <input type="number" className="form-control" placeholder=""
                                            value={discountValue} onChange={(e) => {
                                                setDiscountValue(e.target.value);
                                                calculateGrandTotal();
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-3 mt-15">
                                        <label className="form-label">Tax</label>
                                        <select
                                            className="form-control"
                                            value={tax}
                                            onChange={(e) => {
                                                setTax(e.target.value);
                                                calculateGrandTotal();

                                            }}
                                        >
                                            <option value="">Select Tax</option>
                                            <option value="0">No Tax</option>
                                            <option value="10">10%</option>
                                            <option value="20">20%</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mt-15">
                                        <label className="form-label">Terms & Conditions</label>
                                        <input type="text" className="form-control" placeholder=""
                                            value={userTerms} onChange={(e) => setUserTerms(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-3 mt-15">
                                        <label className="form-label">Customers Notes</label>
                                        <input type="text" className="form-control" placeholder=""
                                            value={customerNotes} onChange={(e) => setCoustomerNotes(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-5 position-relative main-col-5">
                                    <div className="sub-inner">
                                        <div className="invoice-section">
                                            <div className="row my-row">
                                                <div className="col-lg-12 d-flex justify-content-between my-setting">
                                                    <span>Sub Total</span>
                                                    <span className="amount">${totalAmount}</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 d-flex justify-content-between pt-2 pb-2">
                                                    <span>Tax Rate</span>
                                                    <span className="amount">{`${tax}%`}</span>
                                                </div>
                                            </div>
                                            <div className="row total">
                                                <div className="col-lg-12 d-flex justify-content-between pt-2 pb-2">
                                                    <span >Total</span>
                                                    <span className="amount">${grandTotal}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 d-flex justify-content-end btn-top gap-3">
                                <button type="button" className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8 mt-10"
                                    onClick={() => navigate(-1)}>Cancel</button>
                                {buttonLoading ? (
                                    <button
                                        className="btn btn-primary-600 text-md px-56 py-11 radius-8"
                                    >
                                        Loading...
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary-600 text-md px-56 py-11 radius-8 mt-10"
                                        onClick={() => addInvoice()}
                                    >
                                        Save
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout>

        </>
    );
};

export default AddInvoice;







