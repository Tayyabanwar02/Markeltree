import React from 'react';
import { BreadCrumb } from '@/components/breadcrumb/BreadCrumb';
import ContactContent from '@/components/contact/ContactContent';
import ContactMap from '@/components/contact/ContactMap';
import ClientLayout from "@/components/layouts/ClientLayout";

const Contact = () => {
    return (
        <ClientLayout>
            {/* Breadcrumb with background image */}
            <BreadCrumb
                pageTitle="Contact"
                breadcrumb="contact"
                backgroundImage="/images/background/contact-cover.jpg" 
            />

            {/* Page Content */}
            <ContactContent />
            <ContactMap />
        </ClientLayout>
    );
};

export default Contact;
