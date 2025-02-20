import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import EmployeeLayer from "../components/child/EmployeeLayer";

const Employee = () => {
    return (
        <>
            <MasterLayout>

                <EmployeeLayer />

            </MasterLayout>
        </>
    );
};

export default Employee;
