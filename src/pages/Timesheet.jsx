import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import TimesheetLayer from "../components/child/TimeSheetLayer";

const TimeSheet = () => {
    return (
        <>
            <MasterLayout>
                <TimesheetLayer />
            </MasterLayout>
        </>
    );
};

export default TimeSheet;
