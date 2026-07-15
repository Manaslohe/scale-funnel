"use client";
import { useEffect } from "react";
import {
	Heroabout,
	Aboutabout,
	Team,
	Partners,
	Principles,
} from "@/container";
import { Curve, ReadyFooterStack } from "@/components";

export default function About() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			new LocomotiveScroll();
		})();
	}, []);

	return (
		<Curve backgroundColor={"#F7F5F1"}>
			<Heroabout />
			<Aboutabout />
			<Team />
			<Principles />
			<Partners />
			<ReadyFooterStack />
		</Curve>
	);
}
