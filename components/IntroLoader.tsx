"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import {
	markIntroFinished,
	shouldShowIntroLoader,
} from "@/lib/introLoader";
import { logo, logoIcon } from "@/public";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const EXPAND_MS = 1650;
const FULLSCREEN_AT = 2000;
const HOLD_MS = 0;
const OVERLAY_FADE_MS = 500;
const HANDOFF_AT = FULLSCREEN_AT + EXPAND_MS + HOLD_MS;

const getCardPadding = (width: number) => {
	if (width < 480) return "5vh 4vw";
	if (width < 768) return "7vh 6vw";
	if (width < 1024) return "10vh 9vw";
	return "14vh 15vw";
};

const getInitialScale = (width: number) => {
	if (width < 480) return 0.34;
	if (width < 768) return 0.36;
	if (width < 1024) return 0.46;
	return 0.44;
};

const getCardHeadingClass = (width: number) => {
	if (width < 480) return "text-[18px] leading-[22px]";
	if (width < 768) return "text-[22px] leading-[26px]";
	if (width < 1024) return "text-[46px] leading-[52px]";
	return "text-[66px] leading-[72px]";
};

const getCardLogoClass = (width: number) => {
	if (width < 480) return "h-[14px]";
	if (width < 768) return "h-[16px]";
	if (width < 1024) return "h-[44px]";
	return "h-[52px]";
};

const getPanelClass = (width: number) => {
	if (width < 480) return "w-[48%] h-[40%] top-[28%]";
	if (width < 768) return "w-[52%] h-[44%] top-[26%]";
	if (width < 1024) return "w-[58%] h-[48%] top-[24%]";
	return "w-[70%] h-[60%] top-[20%]";
};

export default function IntroLoader() {
	const [shouldPlay] = useState(() => shouldShowIntroLoader());
	const [viewport, setViewport] = useState(() =>
		typeof window !== "undefined"
			? { width: window.innerWidth, height: window.innerHeight }
			: { width: 1280, height: 800 },
	);
	const [animate, setAnimate] = useState(false);
	const [fullscreen, setFullscreen] = useState(false);
	const [overlayOut, setOverlayOut] = useState(false);
	const [done, setDone] = useState(false);
	const [count, setCount] = useState(0);
	const [skip, setSkip] = useState(false);
	const [textScale, setTextScale] = useState(1);

	useLayoutEffect(() => {
		const syncViewport = () => {
			setViewport({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		syncViewport();
		window.addEventListener("resize", syncViewport);
		return () => window.removeEventListener("resize", syncViewport);
	}, []);

	useEffect(() => {
		if (!shouldPlay) {
			setSkip(true);
			return;
		}

		setSkip(false);

		const t1 = setTimeout(() => setAnimate(true), 300);
		const t2 = setTimeout(() => setFullscreen(true), FULLSCREEN_AT);
		const t3 = setTimeout(() => {
			markIntroFinished();
			setOverlayOut(true);
		}, HANDOFF_AT);
		const t4 = setTimeout(() => setDone(true), HANDOFF_AT + OVERLAY_FADE_MS + 40);

		let c = 0;
		const interval = setInterval(() => {
			if (c <= 100) {
				setCount(c);
				c += 3;
			} else {
				clearInterval(interval);
			}
		}, 80);

		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
			clearTimeout(t4);
			clearInterval(interval);
		};
	}, [shouldPlay]);

	useLayoutEffect(() => {
		if (!fullscreen) return;
		const scale = getInitialScale(viewport.width);
		setTextScale(scale);
		requestAnimationFrame(() => {
			requestAnimationFrame(() => setTextScale(1));
		});
	}, [fullscreen, viewport.width]);

	if (!shouldPlay || skip || done) return null;

	const panelClass = getPanelClass(viewport.width);
	const cardPadding = getCardPadding(viewport.width);
	const cardHeading = getCardHeadingClass(viewport.width);
	const cardLogo = getCardLogoClass(viewport.width);
	const isMobileCard = !fullscreen && viewport.width < 768;

	return (
		<div
			className="fixed inset-0 z-[999] pointer-events-none"
			style={{
				opacity: overlayOut ? 0 : 1,
				transition: `opacity ${OVERLAY_FADE_MS}ms ${EASE}`,
			}}>
			<div
				className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#202021]"
				style={{
					padding: fullscreen ? 0 : cardPadding,
					transition: `padding ${EXPAND_MS}ms ${EASE}`,
				}}>
				<div
					className="absolute inset-0 z-[1] pointer-events-none"
					style={{
						opacity: fullscreen || overlayOut ? 0 : 1,
						transition: `opacity ${EXPAND_MS * 0.45}ms ${EASE}`,
					}}>
					<div
						className={`absolute rounded-[10px] ${panelClass}`}
						style={{
							right: "-100%",
							background: "#DA7B31",
							transform: animate ? "translateX(-155%)" : "translateX(0)",
							transition: `transform ${EXPAND_MS}ms ${EASE}`,
						}}
					/>
					<div
						className={`absolute rounded-[10px] ${panelClass}`}
						style={{
							left: "-100%",
							background: "#282762",
							transform: animate ? "translateX(155%)" : "translateX(0)",
							transition: `transform ${EXPAND_MS}ms ${EASE}`,
						}}
					/>
				</div>

				{/* Spacer card shape — invisible, only drives padding collapse */}
				<div
					className="w-full h-full opacity-0"
					style={{
						borderRadius: fullscreen ? 0 : 10,
						transition: `border-radius ${EXPAND_MS}ms ${EASE}`,
					}}
				/>
			</div>

			{/* Content layer — stays fully opaque until unmount */}
			<div
				className="absolute inset-0 z-[1000] flex items-center justify-center overflow-hidden"
				style={{
					padding: fullscreen ? 0 : cardPadding,
					transition: `padding ${EXPAND_MS}ms ${EASE}`,
				}}>
				<div
					className="w-full h-full bg-[#F7F5F1] relative overflow-hidden flex flex-col"
					style={{
						borderRadius: fullscreen ? 0 : 10,
						transition: `border-radius ${EXPAND_MS}ms ${EASE}`,
					}}>
					<nav
						className={`w-full flex items-center flex-row shrink-0 ${
							isMobileCard
								? "px-[14px] py-[10px]"
								: "padding-x py-[18px] sm:py-[16px] xm:py-[16px] md:py-[16px]"
						}`}
						style={{
							opacity: fullscreen ? 0 : 1,
							maxHeight: fullscreen ? 0 : 200,
							overflow: "hidden",
							paddingTop: fullscreen ? 0 : undefined,
							paddingBottom: fullscreen ? 0 : undefined,
							transition: `opacity 600ms ${EASE}, max-height ${EXPAND_MS}ms ${EASE}`,
						}}>
						<Image
							src={logo}
							alt="The Scale Funnel"
							width={140}
							height={87}
							className={
								isMobileCard
									? "w-[72px] h-auto object-contain"
									: "w-[130px] sm:w-[150px] xm:w-[150px] md:w-[150px] h-auto object-contain"
							}
						/>
					</nav>

					<div
						className={`flex-1 min-h-0 w-full flex flex-col ${
							fullscreen
								? "pt-[160px] lg:pt-[140px] md:pt-[160px] sm:pt-[150px] xm:pt-[140px] pb-[90px] sm:pb-[60px] xm:pb-[60px] gap-[77px] md:gap-[53px] sm:gap-[41px] xm:gap-[33px]"
								: isMobileCard
									? "px-[14px] justify-center items-start overflow-hidden"
									: "padding-x justify-center items-start overflow-hidden"
						}`}
						style={{
							transition: `padding ${EXPAND_MS}ms ${EASE}, gap ${EXPAND_MS}ms ${EASE}`,
						}}>
						<div
							className={`w-full ${fullscreen ? "padding-x" : "max-w-full overflow-hidden shrink-0"}`}
							style={
								fullscreen
									? {
											transform: `scale(${textScale})`,
											transformOrigin: "left top",
											transition: `transform ${EXPAND_MS}ms ${EASE}`,
										}
									: undefined
							}>
							<p
								className="small-text uppercase tracking-[0.1em] text-orange font-medium font-NeueMontreal mb-[22px] sm:mb-[18px] xm:mb-[16px]"
								style={{
									opacity: fullscreen ? 1 : 0,
									maxHeight: fullscreen ? 200 : 0,
									marginBottom: fullscreen ? undefined : 0,
									overflow: "hidden",
									transform: fullscreen ? "translateY(0)" : "translateY(6px)",
									transition: `opacity 650ms ${EASE} ${EXPAND_MS * 0.4}ms, transform 650ms ${EASE} ${EXPAND_MS * 0.4}ms, max-height ${EXPAND_MS}ms ${EASE}`,
								}}>
								Performance Marketing for Coaches, Consultants &amp; Course Creators
							</p>
							<h1
								className={`tracking-[0.005em] text-secondry font-semibold font-FoundersGrotesk uppercase ${
									fullscreen ? "heading" : cardHeading
								}`}>
								your growth <br />
								<div
									className={`flex flex-row items-center mt-[4px] sm:mt-[2px] ${
										isMobileCard
											? "gap-[4px]"
											: "gap-[20px] md:gap-[14px] sm:gap-[10px] xm:gap-[8px]"
									}`}
									style={{
										transition: `gap ${EXPAND_MS}ms ${EASE}`,
									}}>
									<span
										className={`flex-shrink-0 ${fullscreen ? "leading-[130px] lg:leading-[100px] md:leading-[72px] sm:leading-[52px] xm:leading-[44px]" : ""}`}
										style={
											fullscreen
												? {
														opacity: 1,
														maxHeight: 500,
														overflow: "hidden",
														transition: `opacity ${EXPAND_MS * 0.55}ms ${EASE}, max-height ${EXPAND_MS}ms ${EASE}`,
													}
												: undefined
										}>
										<Image
											width={103}
											height={154}
											src={logoIcon}
											alt="img"
											className={
												fullscreen
													? "w-auto h-[95px] lg:w-auto lg:h-[85px] md:w-auto md:h-[63px] sm:w-auto sm:h-[45px] xm:w-auto xm:h-[40px] object-contain"
													: `w-auto ${cardLogo} object-contain`
											}
										/>
									</span>
									<span
										className={`tracking-[0.005em] text-secondry font-semibold font-FoundersGrotesk uppercase ${
											fullscreen ? "heading" : cardHeading
										}`}>
										is our
									</span>
								</div>
								<span className={`text-orange block ${isMobileCard ? "mt-[1px]" : "mt-[2px] sm:mt-[0px]"}`}>goal.</span>
							</h1>
						</div>

						<div
							className="w-full border-t border-[#20202155] pt-[24px] gap-[30px] sm:gap-[24px] xm:gap-[20px] flex flex-col"
							style={{
								opacity: fullscreen ? 1 : 0,
								maxHeight: fullscreen ? 500 : 0,
								overflow: "hidden",
								transform: fullscreen ? "translateY(0)" : "translateY(10px)",
								transition: `opacity 650ms ${EASE} ${EXPAND_MS * 0.5}ms, transform 650ms ${EASE} ${EXPAND_MS * 0.5}ms, max-height ${EXPAND_MS}ms ${EASE}`,
							}}>
							<div className="flex justify-between items-start padding-x gap-[40px] md:gap-[32px] sm:flex-col sm:gap-[20px] xm:flex-col xm:gap-[18px]">
								<p className="flex-1 paragraph font-NeueMontreal text-secondry">
									Performance marketing for coaches, consultants and
									course creators
								</p>
								<p className="flex-1 paragraph font-NeueMontreal text-secondry text-right sm:text-left xm:text-left">
									The only marketing agency your coaching business
									will ever need
								</p>
							</div>
						</div>
					</div>

					<span
						className="absolute bottom-0 right-0 font-extrabold text-[100px] sm:text-[60px] xm:text-[50px] text-[#202021] padding-x"
						style={{
							opacity: count >= 100 || fullscreen || overlayOut ? 0 : 1,
							transition: "opacity 450ms ease",
						}}>
						{count}%
					</span>
				</div>
			</div>
		</div>
	);
}
