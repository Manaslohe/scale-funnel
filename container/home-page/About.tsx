"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg } from "@/public";
import { Heading, PlayVideo, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-about pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px] pb-[90px] lg:pb-[70px] md:pb-[50px] sm:pb-[30px] xm:pb-[30px] rounded-t-[20px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-bold font-NeueMontreal text-secondry">
					Built for coaches.&nbsp;
					<span className="sub-heading font-bold font-NeueMontreal link-flash cursor-pointer">
						Proven by results.
					</span>
				</h2>
				<p className="paragraph font-normal font-NeueMontreal text-secondry pt-[14px]">
					We&apos;ve helped digital coaches across niches — health,
					business, mindset, relationships — build&nbsp;
					<span className="paragraph font-normal font-NeueMontreal link-flash cursor-pointer">
						funnels that fill their calendars
					</span>
					&nbsp;and grow their revenue.
				</p>
				<div className="pt-[30px]">
					<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<RoundButton
							href="/services"
							title="see how it works"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
			</div>
			<div className="w-full border-y border-[#20202155] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="sub-paragraph font-medium text-secondry font-NeueMontreal">
							Three specialists. One shared goal
							<br className="sm:hidden xm:hidden" /> — your growth.
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<div className="group p-[20px] rounded-[15px] border border-[#20202155] hover:bg-secondry transition-all duration-300 cursor-pointer">
							<p className="sub-paragraph font-medium font-NeueMontreal text-secondry group-hover:text-orange group-hover:font-bold transition-all duration-300">
								Rohini — Meta Ads Expert
							</p>
							<p className="paragraph font-NeueMontreal text-secondry group-hover:text-white transition-colors duration-300 pt-[5px]">
								The strategist behind every campaign. She builds
								the Meta ad system that brings your ideal clients
								to you consistently.
							</p>
						</div>
						<div className="group p-[20px] rounded-[15px] border border-[#20202155] hover:bg-secondry transition-all duration-300 cursor-pointer">
							<p className="sub-paragraph font-medium font-NeueMontreal text-secondry group-hover:text-orange group-hover:font-bold transition-all duration-300">
								Mishthi — Content &amp; Creative
							</p>
							<p className="paragraph font-NeueMontreal text-secondry group-hover:text-white transition-colors duration-300 pt-[5px]">
								The voice behind your landing pages, ad
								creatives, and copy that converts.
							</p>
						</div>
						<div className="group p-[20px] rounded-[15px] border border-[#20202155] hover:bg-secondry transition-all duration-300 cursor-pointer">
							<p className="sub-paragraph font-medium font-NeueMontreal text-secondry group-hover:text-orange group-hover:font-bold transition-all duration-300">
								Utkarsh — Tech &amp; Analytics
							</p>
							<p className="paragraph font-NeueMontreal text-secondry group-hover:text-white transition-colors duration-300 pt-[5px]">
								The brain behind your backend — funnels, Meta
								trends, and the data that drives every decision.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="Meet the team behind your scale:" />
					<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundButton
							href="/about"
							title="meet the team"
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
						alt="about-img"
						className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${
							hovered && "scale-[1.09]"
						}`}
					/>
				</div>
			</div>
			<div className="w-full py-[60px] lg:py-[60px] md:py-[50px] sm:py-[40px] xm:py-[40px]">
				<PlayVideo videosrc="/homevideo.mp4" />
			</div>
		</section>
	);
}
