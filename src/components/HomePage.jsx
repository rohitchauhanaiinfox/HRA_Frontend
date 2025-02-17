import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js';
import CustomersCards from "./child/CustomersCards";
import ProfileCard from "./child/ProfileCard";
import NextInvoice from "./child/NextInvoice";
import InvoicingCard from "./child/Invoicing";
import TotalCustomer from "./child/TotalCustomers";
import Investment from "./child/InvestmentChart";

const HomePage = () => {
    return (
        <>
            <div className="row mb-16">
                <ProfileCard />
                <TotalCustomer />
                <Investment />
            </div>
            <div className="row mb-16">
                <CustomersCards />
                <InvoicingCard />
            </div>
            <div className="row">


            </div>
        </>
    );
};

export default HomePage;
