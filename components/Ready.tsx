"use client";
import { TextMask } from "@/animation";
import { RoundButton, ScaleFunnelMark } from "@/components";

export default function Ready() {
	const phrase = ["Ready", "to Scale?"];

	return (
		<section className="w-full relative z-30 bg-about padding-y rounded-t-[20px] mt-[-20px]">
			<div className="w-full flex justify-center gap-[50px] items-center flex-col relative z-10 py-[80px] lg:py-[70px] md:py-[60px] sm:py-[50px] xm:py-[40px]">
				{/* Headline */}
				<div className="flex flex-col gap-[10px]">
					<h1 className="text-[290px] leading-[230px] lg:text-[220px] lg:leading-[170px] md:text-[180px] md:leading-[140px] sm:text-[120px] sm:leading-[90px] xm:text-[80px] xm:leading-[60px] tracking-[-2.5px] text-center font-bold font-FoundersGrotesk text-secondry uppercase pointer-events-none">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>

				{/* Sub-text */}
				<div className="flex flex-col items-center gap-[8px] max-w-[600px] text-center padding-x">
					<p className="paragraph font-NeueMontreal text-secondry opacity-70">
						Ready to scale your coaching business? Whether you&apos;re just launching or ready to scale — we have a starting point for you.
					</p>
					<p className="paragraph font-NeueMontreal text-accent font-medium">
						✓ Guaranteed Response Within 24 Hours
					</p>
				</div>

				{/* CTAs */}
				<div className="flex flex-col items-center gap-[16px]">
					<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<RoundButton
							href="/contact"
							title="Book a Strategy Call"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
					<p className="text-[20px] font-NeueMontreal text-secondry opacity-50">OR</p>
					<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<RoundButton
							href="/services"
							title="Explore Our Services"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
			</div>
			<div className="w-full absolute top-[50%] transform translate-y-[-50%] flex items-center justify-center pointer-events-none opacity-[0.07]">
				<ScaleFunnelMark size="lg" className="scale-[3] sm:scale-[2] xm:scale-[1.5]" />
			</div>
		</section>
	);
}
