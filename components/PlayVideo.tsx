"use client";
import Image from "next/image";
import { eyes } from "@/public";
import { useEffect, useRef, useState } from "react";

export default function PlayVideo({ videosrc }: { videosrc: string }) {
	const [rotate, setRotate] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const togglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle - 180);
		});
	}, []);

	return (
		<div
			className="w-full relative cursor-pointer padding-x"
			onClick={togglePlay}>
			<div className="relative w-full max-w-[1100px] mx-auto -mb-[5px] rounded-[20px] overflow-hidden">
				<div className="relative w-full pt-[calc(100%*9/32+5px)]">
					<video
						className="absolute inset-0 w-full h-full object-cover"
						loop
						ref={videoRef}
						src={videosrc}
					/>
				<div
					className={`w-full absolute inset-0 gap-[30px] flex items-center justify-center ${
						isPlaying && "hidden"
					}`}>
					<div
						className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[100px] xm:h-[100px] bg-white rounded-full flex items-center justify-center cursor-pointer"
						onClick={togglePlay}>
						<div className="relative w-full h-full">
							<Image
								style={{
									transform: `rotate(${rotate}deg)`,
								}}
								src={eyes}
								alt="img"
								className="w-full h-full object-cover"
							/>
							<p className="absolute top-1/2 left-1/2 paragraph uppercase text-white font-NeueMontreal font-medium transform translate-x-[-50%] translate-y-[-50%]">
								{isPlaying ? "Pause" : "Play"}
							</p>
						</div>
					</div>
					<div
						className="w-[200px] sm:w-[150px] sm:h-[150px] xm:w-[100px] xm:h-[100px] bg-white rounded-full flex items-center justify-center cursor-pointer"
						onClick={togglePlay}>
						<div className="relative w-full h-full">
							<Image
								style={{
									transform: `rotate(${rotate}deg)`,
								}}
								src={eyes}
								alt="img"
								className="w-full h-full object-cover"
							/>
							<p className="absolute top-1/2 left-1/2 paragraph uppercase text-white font-NeueMontreal font-medium transform translate-x-[-50%] translate-y-[-50%]">
								{isPlaying ? "Pause" : "Play"}
							</p>
						</div>
					</div>
				</div>
				<div
					onClick={togglePlay}
					className={`w-full absolute inset-0 gap-[30px] flex items-center justify-center ${
						!isPlaying && "hidden"
					}`}>
					<button className="text-white text-[18px] bg-black px-[10px] leading-none font-normal py-[5px] font-NeueMontreal rounded-[20px]">
						pause
					</button>
				</div>
				</div>
			</div>
		</div>
	);
}
