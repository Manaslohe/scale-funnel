import "@/styles/globals.css";
import { Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { markClientNavigation } from "@/lib/introLoader";

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	useEffect(() => {
		const handleRouteChange = () => {
			markClientNavigation();
		};

		router.events.on("routeChangeStart", handleRouteChange);
		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Navbar />
			<AnimatePresence mode="wait">
				<Component
					key={router.route}
					{...pageProps}
				/>
			</AnimatePresence>
		</>
	);
}
