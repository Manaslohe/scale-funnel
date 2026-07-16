"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { insightsPublicationItems } from "@/constants";

export default function Publication() {
	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px] mb-[100px]">
			<div className="w-full padding-x py-[30px]">
				<div className="w-full flex justify-between gap-[20px] flex-wrap sm:flex-col xm:flex-col">
					<div>
						<h3 className="paragraph font-medium text-white font-NeueMontreal">
							Latest publication
						</h3>
					</div>
					<div className="flex gap-[20px] sm:flex-col xm:flex-col">
						{insightsPublicationItems.map((item, i) => (
							<motion.div
								className="w-full flex justify-between gap-[10px]"
								key={item.id}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-60px" }}
								transition={{ duration: 0.55, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}>
								<div className="w-full flex gap-[20px] rounded-[20px] px-[10px] flex-col">
									<Image
										src={item.src}
										alt="img"
										width={400}
										height={400}
										className="w-[400px] h-[400px] rounded-[20px]"
									/>
									<div>
										<h1 className="paragraph font-normal tracking-wider font-NeueMontreal text-white">
											{item.title}
										</h1>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
