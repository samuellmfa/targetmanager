import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
      <script src="/path/to/script/here.js" />
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
