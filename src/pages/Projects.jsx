import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js'
import MastersLayer from "../components/MastersLayers";
import ProjectsLayer from "../components/ProjectsLayer";
const Projects = () => {
    return (
        <>
            <MasterLayout>

                <ProjectsLayer />

            </MasterLayout>
        </>
    );
};

export default Projects;
