"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutV1 = () => {
  return (
    <>
      <div className="about-feature-area">
        <div className="circle-drop-shadow"></div>
        <div className="container">
          <div className="row gy-4 align-items-center">
            <motion.div
              className="col-lg-6 order-2 order-lg-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
            >
              <div className="about-us-card">
                <div className="te-section-title">
                  <div className="te-section-content">
                    <div className="short-title-wrapper">
                      <span className="short-title">About Us</span>
                    </div>
                    <h2 className="title">
                      Evoking with conviction for every brainstormed idea
                    </h2>
                    <p>
                      For what it’s acclaimed, Artificial Intelligence and
                      Software Development as a whole will continue to flourish
                      as society has no choice but to adapt. And that, where
                      there’s a new rising technical innovation as a crucial
                      requirement, we support our clients regarding their aims.{" "}
                    </p>
                  </div>
                </div>
                <div className="te-list-item-wrapper">
                  <div className="te-list-item">
                    <div className="icon">
                      <Image
                        src="/images/icon/list-icon/icon-1.png"
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <span className="text">OUR HISTORY</span>
                  </div>
                  <div className="te-list-item">
                    <div className="icon">
                      <Image
                        src="/images/icon/list-icon/icon-2.png"
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <span className="text">OUR VISION</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6 col-xl-5  offset-xl-1 order-1 order-lg-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
            >
              <div className="image-card">
                <Image
                  className="tilt-animate"
                  src="/images/about/Evoking-with-conviction-for-every-brainstormed-idea.jpg"
                  alt="icon"
                  width={526}
                  height={386}
                />
              </div>
            </motion.div>
          </div>
          <div className="row gy-4 align-items-center mt-30">
            <motion.div
              className="col-lg-6 col-xl-5"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
            >
              <div className="image-card">
                <Image
                  className="tilt-animate"
                  src="/images/about/Structuring Advanced Concepts.jpg"
                  alt="icon"
                  width={526}
                  height={386}
                />
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6 col-xl-6 offset-xl-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
            >
              <div className="about-us-card">
                <div className="te-section-title">
                  <div className="te-section-content">
                    <div className="short-title-wrapper">
                      <span className="short-title">Features</span>
                    </div>
                    <h2 className="title">Structuring Advanced Concepts</h2>
                    <p>
                      Firstly, we tend to hear out your request before you
                      decide to dive into our services. Though there’s a middle
                      point before the direct execution. And yes, it involves us
                      giving you feedback, while we also give our expert
                      suggestions on how to make it practical during the current
                      moving times of tech.
                    </p>
                  </div>
                </div>
                <div className="te-list-item-wrapper">
                  <div className="te-list-item">
                    <div className="icon">
                      <Image
                        src="/images/icon/list-icon/icon-1.png"
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <span className="text">OUR HISTORY</span>
                  </div>
                  <div className="te-list-item">
                    <div className="icon">
                      <Image
                        src="/images/icon/list-icon/icon-2.png"
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <span className="text">OUR VISION</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV1;
