"use client";
import { useEffect } from "react";
import { Curve, Marquee, ReadyFooterStack, IntroLoader } from "@/components";
import { About, Clients, Hero, Projects } from "@/container";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<IntroLoader />
			<Curve backgroundColor={"#F7F5F1"}>
				<Hero />
				<div className="w-full bg-marquee relative rounded-t-[20px] -mt-[3px] py-[40px] lg:py-[32px] md:py-[26px] sm:py-[20px] xm:py-[16px]">
					<Marquee
						title="the scale funnel"
						forceForward
						className="text-[180px] leading-[150px] lg:text-[130px] lg:leading-[110px] md:text-[95px] md:leading-[80px] sm:text-[62px] sm:leading-[52px] xm:text-[38px] xm:leading-[32px]"
					/>
				</div>
				<About />
				<Projects />
				<Clients />
				<ReadyFooterStack />
			</Curve>
		</>
	);
}
