"use client";
import { Button } from "@/components";
import { motion } from "framer-motion";

const capabilityGroups = [
	{
		id: 1,
		title: "Acquisition",
		description: "Reach the right audience with precision-targeted campaigns.",
		items: [
			{ id: 1, title: "Meta Ads Strategy", href: "/services" },
			{ id: 2, title: "Audience Research", href: "/services" },
			{ id: 3, title: "Ad Creative Direction", href: "/services" },
			{ id: 4, title: "Retargeting Campaigns", href: "/services" },
		],
	},
	{
		id: 2,
		title: "Conversion",
		description: "Turn visitors into booked calls and paying clients.",
		items: [
			{ id: 1, title: "Landing Page Design", href: "/services" },
			{ id: 2, title: "Sales Page Copywriting", href: "/services" },
			{ id: 3, title: "Funnel Architecture", href: "/services" },
			{ id: 4, title: "Conversion Rate Optimization", href: "/services" },
		],
	},
	{
		id: 3,
		title: "Retention",
		description: "Keep leads warm and clients engaged automatically.",
		items: [
			{ id: 1, title: "Email Automation", href: "/services" },
			{ id: 2, title: "WhatsApp Sequences", href: "/services" },
			{ id: 3, title: "CRM Setup & Management", href: "/services" },
			{ id: 4, title: "Lead Nurture Workflows", href: "/services" },
		],
	},
	{
		id: 4,
		title: "Strategy",
		description: "Data-driven decisions that compound your growth.",
		items: [
			{ id: 1, title: "KPI Dashboards", href: "/services" },
			{ id: 2, title: "Performance Reporting", href: "/services" },
			{ id: 3, title: "A/B Testing", href: "/services" },
			{ id: 4, title: "Offer Positioning", href: "/services" },
		],
	},
];

export default function Capibilyties() {
	return (
		<div className="w-full bg-about padding-y rounded-t-[20px]">
			<div className="w-full padding-x mb-[60px] sm:mb-[40px] xm:mb-[40px]">
				<p className="sub-paragraph font-NeueMontreal text-secondry text-justify leading-[1.65] tracking-wide max-w-[920px]">
					<span className="font-semibold text-secondry">Let&apos;s be honest.</span>{" "}
					Running a coaching business is hard enough without worrying about whether your ads, funnels, and follow-up systems are actually working. You didn&apos;t become a coach to become a marketer — and you shouldn&apos;t have to. That&apos;s where we come in: we handle the entire growth engine so you can focus on what you do best.
				</p>
			</div>

			<div className="w-full padding-x pt-[40px] border-t border-[#1B2B6B22]">
				<h3 className="section-heading mb-[40px] sm:mb-[30px] xm:mb-[24px]">
					Our Capabilities
				</h3>

				<div className="w-full grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xm:grid-cols-1 gap-[24px]">
					{capabilityGroups.map((group, index) => (
						<motion.div
							key={group.id}
							className="group/cap relative rounded-[20px] border border-[#1B2B6B10] bg-white p-[32px] sm:p-[24px] xm:p-[20px] overflow-hidden shadow-[0_2px_16px_rgba(27,43,107,0.04)]"
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{ duration: 0.55, delay: index * 0.08, ease: [0.33, 1, 0.68, 1] }}
							whileHover={{ y: -4 }}>
							{/* Top accent bar */}
							<motion.div
								className="absolute top-0 left-0 right-0 h-[3px] bg-accent origin-left"
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: [0.33, 1, 0.68, 1] }}
							/>

							{/* Background number */}
							<span className="absolute top-[16px] right-[20px] font-FoundersGrotesk font-black text-[72px] leading-none text-[#1B2B6B06] select-none pointer-events-none">
								0{group.id}
							</span>

							<div className="relative z-[1]">
								<div className="flex items-center gap-[12px] mb-[12px]">
									<motion.span
										className="w-[10px] h-[10px] rounded-full bg-accent flex-shrink-0"
										whileHover={{ scale: 1.4 }}
										transition={{ type: "spring", stiffness: 400, damping: 12 }}
									/>
									<h4 className="card-heading text-[20px] sm:text-[18px]">
										{group.title}
									</h4>
								</div>

								<p className="font-NeueMontreal text-[14px] leading-[22px] text-secondry/50 mb-[24px] max-w-[280px]">
									{group.description}
								</p>

								<div className="flex flex-col gap-y-[2px]">
									{group.items.map((link) => (
										<Button
											href={link.href}
											title={link.title}
											key={link.id}
										/>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
