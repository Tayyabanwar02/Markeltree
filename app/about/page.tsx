import React from 'react';
import { BreadCrumb } from '@/components/breadcrumb/BreadCrumb';
import AboutV1 from '@/components/about/AboutV1';
import ProcessV1 from '@/components/process/ProcessV1';
import TestimonialV3 from '@/components/testimonial/TestimonialV3';
import AboutV2 from "@/components/about/AboutV2";
import AboutV3 from "@/components/about/AboutV3";
import NewsLetterV1 from "@/components/newLetter/NewsLetterV1";
import ClientLayout from "@/components/layouts/ClientLayout";

import FaqV1 from '@/components/faq/FaqV1';

const About = () => {
    return (
        <ClientLayout>
            {/* Breadcrumb with custom background */}
            <BreadCrumb
                pageTitle="About Us"
                breadcrumb="about"
                backgroundImage="/images/background/about-cover.jpg"
                
            />

            {/* Content Sections */}
            <AboutV2 />
            <AboutV1 />
            <ProcessV1 />
            <FaqV1 />
            <AboutV3 />
           <br /><br />
            <NewsLetterV1 />
            <TestimonialV3 />
        </ClientLayout>
    );
};

export default About;
