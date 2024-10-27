import Highlight from "@/components/atoms/highlight";
import MainButton from "@/components/molecules/mainbutton";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Suspense } from "react";

const Hero = () => {
	return (
		<div className="relative pt-36 pb-20 min-h-screen">
			{/* <div>
				<Spotlight
					className="-top-40 md:-top-20 -left-10 md:-left-32 h-screen"
					fill="purple"
				/>
				<Spotlight className="top-10 left-full w-[50vw] h-[80vh]" fill="blue" />
				<Spotlight className="bottom-0 left-0 w-[90vw] h-[60vh]" fill="blue" />
				<Spotlight className="top-28 left-80 w-[80vw] h-[80vh]" fill="white" />
			</div> */}

			{/* <div className="top-0 left-0 absolute flex justify-center items-center bg-grid-black-100/[0.2] dark:bg-grid-white/[0.03] bg-background-primary w-full h-screen">
				<div className="absolute inset-0 flex justify-center items-center bg-background-primary pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div> */}

			<div className="relative z-10 flex justify-center lg:my-20">
				<div className="flex flex-col justify-around items-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] h-1/2">
					<Suspense fallback={<p className="text-white">Loading.....</p>}>
						<TextGenerateEffect
							words="Transforming Business Ideas into Engaging User Experiences"
							className="text-[40px] text-center md:text-5xl lg:text-6xl"
						/>
					</Suspense>

					<p className="mb-4 text-center text-primary text-sm md:text-lg lg:text-2xl md:tracking-wider">
						Hey! I&apos;m Vilas, a <Highlight text="Fullstack Engineer " />
						from in India 🇮🇳.
					</p>
					<div className="flex flex-row max-md:flex-col justify-around max-md:items-center max-2xl:space-x-4 max-md:space-y-4 w-[80%]">
						<MainButton text="The Web Wizard 🧙" />
						<MainButton text="Fullstack Developement 🧑‍💻" />
						<MainButton text="Curious Nerd 🧐" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
