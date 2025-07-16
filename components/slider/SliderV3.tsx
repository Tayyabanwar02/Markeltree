"use client";
import Image from "next/image";
import Link from "next/link";


const SliderV3 = () => {

  return (
    <>
      <div className="banner-area style-2">
        <div className="circle-drop-shadow"></div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="banner-info-card style-2">
                <div className="content-wrapper">
                  <h3 className="title">
                    Pinnacle
                    <br />
                    <span>Standards</span>
                  </h3>
                  <div className="content">
                    <p>
                      Seeking to revolutionize borderless limits of creative
                      output, that is where our ideation studio delivers
                      profound services. The Markeltree goes worldwide, and not
                      just as a reputed Google software development agency. But to make the technical elements life style simpler and progressive.
                    </p>
                  </div>
                </div>
                <div className="image">
                  <Image
                    className="tilt-animate"
                    src="/images/banner/female-programmer-writing-programming-code-at-cozy-2025-03-13-04-21-16-utc.jpg"
                    alt="image"
                    width={415}
                    height={280}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="banner-image">
                <Image
                  className="tilt-animate"
                  src="/images/banner/bb.jpg"
                  alt="image"
                  width={415}
                  height={520}
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="banner-info-card style-3">
                <div className="image">
                  <Image
                    className="tilt-animate"
                    src="/images/banner/bv.jpg"
                    alt="image"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="content-wrapper">
                  <div className="content">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.Where there's tech and creativity, there's vision and results for the ongoing future.
                    </p>
                    <div className="btn-wrapper">
                      <Link href="/about">
                        Get Started{" "}
                        <i className="fa fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="counter-card">
                <div className="te-counter-wrapper">
                  <span className="counter">10</span>
                  <span>K+</span>
                </div>
                <h6 className="title">
                  Satisficed <br /> Clients
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderV3;
