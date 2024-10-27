"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div
			className="bg-background-primary mb-5 w-full font-sans"
			ref={containerRef}
		>
			<div ref={ref} className="relative mx-auto pb-20 max-w-7xl">
				{data.map((item, index) => (
					<div key={index} className="flex justify-start md:gap-10 md:pt-40">
						<div className="top-40 z-40 sticky flex md:flex-row flex-col items-center md:w-full max-w-xs lg:max-w-sm self-start">
							<div className="left-3 md:left-3 absolute flex justify-center items-center bg-purple rounded-full w-10 h-10">
								<div className="border-neutral-300 bg-background-primary p-2 border rounded-full w-4 h-4" />
							</div>
							<h3 className="md:block hidden md:pl-20 font-bold text-purple text-xl md:text-2xl">
								{item.title}
							</h3>
						</div>

						<div className="relative mb-5 pr-4 pl-20 w-full">
							<h3 className="block md:hidden mb-4 font-bold text-left text-purple text-xl">
								{item.title}
							</h3>
							{item.content}{" "}
						</div>
					</div>
				))}
				<div
					style={{
						height: `${height}px`,
					}}
					className="top-0 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] left-8 md:left-8 absolute from-[0%] from-transparent via-neutral-200 dark:via-neutral-700 to-[99%] to-transparent w-[2px] overflow-hidden"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="top-0 absolute inset-x-0 bg-gradient-to-t from-[0%] from-purple-500 via-[10%] via-blue-500 to-transparent rounded-full w-[2px]"
					/>
				</div>
			</div>
		</div>
	);
};
