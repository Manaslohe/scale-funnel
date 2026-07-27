"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { logo, mobilelogowhite } from "@/public";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
	{ id: 1, title: "Services", href: "/services" },
	{ id: 2, title: "Our Work", href: "/case" },
	{ id: 3, title: "About Us", href: "/ochi-team" },
	{ id: 5, title: "Contact Us", href: "/contact" },
];

const socials = [
	{ title: "Instagram", href: "https://www.instagram.com/" },
	{ title: "Behance", href: "https://www.behance.net/" },
	{ title: "Facebook", href: "https://www.facebook.com/" },
	{ title: "Linkedin", href: "https://www.linkedin.com/" },
];

const locations = [
	{ lines: ["202-1965 W 4th Ave", "Vancouver, Canada"] },
	{ lines: ["30 Chukarina St", "Lviv, Ukraine"] },
];

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Use a plain scroll listener so SSR and client initial renders
	// both start with scrolled=false — prevents hydration mismatch.
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			{/* ─── Fixed mobile header bar ─────────────────────────────── */}
			<div
				className={`w-full hidden sm:flex xm:flex md:flex justify-between items-center
					h-[88px] sm:h-[80px] xm:h-[60px] padding-x
					fixed top-0 left-0 z-50
					transition-all duration-500
					${
						scrolled
							? "bg-[#F8F9FA]/95 backdrop-blur-[12px] border-b border-[#1B2B6B]/10 shadow-[0_2px_20px_rgba(27,43,107,0.07)]"
							: "bg-transparent border-b border-white/10"
					}`}
			>
				<Link href="/" className="flex items-center">
					<Image
						src={scrolled ? logo : mobilelogowhite}
						alt="The Scale Funnel"
						width={150}
						height={66}
						className="object-contain w-[40px] sm:w-[30px] xm:w-[30px] h-auto transition-all duration-500"
						style={scrolled ? { mixBlendMode: "multiply" } : undefined}
					/>
				</Link>
				<button
					onClick={() => setToggle(true)}
					aria-label="Open menu"
					className="flex items-center justify-center w-[40px] h-[40px] -mr-[6px]"
				>
					<HiOutlineMenuAlt4
						className={`text-[26px] transition-colors duration-500 ${
							scrolled ? "text-secondry" : "text-white"
						}`}
					/>
				</button>
			</div>

			{/* ─── Full-screen drawer ───────────────────────────────────── */}
			<AnimatePresence mode="wait">
				{toggle && (
					<motion.div
						key="mobile-nav"
						initial={{ y: "-100%" }}
						animate={{ y: 0 }}
						exit={{ y: "-100%" }}
						transition={{ duration: 0.9, ease: [0.3, 0.86, 0.36, 0.95] }}
						className="fixed inset-0 z-[60] w-full h-screen flex flex-col bg-[#212121] overflow-y-auto"
					>
						{/* Drawer header */}
						<div className="w-full flex justify-between items-center padding-x h-[68px] sm:h-[80px] xm:h-[56px] border-b border-white/[0.08] shrink-0">
							<Link href="/" onClick={() => setToggle(false)} className="flex items-center">
								<Image
									src={mobilelogowhite}
									alt="The Scale Funnel"
									width={150}
									height={66}
									className="object-contain w-[40px] sm:w-[30px] xm:w-[30px] h-auto"
								/>
							</Link>
							<button
								onClick={() => setToggle(false)}
								aria-label="Close menu"
								className="flex items-center justify-center w-[40px] h-[40px] -mr-[6px]"
							>
								<IoMdClose className="text-[26px] text-white/80 hover:text-white transition-colors" />
							</button>
						</div>

						{/* Nav links — full height, vertically fills remaining space */}
						<div className="flex-1 flex flex-col justify-between padding-x py-[36px] sm:py-[28px] xm:py-[24px]">
							<ul className="flex flex-col gap-y-[6px] xm:gap-y-[4px]">
								{navLinks.map((item) => (
									<li key={item.id}>
										<Link
											href={item.href}
											onClick={() => setToggle(false)}
											className="block font-FoundersGrotesk font-bold uppercase text-white
												text-[52px] sm:text-[46px] xm:text-[38px]
												leading-[1.0] tracking-[-1.5px] sm:tracking-[-1px] xm:tracking-[-0.5px]
												py-[4px] xm:py-[2px]
												hover:text-white/60 transition-colors duration-200"
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>

							{/* ─── Bottom row: S: socials  |  L: locations ─── */}
							<div className="w-full grid grid-cols-2 gap-x-[24px] pt-[28px] sm:pt-[24px] xm:pt-[20px] border-t border-white/[0.08] mt-[24px]">
								{/* Socials */}
								<div>
									<p className="font-NeueMontreal text-[13px] font-medium text-white/35 uppercase tracking-[1.5px] mb-[14px]">
										S:
									</p>
									<div className="flex flex-col gap-y-[8px]">
										{socials.map((s) => (
											<Link
												key={s.title}
												href={s.href}
												target="_blank"
												rel="noopener noreferrer"
												onClick={() => setToggle(false)}
												className="font-NeueMontreal text-[15px] sm:text-[14px] xm:text-[13px] text-white/75 hover:text-white transition-colors underline underline-offset-[3px] decoration-white/20 hover:decoration-white/60 w-fit"
											>
												{s.title}
											</Link>
										))}
									</div>
								</div>

								{/* Locations */}
								<div>
									<p className="font-NeueMontreal text-[13px] font-medium text-white/35 uppercase tracking-[1.5px] mb-[14px]">
										L:
									</p>
									<div className="flex flex-col gap-y-[14px]">
										{locations.map((loc, i) => (
											<div key={i}>
												{loc.lines.map((line) => (
													<p
														key={line}
														className="font-NeueMontreal text-[14px] sm:text-[13px] xm:text-[12px] text-white/55 leading-[1.5]"
													>
														{line}
													</p>
												))}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

