// import type { AppProps } from "next/app";
// import CriticalIllnessInsurance from "./criticalillnessinsurance";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleRouteChange = () => {
      // Delay longer to wait for layout/images etc.
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 100); // ← Increase delay here
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
return(
  <SessionProvider session={(pageProps as any).session}><Component {...pageProps}/></SessionProvider>
)
}

