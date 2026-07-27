"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {logowhite, logo, mobileLogo, mobilelogowhite } from "@/public";

export default function Hero() {
	return (
		<section
			className="relative w-full h-screen overflow-hidden sm:mb-[-10px] xm:mb-[-10px] bg-[linear-gradient(120deg,#0f1640_0%,#1B2B6B_20%,#3a2f6e_38%,#7c3c62_54%,#c85a3a_72%,#e9923f_86%,#f6b567_100%)]"
			data-scroll
			data-scroll-speed="-.3">
			{/* White logo watermark — left-center, ~50% cropped off-screen */}
			<div className="pointer-events-none absolute -left-[14%] top-1/2 -translate-y-1/2 w-[36vw] max-w-[560px] opacity-[0.10] select-none z-0">
				<Image
					src={mobilelogowhite}
					alt=""
					width={560}
					height={560}
					className="w-full h-auto object-contain"
					priority
				/>
			</div>

			{/* subtle top-to-bottom scrim so text stays readable regardless of gradient position */}
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

			<div className="relative z-10 w-full h-full flex flex-col justify-between">
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex flex-col gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						{/* Pre-headline */}
						<p className="paragraph font-NeueMontreal text-white/70 uppercase tracking-[3px] text-[13px]">
							Performance Marketing for Coaches, Consultants and Course Creators
						</p>

						{/* Main Headline */}
						<h1 className="heading tracking-[-1.3px] text-white font-semibold font-FoundersGrotesk uppercase flex flex-col gap-0 leading-[0.85] lg:leading-[0.85] md:leading-[0.85] sm:leading-[0.85] xm:leading-[0.85] drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]">
							<div>YOUR GROWTH</div>
							<div className="flex items-center gap-[15px] sm:gap-[8px] xm:gap-[5px]">
								<span
									className="hero-logo pt-[13px] flex items-center overflow-hidden h-[107px] lg:h-[80px] md:h-[63px] sm:h-[45px] xm:h-[40px] shrink-0">
									<Image
										width={120}
										height={95}
										src={logowhite}
									
										alt="The Scale Funnel Icon"
										className="w-auto h-[95px] lg:h-[80px] md:h-[63px] sm:h-[45px] xm:h-[40px] object-contain"
									/>
								</span>
								<span>IS OUR</span>
							</div>
							<div className="text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] sm:[-webkit-text-stroke:0.5px_rgba(255,255,255,0.4)]">
								GOAL.
							</div>
						</h1>
					</div>

					<div className="w-full flex flex-col h-[22vh] border-t border-white/20 py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[55%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal text-white">
									The Only Marketing Agency Your Coaching Business Will Ever Need
								</p>
								<p className="paragraph font-NeueMontreal text-white/70 mt-[8px] text-[15px]">
									We build, launch, and scale the complete growth system behind your coaching business — Meta ads, funnels, automation, and beyond.
								</p>
							</div>
							<div className="w-[45%] xm:w-full sm:w-full flex justify-end xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border border-white/60 group-hover:bg-white py-[3px] px-[12px] cursor-pointer transition-colors duration-300">
										<Link
											className="paragraph font-NeueMontreal text-white uppercase group-hover:text-[#1B2B6B] transition-all transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href="/contact">
											Book a Strategy Call
										</Link>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-white/60 rounded-full p-[1px] group-hover:bg-white transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
										<p className="font-normal text-white group-hover:text-[#1B2B6B]">
											<ArrowUpRight
												size={24}
												strokeWidth={1.25}
											/>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
							<motion.p
								initial={{ y: "-100%", opacity: 0 }}
								animate={{ y: "100%", opacity: 0.6 }}
								transition={{
									duration: 1.8,
									repeat: Infinity,
									ease: [0.3, 0.86, 0.36, 0.95],
								}}
								className="paragraph opacity-60 font-NeueMontreal text-white">
								scroll down
							</motion.p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}