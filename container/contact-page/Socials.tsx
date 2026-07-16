"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { LinkHover, TextMask } from "@/animation";
import { ScaleFunnelMark } from "@/components";

export default function Socials() {
	const phrase = ["INSTAGRAM", "behance", "facebook", "linkedin"];

	return (
		<section className="w-full min-h-screen sm:min-h-0 xm:min-h-0 sm:py-[80px] xm:py-[60px] bg-about padding-y relative">
			<div className="w-full h-full flex justify-center gap-[50px] items-center flex-col">
				<div className="flex flex-col gap-[10px] pb-[50px]">
					<h1 className="text-[277px] leading-[207px] lg:text-[230px] lg:leading-[170px] md:text-[150px] md:leading-[100px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] text-center font-bold font-FoundersGrotesk text-secondry uppercase pointer-events-none">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
						className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px] padding-x">
						<div className="w-[50%] sm:w-full xm:w-full">
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Our contact
							</h3>
						</div>
						<div className="w-[50%] sm:w-full xm:w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px]">
							<div>
								<h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
									L:
								</h1>
								<div className="flex flex-col gap-y-[10px]">
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title={`202-1965 W 4th Awe`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title={`Vancouver, Canada`}
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="30 Chukarina"
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="St Lviv, Ukraine"
										href="/"
									/>
								</div>
							</div>
							<div className="flex w-fit h-fit gap-x-[5px] group">
								<div className="rounded-[50px] border-[2px] border-[#21212155] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
									<Link
										href="mailto:hello@ochi.design"
										className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-200 ease-in">
										hello@ochi.design
									</Link>
								</div>
								<div className="w-[33px] flex items-center justify-center h-[33px] border-[2px] border-[#21212155] rounded-[50px] group-hover:bg-secondry transition-all duration-200 ease-in cursor-pointer sm:hidden xm:hidden">
									<p className="paragraph font-normal text-secondry group-hover:text-background">
										<ArrowUpRight
											size={24}
											strokeWidth={1.25}
										/>
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
			<div className="w-full absolute top-[50%] transform translate-y-[-50%] flex items-center justify-center pointer-events-none opacity-[0.14]">
				<ScaleFunnelMark size="lg" tone="dark" className="scale-[3] sm:scale-[2] xm:scale-[1.5]" />
			</div>
		</section>
	);
}
