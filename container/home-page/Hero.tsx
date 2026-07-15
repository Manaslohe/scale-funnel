"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { logoIcon } from "@/public";
import {
	isIntroFinished,
	shouldShowIntroLoader,
	subscribeIntroFinish,
} from "@/lib/introLoader";

export default function Hero() {
	const [loaderPlaying] = useState(() => shouldShowIntroLoader());
	const [visible, setVisible] = useState(() => isIntroFinished());

	useEffect(() => {
		if (!loaderPlaying) return;
		return subscribeIntroFinish(() => setVisible(true));
	}, [loaderPlaying]);

	return (
		<section
			className="w-full pt-[160px] pb-[90px] lg:pt-[140px] md:pt-[160px] sm:pt-[150px] xm:pt-[140px] sm:pb-[60px] xm:pb-[60px]"
			data-scroll
			data-scroll-speed="0"
			aria-hidden={!visible}
			style={{
				visibility: visible ? "visible" : "hidden",
			}}>
			<div className="w-full flex flex-col gap-[77px] md:gap-[53px] sm:gap-[41px] xm:gap-[33px]">
				<div className="w-full flex justify-between gap-[20px] padding-x">
					<div>
						<p className="small-text uppercase tracking-[0.1em] text-orange font-medium font-NeueMontreal mb-[22px] sm:mb-[18px] xm:mb-[16px]">
							Performance Marketing for Coaches, Consultants &amp; Course Creators
						</p>
						<h1 className="heading tracking-[0.005em] text-secondry font-semibold font-FoundersGrotesk uppercase">
							your growth <br />
							<div className="flex items-center gap-[20px] md:gap-[14px] sm:gap-[10px] xm:gap-[8px] mt-[4px] sm:mt-[2px]">
								<motion.span
									initial={{ opacity: 0, x: -80 }}
									animate={
										loaderPlaying && !visible
											? { opacity: 0, x: -80 }
											: { opacity: 1, x: 0 }
									}
									transition={{
										ease: [0.86, 0, 0.07, 0.995],
										duration: 0.9,
										delay: loaderPlaying ? 0 : 0.4,
									}}
									className="leading-[130px] lg:leading-[100px] md:leading-[72px] sm:leading-[52px] xm:leading-[44px] flex-shrink-0">
									<Image
										width={103}
										height={154}
										src={logoIcon}
										alt="img"
										className="w-auto h-[95px] lg:w-auto lg:h-[85px] md:w-auto md:h-[63px] sm:w-auto sm:h-[45px] xm:w-auto xm:h-[40px] object-contain"
									/>
								</motion.span>
								<span className="heading tracking-[0.005em] text-secondry font-semibold font-FoundersGrotesk uppercase">
									is our
								</span>
							</div>
							<span className="text-orange block mt-[2px] sm:mt-[0px]">goal.</span>
						</h1>
					</div>
				</div>
				<div className="w-full flex flex-col border-t border-[#20202155] pt-[24px] gap-[30px] sm:gap-[24px] xm:gap-[20px]">
					<div className="flex justify-between items-start padding-x gap-[40px] md:gap-[32px] sm:flex-col sm:gap-[20px] xm:flex-col xm:gap-[18px]">
						<p className="flex-1 paragraph font-NeueMontreal text-secondry">
							Performance marketing for coaches, consultants and
							course creators
						</p>
						<p className="flex-1 paragraph font-NeueMontreal text-secondry text-right sm:text-left xm:text-left">
							The only marketing agency your coaching business
							will ever need
						</p>
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
		</section>
	);
}
