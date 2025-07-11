"use client";
import React from "react";
import {motion} from "framer-motion";
import PricingV1Data from "@/jsonData/pricingPlans/PricingV1Data.json";
import SinglePricingPlans from "@/components/pricingPlans/SinglePricingPlans";

const PricingPlans = () => {
    return (
        <>
            <div className="price-area style-1">
                <div className="container">
                    <div className="row">
                        <motion.div
                            className="col-12"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                                <div className="te-section-title justify-content-center text-center">
                                    <div className="te-section-content">
                                        <div>
                                            <span className="short-title">Pricing action</span>
                                        </div>
                                        <h2 className="title">Technology that inspires us <br/> Technology for all</h2>
                                    </div>
                                </div>
                        </motion.div>
                    </div>
                    <div className="row gy-4">
                        {PricingV1Data.map((item, index) =>
                            <SinglePricingPlans key={item.id} item={item} index={index} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingPlans;