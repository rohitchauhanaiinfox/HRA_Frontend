import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import MastersLayer from "../components/MastersLayers";
import CompanyLayer from "../components/CompanyLayer";
const Company = () => {
    return (
        <>
            <MasterLayout>

                <CompanyLayer />

            </MasterLayout>
        </>
    );
};

export default Company;
