import { backgroundAbout } from "@/public";
import { BackgroundImg, Marquee } from "@/components";

const sectionHeading =
	"text-[28px] leading-[36px] lg:text-[26px] lg:leading-[34px] md:text-[24px] md:leading-[32px] sm:text-[20px] sm:leading-[28px] xm:text-[18px] xm:leading-[26px] font-semibold font-NeueMontreal text-secondry";

export default function About() {
	return (
		<section className="w-full bg-background pb-[60px] lg:pb-[50px] md:pb-[40px] sm:pb-[30px] xm:pb-[30px]">
			<div className="w-full pt-[24px]">
				<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
					<div className="w-[22%] sm:w-full xm:w-full">
						<h3 className={sectionHeading}>We are The Scale Funnel:</h3>
					</div>
					<div className="w-[72%] sm:w-full xm:w-full flex flex-col gap-[18px]">
						<p className="paragraph font-NeueMontreal text-secondry max-w-[760px]">
							Three specialists. One shared goal — your growth. We build complete growth systems for coaching businesses that need clarity, momentum, and structure.
						</p>
						<p className="paragraph font-NeueMontreal text-secondry max-w-[760px]">
							Together, we cover every angle so nothing in your growth system is left to chance.
						</p>
					</div>
				</div>
			</div>
			<div className="padding-x pt-[70px] lg:pt-[60px] md:pt-[50px] sm:pt-[40px] xm:pt-[40px] pb-[20px]">
				<BackgroundImg src={backgroundAbout} />
			</div>
			<div className="w-full bg-marquee relative rounded-t-[20px] mt-[24px] py-[40px] lg:py-[32px] md:py-[26px] sm:py-[20px] xm:py-[16px]">
				<Marquee
					title="growth systems for coaches"
					forceForward
					className="text-[180px] leading-[150px] lg:text-[130px] lg:leading-[110px] md:text-[95px] md:leading-[80px] sm:text-[62px] sm:leading-[52px] xm:text-[38px] xm:leading-[32px]"
				/>
			</div>
		</section>
	);
}
