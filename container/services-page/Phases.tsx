import { RoundButton, Heading } from "@/components";

const phases = [
	{
		id: 1,
		phase: "Phase 1",
		title: "Foundation & Strategy",
		para: "Niche clarity, offer positioning, funnel strategy, and brand direction. We don't skip this — it's what everything else is built on.",
	},
	{
		id: 2,
		phase: "Phase 2",
		title: "Build & Launch",
		para: "Landing pages, ad creatives, automation sequences, and campaigns. We build everything and launch when it's right — not just when it's ready.",
	},
	{
		id: 3,
		phase: "Phase 3",
		title: "Optimize & Scale",
		para: "Weekly reporting, A/B testing, performance analysis, and strategy refinement. This is where good results become great ones.",
	},
];

export default function Phases() {
	return (
		<section className="w-full pt-[60px] lg:pt-[50px] md:pt-[40px] pb-[100px] lg:pb-[80px] md:pb-[60px] sm:pb-[40px] xm:pb-[40px] bg-background">
			<div className="padding-x pb-[24px]">
				<Heading title="What Working with Us Looks Like" />
			</div>
			<div className="w-full border-t border-[#20202155] flex sm:flex-col xm:flex-col">
				{phases.map((item) => (
					<div
						className="w-1/3 sm:w-full xm:w-full padding-x py-[40px] border-r border-[#20202155] last:border-r-0 sm:border-r-0 xm:border-r-0 sm:border-b sm:last:border-b-0 xm:border-b xm:last:border-b-0"
						key={item.id}>
						<p className="paragraph font-NeueMontreal text-orange uppercase font-medium pb-[15px]">
							{item.phase}
						</p>
						<h3 className="sub-paragraph font-medium font-NeueMontreal text-secondry pb-[15px]">
							{item.title}
						</h3>
						<p className="paragraph font-NeueMontreal text-secondry">
							{item.para}
						</p>
					</div>
				))}
			</div>
			<div className="w-full flex justify-center pt-[50px]">
				<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
					<RoundButton
						href="/contact"
						title="book your strategy call and let's get started"
						bgcolor="#000"
						className="bg-white text-black"
						style={{ color: "#fff" }}
					/>
				</div>
			</div>
		</section>
	);
}
