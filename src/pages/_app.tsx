import { GlobalStyle } from "../styles/global";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
