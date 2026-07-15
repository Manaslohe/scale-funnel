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
			className={`uppercase font-normal font-NeueMontreal ${
				compact ? "text-[11px]" : "small-text"
			}`}
			href={href}>
			<Rounded
				className={compact ? "py-[3px]" : "py-[6px]"}
				backgroundColor={bgcolor}>
				<p
					className={
						compact
							? "z-10 px-[8px] ml-[10px] py-[3px]"
							: "z-10 px-[10px] ml-[15px] py-[6px]"
					}
					style={style}>
					{title}
				</p>
				<div
					className={`${
						compact ? "p-[6px] mr-[6px]" : "p-[10px] mr-[10px]"
					} rounded-full scale-[0.3] group-hover:scale-[0.9] transition-all z-10 transform duration-[0.3s] ease-[.215,.61,.355,1] ${className}`}>
					<ArrowUpRight
						strokeWidth={1.5}
						size={compact ? 20 : 30}
						className="scale-[0] group-hover:scale-[1]"
					/>
				</div>
			</Rounded>
		</Link>
	);
}
