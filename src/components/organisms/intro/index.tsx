"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import LargeText from "@/components/atoms/largeText";

const intro = "Hey, ".split("");
const name = "I am Vilas".split("");
export default function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, stiffness: 5 }}
      exit={{ opacity: 0, x: -100 }}
      className="z-50"
    >
      {intro.map((text, index) => (
        <LargeText text={text} key={index} color="text-primary" />
      ))}
      <br />
      <div className="mt-6">
        {name.map((text, index) => (
          <LargeText
            text={text !== " " ? text : "\u00A0"}
            key={index}
            color={index > 4 ? "#FF7D29" : "text-primary"}
          />
        ))}
      </div>
      <div>
        <TypeAnimation
          sequence={[
            "UI Engineer",
            2000,
            "Fullstack Engineer",
            2000,
            "ML Enthusiast",
            2000,
            "Fitness Enthusiast",
            2000,
          ]}
          speed={20}
          className="my-10 font-bold !text-6xl text-purple max-md:text-3xl"
          style={{
            fontSize: "5rem",
            color: "#FF7D29",
          }}
          preRenderFirstString
          repeat={Infinity}
        />
      </div>
      <div className="w-full">
        <p className="relative z-20 bg-clip-text bg-gradient-to-b from-primary via-slate-400 to-slate-600 mt-10 max-md:mt-5 font-semibold text-4xl text-justify text-primary text-transparent max-md:text-2xl">
          A Software Engineer and Computer Science Enthusiast Who loves building
          Web Apps and Solving Problems.
        </p>
      </div>
    </motion.div>
  );
}
