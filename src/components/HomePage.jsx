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
    const [allPermission, setAllPermission] = useState([]);

    const getCustomers = async () => {
        setLoading(true);
        try {
            const res = await apiGet('customers');
            console.log(res);
            setCustomers((res?.data ?? []).slice(0, 5));
            setTimeout(() => setLoading(false), 1000);
        } catch (error) {
            console.error("Error fetching customers:", error);
            setLoading(false);
        }
    };


    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                    <RiseLoader color="#077f91" size={30} />
                </div>
            ) : (
                <>
                    <div className="row mb-16">
                        <ProfileCard />
                        <TotalCustomer />
                        <Investment />
                    </div>
                    <div className="row mb-16">
                        <CustomersCards customers={customers} />
                        <InvoicingCard />
                    </div>
                </>
            )}
        </>
    );
};

export default HomePage;
