"use client";

import React from "react";
import ClientLayout from "@/components/layouts/ClientLayout";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import TermsAndCondition from "@/components/termsandcondition/termsandcondition";

const TermsAndConditionPage = () => {
  return (
    <ClientLayout>
      <BreadCrumb pageTitle="Terms and Condition" breadcrumb="Terms and Condition" />
      <TermsAndCondition />
    </ClientLayout>
  );
};

export default TermsAndConditionPage;
