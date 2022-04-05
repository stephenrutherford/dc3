import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://umami-five-sigma.vercel.app/blue.js"
        data-website-id="05729253-441e-433e-9439-d19170fac7f6"
        strategy="lazyOnload"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
