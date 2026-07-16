"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CountUpProps = {
	end: number;
	duration?: number;
	decimals?: number;
	prefix?: string;
	suffix?: string;
	className?: string;
};

export default function CountUp({
	end,
	duration = 2,
	decimals = 0,
	prefix = "",
	suffix = "",
	className,
}: CountUpProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-40px" });
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!isInView) return;

		let startTime: number;
		let animationFrame: number;

		const animate = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min(
				(timestamp - startTime) / (duration * 1000),
				1,
			);
			const eased = 1 - Math.pow(1 - progress, 3);
			setCount(eased * end);
			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrame);
	}, [isInView, end, duration]);

	const formatted =
		decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

	return (
		<span ref={ref} className={className}>
			{prefix}
			{formatted}
			{suffix}
		</span>
	);
}
