import Link from "next/link";
import Rounded from "./Rounded";
import { ArrowUpRight } from "lucide-react";

export default function RoundButton({
	href,
	title,
	className,
	bgcolor,
	style,
	compact = false,
}: {
	href: string;
	title: string;
	className?: string;
	bgcolor: string;
	style: React.StyleHTMLAttributes<HTMLDivElement>["style"];
	compact?: boolean;
}) {
	return (
		<Link
			className={`uppercase font-normal font-NeueMontreal ${compact ? "text-[12px] leading-[18px]" : "small-text"}`}
			href={href}>
			<Rounded
				className={compact ? "py-[3px]" : "py-[6px]"}
				backgroundColor={bgcolor}>
				<p
					className={`z-10 py-[6px] whitespace-nowrap ${compact ? "px-[8px] ml-[12px] py-[4px]" : "px-[10px] ml-[15px]"}`}
					style={style}>
					{title}
				</p>
				<div
					className={`rounded-full scale-[0.3] mr-[10px] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1] ${compact ? "p-[7px] mr-[8px]" : "p-[10px]"} ${className}`}>
					<ArrowUpRight
						strokeWidth={1.5}
						size={compact ? 22 : 30}
						className="scale-[0] group-hover:scale-[1]"
					/>
				</div>
			</Rounded>
		</Link>
	);
}
