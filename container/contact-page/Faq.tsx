"use client";
import { useState } from "react";
import { FaqItems, clientsItem } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
	const [activeAccordion, setActiveAccordion] = useState(clientsItem[0].id);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full padding-y mt-[-10px] bg-background z-30 relative rounded-t-[20px]">
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-60px" }}
				transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
				className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
				A few things you <br />
				may want to ask us:
			</motion.h1>
			{FaqItems.map((item, index) => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-40px" }}
					transition={{ duration: 0.5, delay: index * 0.06, ease: [0.33, 1, 0.68, 1] }}
					className={`w-full flex py-[10px] flex-col ${
						item.id == 1
							? "border-y border-[#21212155]"
							: "border-b border-[#21212155]"
					}`}>
					<div className="w-full flex items-start justify-between sm:flex-col sm:items-start xm:flex-col xm:items-start sm:gap-[15px] xm:gap-[15px] py-[10px] padding-x">
						<div className="w-[50%] sm:w-full xm:w-full">
							<h1 className="paragraph font-normal font-NeueMontreal text-secondry">
								{item.question}
							</h1>
						</div>
						<div className="w-[50%] sm:w-full xm:w-full flex items-center justify-between sm:justify-start xm:justify-start sm:gap-[12px] xm:gap-[12px]">
							<div>
								<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
									{item.title}
								</h3>
							</div>
							<div className="flex items-end justify-end">
								<button
									className={`paragraph font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
										activeAccordion === item.id
											? "text-gray-300"
											: "text-secondry link-flash"
									}`}
									onClick={() => toggleAccordion(item.id)}>
									{activeAccordion === item.id ? "read" : "read"}
								</button>
							</div>
						</div>
					</div>
					<div className="w-full flex justify-between padding-x">
						<div className="w-[50%] sm:hidden xm:hidden" />
						<div className="w-[50%] sm:w-full xm:w-full">
							<AnimatePresence>
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{
											ease: [0.4, 0, 0.2, 1],
											duration: 1.3,
										}}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<div className="">
												<p className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">
													{item.description}
												</p>
											</div>
											{item.links.map((link) => (
												<div
													key={link.id}
													className="flex pt-[20px] sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px] justify-between gap-[80px]">
													<span className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">
														{link.title}
													</span>
													<p className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">
														{link.description}
													</p>
												</div>
											))}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</motion.div>
			))}
		</section>
	);
}
