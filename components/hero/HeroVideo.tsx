"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 15.0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.8, 0.4]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 200]);

  if (!hasMounted) return null;

  return (
    <div className="banner-area style-5">
      <div className="circle-drop-shadow"></div>
      <div className="!w-full !max-w-none !px-0 !mx-0">
        <motion.section ref={ref}>
          <motion.div
            style={{
              position: "sticky",
              top: 0,
               width: "100%",
                height: "90%",
              overflow: "hidden",
              zIndex: 0,
              borderRadius: "1rem",
            }}
          >
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "90%",
                objectFit: "cover",
                scale,
                opacity,
                y,
                x,
                borderRadius: "2rem",
              }}
            >
              <source src="/video/2.mp4" type="video/mp4" />
            </motion.video>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0)",
                zIndex: 1,
              }}
            />
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
