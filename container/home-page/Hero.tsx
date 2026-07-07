"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { logo, mobileLogo } from "@/public";

export default function Hero() {
	return (
		<section
			className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px]"
			data-scroll
			data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between">
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex flex-col gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						{/* Pre-headline */}
						<p className="paragraph font-NeueMontreal text-secondry opacity-70 uppercase tracking-[3px] text-[13px]">
							Performance Marketing for Coaches, Consultants and Course Creators
						</p>

						{/* Main Headline */}
						<h1 className="heading tracking-[-1.3px] text-secondry font-semibold font-FoundersGrotesk uppercase flex flex-col gap-0 leading-[0.85] lg:leading-[0.85] md:leading-[0.85] sm:leading-[0.85] xm:leading-[0.85]">
							<div>YOUR GROWTH</div>
							<div className="flex items-center gap-[15px] sm:gap-[8px] xm:gap-[5px]">
								<motion.span
									initial={{ width: 0 }}
									animate={{ width: "auto" }}
									transition={{
										ease: [0.86, 0, 0.07, 0.995],
										duration: 1,
										delay: 1.5,
									}}
									className="hero-logo flex items-center overflow-hidden h-[95px] lg:h-[80px] md:h-[63px] sm:h-[45px] xm:h-[40px] shrink-0">
									<Image
										width={120}
										height={95}
										src={logo}
										alt="The Scale Funnel Icon"
										className="w-auto h-[95px] lg:h-[80px] md:h-[63px] sm:h-[45px] xm:h-[40px] object-contain rounded-[10px]"
										style={{ mixBlendMode: "multiply" }}
									/>
								</motion.span>
								<span>IS OUR</span>
							</div>
							<div className="text-accent">GOAL.</div>
						</h1>
					</div>

					<div className="w-full flex flex-col h-[22vh] border-t border-[#1B2B6B33] py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[55%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									The Only Marketing Agency Your Coaching Business Will Ever Need
								</p>
								<p className="paragraph font-NeueMontreal text-secondry opacity-60 mt-[8px] text-[15px]">
									We build, launch, and scale the complete growth system behind your coaching business — Meta ads, funnels, automation, and beyond.
								</p>
							</div>
							<div className="w-[45%] xm:w-full sm:w-full flex justify-end xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border border-[#1B2B6B99] group-hover:bg-secondry py-[3px] px-[12px] cursor-pointer">
										<Link
											className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href="/contact">
											Book a Strategy Call
										</Link>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#1B2B6B99] rounded-full p-[1px] group-hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
										<p className="font-normal text-secondry group-hover:text-background">
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
								animate={{ y: "100%", opacity: 0.5 }}
								transition={{
									duration: 1.8,
									repeat: Infinity,
									ease: [0.3, 0.86, 0.36, 0.95],
								}}
								className="paragraph opacity-50 font-NeueMontreal text-secondry">
								scroll down
							</motion.p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
