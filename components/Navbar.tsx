import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { useState } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous && latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	// Split items: first 4 center, last one (Contact Us) right. Blog is hidden but kept in constants.
	const centerItems = navbarItems.filter((item) => item.id !== 5 && item.title !== "Blog");
	const rightItem = navbarItems.find((item) => item.id === 5);

	return (
		<>
			<motion.nav
				variants={navVariants}
				className="w-full h-[78px] px-[50px] fixed top-0 left-0 z-50 backdrop-blur-[12px] bg-[#F8F9FA]/80 border-b border-[#1B2B6B]/10 flex items-center justify-between sm:hidden xm:hidden md:hidden transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(27,43,107,0.06)]"
				initial="hidden"
				animate={hidden ? "hidden" : "vissible"}>

				{/* Left — Full Logo */}
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8, delay: 0.1 }}
					className="flex-shrink-0">
					<Link href={"/"} className="flex items-center">
						<Image
							src={logo}
							alt="The Scale Funnel logo"
							width={220}
							height={66}
							className="object-contain transition-transform duration-300 hover:scale-[1.03]"
							style={{ mixBlendMode: "multiply", height: "62px", width: "auto" }}
						/>
					</Link>
				</motion.div>

				{/* Center — Nav items 1–4 */}
				<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-x-[36px]">
					{centerItems.map((item, i) => (
						<motion.div
							key={item.id}
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8, delay: 0.15 + i * 0.06 }}>
							<Link
								className="text-[17px] font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover navbar-link"
								href={item.href}>
								<TextHover titile1={item.title} titile2={item.title} />
							</Link>
						</motion.div>
					))}
				</div>

				{/* Right — Contact Us */}
				{rightItem && (
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8, delay: 0.4 }}
						className="flex-shrink-0">
						<Link
							className="text-[17px] font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover navbar-link"
							href={rightItem.href}>
							<TextHover titile1={rightItem.title} titile2={rightItem.title} />
						</Link>
					</motion.div>
				)}
			</motion.nav>
			<MobileNav />
		</>
	);
}
