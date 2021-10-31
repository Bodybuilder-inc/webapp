import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Header } from '../core/components/Header'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bodybuilder</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
