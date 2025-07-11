"use client"; 

import React from "react";
import { motion } from "framer-motion";

const privacypolicy = () => {
  return (
    <section className="bg-[#0f0f0f] text-gray-300 py-20 px-60 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto space-y-10">
        {[
          {
            title: "Personal Data",
            text: `When you register on Markeltree, we may collect personal data such as your full name, address, phone number, email ID, date of birth, billing details, and card information. This is to provide better service outcomes and to fulfill contractual obligations with stakeholders.`,
          },
          {
            title: "Private Information",
            text: `Additional required information like age, education level, profession, gender, and demographics may also be collected and stored. This helps us contact you or identify you as needed.`,
          },
          {
            title: "Automatically Collected Data",
            text: `We also collect non-identifiable data such as your browser type, domain names, and anonymized analytics to improve our services.`,
          },
          {
            title: "Aggregation of Data",
            text: `We may combine and anonymize your personal data for analytical purposes, which can be shared with business partners, vendors, or agents.`,
          },
          {
            title: "Cookies",
            text: `Cookies are used to improve the functionality of our website and help analyze usage data. These are stored in your browser during your session.`,
          },
          {
            title: "Info Sharing",
            text: `We may share anonymized data with third parties for business needs. Personal identity will not be disclosed unless required by law or to protect public interest, fulfill legal obligations, or defend our rights.`,
          },
          {
            title: "Underage Users",
            text: `Users under 18 are not permitted to submit personal information. If you are underage, please refrain from registering.`,
          },
          {
            title: "External Links",
            text: `This privacy policy applies only to Markeltree. Third-party links are not covered under our terms.`,
          },
          {
            title: "Security",
            text: `We implement safeguards to prevent unauthorized access, data manipulation, or misuse. However, use caution when submitting data over the internet.`,
          },
          {
            title: "Update and Access",
            text: `If your personal data is incorrect or outdated, contact us using the form linked below. We will assist with updating your details.`,
          },
          {
            title: "OUR REFUND POLICY",
            text: "In terms of our development services, and due to the general cyber alignment of these services and the extensive resource allocation required at project inception, all sales are final, and refunds are not applicable."

          },
          {
            title: "Opt-Out Policy",
            text: `You may opt out of communications or raise concerns about your data at any time by contacting us using the form.`,
          },
          {
            title: "Contact Us",
            text: `For any questions regarding this Privacy Policy or data handling, please contact us through our official form: `,
            link: true,
          },
        ].map(({ title, text, link }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h4 className="text-2xl md:text-3x1 font-semibold text-white mb-1.5">
              {title}
            </h4>
            <p className="text-white-400 leading-relaxed">
              {text}
              {link && (
                <a href="/contact" className="text-green-400 underline ml-1">
                  Contact Us
                </a>
              )}
            </p>
          </motion.div>
        ))}
      </div><br />
    </section>
  );
};

export default privacypolicy;
