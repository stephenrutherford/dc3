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
            data-website-id="717d1ed1-a2d2-4c66-a73c-6cccfc68421b"
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
