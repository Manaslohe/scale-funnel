"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";

// ─── module-level flag (client only, reset on hard reload) ────────────────────
let firstVisit = true;

// ─── Main Curve component ─────────────────────────────────────────────────────
// Route transitions are handled globally by <PageTransition> in _app.tsx.
export default function Curve({ children, backgroundColor }) {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);
	const [showLoader, setShowLoader] = useState(false);
	const [isFirst, setIsFirst] = useState(false);

	// First-load intro loader states
	const [animateSheets, setAnimateSheets] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [progress, setProgress] = useState(0);
	const [counterVisible, setCounterVisible] = useState(true);

	// First load loader effects — only on the home page
	useEffect(() => {
		setMounted(true);
		if (firstVisit && router.pathname === "/") {
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
		} else if (firstVisit) {
			// Non-home page: mark firstVisit consumed but skip the loader
			firstVisit = false;
		}
	}, [router.pathname]);

	return (
		<>
			{/* Main page wrapper */}
			{mounted && isFirst && showLoader ? (
				<div
					className="loader-active"
					style={{
						width: "100vw",
						height: "100vh",
						backgroundColor: "#181818",
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
								background: "linear-gradient(135deg, #1B2B6B 0%, #0f1640 100%)",
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
								background: "linear-gradient(135deg, #F47B20 0%, #b8500c 100%)",
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
						<div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
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