"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingWords = [
  "Endless Satisfaction",
  "Groundbreaking Approach.",
  "Unlimited Possibilities.",
];

const SliderV2 = () => {
  const [index, setIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="banner-area style-2">
      <div className="circle-drop-shadow"></div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12">
            <div className="te-section-title justify-content-center text-center">
              <div className="te-section-content">
                <motion.h2
                  className="title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  Create And Develop With{" "}
                  <span className="inline-flex items-center justify-center min-w-[250px] h-[40px] relative align-middle">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={rotatingWords[index]}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="text-orange-600 border-b-4 border-orange-600 pb-1 absolute"
                      >
                        {rotatingWords[index]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderV2;
