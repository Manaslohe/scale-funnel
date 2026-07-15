"use client";
import Link from "next/link";
import { serviceCapaybilitiesItem } from "@/constants";

export default function Capibilyties() {
	const item = serviceCapaybilitiesItem[0];

	return (
		<div className="w-full bg-about padding-y rounded-t-[20px]">
			<div className="w-[82%] sm:w-full xm:w-full padding-x mb-[50px]">
				<p className="text-[42px] leading-[54px] lg:text-[38px] lg:leading-[48px] md:text-[34px] md:leading-[44px] sm:text-[28px] sm:leading-[38px] xm:text-[24px] xm:leading-[34px] font-bold font-NeueMontreal text-secondry text-justify">
					<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
						Let's be honest.
					</span>
					&nbsp;We've seen what happens when the wrong agency touches
					a coaching business — wasted budget, generic messaging,
					and a funnel that was never built for how coaches actually
					sell. Focus on what you do best
					<span className="sm:hidden xm:hidden"> —</span> coaching
					your clients, while we do our best at
					<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
						&nbsp;building the growth system behind it.
					</span>
				</p>
			</div>

			<div className="w-full padding-x border-t border-[#20202155] pt-[40px]">
				<h3 className="text-[28px] leading-[36px] lg:text-[26px] lg:leading-[34px] md:text-[24px] md:leading-[32px] sm:text-[20px] sm:leading-[28px] font-bold font-NeueMontreal text-secondry mb-[30px]">
					Who We Help
				</h3>

				<div className="w-full grid grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-[24px]">
					<div className="p-[28px] rounded-[20px] border border-[#20202133] bg-white/50">
						<div className="flex items-center gap-[10px] mb-[24px]">
							<span className="w-[10px] h-[10px] rounded-full bg-orange shrink-0" />
							<h4 className="paragraph uppercase font-medium font-NeueMontreal text-secondry tracking-[0.04em]">
								{item.title1}
							</h4>
						</div>
						<div className="flex flex-wrap gap-[10px]">
							{item.links1.map((link) => (
								<Link
									key={link.id}
									href={link.href}
									className="small-text font-NeueMontreal text-secondry uppercase px-[14px] py-[6px] rounded-full border border-[#20202133] hover:bg-secondry hover:text-white hover:border-secondry transition-all duration-300">
									{link.title}
								</Link>
							))}
						</div>
					</div>

					<div className="p-[28px] rounded-[20px] border border-[#20202133] bg-white/50">
						<div className="flex items-center gap-[10px] mb-[24px]">
							<span className="w-[10px] h-[10px] rounded-full bg-navy shrink-0" />
							<h4 className="paragraph uppercase font-medium font-NeueMontreal text-secondry tracking-[0.04em]">
								{item.title2}
							</h4>
						</div>
						<div className="flex flex-wrap gap-[10px]">
							{item.links2.map((link) => (
								<Link
									key={link.id}
									href={link.href}
									className="small-text font-NeueMontreal text-secondry uppercase px-[14px] py-[6px] rounded-full border border-[#20202133] hover:bg-navy hover:text-white hover:border-navy transition-all duration-300">
									{link.title}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
