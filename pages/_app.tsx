import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig, SWRConfiguration } from "swr";
import axios from "axios";

function KnowpApp({ Component, pageProps }: AppProps) {
  const url = process.env.API_URL;

  const fetcher = axios.create({
    baseURL: url,
  });

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
