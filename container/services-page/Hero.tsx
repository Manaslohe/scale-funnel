"use client";
import { useState, useRef } from "react";
import {
	motion,
	useMotionValue,
	useSpring,
	useTransform,
	AnimatePresence,
} from "framer-motion";
import { Megaphone, Layout, Zap, TrendingUp } from "lucide-react";
import { Heading } from "@/components";

const services = [
	{
		id: 1,
		name: "Paid Marketing",
		tagline: "The right people. The right message. The right moment.",
		description: "We run Meta ad campaigns engineered for one thing — getting your ideal coaching clientele into your funnel.",
		includes: [
			"Meta Ads (Facebook & Instagram) strategy and execution",
			"Ad creative direction and copywriting",
			"Audience research and targeting",
			"Campaign setup, monitoring, and optimization",
			"CAC, CPL, and ROAS tracking",
			"A/B testing on creatives and copy",
			"Weekly and monthly performance reports",
		],
		Icon: Megaphone,
	},
	{
		id: 2,
		name: "Landing Pages",
		tagline: "Your page should do the selling before you say a word.",
		description: "We design and write conversion-focused landing pages and sales pages that move visitors from curious to committed.",
		includes: [
			"Landing page copywriting and structure",
			"Sales page optimization",
			"Call booking funnel setup",
			"Webinar and masterclass registration pages",
			"Consultation funnel design",
			"Testimonial and social proof strategy",
			"Conversion tracking and fixes",
		],
		Icon: Layout,
	},
	{
		id: 3,
		name: "Automation",
		tagline: "Your business should be working even when you're not.",
		description: "We build the backend systems that keep leads warm, move them through your funnel, and free you from manual follow-up — permanently.",
		includes: [
			"Email sequence setup and copywriting",
			"WhatsApp sequence and automation",
			"CRM setup and management",
			"Lead qualification workflows",
			"Webinar show-up optimization sequences",
			"Pipeline automation",
			"Integration across your entire tech stack",
		],
		Icon: Zap,
	},
	{
		id: 4,
		name: "Growth Systems",
		tagline: "Strategy, data, and relentless optimization — so your growth compounds.",
		description: "This is the engine behind everything. We don't just run campaigns and hope — we track, analyze, test, and refine every part of your funnel.",
		includes: [
			"KPI dashboard setup and tracking",
			"Ad performance analysis",
			"Funnel optimization",
			"Conversion rate, CAC, and lead cost analysis",
			"A/B testing across funnel stages",
			"Competitor and market intelligence",
			"Weekly and monthly strategy reporting",
			"Offer positioning and pricing strategy",
		],
		Icon: TrendingUp,
	},
];

function ServiceCard({
	service,
	index,
	isExpanded,
	onToggle,
}: {
	service: (typeof services)[0];
	index: number;
	isExpanded: boolean;
	onToggle: () => void;
}) {
	const cardRef = useRef<HTMLElement>(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const springConfig = { stiffness: 150, damping: 20 };
	const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
	const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
		mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};

	return (
		<motion.article
			ref={cardRef}
			onClick={onToggle}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ rotateX, rotateY, transformPerspective: 1200 }}
			className="group/card relative flex flex-col self-start h-auto rounded-[20px] border border-[#1B2B6B12] bg-white p-[32px] sm:p-[24px] xm:p-[20px] shadow-[0_4px_24px_rgba(27,43,107,0.05)] cursor-pointer overflow-hidden"
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-60px" }}
			transition={{ duration: 0.6, delay: index * 0.08, ease: [0.33, 1, 0.68, 1] }}
			whileHover={{ y: -6 }}>
			{/* Decorative layer — clipped separately so it never hides the expand panel below */}
			<div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none">
				{/* Animated shimmer overlay */}
				<motion.div
					className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"
					style={{
						background:
							"linear-gradient(105deg, transparent 40%, rgba(244,123,32,0.06) 50%, transparent 60%)",
						backgroundSize: "200% 100%",
					}}
					animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
					transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
				/>

				{/* Corner accent line */}
				<motion.div
					className="absolute top-0 right-0 w-[80px] h-[80px] pointer-events-none"
					initial={{ opacity: 0, scale: 0.5 }}
					whileHover={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.4 }}>
					<svg viewBox="0 0 80 80" className="w-full h-full">
					<motion.path
						d="M80 0 L80 40 Q80 80 40 80"
						fill="none"
						stroke="#F47B20"
						strokeWidth="1.5"
						strokeOpacity="0.35"
						initial={{ pathLength: 0 }}
						whileInView={{ pathLength: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
					/>
				</svg>
			</motion.div>
			</div>

			<div className="flex items-start justify-between gap-[16px] mb-[24px] relative z-[1]">
				<div className="flex items-center gap-[16px]">
					<motion.div
						className="w-[52px] h-[52px] rounded-full bg-[#EEF2FF] flex items-center justify-center shrink-0"
						whileHover={{ scale: 1.1, rotate: 8 }}
						transition={{ type: "spring", stiffness: 300, damping: 15 }}>
						<service.Icon
							size={24}
							strokeWidth={1.5}
							className="text-secondry"
						/>
					</motion.div>
					<div>
						<span className="text-[11px] uppercase tracking-[3px] font-NeueMontreal font-semibold text-accent block mb-[6px]">
							0{service.id}
						</span>
						<h2 className="card-heading text-[26px] sm:text-[22px] xm:text-[20px]">
							{service.name}
						</h2>
					</div>
				</div>
				<button
					type="button"
					onClick={(e) => {
						e.stopPropagation();
						onToggle();
					}}
					className="small-text font-NeueMontreal font-semibold uppercase tracking-[2px] text-secondry/50 hover:text-secondry mt-[6px] shrink-0 transition-colors duration-300">
					{isExpanded ? "Close" : "Read"}
				</button>
			</div>

			<p className="font-NeueMontreal text-[15px] leading-[24px] text-secondry/55 italic mb-[20px] relative z-[1]">
				{service.tagline}
			</p>

			<p className="paragraph font-NeueMontreal text-secondry mb-[24px] relative z-[1]">
				{service.description}
			</p>

			{/* Expand panel — in-flow so sibling cards are pushed down, not overlapped */}
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						key="includes"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
						className="relative z-[1] overflow-hidden">
						<div className="border-t border-[#1B2B6B1A] pt-[16px] mt-[4px]">
							<p className="small-text font-NeueMontreal font-semibold text-secondry uppercase tracking-[2px] mb-[14px]">
								What&apos;s included:
							</p>
							<ul className="flex flex-col gap-[8px]">
								{service.includes.map((item, i) => (
									<motion.li
										key={i}
										className="flex items-start gap-[10px]"
										initial={{ opacity: 0, x: -12 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: i * 0.04, duration: 0.3 }}>
										<span className="w-[5px] h-[5px] rounded-full bg-accent flex-shrink-0 mt-[9px]" />
										<span className="font-NeueMontreal text-[15px] leading-[24px] text-secondry/75">
											{item}
										</span>
									</motion.li>
								))}
							</ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.article>
	);
}

export default function Hero() {
	const [expandedId, setExpandedId] = useState<number | null>(null);

	return (
		<section className="w-full min-h-screen">
			{/* Page title */}
			<div className="padding-x page-top">
				<motion.h1
					className="section-heading text-secondry !text-[110px] lg:!text-[90px] md:!text-[72px] sm:!text-[48px] xm:!text-[40px] !tracking-[2.5px]"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}>
					Services
				</motion.h1>
			</div>

			{/* Full-width divider */}
			<div className="w-full border-t border-[#1B2B6B22] my-[40px] sm:my-[32px] xm:my-[28px]" />

			{/* What We Do section */}
			<Heading
				title="What We Do & How We Do It"
				showAccent={false}
				className="padding-x pb-[6px]"
			/>
			<p className="padding-x paragraph font-NeueMontreal text-secondry opacity-60 pb-[50px] border-b border-[#1B2B6B33]">
				Four core services. One outcome — predictable, scalable growth for your coaching business.
			</p>

			<div className="w-full grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xm:grid-cols-1 items-start content-start gap-x-[28px] gap-y-[48px] padding-x padding-y relative z-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.id}
						service={service}
						index={index}
						isExpanded={expandedId === service.id}
						onToggle={() =>
							setExpandedId((prev) =>
								prev === service.id ? null : service.id,
							)
						}
					/>
				))}
			</div>
		</section>
	);
}
