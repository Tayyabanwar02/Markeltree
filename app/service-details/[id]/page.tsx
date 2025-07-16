'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { BreadCrumb } from '@/components/breadcrumb/BreadCrumb';
import ServiceDetailsContent from '@/components/services/ServiceDetailsContent';
import ServicesData from '@/jsonData/latestService/LatestServiceV2Data.json';
import ClientLayout from "@/components/layouts/ClientLayout";

const ServiceDetails = () => {
    const params = useParams();
    const id = params?.id;
    const service = ServicesData.find(service => service.id === parseInt(id as string));
    const pageTitle = service?.title || "Service Details";

    return (
        <>
            <ClientLayout>
                <BreadCrumb
                    pageTitle={pageTitle}
                    breadcrumb={service?.category || "Our Services"}
                    backgroundImage={service?.backgroundImage || "/images/background/blockchain-cover.jpg"}
                />
                {service ? (
                    <ServiceDetailsContent service={service} />
                ) : (
                    <p style={{ padding: "2rem", textAlign: "center" }}>Service not found.</p>
                )}
            </ClientLayout>
        </>
    );
};

export default ServiceDetails;
