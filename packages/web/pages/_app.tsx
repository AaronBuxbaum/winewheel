import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>WineFinder</title>
      <meta name="description" content="Find your next favorite wine" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />
  </>

}
export default MyApp
