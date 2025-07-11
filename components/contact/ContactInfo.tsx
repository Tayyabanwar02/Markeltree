import React from 'react';
import SocialShare from '../slider/SocialShare';

const ContactInfo = () => {
    return (
        <>
            <div className="te-contact-info-wrapper">
                <div className="te-contact-info">

                    <div className="single-contact-info">
                        <div className="contact-info-inner">
                            <div className="title-wrapper">
                                <h3 className="title">Address</h3>
                            </div>
                            <div className="content-wrapper">
                                <p>1005 17th Ave S, Nashville, TN 37212</p>
                            </div>
                        </div>
                        <div className="contact-info-inner">
                            <div className="title-wrapper">
                                <h3 className="title">Email Address</h3>
                            </div>
                            <div className="content-wrapper">
                                <p>info@markeltree.com </p>
                            </div>
                        </div>
                    </div>
                    <div className="single-contact-info">
                        <div className="contact-info-inner">
                            <div className="title-wrapper">
                                <h3 className="title">Phone number</h3>
                            </div>
                            <div className="content-wrapper">
                                <p>(610) 413 1829 <br/> 24 hour open </p>
                            </div>
                        </div>
                        <div className="contact-info-inner">
                            <div className="title-wrapper">
                                <h3 className="title">Social media</h3>
                            </div>
                            <div className="content-wrapper">
                                <div className="social-link">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;