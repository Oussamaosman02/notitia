import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="robots" content="all" />
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
        <meta name="robots" content="all" />
        <link rel="manifest" href="/assets/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/kimeiga/bahunya/dist/bahunya.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
