"use client";
import Link from "next/link";
import { useState } from "react";
import { Marquee } from "@/components";
import { TextHover } from "@/animation";
import { expectationsItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

export default function Expectations() {
	const [openItemId, setOpenItemId] = useState<number | null>(null);

	const handleButtonClick = (id: number) => {
		setOpenItemId(openItemId === id ? null : id);
	};

	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px] relative z-20">
			<div className="w-full bg-marquee relative rounded-t-[20px] py-[40px] lg:py-[32px] md:py-[26px] sm:py-[20px] xm:py-[16px]">
				<Marquee
					title="why choose us"
					forceForward
					className="text-[180px] leading-[150px] lg:text-[130px] lg:leading-[110px] md:text-[95px] md:leading-[80px] sm:text-[62px] sm:leading-[52px] xm:text-[38px] xm:leading-[32px]"
				/>
			</div>
			<div className="w-full padding-x py-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-white pb-[30px]">
					What Makes Us Different?
				</h2>
				<Link
					href="/contact"
					className="paragraph font-medium font-NeueMontreal text-white uppercase underline w-fit inline-block mb-[30px]">
					Work with us →
				</Link>

				<h3 className="paragraph font-medium text-white font-NeueMontreal mb-[24px]">
					What you can expect?
				</h3>

				<div className="w-full grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[20px]">
					{expectationsItems.map((item) => (
						<div
							className="w-full"
							key={item.id}>
							<div className="bg-[#1F1C52] w-full h-full flex flex-col rounded-[20px] px-[30px] py-[20px]">
								<div className="flex gap-x-[10px] items-center pb-[10px] mb-[80px]">
									<h1 className="sub-heading font-normal font-NeueMontreal text-white">
										{item.title1}
									</h1>
								</div>
								<div className="w-full flex justify-between items-center mt-auto">
									<button className="small-text font-normal font-NeueMontreal text-white">
										<TextHover
											titile1={item.subTitle1}
											titile2={item.subTitle1}
										/>
									</button>
									<button
										onClick={() => handleButtonClick(item.id)}
										className="small-text uppercase font-normal font-NeueMontreal text-white">
										{openItemId === item.id ? (
											"hide"
										) : (
											<TextHover
												titile1={item.btn}
												titile2={item.btn}
											/>
										)}
									</button>
								</div>
								<AnimatePresence>
									{openItemId === item.id && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{
												ease: [0.4, 0, 0.2, 1],
												duration: 1,
											}}>
											<div className="border-t border-[#F7F5F155] pt-[20px] text-background mt-[10px]">
												{item.para1}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
