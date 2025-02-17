import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import CustomerLayer from "../components/CustomerLayer";

const Customer = () => {
    return (
        <>
            {/* MasterLayout */}
            <MasterLayout>

                <CustomerLayer />

            </MasterLayout>
        </>
    );
};

export default Customer;
