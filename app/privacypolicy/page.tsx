"use client";

import React from "react";
import ClientLayout from "@/components/layouts/ClientLayout";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import PrivacyPolicyContent from "@/components/privacypolicy/privacypolicy";

const PrivacyPolicyPage = () => { 
  return (
    <ClientLayout>
      <BreadCrumb pageTitle="Privacy Policy" breadcrumb="Privacy Policy" />
      <PrivacyPolicyContent />
    </ClientLayout>
  );
};

export default PrivacyPolicyPage;
