"use client";
import React, { useRef } from 'react';
import Link from "next/link";
import Slider from 'react-slick';
import TestimonialV3Data from '@/jsonData/testimonial/TestimonialV3Data.json'
import SingleTestimonialV3 from './SingleTestimonialV3';
import {motion} from "framer-motion";

const TestimonialV3 = () => {

    const sliderRef = useRef<Slider>(null);

    const handlePrevious = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current?.slickNext();
    };

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 1500,
        slidesToShow: 2,
        dots: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    }

    return (
        <>
            <div className="testimonial-slider-area style-3">
                <div className="container">
                    <div className="row">
                        <motion.div
                            className="col-12"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
                        >
                            <div className="te-section-title left-align-title">
                                <div className="te-section-content">
                                    <div>
                                        <span className="short-title only-divider">Testimonial</span>
                                    </div>
                                    <h2 className="title">Accelerating Your Digital <br />Transformation</h2>
                                </div>
                                <div className="te-section-desc">
                                    <div className="te-slider-btn-wrapper">
                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePrevious();
                                            }}
                                            className="te-slider-nav te-slider-prev"
                                            id="testimonial_slider_prev"
                                        >
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </Link>

                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNext();
                                            }}
                                            className="te-slider-nav te-slider-next"
                                            id="testimonial_slider_next"
                                        >
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="te-testimonial-slider-wrapper" id="testimonial_one">
                            <Slider {...settings} ref={sliderRef}>
                                {TestimonialV3Data.map(testimonial =>
                                    <div key={testimonial.id}>
                                        <SingleTestimonialV3 testimonial={testimonial} key={testimonial.id} />
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV3;