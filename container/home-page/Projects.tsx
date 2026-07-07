import Link from "next/link";
import { Heading, RoundButton } from "@/components";
import { ArrowUpRight } from "lucide-react";

const services = [
	{
		id: 1,
		title: "Paid Marketing",
		description: "High-quality leads through Meta ads, built to convert — not just click.",
		tags: ["Meta Ads", "Facebook & Instagram", "Ad Creative", "A/B Testing"],
		icon: "📣",
	},
	{
		id: 2,
		title: "Landing Pages",
		description: "Every page crafted to turn visitors into booked calls.",
		tags: ["Copywriting", "Conversion Funnels", "Sales Pages", "CRO"],
		icon: "🖥️",
	},
	{
		id: 3,
		title: "Automation",
		description: "CRM, email, and WhatsApp systems that nurture leads around the clock.",
		tags: ["Email Sequences", "WhatsApp Automation", "CRM Setup", "Pipeline Automation"],
		icon: "⚙️",
	},
	{
		id: 4,
		title: "Growth Systems",
		description: "Strategy, analytics, and optimization so your growth compounds.",
		tags: ["KPI Dashboard", "Funnel Optimization", "Performance Analysis", "Reporting"],
		icon: "📈",
	},
];

export default function Projects() {
	return (
		<section className="w-full rounded-t-[20px]">
			<Heading
				title="What We Do"
				className="padding-x padding-y pb-[20px]"
			/>
			<p className="padding-x paragraph font-NeueMontreal text-secondry opacity-60 pb-[50px] border-b border-[#1B2B6B33]">
				Four core services. One outcome — predictable, scalable growth for your coaching business.
			</p>
			<div className="w-full flex justify-between gap-y-[50px] padding-x padding-y flex-wrap">
				{services.map((item) => (
					<div
						className="w-[49%] sm:w-full xm:w-full"
						key={item.id}>
						<div className="flex gap-[10px] items-center pb-[10px]">
							<span className="w-[10px] h-[10px] rounded-full bg-accent flex-shrink-0" />
							<h1 className="small-text uppercase font-medium font-NeueMontreal text-secondry">
								{item.title}
							</h1>
						</div>
						<div className="w-full h-[280px] sm:h-[200px] xm:h-[200px] rounded-[15px] bg-secondry flex flex-col justify-between p-[30px] sm:p-[20px] xm:p-[20px] cursor-pointer group hover:bg-dark transition-all duration-500">
							<div className="text-[40px]">{item.icon}</div>
							<div>
								<h2 className="text-white font-FoundersGrotesk font-semibold text-[32px] sm:text-[24px] xm:text-[22px] leading-[1.2] pb-[12px]">
									{item.title}
								</h2>
								<p className="paragraph font-NeueMontreal text-white opacity-70">
									{item.description}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-[10px] mt-[20px] flex-wrap">
							{item.tags.map((tag, i) => (
								<span
									key={i}
									className="px-[12px] py-[4px] rounded-full border border-[#1B2B6B55] text-[13px] font-NeueMontreal text-secondry hover:bg-secondry hover:text-white transition-all duration-300 cursor-pointer">
									{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex justify-center pt-[20px] pb-[60px]">
				<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
					<RoundButton
						href="/services"
						title="Full-Service Breakdown"
						bgcolor="#000"
						className="bg-white text-black"
						style={{ color: "#fff" }}
					/>
				</div>
			</div>
		</section>
	);
}
