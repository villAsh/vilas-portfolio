import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";

const techStack = [
	{
		id: 0,
		url: "/html.svg",
		title: "Web Development",
		skill: "HTML 5"
	},
	{
		id: 1,
		url: "/css.svg",
		title: "Web Development",
		skill: "CSS 3"
	},
	{
		id: 2,
		url: "/js.svg",
		title: "Web Development",
		skill: "JavaScript"
	},
	{
		id: 3,
		url: "/tailwind.svg",
		title: "CSS Framework",
		skill: "Tailwind CSS"
	},
	{
		id: 4,
		url: "/bootstrap.svg",
		title: "CSS Framework",
		skill: "Bootstrap"
	},
	{
		id: 5,
		url: "/sass.svg",
		title: "CSS Preprocessor",
		skill: "Sass"
	},
	{
		id: 6,
		url: "/mui.svg",
		title: "UI Framework",
		skill: "Material-UI"
	},
	{
		id: 7,
		url: "/figma.svg",
		title: "Design Tool",
		skill: "Figma"
	},
	{
		id: 8,
		url: "/photoshop.svg",
		title: "Design Tool",
		skill: "Photoshop"
	},
	{
		id: 9,
		url: "/framer.svg",
		title: "Animation Library",
		skill: "Framer Motion"
	},
	{
		id: 10,
		url: "/gsap.svg",
		title: "Animation Library",
		skill: "GSAP"
	},
	{
		id: 11,
		url: "/react.svg",
		title: "Frontend Library",
		skill: "React"
	},
	{
		id: 12,
		url: "/nextjs.svg",
		title: "Frontend Framework",
		skill: "Next.js"
	},
	{
		id: 13,
		url: "/ts.svg",
		title: "Type Safety",
		skill: "TypeScript"
	},
	{
		id: 14,
		url: "/nodejs.svg",
		title: "Backend Technology",
		skill: "Node.js"
	},
	{
		id: 15,
		url: "/express.svg",
		title: "Backend Frameworks",
		skill: "Express"
	},
	{
		id: 16,
		url: "/mongo.svg",
		title: "Database",
		skill: "MongoDB"
	},
	{
		id: 17,
		url: "/mysql.svg",
		title: "Database",
		skill: "MySQL"
	},
	{
		id: 18,
		url: "/postman.svg",
		title: "API Tool",
		skill: "Postman"
	},
	{
		id: 19,
		url: "/git.svg",
		title: "Version Control",
		skill: "Git"
	},
	{
		id: 20,
		url: "/github.svg",
		title: "Version Control",
		skill: "GitHub"
	},
	
];

export default function Skills() {
	return (
		<section className="relative mt-10 max-md:mt-36 w-full min-h-screen">
			<h1 className="top-12 sticky mb-10 font-bold text-5xl text-center text-purple">
				Tech Stack
			</h1>
			<div className="place-content-center gap-10 grid grid-cols-7 max-md:grid-cols-4 bg-transparent max-h-screen">
				{techStack.map((item, index) => (
					<Tooltip key={item.id}>
					<TooltipTrigger className="flex items-center justify-center">
						<TooltipContent>
							<div className="bg-white">
								<h1>{item.title}</h1>
								<b>{item.skill}</b>
							</div>
						</TooltipContent>
						<Image
							key={`#${index + 1}`}
							src={item.url}
							alt={`${item} logo`}
							width={100}
							height={100}
							className="bg-violet-50 rounded-lg hover:scale-110 transition-all duration-300"
						/>
					</TooltipTrigger>
					</Tooltip>
				))}
			</div>
		</section>
	);
}
