"use client";
import React, { use, useState } from "react";
import Image from "next/image";
import AboutListV2Data from "@/jsonData/about/AboutListV2Data.json";
import SingleAboutV2List from "./SingleAboutV2List";

const AboutV2 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="about-us-area style-1">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="te-about-image-card">
              <div className="te-main-img-wrapper">
                <div className="te-main-img-inner">
                  <Image
                    className="tilt-animate"
                    src="/images/about/sf1.jpeg"
                    alt="icon"
                    width={544}
                    height={488}
                  />
                  <div className="image-two">
                    <Image
                      className="tilt-animate"
                      src="/images/about/istockphoto-639428586-612x612.jpg"
                      alt="icon"
                      width={300}
                      height={327}
                    />
                  </div>
                  <div className="te-img-card-shape">
                    <Image
                      className="tilt-animate"
                      src="/images/about/about-shape.png"
                      alt="icon"
                      width={351}
                      height={226}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 align-self-center">
            <div className="te-about-info-card">
              <div className="te-about-info-content">
                <div className="te-section-title">
                  <div className="te-section-content">
                    <div>
                      <span className="short-title only-divider">Features</span>
                    </div>
                    <h2 className="title">
                      AI solutions <span>tailored</span>
                      <br /> for startups
                    </h2>
                    <div className="te-section-desc">
                      <p>
                        We represent as custom coders utilizing AI, Blockchain,
                        and Software Applications that prove their worth
                        effortlessly. Markeltree is a cutting-edge company that
                        makes full-stack software.
                      </p>

                      {/* Expandable content */}
                      {expanded && (
                        <p>
                          We aim to help businesses, entrepreneurs, and artists
                          discover robust, intelligent, and adaptable digital
                          solutions that drive growth and success. We do more
                          than make software; we also incorporate AI, develop
                          platforms that integrate with blockchain, and create
                          custom web applications. We build tech-enabled
                          companies of the future with people who think ahead.
                          <br />
                          <br />
                          Our Software Company in United States provides our
                          clients with the latest technologies, carefully
                          crafted to keep pace with the rapid evolution of the
                          world. We don't focus on selling services. Innovative
                          and excellent solutions are where our long-term goals
                          are driven towards. At our company, software isn't
                          just coded; it's also designed, tested, refined, and
                          enhanced. Every project, from financial technology
                          platforms to video games, is viewed as a unique
                          opportunity to achieve results and shape the future.
                          And that results in giving results on:
                        </p>
                      )}

                      {/* Toggle Button */}
                      <button
                        className="text-indigo-600 font-semibold mt-3"
                        onClick={() => setExpanded(!expanded)}
                      >
                        {expanded ? "show less" : "...."}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="te-list-item-wrapper mt-5">
                  {AboutListV2Data.map((listData) => (
                    <SingleAboutV2List listData={listData} key={listData.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutV2;
