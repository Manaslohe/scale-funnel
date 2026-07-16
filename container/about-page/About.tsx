"use client";
import { motion } from "framer-motion";
import { backgroundAbout } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	const founders = [
		{
			name: "Rohini Shende",
			role: "The Strategist — Meta Ads Expert",
			years: "13+ Years",
			description: "With 13+ years of industry experience, Rohini is a Meta ads expert who has worked with renowned brands and coaches. She leads client onboarding and drives the ad strategy behind every account, making sure your campaigns are built to convert from day one.",
			color: "#1B2B6B",
		},
		{
			name: "Mishthi Bundiwal",
			role: "The Creative — Content & Copywriting",
			years: "5+ Years",
			description: "5+ years in content and copywriting. Across five years and multiple niches, she has refined the craft of writing content that doesn't just sound good — it converts. From ad copy to landing pages to email sequences.",
			color: "#F47B20",
		},
		{
			name: "Utkarsh Soni",
			role: "The Analyst — Tech & Analytics",
			years: "5+ Years",
			description: "Bringing 5+ years in tech and Meta analytics, Utkarsh is the engine room of The Scale Funnel. He manages the technical infrastructure — from CRM setup and automation to deep-diving into Meta trends and performance data.",
			color: "#1B2B6B",
		},
	];

	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col bg-background">
				<div className="w-full border-t border-[#1B2B6B33] pt-[20px]">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
						className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
						<div>
							<h3 className="section-heading">Our Story</h3>
						</div>
						<div className="w-[48%] sm:w-full xm:w-full flex justify-between">
							<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										We came together because our skills fit together perfectly. One strategist, one creative, one analyst — covering every angle of a coaching business&apos;s growth system.
									</p>
								</div>
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										Together, we cover every angle — so nothing in your growth system is left to chance.
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Founders Grid */}
			<div className="padding-x pt-[80px] lg:pt-[60px] md:pt-[50px] sm:pt-[40px] xm:pt-[40px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry mb-[50px]">
					Meet the Founders:
				</h2>
				<div className="w-full flex gap-[30px] sm:flex-col xm:flex-col">
					{founders.map((founder, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.55, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
							className="flex-1 rounded-[20px] p-[30px] sm:p-[20px] xm:p-[20px] flex flex-col gap-[20px]"
							style={{ backgroundColor: i === 1 ? "#FFF3E8" : "#EEF2FF" }}>
							<div className="flex items-center justify-between">
								<span
									className="text-[11px] uppercase tracking-[3px] font-NeueMontreal font-semibold px-[10px] py-[4px] rounded-full text-white"
									style={{ backgroundColor: founder.color }}>
									{founder.years}
								</span>
							</div>
							<div>
								<h3 className="text-[28px] sm:text-[22px] xm:text-[20px] font-FoundersGrotesk font-bold text-secondry leading-[1.2] mb-[8px]">
									{founder.name}
								</h3>
								<p
									className="small-text font-NeueMontreal font-semibold uppercase tracking-[1px]"
									style={{ color: founder.color }}>
									{founder.role}
								</p>
							</div>
							<p className="paragraph font-NeueMontreal text-secondry opacity-70 leading-relaxed">
								{founder.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-60px" }}
				transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
				className="padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<BackgroundImg src={backgroundAbout} />
			</motion.div>
		</section>
	);
}
