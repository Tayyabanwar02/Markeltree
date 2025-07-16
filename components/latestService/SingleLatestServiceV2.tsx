"use client";
import React from 'react';
import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";

type itemData = {
    id: number;
    icon: string;
    title: string;
    text: string;
}

const SingleLatestServiceV2 = ({ item, index } : { item: itemData; index: number } ) => {
    const { id, icon, title, text } = item;
    const delay = index * 0.2;
    
    return (
        <motion.div
            className="col-md-6 col-lg-6 col-xl-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay, duration: 0.5, ease: "easeOut" }}
        >
            <div className="te-feature style-2">
                <Link href={`/service-details/${id}`} className="feature-inner">
                    <div className="feature-icon">
                        <Image src={icon} width={64} height={64} alt={title} />
                    </div>
                    <div className="feature-content">
                        <h4 className="title">{title}</h4>
                        <p>{text}</p>
                    </div>
                </Link>
            </div>
        </motion.div>
    );
};

export default SingleLatestServiceV2;