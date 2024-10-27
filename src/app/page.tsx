import About from "@/components/organisms/about";
import Experience from "@/components/organisms/experience";
import Navbar from "@/components/organisms/navbar";
import Project from "@/components/organisms/projects";
import Skills from "@/components/organisms/skills";
import HeroSection from "@/components/wrappers/hero";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center bg-background-primary mx-auto px-5 sm:px-10 overflow-hidden">
      <div className="w-full max-w-7xl">
        <Navbar />
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Project />
      </div>
    </main>
  );
}
