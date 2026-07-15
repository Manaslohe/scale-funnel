"use client";
import { useState } from "react";

const approachItems = [
	{
		id: 1,
		step: "01",
		title: "Growth defines it all",
		description:
			"What's your bottleneck — leads, calls, or close rate? Understanding where your funnel breaks down lets us build the exact system that fixes it.",
	},
	{
		id: 2,
		step: "02",
		title: "Your niche is the hero",
		description:
			"Health, business, mindset, or relationship coaching — each niche sells differently. We build messaging and funnels around how your specific audience actually buys.",
	},
	{
		id: 3,
		step: "03",
		title: "Systems make the difference",
		description:
			"Ads without a landing page. Leads without follow-up. We connect every piece — marketing, funnel, and automation — into one working system.",
	},
];

const sectionHeading =
	"text-[28px] leading-[36px] lg:text-[26px] lg:leading-[34px] md:text-[24px] md:leading-[32px] sm:text-[20px] sm:leading-[28px] xm:text-[18px] xm:leading-[26px] font-bold font-NeueMontreal text-secondry";

export default function Hero() {
	const [activeId, setActiveId] = useState(approachItems[0].id);

	return (
		<section className="w-full">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full pt-[160px] pb-[60px] lg:pt-[140px] md:pt-[160px] sm:pt-[150px] xm:pt-[140px] padding-x">
						<h1 className="text-[96px] leading-[102px] lg:text-[78px] lg:leading-[84px] md:text-[64px] md:leading-[70px] sm:text-[48px] sm:leading-[54px] xm:text-[40px] xm:leading-[46px] tracking-[0.005em] text-[#202021] font-semibold font-FoundersGrotesk uppercase">
							services
						</h1>
					</div>

					<div className="w-full border-t border-[#20202155] py-[20px] padding-x">
						<p className={sectionHeading}>
							What We Do — And How We Do It.
						</p>
					</div>

					<div className="w-full">
						<p className="w-[80%] sm:w-full xm:w-full text-[20px] leading-[32px] lg:text-[19px] lg:leading-[30px] md:text-[18px] md:leading-[28px] font-normal padding-x font-NeueMontreal text-secondry py-[30px] lg:py-[28px] md:py-[24px] sm:py-[20px] xm:py-[20px] text-justify">
							We build&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								complete growth systems&nbsp;
							</span>
							for coaches, consultants and course creators — Meta
							ads, landing pages,&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								automation, and analytics.&nbsp;
							</span>
						</p>
					</div>

					<div className="w-full border-t border-[#20202155] py-[30px] padding-x">
						<div className="w-full flex items-center justify-between gap-[40px] sm:flex-col xm:flex-col sm:items-start xm:items-start sm:gap-[24px] xm:gap-[24px]">
							<div className="w-[35%] sm:w-full xm:w-full shrink-0">
								<p className={sectionHeading}>
									We do this by following a <br />
									simple approach:
								</p>
							</div>

							<div className="w-[65%] sm:w-full xm:w-full flex gap-[30px] sm:flex-col xm:flex-col">
								<div className="flex flex-col border-l border-[#20202133] sm:border-l-0 sm:border-t sm:border-[#20202133]">
									{approachItems.map((item) => {
										const isActive = activeId === item.id;
										return (
											<button
												key={item.id}
												type="button"
												onClick={() =>
													setActiveId(item.id)
												}
												onMouseEnter={() =>
													setActiveId(item.id)
												}
												className={`group relative text-left pl-[24px] pr-[16px] py-[18px] border-b border-[#20202133] transition-all duration-300 ${
													isActive
														? "bg-[#DA7B3108]"
														: "hover:bg-[#20202105]"
												}`}>
												<span
													className={`absolute left-0 top-0 h-full w-[3px] transition-all duration-300 ${
														isActive
															? "bg-orange"
															: "bg-transparent group-hover:bg-[#20202133]"
													}`}
												/>
												<span
													className={`text-[12px] font-NeueMontreal tracking-[0.08em] transition-colors duration-300 ${
														isActive
															? "text-orange"
															: "text-[#20202166]"
													}`}>
													{item.step}
												</span>
												<p
													className={`paragraph font-NeueMontreal pt-[4px] transition-colors duration-300 ${
														isActive
															? "text-secondry font-medium"
															: "text-[#20202199] group-hover:text-secondry"
													}`}>
													{item.title}
												</p>
											</button>
										);
									})}
								</div>

								<div className="flex-1 min-h-[180px] sm:min-h-0 relative overflow-hidden">
									{approachItems.map((item) => (
										<div
											key={item.id}
											className={`absolute inset-0 flex flex-col justify-center transition-all duration-300 ease-out ${
												activeId === item.id
													? "opacity-100 translate-y-0 pointer-events-auto"
													: "opacity-0 translate-y-[12px] pointer-events-none"
											}`}>
											<span className="text-[48px] leading-none font-FoundersGrotesk font-bold text-[#20202115]">
												{item.step}
											</span>
											<p className="paragraph font-medium font-NeueMontreal text-secondry pt-[12px]">
												{item.title}
											</p>
											<p className="paragraph font-NeueMontreal text-[#20202199] pt-[10px] leading-[26px]">
												{item.description}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
