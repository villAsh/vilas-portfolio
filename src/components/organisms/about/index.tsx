import React from "react";

import { Meteors } from "@/components/ui/meteors";
import AboutMe from "@/components/molecules/aboutme";
import { FlipWords } from "@/components/ui/flip-words";

export default function About() {
  return (
    <section className="relative min-h-screen" id="about">
      <h1 className="mb-10 font-bold text-5xl text-center text-purple">
        About
      </h1>
      <div className="relative place-items-center place-content-center gap-x-5 grid grid-cols-7 max-md:grid-cols-1 h-full">
        <div className="col-span-4">
          <AboutMe />
        </div>
        <div className="col-span-3 place-self-start">
          <h1 className="relative z-50 bg-clip-text bg-gradient-to-b from-primary via-violet-50 to-purple mx-auto max-md:mt-5 max-w-7xl font-semibold text-4xl text-left text-primary text-transparent max-md:text-3xl max-md:text-justify lg:text-6xl">
            Proficient in leveraging modern web technologies to bring designs to
            life with{" "}
            <FlipWords
              duration={1000}
              className="text-purple/95"
              words={["Smooth", "Dynamic", "Responsive"]}
            />{" "}
            animations.
          </h1>
        </div>
      </div>
    </section>
  );
}
