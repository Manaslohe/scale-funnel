import Image from "next/image";
import { principles1, principles2 } from "@/public";
import { ourStoryItems } from "@/constants";

const sectionHeading =
	"text-[28px] leading-[36px] lg:text-[26px] lg:leading-[34px] md:text-[24px] md:leading-[32px] sm:text-[20px] sm:leading-[28px] xm:text-[18px] xm:leading-[26px] font-semibold font-NeueMontreal text-secondry";

export default function Principles() {
	return (
		<section className="w-full py-[80px] lg:py-[70px] md:py-[60px] sm:py-[50px] xm:py-[50px] rounded-t-[20px] bg-background">
			<div className="w-full padding-x">
				<h1 className={sectionHeading}>Our story — how The Scale Funnel came together</h1>
				<p className="paragraph font-NeueMontreal text-secondry pt-[12px] max-w-[900px]">
					We started by solving a real problem for coaching businesses that were brilliant at helping people but were losing momentum in the one place that mattered most: growth.
				</p>
			</div>
			<div className="w-full border-t border-[#20202155] mt-[28px]">
				<div className="w-full padding-x mt-[36px] flex justify-between gap-[30px] items-start sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles1}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[12px]">
							<p className="paragraph font-NeueMontreal font-medium text-secondry underline">
								{ourStoryItems[0].heading}
							</p>
							<p className="paragraph font-NeueMontreal text-secondry">
								{ourStoryItems[0].para}
							</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
						<Image
							src={principles2}
							alt="img"
							className="w-full rounded-[15px]"
						/>
						<div className="flex flex-col gap-[12px]">
							<p className="paragraph font-NeueMontreal font-medium text-secondry underline">
								{ourStoryItems[1].heading}
							</p>
							<p className="paragraph font-NeueMontreal text-secondry">
								{ourStoryItems[1].para}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
