import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import ProfileLayer from "../components/child/ProfileLayer";

const Profile = () => {
    return (
        <>
            <MasterLayout>

                <ProfileLayer />

            </MasterLayout>
        </>
    );
};

export default Profile;
