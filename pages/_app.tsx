import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig, SWRConfiguration } from "swr";
import fetcher from "../libs/axios";

function KnowpApp({ Component, pageProps }: AppProps) {
  const swrConfig: SWRConfiguration = {
    fetcher,
  };
  return (
    <SWRConfig value={swrConfig}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default KnowpApp;
