"use client";

interface ScaleFunnelMarkProps {
	className?: string;
	size?: "sm" | "md" | "lg";
	animated?: boolean;
	tone?: "default" | "dark";
}

const sizes = {
	sm: { container: "w-[80px] h-[90px]", navy: "w-[52px]", orange: "w-[36px]", dot: "w-[10px]" },
	md: { container: "w-[120px] h-[130px]", navy: "w-[78px]", orange: "w-[54px]", dot: "w-[14px]" },
	lg: { container: "w-[160px] h-[175px]", navy: "w-[104px]", orange: "w-[72px]", dot: "w-[18px]" },
};

const tones = {
	default: { navy: "#1B2B6B", orange: "#F47B20" },
	dark: { navy: "#0A1628", orange: "#D96510" },
};

export default function ScaleFunnelMark({
	className = "",
	size = "md",
	animated = false,
	tone = "default",
}: ScaleFunnelMarkProps) {
	const s = sizes[size];
	const colors = tones[tone];

	return (
		<div
			className={`relative flex flex-col items-center justify-end overflow-hidden ${s.container} ${className}`}
			aria-hidden="true">
			<svg
				viewBox="0 0 60 52"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`${s.navy} h-auto ${animated ? "animate-funnel-rise" : ""}`}
				style={animated ? { animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" } : undefined}>
				<path d="M30 0L60 52H0L30 0Z" fill={colors.navy} />
			</svg>
			<svg
				viewBox="0 0 42 36"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`${s.orange} h-auto -mt-[3px] ${animated ? "animate-funnel-rise" : ""}`}
				style={animated ? { animationDelay: "0.28s", opacity: 0, animationFillMode: "forwards" } : undefined}>
				<path d="M21 0L42 36H0L21 0Z" fill={colors.orange} />
			</svg>
			<svg
				viewBox="0 0 14 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`${s.dot} h-auto mt-[4px] ${animated ? "animate-funnel-dot" : ""}`}
				style={animated ? { opacity: 0, animationFillMode: "forwards" } : undefined}>
				<circle cx="7" cy="7" r="7" fill={colors.orange} />
			</svg>
		</div>
	);
}
