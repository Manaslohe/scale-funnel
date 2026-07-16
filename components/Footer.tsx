import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";

export default function Footer() {
	const phrase = ["Scale Your", "Coaching"];
	const phrase1 = ["Business."];
	return (
		<footer className="w-full padding-x z-30 relative pt-[60px] pb-[20px] bg-background flex flex-col justify-between">
			<div className="w-full flex justify-between gap-[60px] sm:flex-col xm:flex-col sm:gap-[50px] xm:gap-[50px]">
				<div className="flex flex-col justify-between sm:w-full xm:w-full w-[48%]">
					<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase tracking-[-2px]">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-[48%]">
					<div>
						<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase tracking-[-2px]">
							<TextMask>{phrase1}</TextMask>
						</h1>
						<p className="paragraph font-NeueMontreal text-secondry opacity-60 pt-[24px] max-w-[420px] leading-relaxed">
							The Scale Funnel — Performance Marketing for Digital Coaches, Consultants and Course Creators
						</p>

						<div className="pt-[48px] grid grid-cols-2 gap-x-[40px] gap-y-[40px] sm:grid-cols-1 xm:grid-cols-1">
							<div>
								<h2 className="small-text font-semibold font-NeueMontreal text-secondry uppercase tracking-[2px] pb-[16px]">
									Social
								</h2>
								<div className="flex flex-col gap-y-[8px]">
									{footerItems.map((item) => (
										<LinkHover
											title={item.title}
											href={item.href}
											key={item.id}
											className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-secondry capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										/>
									))}
								</div>
							</div>
							<div>
								<h2 className="small-text font-semibold font-NeueMontreal text-secondry uppercase tracking-[2px] pb-[16px]">
									Pages
								</h2>
								<div className="flex flex-col gap-y-[8px]">
									{footernavbarItems
									.filter((item) => item.title !== "Blog")
									.map((item) => (
										<LinkHover
											key={item.id}
											className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
											title={item.title}
											href={item.href}
										/>
									))}
								</div>
							</div>
							<div>
								<h2 className="small-text font-semibold font-NeueMontreal text-secondry uppercase tracking-[2px] pb-[16px]">
									Legal
								</h2>
								<div className="flex flex-col gap-y-[8px]">
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="Privacy Policy"
										href="/"
									/>
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="Terms of Service"
										href="/"
									/>
								</div>
							</div>
							<div>
								<h2 className="small-text font-semibold font-NeueMontreal text-secondry uppercase tracking-[2px] pb-[16px]">
									Email
								</h2>
								<LinkHover
									title="hello@thescalefunnel.com"
									href="mailto:hello@thescalefunnel.com"
									className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium before:bottom-[1px] after:bottom-[1px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Branded visual + bottom bar */}
			<div className="w-full pt-[60px] pb-[36px] flex justify-between items-end sm:flex-col xm:flex-col sm:items-start xm:items-start sm:gap-[30px] xm:gap-[30px] border-t border-[#1B2B6B15] mt-[60px]">
				<div className="flex items-end gap-[30px] sm:w-full xm:w-full">
					<Link href={"/"} className="flex-shrink-0">
						<Image
							src={logo}
							alt="The Scale Funnel logo"
							width={180}
							height={68}
							className="object-contain w-[140px] sm:w-[120px] xm:w-[100px] h-auto"
							style={{ mixBlendMode: "multiply" }}
						/>
					</Link>
				</div>
				<div className="flex gap-[24px] items-center sm:flex-col sm:items-start xm:flex-col xm:items-start sm:w-full xm:w-full">
					<div className="flex flex-wrap gap-x-[16px] gap-y-[4px] items-center">
						<span className="small-text font-NeueMontreal text-secondry opacity-40">
							© 2026 The Scale Funnel.
						</span>
						<LinkHover
							title="Privacy Policy"
							href="/"
							className="before:h-[1px] after:h-[1px] small-text font-medium text-secondry opacity-40 before:bottom-[-2px] after:bottom-[-2px]"
						/>
						<LinkHover
							title="Terms of Service"
							href="/"
							className="before:h-[1px] after:h-[1px] small-text font-medium text-secondry opacity-40 before:bottom-[-2px] after:bottom-[-2px]"
						/>
					</div>
					<LinkHover
						title="The Scale Funnel"
						href="/"
						className="before:h-[1px] after:h-[1px] small-text font-medium text-secondry opacity-40 before:bottom-[-2px] after:bottom-[-2px]"
					/>
				</div>
			</div>
		</footer>
	);
}
