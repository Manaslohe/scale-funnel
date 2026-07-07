"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";

// ─── module-level flag (client only, reset on hard reload) ────────────────────
let firstVisit = true;

// ─── animation variants for route transitions ─────────────────────────────────

// Overlay fades out
const overlayVariants = {
	hidden: { opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } },
};

// Page Transition Swipe Panel 1 (Orange Curtain)
const swipePanel1 = {
	initial: { x: "-100%" },
	enter: {
		x: ["-100%", "0%", "100%"],
		transition: {
			times: [0, 0.5, 1],
			duration: 1.3,
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
			duration: 1.3,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.15,
		},
	},
	exit: {
		x: "100%",
	},
};

// ─── Route transition overlay ─────────────────────────────────────────────────
function LoaderOverlay({ onDone }) {
	const [hide, setHide] = useState(false);

	useEffect(() => {
		// Page transition curtain swipe completes in 1.45s (including delay)
		const timer = setTimeout(() => {
			setHide(true);
			setTimeout(onDone, 600);
		}, 900);
		return () => clearTimeout(timer);
	}, [onDone]);

	return (
		<motion.div
			key="loader-overlay"
			style={overlayStyle}
			animate={hide ? "hidden" : undefined}
			variants={overlayVariants}
		>
			{/* Route transition: Sliding full-screen panels swipe */}
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
		</motion.div>
	);
}

// ─── Main Curve component ─────────────────────────────────────────────────────
export default function Curve({ children, backgroundColor }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const [showLoader, setShowLoader] = useState(false);
	const [isFirst, setIsFirst] = useState(false);

	// Ochi loader states
	const [animateSheets, setAnimateSheets] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [progress, setProgress] = useState(0);
	const [counterVisible, setCounterVisible] = useState(true);

	// First load loader effects
	useEffect(() => {
		setMounted(true);
		if (firstVisit) {
			firstVisit = false;
			setIsFirst(true);
			setShowLoader(true);

			// Step 1: Sheets slide in after 500ms
			const sheetsTimer = setTimeout(() => {
				setAnimateSheets(true);
			}, 500);

			// Counter 0 to 100%
			let count = 0;
			const counterInterval = setInterval(() => {
				if (count <= 100) {
					setProgress(count++);
				} else {
					clearInterval(counterInterval);
					setCounterVisible(false);
				}
			}, 20);

			// Step 2: Website card transitions to fullscreen after 2600ms
			const fullscreenTimer = setTimeout(() => {
				setIsFullscreen(true);
				// Hide loader after transition finishes (3600ms total)
				setTimeout(() => {
					setShowLoader(false);
				}, 1000);
			}, 2600);

			return () => {
				clearTimeout(sheetsTimer);
				clearInterval(counterInterval);
				clearTimeout(fullscreenTimer);
			};
		}
	}, []);

	// Route transition sheets swiper (active on page navigation changes)
	useEffect(() => {
		const handleStart = () => {
			setIsFirst(false);
			setShowLoader(true);
		};
		router.events.on("routeChangeStart", handleStart);
		return () => router.events.off("routeChangeStart", handleStart);
	}, [router]);

	const handleOverlayDone = () => setShowLoader(false);

	// Render route transition curtain swipe
	const renderRouteTransition = mounted && showLoader && !isFirst;

	return (
		<>
			{/* Route transition overlay */}
			{renderRouteTransition && (
				<LoaderOverlay onDone={handleOverlayDone} />
			)}

			{/* Main page wrapper */}
			{mounted && isFirst && showLoader ? (
				<div
					className="loader-active"
					style={{
						width: "100vw",
						height: "100vh",
						backgroundColor: "#000000",
						position: "fixed",
						inset: 0,
						zIndex: 9999,
						overflow: "hidden",
						padding: isFullscreen ? "0px" : "14vh 15vw",
						transition: "padding 1s cubic-bezier(0.76, 0, 0.24, 1)",
					}}
				>
					{/* Background side sheets container */}
					<div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
						{/* Left sheet: Blue */}
						<div
							style={{
								position: "absolute",
								width: "70%",
								height: "60%",
								backgroundColor: "#1B2B6B",
								top: "20%",
								left: "-100%",
								borderRadius: "10px",
								transition: "transform 2s cubic-bezier(0.76, 0, 0.24, 1)",
								transform: animateSheets ? "translateX(160%)" : "none",
							}}
						/>
						{/* Right sheet: Orange */}
						<div
							style={{
								position: "absolute",
								width: "70%",
								height: "60%",
								backgroundColor: "#F47B20",
								top: "20%",
								right: "-100%",
								borderRadius: "10px",
								transition: "transform 2s cubic-bezier(0.76, 0, 0.24, 1)",
								transform: animateSheets ? "translateX(-160%)" : "none",
							}}
						/>
					</div>

					{/* Center card view containing website */}
					<div
						id="sheet-view"
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: backgroundColor || "#f1f1f1",
							position: "relative",
							zIndex: 10,
							borderRadius: isFullscreen ? "0px" : "10px",
							transition: "border-radius 1s cubic-bezier(0.76, 0, 0.24, 1)",
							overflow: "hidden",
						}}
					>
						<div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
							{children}
							<Footer />
						</div>

						{/* Loader Counter in bottom-right of the card */}
						{counterVisible && (
							<span
								style={{
									position: "absolute",
									bottom: "30px",
									right: "40px",
									fontSize: "8vw",
									fontWeight: 800,
									fontFamily: '"FoundersGrotesk", "NeueMontreal", sans-serif',
									color: "#1B2B6B",
									lineHeight: 1,
									letterSpacing: "-2px",
									zIndex: 20,
									pointerEvents: "none",
								}}
							>
								{progress}%
							</span>
						)}
					</div>
				</div>
			) : (
				// Standard rendered page
				<div style={{ backgroundColor, minHeight: "100vh" }}>
					<Navbar />
					{children}
					<Footer />
				</div>
			)}
		</>
	);
}

// ─── Inline styles for route overlay transitions ─────────────────────────────
const overlayStyle = {
	position: "fixed",
	inset: 0,
	zIndex: 9999,
	backgroundColor: "transparent",
	overflow: "hidden",
	pointerEvents: "none",
};
