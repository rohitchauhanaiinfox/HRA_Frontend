import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import PurchaseOrderLayer from "../components/PurchaseOrdersComp";

const PurchaseOrder = () => {
    return (
        <>
            {/* MasterLayout */}
            <MasterLayout>

                <PurchaseOrderLayer />

            </MasterLayout>
        </>
    );
};

export default PurchaseOrder;
