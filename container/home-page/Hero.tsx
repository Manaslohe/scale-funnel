"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { logowhite, logo, mobileLogo, mobilelogowhite } from "@/public";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";

export default function Hero() {
	return (
		<section
			className="relative w-full h-screen overflow-hidden sm:mb-[-10px] xm:mb-[-10px] bg-[linear-gradient(120deg,#0f1640_0%,#1B2B6B_20%,#3a2f6e_38%,#7c3c62_54%,#c85a3a_72%,#e9923f_86%,#f6b567_100%)] sm:bg-[linear-gradient(165deg,#0b1140_0%,#142163_18%,#1B2B6B_32%,#4a2f66_46%,#8a4155_58%,#c1592f_72%,#e08a3c_86%,#f6b567_100%)] xm:bg-[linear-gradient(165deg,#0b1140_0%,#142163_18%,#1B2B6B_32%,#4a2f66_46%,#8a4155_58%,#c1592f_72%,#e08a3c_86%,#f6b567_100%)]"
			data-scroll
			data-scroll-speed="-.3">
			{/* White logo watermark — left-center, ~50% cropped off-screen */}
			<div className="pointer-events-none absolute -left-[14%] top-1/2 -translate-y-1/2 w-[36vw] max-w-[560px] sm:w-[70vw] sm:max-w-none xm:w-[75vw] opacity-[0.10] select-none z-0">
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
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-auto xm:h-auto sm:pb-[50px] xm:pb-[40px]">
					<div className="w-full flex flex-col gap-[16px] sm:gap-[14px] xm:gap-[10px] pl-[50px] md:pl-[30px] sm:pl-[24px] xm:pl-[20px] pr-0 sm:pr-[24px] xm:pr-[20px] pt-0 sm:pt-[72px] xm:pt-[64px]">
						{/* Pre-headline */}
						<p className="paragraph font-NeueMontreal text-white/70 uppercase tracking-[3px] sm:tracking-[2px] xm:tracking-[1.5px] text-[13px] sm:text-[12px] xm:text-[11px] sm:leading-[1.5] xm:leading-[1.5]">
							Performance Marketing for Coaches, Consultants and Course Creators
						</p>

						{/* Main Headline */}
						<h1 className="heading tracking-[-1.3px] text-white font-semibold font-FoundersGrotesk uppercase flex flex-col gap-0 leading-[0.85] lg:leading-[0.85] md:leading-[0.85] sm:leading-[0.98] xm:leading-[1.02] drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)]">
							<div>YOUR GROWTH</div>
							<div className="flex items-center gap-[15px] sm:gap-[8px] xm:gap-[6px] sm:mb-[4px] xm:mb-[4px]">
								<span className="hero-logo pt-[13px] sm:pt-0 xm:pt-0 flex items-center overflow-hidden h-[107px] lg:h-[80px] md:h-[63px] sm:h-[38px] xm:h-[32px] shrink-0">
									<Image
										width={120}
										height={95}
										src={logowhite}
										alt="The Scale Funnel Icon"
										className="w-auto h-[95px] lg:h-[80px] md:h-[63px] sm:h-[38px] xm:h-[32px] object-contain"
									/>
								</span>
								<span>IS OUR</span>
							</div>
							<div className="text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] sm:[-webkit-text-stroke:0.5px_rgba(255,255,255,0.4)]">
								GOAL.
							</div>
						</h1>
					</div>

					<div className="w-full flex flex-col border-t border-white/20 py-[20px] sm:py-[22px] xm:py-[18px] sm:mt-[36px] xm:mt-[28px] gap-[20px] sm:gap-[18px] xm:gap-[16px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[55%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal text-white sm:text-[15px] xm:text-[15px] sm:leading-[1.4] xm:leading-[1.4]">
									The Only Marketing Agency Your Coaching Business Will Ever Need
								</p>
								<p className="paragraph font-NeueMontreal text-white/70 mt-[8px] sm:mt-[6px] xm:mt-[6px] text-[15px] sm:text-[13.5px] xm:text-[13.5px] sm:leading-[1.5] xm:leading-[1.5]">
									We build, launch, and scale the complete growth system behind your coaching business — Meta ads, funnels, automation, and beyond.
								</p>
							</div>
							<div className="w-[45%] xm:w-full sm:w-full flex justify-end xm:justify-start sm:justify-start xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<HoverBorderGradient
									as={Link}
									href="/contact"
									containerClassName="rounded-[50px] sm:w-full xm:w-full"
									className="flex items-center justify-center gap-[6px] text-white paragraph font-NeueMontreal uppercase h-[54px] sm:h-[50px] xm:h-[48px] px-[28px] sm:px-[24px] xm:px-[20px] text-[14px] sm:text-[13px] xm:text-[12.5px] tracking-[1px] leading-none sm:w-full xm:w-full"
								>
									<span>Book a Strategy Call</span>
									<ArrowUpRight size={18} strokeWidth={1.5} />
								</HoverBorderGradient>
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