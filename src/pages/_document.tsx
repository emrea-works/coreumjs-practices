import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '@/comps/LayoutElements'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-screen">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
