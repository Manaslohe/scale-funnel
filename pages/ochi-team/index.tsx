"use client";
import {
	Heroabout,
	Aboutabout,
	Team,
	Principles,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function About() {
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
			<Curve backgroundColor={"#f1f1f1"}>
				<Heroabout />
				<Aboutabout />
				<Team />
				<Principles />
				<Ready />
			</Curve>
		</>
	);
}
