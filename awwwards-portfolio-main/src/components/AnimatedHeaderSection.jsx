import React from "react";
import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Magnet from "./Animations/Magnet/Magnet";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contextRef,
    offset: ["start start", "end end"]
  });

  const rotation = useTransform(scrollYProgress, [0.00001, 1], [0, 360]);
  
  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
          trigger: contextRef.current,
        }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);
  return (
    <>
      {/* <motion.svg 
        style={{ 
          rotate: rotation,
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))'
        }}
        xmlns="http://www.w3.org/2000/svg" 
        width="253" 
        height="243" 
        viewBox="0 0 253 243" 
        fill="none" 
        className="absolute top-[10%] right-[15%] w-[200px] h-auto object-contain z-10 md:block hidden pointer-events-none"
      >
        <path d="M46.0644 121.144L0 104.754L14.1737 67.698L58.112 82.6628C83.6247 91.2141 97.7983 99.0528 112.681 109.029C108.429 91.2141 106.303 74.1115 106.303 49.1701V0L145.989 0V49.1701C145.989 74.1115 143.154 92.6393 139.611 109.029C154.493 99.7654 168.667 91.2141 193.471 82.6628L238.118 66.9854L253 104.754L206.227 121.144C182.84 129.695 164.415 132.545 148.115 134.683C162.997 147.51 173.627 158.912 187.092 180.29L214.731 220.196L182.132 243L154.493 203.806C139.611 182.428 131.815 166.038 125.437 151.073C119.768 168.176 111.972 184.566 97.7983 203.806L69.451 243L36.1429 220.196L63.7815 180.29C78.6639 158.912 90.7115 146.798 104.176 134.683C82.916 131.833 66.6162 128.982 46.0644 121.144Z" fill="#C47725" />
      </motion.svg> */}
      <div ref={contextRef}>
        {/* Signature image in the upper right corner */}
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
          >
            <p
              className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
            >
              {subTitle}
            </p>
            <div className="px-10">
              <h1
                className={`flex flex-col gap-12 uppercase banner-text-responsive sm:gap-16 md:block ${textColor}`}
              >
                {titleParts.map((part, index) => (
                  <span key={index}>{part} </span>
                ))}
              </h1>
            </div>
          </div>
        </div>
        <div className={`relative px-10 ${textColor}`}>
          <div className="absolute inset-x-0 border-t-2" />
          <div className="py-12 sm:py-16 text-end">
            <AnimatedTextLines
              text={text}
              className={`font-light uppercase value-text-responsive ${textColor}`}
            />
            {/* CTA Button */}
           

          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedHeaderSection;
