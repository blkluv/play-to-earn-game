import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = "matic";

  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
