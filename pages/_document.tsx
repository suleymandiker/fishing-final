// NOTE: _document is only rendered during the SSR / public export.
// You can't implement any browser-specific features here.

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from "next/document";
import * as React from "react";
import { css, Global } from "@emotion/react";
import { resetcss, body } from "../styles";

const globalStyles = css`
  ${resetcss}
  ${body}
`;

class AppDocument extends Document<DocumentInitialProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#ffffff" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/ios-180.png"
          />
          <link rel="manifest" href="/manifest.json" />

          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

          <link rel="icon" type="image/png" href="/icons/icon.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <Global styles={globalStyles} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
