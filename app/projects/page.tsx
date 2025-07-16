import React from 'react';
import { BreadCrumb } from '@/components/breadcrumb/BreadCrumb';
import ProjectV2 from '@/components/project/ProjectV2';
import ClientLayout from "@/components/layouts/ClientLayout";

const Projects = () => {
    return (
        <ClientLayout>
            {/* Breadcrumb with custom background image */}
            <BreadCrumb
                pageTitle="Projects"
                breadcrumb="projects"
                backgroundImage="/images/background/portfolio-cover.jpg" // Make sure this file exists
            />

            {/* Projects content */}
            <ProjectV2 style="project-page-wrapper" partial={false} />
        </ClientLayout>
    );
};

export default Projects;
