import React from 'react';
import Link from "next/link";

const FooterServicesWidget = () => {
    return (
        <>
            <div className="te-footer-widget te_widget_nav_menu">
                <h2 className="te-footer-widget-title">Our Services</h2>
                <ul className="menu">
                    <li><Link href="/service-details/1">Spark Mind AI</Link></li>
                    <li><Link href="/service-details/2">AI Forge Labs</Link></li>
                    <li><Link href="/service-details/3">Synergy Sense AI</Link></li>
                    <li><Link href="/service-details/4">Think Ahead AI</Link></li>
                </ul>
            </div>
        </>
    );
};

export default FooterServicesWidget;