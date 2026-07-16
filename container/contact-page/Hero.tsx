"use client";
import { motion } from "framer-motion";

const logoEase = [0.33, 1, 0.68, 1];

export default function Hero() {
	return (
		<section className="w-full padding-x">
			<div className="w-full flex flex-col">
				<div className="w-full page-top pb-[60px] lg:pb-[50px] md:pb-[40px] sm:pb-[32px] xm:pb-[28px]">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: logoEase, duration: 0.7 }}
						className="heading tracking-[-1.3px] text-secondry font-semibold font-FoundersGrotesk uppercase">
						LET&apos;S START <br />
						A PROJECT TOGETHER
					</motion.h1>
				</div>
				<div className="w-full pt-[40px] pb-[24px] border-t border-[#1B2B6B22]">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ ease: logoEase, duration: 0.6 }}
						className="text-[42px] leading-[1.08] lg:text-[38px] md:text-[34px] sm:text-[30px] xm:text-[26px] font-black font-FoundersGrotesk text-secondry uppercase tracking-[1.75px]">
						Fill the Form Below
					</motion.h2>
				</div>
			</div>
		</section>
	);
}
