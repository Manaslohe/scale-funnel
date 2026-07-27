// components/PageTransition/PageTransition.tsx
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { mobilelogowhite } from "@/public";

const PAGE_LABELS: Record<string, string> = {
  "/": "Home",
  "/services": "Services",
  "/case": "Our Work",
  "/contact": "Contact",
  "/insights": "Insights",
  "/ochi-team": "Our Team",
  "/presentation": "Presentation",
};

function getLabel(pathname: string) {
  const base = "/" + pathname.split("?")[0].split("/").filter(Boolean)[0];
  return PAGE_LABELS[base] || PAGE_LABELS[pathname] || "Scale Funnel";
}

// ─── Tunable timing ─────────────────────────────────────────────
const COVER_DURATION = 0.9;   // how long the panel takes to fully cover the screen
const HOLD_AFTER_LOAD = 0.6;  // extra hold once the new page has mounted underneath
const EXIT_DURATION = 0.9;    // how long the panel takes to leave
const EASE = [0.83, 0, 0.17, 1] as const; // smooth both directions, no snap

const panelVariants = {
  initial: { y: "100%" },
  enter: { y: "0%", transition: { duration: COVER_DURATION, ease: EASE } },
  exit: { y: "-100%", transition: { duration: EXIT_DURATION, ease: EASE } },
};

const contentVariants = {
  initial: { y: 40, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE, delay: COVER_DURATION * 0.45 },
  },
  exit: { y: -20, opacity: 0, transition: { duration: 0.25, ease: EASE } },
};

export default function PageTransition() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState("");

  const pendingUrl = useRef<string | null>(null);
  const isTransitioning = useRef(false); // true while we own navigation

  useEffect(() => {
    const handleRouteChangeStart = (url: string, { shallow }: { shallow: boolean }) => {
      if (shallow || url === router.asPath) return;

      // Already mid-transition => this IS our own replay push, let it through.
      if (isTransitioning.current) return;

      isTransitioning.current = true;
      pendingUrl.current = url;
      setLabel(getLabel(url));
      setIsVisible(true);

      router.events.emit("routeChangeError");
      // Documented Next.js pattern for cancelling a route change.
      // Safe to ignore in the console — navigation resumes below once the
      // cover animation has actually finished painting.
      // eslint-disable-next-line no-throw-literal
      throw "Route change aborted — animated transition in progress.";
    };

    const handleRouteChangeComplete = () => {
      if (!isTransitioning.current) return;
      // New page is mounted behind the panel. Hold briefly, then reveal.
      window.setTimeout(() => {
        setIsVisible(false);
        pendingUrl.current = null;
        isTransitioning.current = false;
      }, HOLD_AFTER_LOAD * 1000);
    };

    const handleRouteChangeError = () => { }; // swallow, we emit it ourselves

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);

  // Only fire the real navigation once the panel has FULLY covered the screen.
  const handlePanelAnimationComplete = useCallback(
    (variant: string) => {
      if (variant === "enter" && pendingUrl.current) {
        router.push(pendingUrl.current);
      }
    },
    [router]
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="page-transition-panel"
          aria-hidden="true"
          variants={panelVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          onAnimationComplete={handlePanelAnimationComplete}
          className="fixed inset-0 z-[99999] overflow-hidden bg-[#212121] will-change-transform"
        >
          <div className="flex h-full w-full items-center overflow-hidden px-[50px]">
            <div className="overflow-hidden">
              <motion.p
                variants={contentVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                className="m-0 p-0 text-[clamp(3.25rem,9vw,6.75rem)] font-FoundersGrotesk font-semibold uppercase leading-[0.88] tracking-[-0.03em] text-white"
              >
                {label}
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={contentVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="absolute bottom-9 right-[50px]"
          >
            <Image
              src={mobilelogowhite}
              alt="Scale Funnel"
              width={60}
              height={18}
              className="block object-contain h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}