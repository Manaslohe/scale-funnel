"use client";
import {
	Capibilyties,
	Clientsservices,
	Expectations,
	Process,
	Phases,
	Archive,
	Heroservices,
} from "@/container";
import { useEffect } from "react";
import { Curve, ReadyFooterStack } from "@/components";

export default function Services() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#F7F5F1"}>
				<Heroservices />
				<Process />
				<Phases />
				<Capibilyties />
				<Clientsservices />
				<Archive />
				<Expectations />
				<ReadyFooterStack />
			</Curve>
		</>
	);
}
