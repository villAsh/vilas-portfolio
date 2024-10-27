"use client";
import { motion, useScroll } from "framer-motion";
import { ReactElement, useRef } from "react";

import Highlight from "@/components/atoms/highlight";
import { LinkPreview } from "@/components/ui/link-preview";
import { Timeline } from "@/components/ui/timeline";

type exp = {
	title: string;
	content: ReactElement;
	organization: string;
	period: string;
	learning: string[];
	link: string | null;
};
export default function Experience() {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end end"],
	});
	const exp = [
		{
			title: "Jun-2023 - Sept-2023",
			content: (
				<motion.div
					initial={{ opacity: 0, scale: 0.4 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, damping: 3, stiffness: 150 }}
					className="border-gray-100 bg-clip-padding bg-violet-600 bg-opacity-0 backdrop-blur-xl backdrop-filter p-5 border rounded-xl w-full h-fit"
				>
					<p className="mb-4 font-semibold text-3xl text-primary max-md:text-sm">
						Software Engineering Intern.
					</p>
					<ul className="text-left text-primary/90 max-md:text-xs">
						<li>
							✅ Joined{" "}
							<LinkPreview url="https://www.seaflux.tech/">
								<Highlight text="Seaflux Technologies" />
							</LinkPreview>{" "}
							as Software Engineering Intern
						</li>
						<li>✅ Learned about Software development process</li>
						<li>✅ Learned about Agile Methodologies</li>
						<li>
							✅ Learned about Various Technologies such as React, React Native,
							NodeJS, ExpressJs etc.
						</li>
					</ul>
				</motion.div>
			),
		},
		{
			title: "Sept-2023 - Sept-2024",
			content: (
				<motion.div
					initial={{ opacity: 0, scale: 0.4 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, damping: 3, stiffness: 150 }}
					className="border-gray-100 bg-clip-padding bg-violet-600 bg-opacity-0 backdrop-blur-xl backdrop-filter p-5 border rounded-xl w-full h-fit"
				>
					<p className="mb-4 font-semibold text-3xl text-primary max-md:text-sm">
						Junior Software Engineer.
					</p>
					<ul className="text-left text-primary/90 max-md:text-xs">
						<li>✅ Promoted to Jr. software engineer within 3 months.</li>
						<li>
							✅ Worked on various technologies including Frontend and backend
							and mobile app Development.
						</li>
						<li>
							✅ Refactored exisiting code & improved performance of the web
							apps.
						</li>
						<li>✅ Implemented new features and updated exisiting ones.</li>
					</ul>
				</motion.div>
			),
		},
		{
			title: "Sept-2024 - continue",
			content: (
				<motion.div
					initial={{ opacity: 0, scale: 0.4 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, damping: 3, stiffness: 150 }}
					className="border-gray-100 bg-clip-padding bg-violet-600 bg-opacity-0 backdrop-blur-xl backdrop-filter p-5 border rounded-xl w-full h-fit"
				>
					<p className="mb-4 font-semibold text-3xl text-primary max-md:text-sm">
						Software Engineer.
					</p>
					<ul className="text-left text-primary/90 max-md:text-xs">
						<li>✅ Promoted to software engineer</li>
					</ul>
				</motion.div>
			)
		}
	];
	return (
		<section ref={targetRef} className="relative w-full min-h-screen">
			<h1 className="top-12 sticky mb-10 font-bold text-5xl text-center text-purple">
				Experience
			</h1>
			<Timeline data={exp} />
		</section>
	);
}
