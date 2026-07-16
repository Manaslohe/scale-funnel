"use client";
import { useState } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { expectationsItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const cardThemes = [
	{
		bg: "bg-[#1B2B6B]",
		number: "text-white/20",
		border: "border-white/12",
		hoverBorder: "hover:border-white/25",
	},
	{
		bg: "bg-[#F47B20]",
		number: "text-white/25",
		border: "border-white/15",
		hoverBorder: "hover:border-white/30",
	},
	{
		bg: "bg-[#145B52]",
		number: "text-white/20",
		border: "border-white/12",
		hoverBorder: "hover:border-white/25",
	},
	{
		bg: "bg-[#3730A3]",
		number: "text-white/20",
		border: "border-white/12",
		hoverBorder: "hover:border-white/25",
	},
	{
		bg: "bg-[#0F4C75]",
		number: "text-white/20",
		border: "border-white/12",
		hoverBorder: "hover:border-white/25",
	},
	{
		bg: "bg-[#C2410C]",
		number: "text-white/25",
		border: "border-white/15",
		hoverBorder: "hover:border-white/30",
	},
];

export default function Expectations() {
	const [openItemId, setOpenItemId] = useState<number | null>(null);

	const handleCardClick = (id: number) => {
		setOpenItemId(openItemId === id ? null : id);
	};

	const isBottomRowOpen = openItemId !== null && openItemId >= 4;

	return (
		<section className="w-full">
			{/* Blue banner — matches homepage sizing & spacing */}
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y mt-[150px] lg:mt-[130px] md:mt-[110px] sm:mt-[90px] xm:mt-[70px]">
				<Marquee
					title="why us other"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>

			<div className={`w-full bg-marquee padding-x pt-[80px] lg:pt-[70px] md:pt-[60px] sm:pt-[50px] xm:pt-[40px] pb-[80px] lg:pb-[60px] md:pb-[50px] sm:pb-[40px] xm:pb-[40px] relative z-20 ${isBottomRowOpen ? "pb-[280px] lg:pb-[240px] md:pb-[200px]" : ""}`}>
				<h2 className="section-heading !text-white mb-[50px] sm:mb-[40px] xm:mb-[32px]">
					What You Can Expect
				</h2>

				<div className="w-full grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[20px] items-start">
					{expectationsItems.map((item, index) => {
						const theme = cardThemes[index % cardThemes.length];
						const isOpen = openItemId === item.id;

						return (
							<motion.div
								key={item.id}
								className="relative"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{ duration: 0.5, delay: index * 0.06, ease: [0.33, 1, 0.68, 1] }}>
								<div
									onClick={() => handleCardClick(item.id)}
									className={`${theme.bg} ${theme.border} ${theme.hoverBorder} w-full flex flex-col rounded-[20px] px-[28px] py-[24px] border cursor-pointer transition-all duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] min-h-[200px] overflow-hidden`}>
									<div className="flex gap-x-[10px] items-center pb-[10px] mb-[40px] sm:mb-[32px]">
										<h3
											className={`font-FoundersGrotesk font-black text-[48px] sm:text-[40px] ${theme.number} leading-none`}>
											{item.title1}
										</h3>
									</div>
									<div className="w-full flex justify-between items-end mt-auto">
										<p className="small-text font-medium font-NeueMontreal text-white text-left pr-[12px]">
											<TextHover
												titile1={item.subTitle1}
												titile2={item.subTitle1}
											/>
										</p>
										<motion.div
											animate={{ rotate: isOpen ? 180 : 0 }}
											transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
											className="text-white/50 shrink-0">
											<ChevronDown size={16} strokeWidth={1.5} />
										</motion.div>
									</div>

									{/* In-flow expand panel */}
									<AnimatePresence>
										{isOpen && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{
													duration: 0.35,
													ease: [0.33, 1, 0.68, 1],
												}}
												className="overflow-hidden">
												<div className="border-t border-white/15 pt-[16px] mt-[16px] text-[15px] leading-[24px] font-NeueMontreal text-white/85">
													{item.para1}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
