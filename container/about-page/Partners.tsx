import { aboutPartberItems } from "@/constants";

const sectionHeading =
	"text-[28px] leading-[36px] lg:text-[26px] lg:leading-[34px] md:text-[24px] md:leading-[32px] sm:text-[20px] sm:leading-[28px] xm:text-[18px] xm:leading-[26px] font-semibold font-NeueMontreal text-secondry";

export default function Partners() {
	const coachCards = aboutPartberItems.slice(0, 3);

	return (
		<section className="w-full bg-background pb-[90px] lg:pb-[70px] md:pb-[60px] sm:pb-[50px] xm:pb-[50px] relative z-20 rounded-t-[20px]">
			<div className="padding-x">
				<h1 className={sectionHeading}>Who we work with — coaches</h1>
				<p className="paragraph font-NeueMontreal text-secondry pt-[12px] max-w-[860px]">
					We build growth systems for coaches who need clarity, consistency, and a funnel that turns attention into booked calls.
				</p>
			</div>
			<div className="w-full border-t border-[#20202155] mt-[28px]">
				<div className="w-full padding-x pt-[32px] grid grid-cols-3 gap-[24px] lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xm:grid-cols-1">
					{coachCards.map((item, index) => (
						<div
							className="group relative rounded-[24px] border border-[#20202122] bg-[#F7F5F1] p-[28px] shadow-[0_8px_30px_rgba(32,32,33,0.06)] hover:shadow-[0_16px_40px_rgba(32,32,33,0.12)] hover:-translate-y-[2px] transition-all duration-300"
							key={item.id}>
							<div className="flex items-center justify-end border-b border-[#20202112] pb-[16px]">
								<span className="text-[18px] tracking-[0.12em] font-NeueMontreal font-bold text-black">
									{String(index + 1).padStart(2, "0")}
								</span>
							</div>
							<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[20px]">
								{item.title}
							</p>
							<p className="paragraph font-NeueMontreal text-[#20202199] pt-[10px] leading-[28px]">
								{item.para}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
