import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import Homepage from "../components/HomePage";

const Dashboard = () => {
    return (
        <>
            {/* MasterLayout */}
            <MasterLayout>
              
        <Homepage/>

            </MasterLayout>
        </>
    );
};

export default Dashboard;
