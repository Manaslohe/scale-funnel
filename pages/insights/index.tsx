"use client";
import { useEffect } from "react";
import { Curve } from "@/components";
import { Heroinsights, Publicationinsights } from "@/container";

export default function Insights() {
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
				<Heroinsights />
				<Publicationinsights />
			</Curve>
		</>
	);
}
