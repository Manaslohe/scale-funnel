import "@/styles/globals.css";
import PageTransition from "@/components/PageTransition/PageTransition";

export default function App({ Component, pageProps, router }: { Component: any; pageProps: any; router: any }) {
  return (
    <>
      <PageTransition />
      <Component key={router.route} {...pageProps} />
    </>
  );
}