"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import { RoundButton } from "@/components";
import { FirstLoadContext } from "@/components/Curve/Curve";

const logoEase = [0.33, 1, 0.68, 1];
const revealDuration = 1.4;

export default function Hero() {
	const { loaderVisible, loaderExpanding } = useContext(FirstLoadContext);
	const showHeroContent = loaderExpanding || !loaderVisible;
	const animateHero = showHeroContent;
	const showIsOur = showHeroContent;

	const fadeIn = {
		hidden: { opacity: 0, y: 18 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section
			className="hero-section w-full h-screen"
			data-scroll
			data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between">
				{/* Spacer for fixed navbar */}
				<div />

				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex flex-col gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						{/* Pre-headline */}
						<motion.p
							variants={fadeIn}
							initial="hidden"
							animate={showHeroContent ? "visible" : "hidden"}
							transition={{ ease: logoEase, duration: revealDuration, delay: 0.05 }}
							className="paragraph font-NeueMontreal text-secondry opacity-70 uppercase tracking-[3px] text-[13px]">
							Performance Marketing for Coaches, Consultants and Course Creators
						</motion.p>

						{/* Main Headline */}
						<h1 className="heading tracking-[-1.3px] text-secondry font-semibold font-FoundersGrotesk uppercase flex flex-col gap-0 leading-[0.85] lg:leading-[0.85] md:leading-[0.85] sm:leading-[0.85] xm:leading-[0.85]">
							<motion.div
								variants={fadeIn}
								initial="hidden"
								animate={showHeroContent ? "visible" : "hidden"}
								transition={{ ease: logoEase, duration: revealDuration, delay: 0.1 }}>
								YOUR GROWTH
							</motion.div>

							{/* Line 2: [triangle icon] IS OUR — logo space reserved, both animate in together */}
							<div className="flex items-center gap-[15px] sm:gap-[8px] xm:gap-[5px]">

								{/* Scale Funnel logo mark — dot first, then bottom to top */}
								<span className="hero-logo inline-flex flex-col items-center justify-end shrink-0 self-center overflow-visible h-[112px] lg:h-[98px] md:h-[80px] sm:h-[58px] xm:h-[50px] w-[76px] lg:w-[68px] md:w-[55px] sm:w-[40px] xm:w-[34px] pt-[14px] lg:pt-[12px] md:pt-[10px] sm:pt-[8px] xm:pt-[6px]">

									{/* Big navy triangle — last to appear */}
									<motion.span
										initial={{ y: "110%", opacity: 0 }}
										animate={animateHero ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
										transition={{ ease: logoEase, duration: 0.6, delay: showHeroContent ? 0.85 : 0 }}
										className="block leading-none">
										<svg
											viewBox="0 0 60 52"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="w-[66px] lg:w-[58px] md:w-[48px] sm:w-[34px] xm:w-[30px] h-auto block">
											<path d="M30 0L60 52H0L30 0Z" fill="#1B2B6B" />
										</svg>
									</motion.span>

									{/* Orange triangle — second */}
									<motion.span
										initial={{ y: "110%", opacity: 0 }}
										animate={animateHero ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
										transition={{ ease: logoEase, duration: 0.6, delay: showHeroContent ? 0.55 : 0 }}
										className="block leading-none -mt-[2px]">
										<svg
											viewBox="0 0 42 36"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="w-[46px] lg:w-[40px] md:w-[33px] sm:w-[24px] xm:w-[21px] h-auto block">
											<path d="M21 0L42 36H0L21 0Z" fill="#F47B20" />
										</svg>
									</motion.span>

									{/* Dot — first to appear */}
									<motion.span
										initial={{ scale: 0, opacity: 0 }}
										animate={animateHero ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
										transition={{ ease: logoEase, duration: 0.45, delay: showHeroContent ? 0.25 : 0 }}
										className="block leading-none mt-[2px]">
										<svg
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="w-[12px] lg:w-[10px] md:w-[9px] sm:w-[7px] xm:w-[6px] h-auto block">
											<circle cx="7" cy="7" r="7" fill="#F47B20" />
										</svg>
									</motion.span>
								</span>

								<motion.span
									initial={{ opacity: 0, x: -6 }}
									animate={showIsOur ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
									transition={{ ease: logoEase, duration: revealDuration, delay: 0.15 }}
								>
									IS OUR
								</motion.span>
							</div>

							<motion.div
								variants={fadeIn}
								initial="hidden"
								animate={showHeroContent ? "visible" : "hidden"}
								transition={{ ease: logoEase, duration: revealDuration, delay: 0.2 }}
								className="text-accent">
								GOAL.
							</motion.div>
						</h1>
					</div>

					<motion.div
						variants={fadeIn}
						initial="hidden"
						animate={showHeroContent ? "visible" : "hidden"}
						transition={{ ease: logoEase, duration: revealDuration, delay: 0.35 }}
						className="w-full flex flex-col min-h-[26vh] border-t border-[#1B2B6B33] mt-[56px] sm:mt-[44px] xm:mt-[36px] pt-[36px] pb-[48px] sm:mb-[80px] xm:mb-[80px] gap-[40px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[55%] xm:w-full sm:w-full">
								<p className="tagline">
									The Only Marketing Agency Your Coaching Business Will Ever Need
								</p>
								<p className="paragraph font-NeueMontreal text-secondry opacity-60 mt-[8px] text-[15px]">
									We build, launch, and scale the complete growth system behind your coaching business — Meta ads, funnels, automation, and beyond.
								</p>
							</div>
							<div className="w-[45%] xm:w-full sm:w-full flex justify-end xm:flex-col xm:items-start sm:flex-col sm:items-start">
								<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
									<RoundButton
										href="/contact"
										title="Book a Strategy Call"
										bgcolor="#000"
										className="bg-white text-black"
										style={{ color: "#fff" }}
									/>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
							<motion.p
								initial={{ y: "-100%", opacity: 0 }}
								animate={showHeroContent ? { y: "100%", opacity: 0.5 } : { y: "-100%", opacity: 0 }}
								transition={{
									duration: 1.8,
									repeat: showHeroContent ? Infinity : 0,
									ease: [0.3, 0.86, 0.36, 0.95],
								}}
								className="paragraph opacity-50 font-NeueMontreal text-secondry">
								scroll down
							</motion.p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
