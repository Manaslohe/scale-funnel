"use client";
import { motion } from "framer-motion";
import { RoundButton } from "@/components";

const processPhases = [
	{
		id: 1,
		phase: "Phase 1",
		name: "Foundation & Strategy",
		description: "Niche clarity, offer positioning, funnel strategy, and brand direction. We don't skip this — it's what everything else is built on.",
	},
	{
		id: 2,
		phase: "Phase 2",
		name: "Build & Launch",
		description: "Landing pages, ad creatives, automation sequences, and campaigns. We build everything and launch when it's right — not just when it's ready.",
	},
	{
		id: 3,
		phase: "Phase 3",
		name: "Optimize & Scale",
		description: "Weekly reporting, A/B testing, performance analysis, and strategy refinement. This is where good results become great ones.",
	},
];

export default function Clients() {
	return (
		<section className="w-full padding-y">
			<div className="padding-x">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry pb-[50px]">
					What Working with Us Looks Like
				</h2>
				<div className="flex flex-col gap-0">
					{processPhases.map((phase, index) => (
						<motion.div
							key={phase.id}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.55, delay: index * 0.08, ease: [0.33, 1, 0.68, 1] }}
							className={`w-full flex py-[30px] flex-col ${
								index === 0
									? "border-y border-[#1B2B6B33]"
									: "border-b border-[#1B2B6B33]"
							}`}>
							<div className="w-full flex items-start justify-between gap-[30px] sm:flex-col xm:flex-col">
								<div className="w-[15%] sm:w-auto xm:w-auto">
									<span className="small-text font-NeueMontreal text-accent font-semibold uppercase tracking-[2px]">
										{phase.phase}
									</span>
								</div>
								<div className="w-[40%] sm:w-full xm:w-full">
									<h3 className="paragraph font-medium font-NeueMontreal text-secondry font-bold text-[20px]">
										{phase.name}
									</h3>
								</div>
								<div className="w-[45%] sm:w-full xm:w-full">
									<p className="small-text font-normal font-NeueMontreal text-secondry opacity-70 leading-relaxed">
										{phase.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				<div className="flex justify-center mt-[60px]">
					<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<RoundButton
							href="/contact"
							title="Let's Get Started"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
