import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Leckerli+One"
            rel="stylesheet"
          />
          <script
            async
            defer
            data-website-id="c4c7658a-3d37-4622-a725-b10fd372850d"
            src="https://umami-five-sigma.vercel.app/umami.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
