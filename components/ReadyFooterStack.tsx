"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Ready from "./Ready";
import Footer from "./Footer";

export default function ReadyFooterStack() {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end end"],
	});

	const readyY = useTransform(scrollYProgress, [0, 0.42], ["100%", "0%"]);
	const footerY = useTransform(scrollYProgress, [0.48, 0.92], ["100%", "0%"]);
	const eyesY = useTransform(scrollYProgress, [0, 0.42, 0.75], [100, 0, -120]);

	return (
		<div ref={containerRef} className="relative w-full h-[150vh]">
			<div className="sticky top-0 h-screen w-full overflow-hidden">
				<motion.div
					className="absolute inset-0 z-10 w-full h-full"
					style={{ y: readyY }}>
					<Ready eyesY={eyesY} />
				</motion.div>
				<motion.div
					className="absolute inset-0 z-20 w-full h-full"
					style={{ y: footerY }}>
					<Footer />
				</motion.div>
			</div>
		</div>
	);
}
