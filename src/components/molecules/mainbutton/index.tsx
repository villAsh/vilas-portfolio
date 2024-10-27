export default function MainButton({ text }: { text: string }) {
	return (
		<button
			type="button"
			className="inline-flex relative md:mt-10 p-[1px] rounded-lg w-full md:w-60 h-12 overflow-hidden focus:outline-none"
		>
			<span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] animate-[spin_2s_linear_infinite]" />

			<span className="inline-flex justify-center items-center gap-2 bg-slate-950 backdrop-blur-3xl px-7 rounded-lg w-full h-full font-medium text-sm text-white cursor-pointer">
				{text}
			</span>
		</button>
	);
}
