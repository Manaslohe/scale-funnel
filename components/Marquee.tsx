import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

export default function Marquee({
	title,
	className,
	forceForward,
}: TMarqueeProps) {
	return (
		<TextMarquee
			baseVelocity="0.7"
			forceForward={forceForward}>
			<h1
				className={`font-FoundersGrotesk bg-marquee font-normal uppercase text-white whitespace-nowrap tracking-[-0.02em] ${className}`}>
				{title} &nbsp;
			</h1>
			<h1
				className={`font-FoundersGrotesk bg-marquee font-normal uppercase text-white whitespace-nowrap tracking-[-0.02em] ${className}`}>
				{title} &nbsp;
			</h1>
		</TextMarquee>
	);
}
