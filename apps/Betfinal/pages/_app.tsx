import type { AppProps, AppInitialProps } from "next/app";
import "../styles/global.css";
import Layout from "./Layout";
function MyApp({ Component, pageProps }: AppProps & AppInitialProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
