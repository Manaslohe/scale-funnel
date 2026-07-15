"use client";
import Image from "next/image";
import { logoIcon } from "@/public";
import { RoundButton } from "@/components";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="w-full">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full pt-[160px] pb-[60px] lg:pt-[140px] md:pt-[160px] sm:pt-[150px] xm:pt-[140px] padding-x">
						<div>
							<h1 className="text-[96px] leading-[102px] lg:text-[78px] lg:leading-[84px] md:text-[64px] md:leading-[70px] sm:text-[48px] sm:leading-[54px] xm:text-[40px] xm:leading-[46px] tracking-[0.005em] text-[#202021] font-semibold font-FoundersGrotesk uppercase">
								<span className="block">WHO WE</span>
								<div className="flex items-center gap-[8px] sm:gap-[6px] xm:gap-[4px]">
									<motion.span
										initial={{ opacity: 0, x: -80 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 0.9,
											delay: 1.2,
										}}>
										<Image
											width={120}
											height={50}
											src={logoIcon}
											alt="img"
											className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-contain xl:mt-[15px] mt-[10px]"
										/>
									</motion.span>
									<span className="block">ARE</span>
								</div>
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#20202155] pt-[24px] pb-[27px]">
						<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[24px]">
							<div className="w-[18%] sm:w-full xm:w-full">
								<h3 className="text-[28px] leading-[36px] lg:text-[26px] lg:leading-[34px] md:text-[24px] md:leading-[32px] sm:text-[20px] sm:leading-[28px] xm:text-[18px] xm:leading-[26px] font-semibold font-NeueMontreal text-secondry">
									About us
								</h3>
							</div>
							<div className="w-[72%] sm:w-full xm:w-full flex flex-col gap-[16px]">
								<p className="paragraph font-NeueMontreal text-secondry max-w-[760px]">
									The Scale Funnel wasn&apos;t built in a boardroom. It was built from years of first-hand experience watching talented coaches struggle with the one thing they shouldn&apos;t have to worry about — getting clients.
								</p>
								<p className="paragraph font-NeueMontreal text-secondry max-w-[760px]">
									We are three specialists who decided coaching businesses deserve an agency that truly understands their world.
								</p>
								<div className="pt-[4px]">
									<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
										<RoundButton
											href="/services"
											title="our services"
											bgcolor="#000"
											className="bg-white text-black"
											style={{ color: "#fff" }}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-[1px] bg-[#20202155]" />
			<div className="padding-x pt-[50px] pb-[70px] lg:pt-[40px] lg:pb-[60px] md:pt-[36px] md:pb-[50px] sm:pt-[32px] sm:pb-[40px] xm:pt-[28px] xm:pb-[40px]">
				<h1 className="sub-heading font-medium font-NeueMontreal text-secondry max-w-[900px] leading-[1.1]">
					We help coaching businesses build growth systems that actually convert.
				</h1>
			</div>
		</section>
	);
}
