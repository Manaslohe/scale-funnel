"use client";
import Link from "next/link";
import { Eyes } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-secondry font-semibold font-FoundersGrotesk uppercase">
								THE SCALE <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}>
										<span className="inline-block px-[16px] py-[4px] bg-accent rounded-[10px] text-white text-[40px] lg:text-[32px] md:text-[28px] sm:text-[22px] xm:text-[18px] leading-[1.2] font-NeueMontreal font-semibold normal-case tracking-normal whitespace-nowrap">
											Who We Are
										</span>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-secondry font-semibold font-FoundersGrotesk uppercase">
										FUNNEL
									</h1>
								</div>
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#1B2B6B33] pt-[20px]">
						<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[20px]">
							<div className="w-[10%] sm:w-full xm:w-full">
								<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
									About us:
								</h3>
							</div>
							<div className="w-[48%] flex justify-between sm:w-full xm:w-full sm:flex-col xm:flex-col gap-[20px]">
								<div className="w-[50%] flex flex-col gap-y-[40px] sm:w-full xm:w-full">
									<div className="flex flex-col gap-y-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry">
											The Scale Funnel wasn&apos;t built in a boardroom. It was built from years of first-hand experience watching talented coaches struggle with the one thing they shouldn&apos;t have to worry about — getting clients.
										</p>
									</div>
									<div className="flex flex-col gap-y-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry">
											We are three specialists who decided that coaching businesses deserve an agency that truly understands their world. One that doesn&apos;t just run campaigns — but builds complete growth systems.
										</p>
									</div>
								</div>
								<div className="flex w-fit h-fit gap-[5px] group">
									<div className="rounded-[50px] border border-[#1B2B6B99] group-hover:bg-secondry py-[3px] px-[12px] cursor-pointer">
										<Link
											href="/contact"
											className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-200 ease-in">
											Let&apos;s Build Together
										</Link>
									</div>
									<div className="w-[35px] flex items-center justify-center h-[35px] border border-[#1B2B6B99] rounded-[50px] p-[12px] group-hover:bg-secondry transition-all duration-200 ease-in cursor-pointer sm:hidden xm:hidden">
										<p className="paragraph font-normal text-secondry group-hover:text-background">
											<ArrowUpRight strokeWidth={1.25} />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="padding-y"
				data-scroll
				data-scroll-speed="-.1">
				<Eyes className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" />
			</div>
			<div className="padding-x">
				<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Three specialists. One shared goal —{" "}
					<br className="sm:hidden xm:hidden" />
					your growth.
				</h1>
			</div>
		</section>
	);
}
