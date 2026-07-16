"use client";
import { Button } from "@/components";
import { motion } from "framer-motion";

const logoEase = [0.33, 1, 0.68, 1];

export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full padding-x page-top pb-[32px] lg:pb-[28px] md:pb-[24px] sm:pb-[20px] xm:pb-[16px]">
						<h3 className="section-heading">About Us</h3>
					</div>

					<div className="w-full border-t border-[#1B2B6B33] pt-[20px]">
						<div className="w-full padding-x pb-[60px] lg:pb-[50px] md:pb-[40px] sm:pb-[32px] xm:pb-[28px]">
							<motion.div
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ ease: logoEase, duration: 0.6, delay: 0.1 }}>
								<h1 className="heading tracking-[-1.3px] text-secondry font-semibold font-FoundersGrotesk uppercase">
									THE SCALE <br />
									<div className="flex items-center gap-[8px] sm:gap-[6px] xm:gap-[5px] flex-wrap">
										<span className="hero-logo inline-flex flex-col items-center justify-end shrink-0 self-center overflow-visible h-[72px] lg:h-[64px] md:h-[54px] sm:h-[44px] xm:h-[38px] w-[52px] lg:w-[46px] md:w-[38px] sm:w-[32px] xm:w-[28px] pt-[8px] lg:pt-[7px] md:pt-[6px] sm:pt-[5px] xm:pt-[4px]">
											<motion.span
												initial={{ y: "110%", opacity: 0 }}
												animate={{ y: "0%", opacity: 1 }}
												transition={{ ease: logoEase, duration: 0.6, delay: 0.85 }}
												className="block leading-none">
												<svg
													viewBox="0 0 60 52"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="w-[42px] lg:w-[38px] md:w-[32px] sm:w-[26px] xm:w-[22px] h-auto block">
													<path d="M30 0L60 52H0L30 0Z" fill="#1B2B6B" />
												</svg>
											</motion.span>
											<motion.span
												initial={{ y: "110%", opacity: 0 }}
												animate={{ y: "0%", opacity: 1 }}
												transition={{ ease: logoEase, duration: 0.6, delay: 0.55 }}
												className="block leading-none -mt-[2px]">
												<svg
													viewBox="0 0 42 36"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="w-[30px] lg:w-[26px] md:w-[22px] sm:w-[18px] xm:w-[16px] h-auto block">
													<path d="M21 0L42 36H0L21 0Z" fill="#F47B20" />
												</svg>
											</motion.span>
											<motion.span
												initial={{ scale: 0, opacity: 0 }}
												animate={{ scale: 1, opacity: 1 }}
												transition={{ ease: logoEase, duration: 0.45, delay: 0.25 }}
												className="block leading-none mt-[2px]">
												<svg
													viewBox="0 0 14 14"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="w-[8px] lg:w-[7px] md:w-[6px] sm:w-[5px] xm:w-[4px] h-auto block">
													<circle cx="7" cy="7" r="7" fill="#F47B20" />
												</svg>
											</motion.span>
										</span>
										<span className="heading tracking-[-1.3px] text-secondry font-semibold font-FoundersGrotesk uppercase">
											FUNNEL
										</span>
									</div>
								</h1>
							</motion.div>
						</div>
					</div>

					<div className="w-full border-t border-[#1B2B6B33] pt-[20px]">
						<div className="padding-x pb-[32px] lg:pb-[28px] md:pb-[24px] sm:pb-[20px] xm:pb-[16px]">
							<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
								Three specialists. One shared goal —{" "}
								<br className="sm:hidden xm:hidden" />
								your growth.
							</h1>
						</div>
						<div className="w-full padding-x pt-[20px] sm:pt-[16px] xm:pt-[12px] pb-[60px] lg:pb-[50px] md:pb-[40px] sm:pb-[32px] xm:pb-[28px]">
							<div className="w-full flex flex-col gap-y-[40px] sm:gap-y-[32px] xm:gap-y-[28px]">
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
								<div className="w-fit">
									<Button href="/contact" title="Let's Build Together" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
