"use client";
import { useEffect } from "react";
import { Curve, Footer } from "@/components";
import { Herocontact, Form, FAQ, Socials } from "@/container";

export default function Contact() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#F7F5F1"}>
				<Herocontact />
				<Form />
				<Socials />
				<FAQ />
				<Footer />
			</Curve>
		</>
	);
}
