"use client";
import { motion } from "framer-motion";

import Highlight from "@/components/atoms/highlight";
import { Button } from "@/components/ui/moving-border";

export default function AboutMe() {
	return (
		<div className="flex flex-col justify-start items-start">
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				<Button
					borderRadius="12px"
					duration={6000}
					containerClassName="w-full h-full"
				>
					<p className="px-8 py-2 max-md:p-4 font-light text-2xl text-justify text-primary max-md:text-base">
						Passionate <Highlight text="Software Engineer" /> with the expertise
						in <Highlight text="UI Development" /> who loves Crafting engaging
						and responsive user interfaces. Proficient in leveraging the latest
						web technologies to create intuitive and visually appealing designs
						that enhance user experience.
					</p>
				</Button>
			</motion.div>
			<motion.div
				initial={{ y: -200, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<Button
					borderRadius="12px"
					duration={7000}
					containerClassName="w-full h-full mt-5"
				>
					<p className="px-8 py-2 max-md:p-4 font-light text-2xl text-justify text-primary max-md:text-base">
						Seasoned <Highlight text="Backend Developer" /> with a strong
						background in <Highlight text="server-side" /> technologies. Skilled
						in designing and implementing robust, scalable, and secure APIs and
						services. Passionate about{" "}
						<Highlight text="solving complex problems" /> and delivering
						high-quality solutions that drive{" "}
						<Highlight text="business success" /> .
					</p>
				</Button>
			</motion.div>
			<motion.div
				initial={{ y: -300, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<Button
					borderRadius="12px"
					duration={8000}
					containerClassName="w-full h-full mt-5"
				>
					<p className="px-8 py-2 max-md:p-4 font-light text-2xl text-justify text-primary max-md:text-base">
						The <Highlight text="Wizard of Web" />, Combining the skills of a{" "}
						<Highlight text="Frontend" /> Developer who is Proficient in
						crafting beautiful UI&apos;s & <Highlight text="Backend" />{" "}
						Developer who knows how to solve the problem.
					</p>
				</Button>
			</motion.div>
		</div>
	);
}
