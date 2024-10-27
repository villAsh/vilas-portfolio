"use client";
import { motion, useAnimationControls } from "framer-motion";
import React from "react";

export default function LargeText({
  text,
  color = "text-primary",
}: {
  text: string;
  color: string;
}) {
  const controls = useAnimationControls();
  const bounce = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
    });
  };

  return (
    <motion.span
      className={`text-8xl max-md:text-4xl max-md:text-center font-bold inline-block ${
        color === "text-primary" ? "text-primary" : "text-purple"
      } `}
      animate={controls}
      onMouseEnter={() => bounce()}
      whileHover={{
        color: color === "text-primary" ? "#FF7D29" : "#FFFFEC",
      }}
    >
      {text}
    </motion.span>
  );
}
