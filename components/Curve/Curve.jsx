"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { text, curve, translate } from "@/motion";
import { hasNavigatedBefore } from "@/lib/introLoader";
import Eyes from "../Eyes";

const routes = {
	"/": "Home",
	"/services": "Services",
	"/about": "About us",
	"/presentation": "Our Work",
	"/ochi-team": "About Us",
	"/insights": "Insights",
	"/contact": "Contact Us",
	"/case": "Workiz Easy",
};

const anim = (variants) => {
	return {
		variants,
		initial: "initial",
		animate: "enter",
		exit: "exit",
	};
};

const eyesAnim = {
	initial: { opacity: 0 },
	enter: (afterNav) =>
		afterNav
			? {
					opacity: [0, 1, 1, 0],
					transition: {
						duration: 1.1,
						times: [0, 0.15, 0.65, 1],
						ease: [0.76, 0, 0.24, 1],
					},
				}
			: { opacity: 0 },
	exit: {
		opacity: 1,
		transition: { duration: 0.5, delay: 0.15, ease: [0.76, 0, 0.24, 1] },
	},
};

export default function Curve({ children, backgroundColor }) {
	const router = useRouter();
	const isEnteringAfterNav = useState(() => hasNavigatedBefore())[0];
	const [dimensions, setDimensions] = useState({
		width: null,
		height: null,
	});

	useEffect(() => {
		function resize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		resize();
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<div style={{ backgroundColor }}>
			<div
				style={{ opacity: dimensions.width == null ? 1 : 0 }}
				className="fixed h w-full pointer-events-none
				 left-0 top-0 z-50 bg-black"
			/>
			<motion.p
				className="absolute left-1/2 top-[40%] text-white text-[50px] z-[60] -translate-x-1/2 text-center"
				{...anim(text)}>
				{routes[router.route]}
			</motion.p>
			<motion.div
				className="fixed bottom-[28px] right-[28px] sm:bottom-[24px] sm:right-[24px] xm:bottom-[20px] xm:right-[20px] z-[61] pointer-events-none"
				custom={isEnteringAfterNav}
				{...anim(eyesAnim)}>
				<Eyes className="w-[52px] h-[52px] sm:w-[46px] sm:h-[46px] xm:w-[40px] xm:h-[40px]" />
			</motion.div>
			{dimensions.width != null && <SVG {...dimensions} />}
			{children}
		</div>
	);
}

const SVG = ({ height, width }) => {
	const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

	const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

	return (
		<motion.svg
			className="fixed h w-full pointer-events-none
				 left-0 top-0 z-50"
			{...anim(translate)}>
			<motion.path {...anim(curve(initialPath, targetPath))} />
		</motion.svg>
	);
};
