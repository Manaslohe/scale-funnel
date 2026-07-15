import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";

export default function Footer() {
	const phrase = ["Scale your", "coaching business."];
	return (
		<footer className="w-full h-full min-h-screen padding-x relative py-[90px] lg:py-[70px] md:py-[60px] sm:py-[50px] xm:py-[40px] bg-background flex flex-col justify-between gap-[70px] md:gap-[56px] sm:gap-[44px] xm:gap-[36px] rounded-t-[20px] overflow-hidden">
			<div className="w-full flex flex-col gap-[24px] max-w-[820px] xl:max-w-[920px]">
				<h1 className="text-[90px] leading-[86px] xl:text-[100px] xl:leading-[96px] lg:text-[74px] lg:leading-[70px] md:text-[58px] md:leading-[54px] sm:text-[42px] sm:leading-[40px] xm:text-[30px] xm:leading-[30px] font-semibold font-FoundersGrotesk text-secondry uppercase">
					<TextMask>{phrase}</TextMask>
				</h1>
				<p className="paragraph font-NeueMontreal text-secondry opacity-70 max-w-[480px]">
					The Scale Funnel — Performance Marketing for Digital Coaches, Consultants and Course Creators
				</p>
			</div>

			<div className="w-full flex items-center gap-[16px] pb-[40px] border-b border-[#20202155] sm:flex-col sm:items-start xm:flex-col xm:items-start">
				<Link
					href={"/"}
					className="shrink-0">
					<Image
						src={logo}
						alt="TSF logo"
						width={130}
						height={80}
						className="w-[120px] h-auto object-contain"
					/>
				</Link>
				<div className="flex flex-wrap gap-x-[26px] gap-y-[10px]">
					{footernavbarItems.map((item) => (
						<LinkHover
							key={item.id}
							title={item.title}
							href={item.href}
							className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
						/>
					))}
				</div>
				<div className="flex flex-wrap gap-x-[20px] gap-y-[10px] sm:mt-0 md:ml-auto lg:ml-auto xl:ml-auto">
					{footerItems.map((item) => (
						<LinkHover
							key={item.id}
							title={item.title}
							href={item.href}
							className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
						/>
					))}
				</div>
			</div>

			<div className="w-full flex items-center justify-between gap-[16px] flex-wrap sm:flex-col sm:items-start xm:flex-col xm:items-start">
				<div className="flex items-center gap-x-[20px] gap-y-[8px] flex-wrap">
					<h1 className="small-text font-medium font-NeueMontreal text-secondry opacity-50">
						© The Scale Funnel 2026
					</h1>
					<LinkHover
						title="Legal Terms"
						href="/"
						className="before:h-[1px] after:h-[1px] small-text font-medium text-secondry opacity-50 before:bottom-[-3px] after:bottom-[-3px]"
					/>
				</div>
				<div className="flex items-center gap-x-[8px]">
					<h1 className="small-text font-medium font-NeueMontreal text-secondry opacity-50">
						hello@thescalefunnel.com
					</h1>
				</div>
			</div>
		</footer>
	);
}
