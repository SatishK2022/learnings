"use client";

import React, { JSX } from "react";
import { motion } from "motion/react";

function Basic(): JSX.Element {
  return (
    <div
      className="[perspective:1000px] [transform-style:preserve-3d] w-full h-screen bg-neutral-900 flex items-center justify-center"
      style={{
        backgroundImage: `repeating-radial-gradient(circle, rgba(6, 182, 212, 0.2) 0px, rgba(6, 182, 212, 0.2) 1px, transparent 2px, transparent 20px)`,
        backgroundSize: "20px 20px",
        height: "100vh",
        width: "100vw",
      }}
    >
      <motion.button
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        whileHover={{
          rotateX: 20,
          rotateY: 20,
          boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.5)",
          y: -10,
        }}
        whileTap={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        style={{
          translateZ: 100,
        }}
        // initial={{
        //   rotate: 0
        // }}
        // animate={{
        //   rotate: [0, 10, 0]
        // }}
        className="relative group text-neutral-500 text-lg font-semibold px-12 py-5 rounded-lg bg-black shadow-[0px_1px_2px_0.1px_rgba(255,255,255,0.2)_inset]"
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Hover Me
        </span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[8px] w-3/4 mx-auto blur-md"></span>
      </motion.button>
    </div>
  );
}

export default Basic;
