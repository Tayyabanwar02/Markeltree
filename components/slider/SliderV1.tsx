import React from 'react';
import Link from "next/link";
import Image from "next/image";

const SliderV1 = () => {
    return (
        <>
            <div className="banner-area style-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="te-banner-content">
                                <h1 className="gradient-title" style={{ backgroundImage: "url(/images/banner/title-bg.jpg)" }}> Connecting Design <br/> Possibilities Creating</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5 banner-content-row">
                        <div className="col-lg-8">
                            <div className="banner-image">
                                <Image
                                    className="tilt-animate"
                                    src="/images/banner/image-1.jpg"
                                    alt="image"
                                    width={850}
                                    height={490}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4  align-self-center">
                            <div className="banner-info-card style-1">
                                <div className="message-feature-card">
                                    <div className="single-msg">
                                        <div className="image">
                                            <Image
                                                src="/images/banner/user-1.jpg"
                                                alt="image"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <span className="content">What can you do for me?</span>
                                    </div>
                                    <div className="single-msg">
                                        <div className="image">
                                            <Image
                                                src="/images/banner/user-2.jpg"
                                                alt="image"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <span className="content"> I can answer questions provide information & any problem you have</span>
                                    </div>
                                    <div className="single-msg">
                                        <div className="image">
                                            <Image
                                                src="/images/banner/user-1.jpg"
                                                alt="image"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <span className="content">How does AI work?</span>
                                    </div>
                                </div>
                                <div className="content-wrapper">
                                    <p>It is a long established fact that a reader will be desn distracted by the
                                        readable content of a page when is looking at its layout</p>
                                </div>
                                <div className="btn-wrapper">
                                    <Link href="/about" className="te-theme-btn blue-btn">Learn More <i
                                        className="fa fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="blur-shape"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderV1;