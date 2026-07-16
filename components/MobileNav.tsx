"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { logo } from "@/public";
import { footerItems, navbarItems } from "@/constants";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { LinkHover, TextHover } from "@/animation";

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);
	const navItems = navbarItems.filter((item) => item.title !== "Blog");
	const socialItems = footerItems.filter((item) => item.title !== "Gmail");

	return (
		<>
			<div className="w-full hidden justify-between items-center h-[88px] sm:h-[84px] xm:h-[80px] padding-x sm:flex xm:flex md:flex fixed top-0 left-0 z-50 backdrop-blur-[12px] bg-[#F8F9FA]/80 border-b border-[#1B2B6B]/10">
				<Link href={"/"} className="flex items-center pt-[8px] pb-[14px] sm:pb-[16px] xm:pb-[18px]">
					<Image
						src={logo}
						alt="The Scale Funnel logo"
						width={160}
						height={48}
						className="object-contain w-[140px] sm:w-[128px] xm:w-[116px] h-auto"
						style={{ mixBlendMode: "multiply" }}
					/>
				</Link>
				<HiOutlineMenuAlt4
					onClick={() => setToggle(true)}
					className="text-[28px] cursor-pointer text-secondry"
				/>
			</div>
			<AnimatePresence mode="wait">
				{toggle && (
					<motion.div
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ duration: 1, ease: [0.3, 0.86, 0.36, 0.95] }}
						className="fixed top-0 bottom-0 right-0 z-50 w-full min-h-screen flex flex-col bg-black overflow-y-auto">
						<div className="w-full flex justify-between items-center padding-x pt-[24px] sm:pt-[20px] xm:pt-[18px] pb-[20px] sm:pb-[18px] xm:pb-[16px] border-b border-[#ffffff22] shrink-0">
							<Link href={"/"} onClick={() => setToggle(false)} className="flex items-center">
								<Image
									src={logo}
									alt="The Scale Funnel logo"
									width={160}
									height={48}
									className="object-contain w-[140px] sm:w-[128px] xm:w-[116px] h-auto"
								/>
							</Link>
							<IoMdClose
								onClick={() => setToggle(false)}
								className="text-[28px] cursor-pointer text-white"
							/>
						</div>
						<ul className="flex-1 w-full flex flex-col justify-center gap-[28px] sm:gap-[24px] xm:gap-[20px] padding-x py-[48px] sm:py-[40px] xm:py-[36px]">
							{navItems.map((item) => (
								<li key={item.id}>
									<Link
										href={item.href}
										onClick={() => setToggle(false)}
										className="text-[17px] font-medium font-NeueMontreal text-white capitalize flex flex-col hover mobile-navbar-link navbar-link">
										<TextHover titile1={item.title} titile2={item.title} />
									</Link>
								</li>
							))}
						</ul>
						<div className="w-full padding-x pb-[48px] sm:pb-[40px] xm:pb-[36px] border-t border-[#ffffff22] pt-[32px] shrink-0">
							<h2 className="small-text font-semibold font-NeueMontreal text-white/60 uppercase tracking-[2px] pb-[16px]">
								Social
							</h2>
							<div className="flex flex-col gap-y-[10px]">
								{socialItems.map((item) => (
									<Link
										key={item.id}
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => setToggle(false)}
										className="w-fit">
										<LinkHover
											title={item.title}
											href={item.href}
											className="before:h-[1px] after:h-[1px] !text-white before:!bg-white after:!bg-white text-[17px] font-medium font-NeueMontreal capitalize flex flex-col before:bottom-[1px] after:bottom-[1px] mobile-navbar-link"
										/>
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
