import Image from "next/image";
import { logoIcon } from "@/public";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="w-full padding-x">
			<div className="w-full flex flex-col">
				<div className="w-full pt-[160px] pb-[50px] lg:pt-[140px] md:pt-[120px] sm:pt-[110px] xm:pt-[100px]">
					<h1 className="text-[96px] leading-[102px] lg:text-[78px] lg:leading-[84px] md:text-[64px] md:leading-[70px] sm:text-[48px] sm:leading-[54px] xm:text-[40px] xm:leading-[46px] tracking-[0.005em] text-[#202021] font-semibold font-FoundersGrotesk uppercase">
						READY TO SCALE <br />
						<div className="flex items-center gap-[5px]">
							<motion.span
								initial={{ width: 0 }}
								animate={{ width: "auto" }}
								transition={{
									ease: [0.86, 0, 0.07, 0.995],
									duration: 1,
									delay: 1.5,
								}}>
								<Image
									width={120}
									height={50}
									src={logoIcon}
									alt="img"
									className="w-auto h-[95px] lg:w-auto lg:h-auto md:w-[100px] md:h-[63px] sm:w-[74px] sm:h-[45px] xm:w-[64px] xm:h-[40px] object-contain xl:mt-[15px] mt-[10px]"
								/>
							</motion.span>
							<h1 className="text-[96px] leading-[102px] lg:text-[78px] lg:leading-[84px] md:text-[64px] md:leading-[70px] sm:text-[48px] sm:leading-[54px] xm:text-[40px] xm:leading-[46px] tracking-[0.005em] text-[#202021] font-semibold font-FoundersGrotesk uppercase">
								YOUR
							</h1>
						</div>
						COACHING BUSINESS?
					</h1>
				</div>
				<div className="w-full pb-[15px] flex flex-col gap-[15px]">
					<p className="paragraph font-NeueMontreal text-secondry max-w-[500px]">
						Whether you're just launching or ready to scale — we
						have a starting point for you.&nbsp;
						<span className="font-medium">
							Guaranteed response within 24 hours.
						</span>
					</p>
					<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
						Fill the form below:
					</h3>
				</div>
			</div>
		</section>
	);
}
