import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { logo } from "@/public";
import { useState, useEffect } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { RoundButton } from "@/components";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { hasNavigatedBefore, subscribeIntroFinish } from "@/lib/introLoader";
import MobileNav from "./MobileNav";

const NAV_REVEAL_MS = 500;

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const router = useRouter();
	const { scrollY } = useScroll();
	const isAboutPage = router.pathname === "/about";
	const isHomePage = router.pathname === "/";
	const [navReady, setNavReady] = useState(
		() => hasNavigatedBefore() || router.pathname !== "/",
	);

	useEffect(() => {
		if (!isHomePage || hasNavigatedBefore()) return;
		return subscribeIntroFinish(() => setNavReady(true));
	}, [isHomePage]);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
		setScrolled(latest > 40);
	});

	return (
		<>
			{/* py-[18px] gives the bar a fixed, content-based height instead of
			    an 8vh viewport-relative one, which was cropping the logo on
			    shorter windows. bg-cream is always on so text/logo never sit
			    on a transparent strip over hero content. */}
			<motion.nav
				variants={navVariants}
				initial="vissible"
				className={`w-full padding-x fixed top-0 left-0 z-50 flex items-center justify-between gap-x-[24px] py-[18px] bg-cream transition-all duration-300 sm:hidden xm:hidden md:hidden ${
					scrolled ? "shadow-[0_4px_24px_rgba(32,32,33,0.1)] py-[13px]" : ""
				}`}
				style={{
					opacity: isHomePage && !navReady ? 0 : 1,
					pointerEvents: isHomePage && !navReady ? "none" : "auto",
					transition: `opacity ${NAV_REVEAL_MS}ms cubic-bezier(0.16, 1, 0.3, 1)`,
				}}
				animate={hidden ? "hidden" : "vissible"}>
				<motion.div
					className="shrink-0"
					initial={
						isAboutPage || (isHomePage && !navReady)
							? { x: 0, opacity: isHomePage && !navReady ? 0 : 1 }
							: { x: -60, opacity: 0 }
					}
					animate={
						isAboutPage
							? undefined
							: isHomePage && !navReady
								? { x: 0, opacity: 0 }
								: { x: 0, opacity: 1 }
					}
					transition={
						isAboutPage
							? undefined
							: {
								duration: isHomePage && navReady ? NAV_REVEAL_MS / 1000 : 0.8,
								delay: isHomePage && navReady ? 0 : isHomePage ? 0 : 0.4,
								ease: [0.19, 1, 0.22, 1],
							}
					}>
					<Link href={"/"}>
						<Image
							src={logo}
							alt="TSF logo"
							width={140}
							height={87}
							className="w-[130px] h-auto object-contain"
						/>
					</Link>
				</motion.div>
				<div className="flex-1 flex justify-center gap-x-[34px]">
					{navbarItems.map((item) => (
						<Link
							key={item.id}
							className="w-fit paragraph font-medium font-NeueMontreal text-navy capitalize flex flex-col hover"
							href={item.href}>
							<TextHover
								titile1={item.title}
								titile2={item.title}
							/>
						</Link>
					))}
				</div>
				<div className="shrink-0 flex items-center justify-center bg-navy cursor-pointer rounded-full group">
					<RoundButton
						href="/contact"
						title="book a strategy call"
						bgcolor="#DA7B31"
						className="bg-orange text-white"
						style={{ color: "#fff" }}
						compact
					/>
				</div>
			</motion.nav>
			<MobileNav navReady={navReady || !isHomePage} />
		</>
	);
}
