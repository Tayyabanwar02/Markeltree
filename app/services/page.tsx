import React from 'react';
import { BreadCrumb } from '@/components/breadcrumb/BreadCrumb';
import LatestServiceV1 from "@/components/latestService/LatestServiceV1";
import PricingPlansStyleTwo from "@/components/pricingPlans/PricingPlansStyleTwo";
import ClientLayout from "@/components/layouts/ClientLayout";
import ServiceDetailPage from '@/components/services/servicedetailpage';

const Services = () => {
    return (
        <ClientLayout>
            {/* Breadcrumb with specific background for Services */}
            <BreadCrumb
                pageTitle="Services"
                breadcrumb="services"
                backgroundImage="/images/background/Services-cover.jpg" // ✅ Make sure this image exists
            />            
            <LatestServiceV1 partial={false} />
            <ServiceDetailPage />
        </ClientLayout>
    );
};

export default Services;
