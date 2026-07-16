"use client";
import Image from "next/image";
import { Heading, RoundButton } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight, Megaphone, Layout, Zap, TrendingUp } from "lucide-react";
import { project1, project2, project3, project4 } from "@/public";

const services = [
	{
		id: 1,
		title: "Paid Marketing",
		description: "High-quality leads through Meta ads, built to convert — not just click.",
		tags: ["Meta Ads", "Facebook & Instagram", "Ad Creative", "A/B Testing"],
		src: project1,
		Icon: Megaphone,
	},
	{
		id: 2,
		title: "Landing Pages",
		description: "Every page crafted to turn visitors into booked calls.",
		tags: ["Copywriting", "Conversion Funnels", "Sales Pages", "CRO"],
		src: project2,
		Icon: Layout,
	},
	{
		id: 3,
		title: "Automation",
		description: "CRM, email, and WhatsApp systems that nurture leads around the clock.",
		tags: ["Email Sequences", "WhatsApp Automation", "CRM Setup", "Pipeline Automation"],
		src: project3,
		Icon: Zap,
	},
	{
		id: 4,
		title: "Growth Systems",
		description: "Strategy, analytics, and optimization so your growth compounds.",
		tags: ["KPI Dashboard", "Funnel Optimization", "Performance Analysis", "Reporting"],
		src: project4,
		Icon: TrendingUp,
	},
];

export default function Projects() {
	return (
		<section className="w-full rounded-t-[20px]">
			<Heading
				title="What We Do"
				showAccent={false}
				className="padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px] pb-[6px]"
			/>
			<p className="padding-x paragraph font-NeueMontreal text-secondry opacity-60 pb-[50px] border-b border-[#1B2B6B33]">
				Four core services. One outcome — predictable, scalable growth for your coaching business.
			</p>
			<div className="w-full grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-x-[28px] gap-y-[64px] sm:gap-y-[48px] xm:gap-y-[40px] padding-x padding-y">
				{services.map((item, index) => (
					<motion.article
						key={item.id}
						className="group/card flex flex-col"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.55, delay: index * 0.07, ease: [0.33, 1, 0.68, 1] }}>
						{/* Image card */}
						<div className="relative rounded-[16px] overflow-hidden cursor-pointer border border-[#1B2B6B10] bg-white shadow-[0_4px_24px_rgba(27,43,107,0.06)] transition-all duration-[0.75s] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover/card:shadow-[0_24px_56px_rgba(27,43,107,0.14)] group-hover/card:-translate-y-[6px] group-hover/card:border-[#1B2B6B22]">
							<div className="relative w-full h-[320px] sm:h-[260px] xm:h-[220px] overflow-hidden bg-[#E8EBF2]">
								<Image
									src={item.src}
									alt={item.title}
									className="w-full h-full object-cover transition-all duration-[1.1s] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover/card:scale-[1.06] group-hover/card:brightness-[1.02]"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-secondry/30 via-secondry/0 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
								<div className="absolute top-[22px] left-[22px] w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(27,43,107,0.12)] transition-all duration-500 group-hover/card:bg-accent group-hover/card:scale-105">
									<item.Icon size={22} strokeWidth={1.5} className="text-secondry transition-colors duration-500 group-hover/card:text-white" />
								</div>
								<div className="absolute bottom-[22px] right-[22px] w-[44px] h-[44px] rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-[10px] group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]">
									<ArrowUpRight size={20} strokeWidth={1.5} className="text-secondry" />
								</div>
							</div>
						</div>

						{/* Title + description below card */}
						<div className="pt-[22px] flex items-start justify-between gap-[16px]">
							<h3 className="card-heading text-[30px] sm:text-[26px] xm:text-[24px]">
								{item.title}
							</h3>
						</div>
						<p className="font-NeueMontreal text-[16px] sm:text-[15px] leading-[26px] text-secondry/60 max-w-[480px] mt-[10px]">
							{item.description}
						</p>

						{/* Tags outside the card — Ochi-inspired pill row */}
						<div className="flex flex-wrap gap-[10px] mt-[18px]">
							{item.tags.map((tag, i) => (
								<span
									key={i}
									className="px-[14px] py-[6px] rounded-full bg-transparent border border-[#1B2B6B18] text-[12px] font-NeueMontreal font-medium text-secondry/75 transition-all duration-300 group-hover/card:border-[#1B2B6B33] group-hover/card:text-secondry">
									{tag}
								</span>
							))}
						</div>
					</motion.article>
				))}
			</div>
			<div className="w-full flex justify-center pt-[20px] pb-[60px] sm:pb-[40px] xm:pb-[40px]">
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
