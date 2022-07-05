
import React from 'react'
import { Global } from '@emotion/react'
import Head from 'next/head'
import xw from 'xwind'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
       <Head>
        <title>Convert TypeScript To Markdown</title>
      </Head>
      <Global
        //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_BASE XWIND_GLOBAL`}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App