import Image from "next/image";
import { logo } from "@/public";
import { teamItems } from "@/constants";

const sectionHeading =
	"text-[28px] leading-[36px] lg:text-[26px] lg:leading-[34px] md:text-[24px] md:leading-[32px] sm:text-[20px] sm:leading-[28px] xm:text-[18px] xm:leading-[26px] font-bold font-NeueMontreal text-white";

export default function Team() {
	return (
		<section className="w-full bg-marquee min-h-screen rounded-t-[20px]">
			<div className="w-full padding-x pt-[70px] lg:pt-[60px] md:pt-[50px] sm:pt-[40px] xm:pt-[40px]">
				<p className={sectionHeading}>Meet the Founders</p>
				<p className="w-[80%] sm:w-full xm:w-full text-[20px] leading-[32px] lg:text-[19px] lg:leading-[30px] md:text-[18px] md:leading-[28px] font-normal font-NeueMontreal text-white/90 pt-[24px] lg:pt-[22px] md:pt-[20px] sm:pt-[18px] xm:pt-[16px] max-w-[860px]">
					Three specialists behind every growth system — strategy, creative, and analytics working together so your coaching business can grow with clarity and momentum.
				</p>
			</div>
			<div className="w-full bg-marquee flex flex-col items-center gap-[30px] pb-[80px] padding-x pt-[50px] lg:pt-[44px] md:pt-[40px] sm:pt-[36px] xm:pt-[32px]">
				{teamItems.map((item) => (
					<div
						className="w-[80%] p-[30px] bg-background rounded-[20px] sm:w-full  xm:w-full"
						key={item.id}>
						<div className="w-full flex flex-col justify-between gap-[20px] py-[10px]">
							<div className="flex justify-between sm:flex-col xm:flex-col gap-[20px] items-start">
								<div>
									<Image
										src={logo}
										alt="tsf-logo"
										width={50}
										height={50}
									/>
								</div>
								<div className="w-[90px] h-[90px] rounded-full bg-navy flex items-center justify-center shrink-0">
									<span className="text-white font-NeueMontreal font-medium text-[28px]">
										{item.initials}
									</span>
								</div>
							</div>
							<div className="flex flex-col gap-[15px]">
								<h1 className="sub-heading font-bold font-FoundersGrotesk text-secondry">
									{item.name}
								</h1>
								<p className="paragraph font-NeueMontreal font-medium text-orange uppercase">
									{item.role}
								</p>
								<p className="paragraph font-NeueMontreal font-normal text-secondry max-w-[700px]">
									{item.bio}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
