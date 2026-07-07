"use client";
import Link from "next/link";
import { useState } from "react";
import { clientsItem } from "@/constants";
import { Button, Ratings } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
	const [activeAccordion, setActiveAccordion] = useState(clientsItem[0].id);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full padding-y">
			{/* Process Section */}
			<div className="padding-x mb-[80px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry pb-[50px]">
					What Working with Us Looks Like
				</h2>
				<div className="flex flex-col gap-0">
					{processPhases.map((phase, index) => (
						<div
							key={phase.id}
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
						</div>
					))}
				</div>
				<div className="flex justify-center mt-[60px]">
					<Link
						href="/contact"
						className="flex items-center gap-[12px] group">
						<div className="rounded-[50px] border border-[#1B2B6B] group-hover:bg-secondry py-[10px] px-[24px] cursor-pointer transition-all duration-300">
							<span className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-white transition-all duration-300">
								Book your strategy call and let&apos;s get started
							</span>
						</div>
						<div className="w-[44px] h-[44px] border border-[#1B2B6B] rounded-full flex items-center justify-center group-hover:bg-secondry transition-all duration-300 xm:hidden sm:hidden">
							<ArrowUpRight size={20} strokeWidth={1.5} className="text-secondry group-hover:text-white" />
						</div>
					</Link>
				</div>
			</div>

			{/* Testimonials Section */}
			<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
				Client Reviews
			</h1>
			{clientsItem.map((item) => (
				<div
					key={item.id}
					className={`w-full flex py-[10px] flex-col ${
						item.id == 1
							? "border-y border-[#1B2B6B33]"
							: "border-b border-[#1B2B6B33]"
					}`}>
					<div className="w-full flex items-center justify-between py-[10px] padding-x">
						<div className="w-[50%] flex items-center">
							<div className="w-[40%] sm:w-auto xm:w-auto">
								<Link
									href={item.href}
									className="small-text font-normal font-NeueMontreal text-secondry link-flash">
									{item.website}
								</Link>
							</div>
							<div className="w-auto sm:hidden xm:hidden">
								<motion.h3
									className={`small-text font-normal font-NeueMontreal text-secondry ${
										activeAccordion === item.id ? "opacity-100" : "opacity-0"
									} opacity-0 transition-all duration-200 ease-in-out`}>
									{item.title}
								</motion.h3>
							</div>
						</div>
						<div className="w-[50%] flex items-center justify-between">
							<div className="w-[40%] sm:w-auto xm:w-auto">
								<h3 className="small-text font-normal font-NeueMontreal text-secondry">
									{item.name}
								</h3>
							</div>
							<div className="w-[10%] sm:w-auto xm:w-auto flex items-end justify-end">
								<button
									className={`small-text font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
										activeAccordion === item.id
											? "text-gray-300"
											: "text-secondry link-flash"
									}`}
									onClick={() => toggleAccordion(item.id)}>
									{activeAccordion === item.id ? "read" : "read"}
								</button>
							</div>
						</div>
					</div>

					<div className={`w-full flex justify-between padding-x sm:flex-col xm:flex-col`}>
						<div className="w-[20%] sm:w-auto xm:w-auto" />
						<div className="w-[30%] sm:w-auto xm:w-auto sm:flex xm:flex flex-wrap gap-x-[5px] sm:pt-[10px] xm:pt-[10px]">
							{item.links.map((link) => (
								<AnimatePresence key={link.id}>
									{activeAccordion === item.id && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{
												ease: [0.4, 0, 0.2, 1],
												duration: 1,
											}}>
											<Button
												href={link.href}
												title={link.title}
												key={link.id}
											/>
										</motion.div>
									)}
								</AnimatePresence>
							))}
						</div>
						<div className="w-[40%] sm:w-auto xm:w-auto">
							<AnimatePresence>
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{
											ease: [0.4, 0, 0.2, 1],
											duration: 1.3,
										}}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<div className="">
												<p className="small-text tracking-wider font-normal font-NeueMontreal text-secondry">
													{item.review}
												</p>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<div className="w-[10%] sm:w-auto xm:w-auto" />
					</div>
				</div>
			))}
			<div className="padding-x pt-[80px]">
				<Ratings />
			</div>
		</section>
	);
}
