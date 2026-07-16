"use client";
import { useState, useEffect, createContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { logo } from "@/public";
import Navbar from "../Navbar";
import Footer from "../Footer";

// ─── module-level flag (client only, reset on hard reload) ────────────────────
let firstVisit = true;

export const FirstLoadContext = createContext({
	loaderVisible: false,
	loaderExpanding: false,
});

// ─── animation variants for route transitions ─────────────────────────────────

// Overlay fades out
const overlayVariants = {
	hidden: { opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } },
};

// Page Transition Swipe Panel 1 (Orange Curtain)
const swipePanel1 = {
	initial: { x: "-100%" },
	enter: {
		x: ["-100%", "0%", "100%"],
		transition: {
			times: [0, 0.5, 1],
			duration: 2.25,
			ease: [0.76, 0, 0.24, 1],
		},
	},
	exit: {
		x: "100%",
	},
};

// Page Transition Swipe Panel 2 (Blue Curtain)
const swipePanel2 = {
	initial: { x: "-100%" },
	enter: {
		x: ["-100%", "0%", "100%"],
		transition: {
			times: [0, 0.5, 1],
			duration: 2.25,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.28,
		},
	},
	exit: {
		x: "100%",
	},
};

const expandEase = [0.33, 1, 0.68, 1];
const expandDuration = 1.4;

// ─── Route transition overlay ─────────────────────────────────────────────────
function LoaderOverlay({ onDone }) {
	const [hide, setHide] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setHide(true);
			setTimeout(onDone, 750);
		}, 1150);
		return () => clearTimeout(timer);
	}, [onDone]);

	return (
		<motion.div
			key="loader-overlay"
			style={overlayStyle}
			animate={hide ? "hidden" : undefined}
			variants={overlayVariants}
		>
			<motion.div
				style={{
					position: "fixed",
					inset: 0,
					width: "100vw",
					height: "100vh",
					backgroundColor: "#F47B20",
					zIndex: 9998,
					pointerEvents: "none",
				}}
				variants={swipePanel1}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
			<motion.div
				style={{
					position: "fixed",
					inset: 0,
					width: "100vw",
					height: "100vh",
					backgroundColor: "#1B2B6B",
					zIndex: 9999,
					pointerEvents: "none",
				}}
				variants={swipePanel2}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
			<motion.div
				style={{
					position: "fixed",
					bottom: "28px",
					right: "28px",
					zIndex: 10000,
					pointerEvents: "none",
				}}
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
			>
				<Image
					src={logo}
					alt="Scale Funnel"
					width={160}
					height={48}
					className="object-contain w-[130px] sm:w-[110px] h-auto brightness-0"
				/>
			</motion.div>
		</motion.div>
	);
}

// ─── Headline shown inside the loader card ────────────────────────────────────
function LoaderPreviewHeadline({ isExpanding }) {
	return (
		<motion.div
			className="loader-preview-headline"
			initial={false}
			animate={isExpanding ? "expanded" : "framed"}
			variants={{
				framed: { opacity: 1, top: "50%", y: "-50%" },
				expanded: { opacity: 0, top: "22%", y: "0%" },
			}}
			transition={{ duration: expandDuration, ease: expandEase }}
		>
			<div className="loader-preview-content">
				<Image
					src={logo}
					alt="Scale Funnel"
					width={220}
					height={66}
					priority
					className="loader-preview-logo-img object-contain object-left"
					style={{ mixBlendMode: "multiply" }}
				/>
				<h1 className="loader-preview-title font-FoundersGrotesk font-semibold text-secondry uppercase">
					<span className="block">Your Growth</span>
					<span className="block">Is Our</span>
					<span className="block text-accent">Goal.</span>
				</h1>
			</div>
		</motion.div>
	);
}

// ─── Main Curve component ─────────────────────────────────────────────────────
export default function Curve({ children, backgroundColor }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const [showLoader, setShowLoader] = useState(false);
	const [isFirst, setIsFirst] = useState(false);

	const [animateSheets, setAnimateSheets] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [progress, setProgress] = useState(0);
	const [counterVisible, setCounterVisible] = useState(true);

	useEffect(() => {
		setMounted(true);
		if (firstVisit) {
			firstVisit = false;
			setIsFirst(true);
			setShowLoader(true);

			const sheetsTimer = setTimeout(() => {
				setAnimateSheets(true);
			}, 500);

			let count = 0;
			const counterInterval = setInterval(() => {
				if (count <= 100) {
					setProgress(count++);
				} else {
					clearInterval(counterInterval);
					setCounterVisible(false);
				}
			}, 20);

			const fullscreenTimer = setTimeout(() => {
				setIsFullscreen(true);
				setTimeout(() => {
					setShowLoader(false);
				}, expandDuration * 1000);
			}, 2600);

			return () => {
				clearTimeout(sheetsTimer);
				clearInterval(counterInterval);
				clearTimeout(fullscreenTimer);
			};
		}
	}, []);

	useEffect(() => {
		const handleStart = () => {
			setIsFirst(false);
			setShowLoader(true);
		};
		router.events.on("routeChangeStart", handleStart);
		return () => router.events.off("routeChangeStart", handleStart);
	}, [router]);

	const handleOverlayDone = () => setShowLoader(false);
	const renderRouteTransition = mounted && showLoader && !isFirst;
	const firstLoadActive = mounted && isFirst && showLoader;

	return (
		<FirstLoadContext.Provider
			value={{
				loaderVisible: firstLoadActive,
				loaderExpanding: firstLoadActive && isFullscreen,
			}}
		>
			{renderRouteTransition && (
				<LoaderOverlay onDone={handleOverlayDone} />
			)}

			{mounted && (
				<div style={{ backgroundColor, minHeight: "100vh" }}>
					<Navbar />
					{children}
					<Footer />
				</div>
			)}

			{firstLoadActive && (
				<div
					className={`loader-active${isFullscreen ? " loader-expanded" : " loader-framed"}`}
					style={{
						width: "100vw",
						height: "100vh",
						backgroundColor: isFullscreen ? "transparent" : "#000000",
						position: "fixed",
						inset: 0,
						zIndex: 9999,
						overflow: "hidden",
						padding: isFullscreen ? "0px" : undefined,
						opacity: isFullscreen ? 0 : 1,
						transition: `padding ${expandDuration}s cubic-bezier(0.33, 1, 0.68, 1), opacity ${expandDuration}s cubic-bezier(0.33, 1, 0.68, 1), background-color 0.4s ease`,
						pointerEvents: isFullscreen ? "none" : "auto",
					}}
				>
					<div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
						<div
							style={{
								position: "absolute",
								width: "70%",
								height: "60%",
								backgroundColor: "#1B2B6B",
								top: "20%",
								left: "-100%",
								borderRadius: "10px",
								transition: "transform 2s cubic-bezier(0.33, 1, 0.68, 1)",
								transform: animateSheets ? "translateX(160%)" : "none",
							}}
						/>
						<div
							style={{
								position: "absolute",
								width: "70%",
								height: "60%",
								backgroundColor: "#F47B20",
								top: "20%",
								right: "-100%",
								borderRadius: "10px",
								transition: "transform 2s cubic-bezier(0.33, 1, 0.68, 1)",
								transform: animateSheets ? "translateX(-160%)" : "none",
							}}
						/>
					</div>

					<div
						id="sheet-view"
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: backgroundColor || "#f1f1f1",
							position: "relative",
							zIndex: 10,
							borderRadius: isFullscreen ? "0px" : "10px",
							opacity: isFullscreen ? 0 : 1,
							transition: `border-radius ${expandDuration}s cubic-bezier(0.33, 1, 0.68, 1), opacity ${expandDuration}s cubic-bezier(0.33, 1, 0.68, 1)`,
							overflow: "hidden",
							boxShadow: isFullscreen ? "none" : "0 30px 60px -10px rgba(0, 0, 0, 0.35)",
						}}
					>
						<LoaderPreviewHeadline isExpanding={isFullscreen} />

						{counterVisible && (
							<motion.span
								className="loader-counter"
								animate={isFullscreen ? { opacity: 0 } : { opacity: 1 }}
								transition={{ duration: 0.35, ease: expandEase }}
							>
								{progress}%
							</motion.span>
						)}
					</div>
				</div>
			)}
		</FirstLoadContext.Provider>
	);
}

const overlayStyle = {
	position: "fixed",
	inset: 0,
	zIndex: 9999,
	backgroundColor: "transparent",
	overflow: "hidden",
	pointerEvents: "none",
};
