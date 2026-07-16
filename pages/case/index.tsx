"use client";
import {
	Heroworkiz,
	Aboutworkiz,
	Chelenge,
	Result,
	Works,
	Credit,
	VideoWorkiz,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function Work() {
	useEffect(() => {
		let locomotiveScroll: any;
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			locomotiveScroll = new LocomotiveScroll();
		})();
		return () => {
			if (locomotiveScroll) locomotiveScroll.destroy();
		};
	}, []);
	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<Heroworkiz />
				<Aboutworkiz />
				<Chelenge />
				<VideoWorkiz />
				<Result />
				<Credit />
				<Works />
				<Ready />
			</Curve>
		</>
	);
}
