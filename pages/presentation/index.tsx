"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	Heropresentation,
	Projectspresentation,
	Publication,
} from "@/container";

export default function Presentation() {
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
				<Heropresentation />
				<Projectspresentation />
				<Publication />
				<Ready />
			</Curve>
		</>
	);
}
