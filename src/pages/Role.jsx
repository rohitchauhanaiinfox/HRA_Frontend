import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import MastersLayer from "../components/MastersLayers";
import RoleLayer from "../components/RoleLayer";
const Role = () => {
    return (
        <>
            <MasterLayout>

                <RoleLayer />

            </MasterLayout>
        </>
    );
};

export default Role;
