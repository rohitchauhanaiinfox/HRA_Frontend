import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import EmployeeLayer from "../components/child/EmployeeLayer";
import InvoicingLayer from "../components/InvoicingLayer";

const Invoicing = () => {
    return (
        <>
            <MasterLayout>

                <InvoicingLayer />

            </MasterLayout>
        </>
    );
};

export default Invoicing;
