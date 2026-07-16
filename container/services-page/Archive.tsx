"use client";
import { motion } from "framer-motion";
import { CountUp } from "@/animation";

const stats = [
	{
		id: 1,
		end: 50,
		suffix: "+",
		label: "Coaching businesses scaled across health, business, mindset & more",
	},
	{
		id: 2,
		end: 2,
		prefix: "$",
		suffix: "M+",
		label: "In ad spend managed with data-driven optimization",
	},
	{
		id: 3,
		end: 3.2,
		decimals: 1,
		suffix: "×",
		label: "Average ROAS across active client campaigns",
	},
	{
		id: 4,
		end: 90,
		suffix: "%",
		label: "Client retention rate — because results compound",
	},
];

export default function Archive() {
	return (
		<section className="w-full padding-y">
			<div className="w-full padding-x">
				<h3 className="section-heading mb-[40px] sm:mb-[30px] xm:mb-[24px]">
					Scale Funnel in Numbers
				</h3>

				<div className="w-full grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[20px]">
					{stats.map((stat, index) => (
						<motion.div
							key={stat.id}
							className="rounded-[20px] border border-[#1B2B6B12] bg-white p-[32px] sm:p-[24px] xm:p-[20px] flex flex-col justify-between min-h-[200px] shadow-[0_4px_20px_rgba(27,43,107,0.05)] transition-shadow duration-500 hover:shadow-[0_16px_40px_rgba(27,43,107,0.1)]"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{ duration: 0.5, delay: index * 0.08, ease: [0.33, 1, 0.68, 1] }}>
							<CountUp
								end={stat.end}
								decimals={stat.decimals ?? 0}
								prefix={stat.prefix ?? ""}
								suffix={stat.suffix ?? ""}
								duration={2.2}
								className="font-FoundersGrotesk font-black text-[56px] sm:text-[44px] xm:text-[40px] text-secondry leading-none tracking-[-1px]"
							/>
							<p className="font-NeueMontreal text-[16px] sm:text-[15px] leading-[26px] text-secondry/65 mt-[24px] max-w-[320px]">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
