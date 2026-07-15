"use client";
import Link from "next/link";
import { TextMask } from "@/animation";
import { ArrowUpRight } from "lucide-react";
import { Eyes, RoundButton, Rounded } from "@/components";
import { MotionValue, motion } from "framer-motion";

type ReadyProps = {
	eyesY?: MotionValue<number>;
};

const headingClass =
	"text-[160px] leading-[130px] xl:text-[170px] xl:leading-[140px] lg:text-[120px] lg:leading-[100px] md:text-[90px] md:leading-[75px] sm:text-[64px] sm:leading-[54px] xm:text-[40px] xm:leading-[36px] tracking-[-2.5px] text-center font-bold font-FoundersGrotesk text-secondry uppercase";

export default function Ready({ eyesY }: ReadyProps) {
	return (
		<section className="w-full h-full min-h-screen overflow-hidden bg-about pt-[30px] pb-[80px] lg:pt-[25px] lg:pb-[70px] md:pt-[22px] md:pb-[60px] sm:pt-[20px] sm:pb-[50px] xm:pt-[18px] xm:pb-[44px] rounded-t-[20px] flex flex-col">
			<div className="w-full flex-1 flex justify-center gap-[40px] xl:gap-[50px] items-center flex-col px-[16px] sm:px-[20px] md:px-[24px]">
				<div className="flex flex-col gap-[10px] items-center pointer-events-none">
					<h1 className={`${headingClass} relative z-0`}>
						<motion.div
							className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-none top-[195px] xl:top-[210px] lg:top-[150px] md:top-[112.5px] sm:top-[81px] xm:top-[54px]"
							style={{ y: eyesY ?? 0 }}>
							<Eyes className="w-[100px] h-[100px] xl:w-[110px] xl:h-[110px] md:w-[85px] md:h-[85px] sm:w-[70px] sm:h-[70px] xm:w-[60px] xm:h-[60px]" />
						</motion.div>
						<div className="overflow-hidden">
							<TextMask>{["Ready"]}</TextMask>
						</div>
						<div className="overflow-hidden">
							<TextMask>{["to scale"]}</TextMask>
						</div>
						<div className="overflow-hidden">
							<TextMask>{["your growth"]}</TextMask>
						</div>
					</h1>
				</div>
				<div className="flex flex-col items-center gap-[10px] sm:gap-[8px] xm:gap-[8px]">
					<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<RoundButton
							href="/contact"
							title="book a strategy call"
							className="bg-white text-black"
							bgcolor="#000"
							style={{ color: "#fff" }}
						/>
					</div>
					<p className="text-[20px] lg:text-[18px] sm:text-[16px] xm:text-[14px] font-NeueMontreal text-secondry">OR</p>
					<div className="flex items-center justify-between bg-transparent cursor-pointer rounded-full group border border-[#202021]">
						<Link
							className="xl:text-[18px] xl:leading-[28px] text-[14px] leading-[24px] uppercase font-normal font-NeueMontreal"
							href="/contact">
							<Rounded
								className="py-[6px]"
								backgroundColor="#202021">
								<p className="z-10 px-[10px] ml-[15px] py-[6px] group-hover:text-white text-black">
									hello@thescalefunnel.com
								</p>
								<div className="bg-black group-hover:bg-white text-black p-[10px] rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1]">
									<ArrowUpRight
										strokeWidth={1.5}
										size={30}
										className="scale-[0] group-hover:scale-[1]"
									/>
								</div>
							</Rounded>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
