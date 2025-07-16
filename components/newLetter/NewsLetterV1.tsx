"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const NewsLetterV1 = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const response = await axios.post("/api/newsletter", { name, email });
      setStatus(response.data.message || "✅ Subscribed!");
      setName("");
      setEmail("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "❌ Subscription error:",
          error.response?.data || error.message
        );
        setStatus(
          error.response?.data?.message ||
            "❌ Subscription failed. Please try again."
        );
      } else {
        console.error("❌ Subscription error:", error);
        setStatus("❌ Subscription failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="subscribe-area style-1"
      initial={{ rotateY: -90, opacity: 0 }}
      whileInView={{ rotateY: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.1, duration: 1.5, ease: "easeOut" }}
    >
      <div className="circle-drop-shadow"></div>
      <div className="circle-drop-shadow two"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2">
            <div className="te-section-title justify-content-center text-center">
              <div className="te-section-content">
                <div className="short-title-wrapper">
                  <span className="short-title">Newsletter</span>
                </div>
                <h3 className="text-center text-white font-bold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-[700px] mx-auto">
                  Technological Advancement Keeps The Times Evolving
                </h3>

                <p>
                  For further updates and notifications relating to our hottest
                  information, including blockchain, artificial intelligence,
                  web application trends, and customized development pointers.
                </p>
              </div>
            </div>
            <div className="te-subscribe-form-widget">
              <form onSubmit={handleSubmit}>
                <div className="mc4wp-form-fields">
                  <div className="single-field">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                  <div className="single-field">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>
                  <button
                    className="submit-btn"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      "Submitting..."
                    ) : (
                      <>
                        Subscribe Now{" "}
                        <i className="fa fa-solid fa-arrow-right"></i>
                      </>
                    )}
                  </button>
                </div>
                {status && (
                  <p
                    className={`mt-3 ${
                      status.startsWith("✅") ? "text-success" : "text-danger"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsLetterV1;
