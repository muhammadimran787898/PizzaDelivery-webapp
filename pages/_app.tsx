import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";
import Script from "next/script";

import type { AppProps } from "next/app";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
