"use client";
import Image from "next/image";
import { useState } from "react";
import { Team1, Team2, Team3, Team4, logo } from "@/public";
import { Marquee } from "@/components";
import { AnimatePresence, motion } from "framer-motion";

const teamSlides = [
	{ name: "IHOR", nameLine2: "HULYAHRODSKYY", role: "Founder and CEO", image: Team1 },
	{ name: "IHOR", nameLine2: "HULYAHRODSKYY", role: "Founder and CEO", image: Team2 },
	{ name: "IHOR", nameLine2: "HULYAHRODSKYY", role: "Founder and CEO", image: Team3 },
	{ name: "IHOR", nameLine2: "HULYAHRODSKYY", role: "Founder and CEO", image: Team4 },
];

const slideVariants = {
	enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
	center: { x: 0, opacity: 1 },
	exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function Team() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	const handleCycle = () => {
		setDirection(1);
		setActiveIndex((prev) => (prev + 1) % teamSlides.length);
	};

	const active = teamSlides[activeIndex];

	return (
		<section className="w-full bg-marquee min-h-screen rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
				<Marquee
					title="Meet Our Team"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[25px] xm:pb-[18px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>
			<div className="w-full bg-marquee flex items-center justify-center pb-[50px] padding-x">
				<div
					onClick={handleCycle}
					onKeyDown={(e) => e.key === "Enter" && handleCycle()}
					role="button"
					tabIndex={0}
					className="w-[80%] p-[20px] bg-background rounded-[20px] sm:w-full xm:w-full cursor-pointer select-none overflow-hidden">
					<AnimatePresence mode="wait" custom={direction}>
						<motion.div
							key={activeIndex}
							custom={direction}
							variants={slideVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
							className="w-full flex flex-col justify-between gap-[20px] py-[10px]">
							<div className="flex justify-between sm:flex-col xm:flex-col gap-[20px]">
								<div>
									<Image
										src={logo}
										alt="The Scale Funnel logo"
										width={68}
										height={68}
										className="w-[68px] h-auto"
									/>
								</div>
								<div>
									<Image
										src={active.image}
										alt={active.name}
										width={300}
										height={300}
										className="rounded-[10px] sm:w-full xm:w-full"
									/>
									<p className="paragraph font-NeueMontreal font-normal text-secondry py-[10px]">
										{active.role}
									</p>
								</div>
							</div>
							<div className="flex justify-between items-end sm:flex-col xm:flex-col sm:items-start xm:items-start">
								<div>
									<h1 className="heading font-bold font-FoundersGrotesk text-secondry">
										{active.name} <br /> {active.nameLine2}
									</h1>
								</div>
								<div>
									<h1 className="heading font-bold font-FoundersGrotesk text-secondry">
										{activeIndex + 1} / {teamSlides.length}
									</h1>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
