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
            data-website-id="f986bc4e-c739-44d2-a6db-3eace39a74d8"
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
