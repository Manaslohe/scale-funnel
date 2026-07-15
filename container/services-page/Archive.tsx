"use client";
import { useState } from "react";
import { achiveItems } from "@/constants";

const stats = achiveItems.flatMap((item) => [
	{ id: `${item.id}-1`, value: item.title1[0], label: item.subTitle1 },
	{ id: `${item.id}-2`, value: item.title2[0], label: item.subTitle2 },
]);

export default function Archive() {
	const [activeId, setActiveId] = useState<string | null>(null);

	return (
		<section className="w-full padding-y">
			<div className="w-full padding-x">
				<h3 className="text-[28px] leading-[36px] lg:text-[26px] lg:leading-[34px] md:text-[24px] md:leading-[32px] font-bold font-NeueMontreal text-secondry mb-[30px]">
					The Scale Funnel in numbers:
				</h3>

				<div className="w-full grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[20px]">
					{stats.map((stat) => {
						const isActive = activeId === stat.id;
						return (
							<button
								key={stat.id}
								type="button"
								onClick={() =>
									setActiveId(isActive ? null : stat.id)
								}
								onMouseEnter={() => setActiveId(stat.id)}
								className={`text-left p-[28px] rounded-[20px] border transition-all duration-300 ${
									isActive
										? "bg-secondry border-secondry -translate-y-[4px] shadow-[0_12px_40px_rgba(32,32,33,0.12)]"
										: "bg-[#EFE9E1] border-[#20202122] hover:border-[#20202155] hover:-translate-y-[2px]"
								}`}>
								<p
									className={`text-[64px] leading-[68px] lg:text-[56px] lg:leading-[60px] font-FoundersGrotesk font-bold transition-colors duration-300 ${
										isActive ? "text-orange" : "text-secondry"
									}`}>
									{stat.value}
								</p>
								<p
									className={`paragraph font-NeueMontreal pt-[12px] transition-colors duration-300 ${
										isActive ? "text-white" : "text-[#20202199]"
									}`}>
									{stat.label}
								</p>
							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
}
