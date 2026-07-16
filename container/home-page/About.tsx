"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { aboutImg } from "@/public";
import { Heading, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			{/* Trust Bar Headline */}
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="section-heading">
					Built for coaches. Proven by results.
				</h2>
			</div>

			<div className="w-full border-y border-[#1B2B6B33] my-[50px] py-[20px]">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
					className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="sub-paragraph font-medium text-secondry font-NeueMontreal">
							What makes us different?
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[65%] sm:w-full xm:w-full">
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
									We&apos;ve helped digital coaches across niches — health, business, mindset, relationships — build funnels that fill their calendars and grow their revenue.
								</p>
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
									We&apos;re not a generic agency. We&apos;re specialists who understand how coaching businesses actually sell — and we build growth systems around that reality.
								</p>
							</div>
							<div className="w-[35%] flex justify-end flex-col sm:w-full xm:w-full">
								<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
									<RoundButton
										href="/services"
										title="See How It Works"
										bgcolor="#000"
										className="bg-white text-black"
										style={{ color: "#fff" }}
										compact
									/>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Services Preview */}
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-60px" }}
				transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
				className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="What we do:" showAccent={false} />
					<div className="flex flex-col gap-[12px] max-w-[300px]">
						{[
							"Paid Marketing",
							"Landing Pages",
							"Automation",
							"Growth Systems",
						].map((service, i) => (
							<div key={i} className="flex items-center gap-[10px]">
								<span className="w-[8px] h-[8px] rounded-full bg-accent flex-shrink-0" />
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry">{service}</p>
							</div>
						))}
					</div>
					<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundButton
							href="/services"
							title="Full-Service Breakdown"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
				<div
					className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${
						hovered && "scale-[0.96]"
					}`}>
					<Image
						src={aboutImg}
						alt="The Scale Funnel - Marketing for coaches"
						className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${
							hovered && "scale-[1.09]"
						}`}
					/>
				</div>
			</motion.div>
		</section>
	);
}
