import "../styles/globals.css";
import type { AppProps } from "next/app";
import ComponentA from "components/ComponentA";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />;
      <ComponentA />
    </div>
  );
}

export default MyApp;
