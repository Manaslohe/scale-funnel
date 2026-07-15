"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { IoMdClose } from "react-icons/io";
import { logo, mobileLogo } from "@/public";
import { footerItems, footernavbarItems } from "@/constants";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const NAV_REVEAL_MS = 500;

const neonLinkClass =
	"text-orange drop-shadow-[0_0_16px_rgba(218,123,49,0.9)]";

export default function MobileNav({ navReady = true }: { navReady?: boolean }) {
	const [toggle, setToggle] = useState(false);
	const [pressedId, setPressedId] = useState<number | null>(null);
	const router = useRouter();

	const isActive = (href: string) => {
		if (href === "/") return router.pathname === "/";
		return router.pathname.startsWith(href);
	};

	return (
		<>
			<div
				className="w-full hidden justify-between items-center gap-[10px] pt-[20px] pb-[16px] sm:pt-[22px] sm:pb-[18px] xm:pt-[18px] xm:pb-[16px] padding-x bg-cream fixed top-0 left-0 z-40 sm:flex xm:flex md:flex overflow-hidden"
				style={{
					opacity: navReady ? 1 : 0,
					transition: `opacity ${NAV_REVEAL_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`,
					pointerEvents: navReady ? "auto" : "none",
				}}>
				<Link
					href={"/"}
					className="flex-1 min-w-0 max-w-[55%] overflow-hidden">
					<Image
						src={logo}
						alt="TSF logo"
						width={130}
						height={80}
						className="w-[108px] sm:w-[100px] xm:w-[90px] max-w-full h-auto object-contain object-left"
					/>
				</Link>
				<HiOutlineMenuAlt4
					onClick={() => setToggle(true)}
					className="text-[26px] shrink-0 cursor-pointer text-black"
				/>
			</div>
			<AnimatePresence mode="wait">
				{toggle && (
					<motion.div
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ duration: 1, ease: [0.3, 0.86, 0.36, 0.95] }}
						className="fixed top-0 bottom-0 right-0 z-50 w-full min-h-screen flex flex-col bg-secondry overflow-hidden">
						<div className="w-full flex justify-between items-center pt-[28px] pb-[24px] sm:pt-[32px] sm:pb-[28px] xm:pt-[24px] xm:pb-[22px] padding-x gap-[12px]">
							<Link
								href={"/"}
								className="shrink-0 overflow-hidden">
								<Image
									src={mobileLogo}
									alt="TSF logo"
									width={48}
									height={62}
									className="w-[42px] sm:w-[40px] xm:w-[36px] h-auto object-contain"
								/>
							</Link>
							<IoMdClose
								onClick={() => setToggle(false)}
								className="text-[26px] shrink-0 cursor-pointer text-background"
							/>
						</div>
						<div className="w-full border-b border-[#F7F5F155] padding-x" />
						<ul className="flex-1 w-full flex justify-center text-left flex-col gap-[14px] sm:gap-[16px] md:gap-[18px] padding-x pt-[32px] sm:pt-[36px] xm:pt-[28px]">
							{footernavbarItems.map((item) => {
								const active = isActive(item.href);
								const pressed = pressedId === item.id;

								return (
									<Link
										href={item.href}
										key={item.id}
										onMouseDown={() => setPressedId(item.id)}
										onMouseUp={() => setPressedId(null)}
										onMouseLeave={() => setPressedId(null)}
										onTouchStart={() => setPressedId(item.id)}
										onTouchEnd={() => setPressedId(null)}
										onClick={() => setToggle(false)}
										className={`text-[38px] leading-[44px] sm:text-[50px] sm:leading-[56px] md:text-[66px] md:leading-[74px] font-FoundersGrotesk uppercase font-bold tracking-[-0.02em] break-words transition-all duration-200 ${
											active || pressed
												? neonLinkClass
												: "text-background"
										}`}>
										{item.title}
									</Link>
								);
							})}
						</ul>
						<div className="w-full border-t border-[#F7F5F155] padding-x pt-[28px] pb-[36px] sm:pb-[40px] xm:pb-[32px]">
							<p className="small-text font-NeueMontreal text-background/50 uppercase tracking-[0.12em] mb-[16px]">
								Follow us
							</p>
							<div className="flex flex-wrap gap-x-[20px] gap-y-[12px]">
								{footerItems.map((item) => (
									<Link
										key={item.id}
										href={item.href}
										target={item.href.startsWith("http") ? "_blank" : undefined}
										rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
										className="paragraph font-NeueMontreal text-background/80 hover:text-orange hover:drop-shadow-[0_0_12px_rgba(218,123,49,0.7)] transition-all duration-200">
										{item.title}
									</Link>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
