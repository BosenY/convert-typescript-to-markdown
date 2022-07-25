/* eslint-disable @next/next/no-sync-scripts */
/*
 * @Author: Boseny yxy43445@gmail.com
 * @Date: 2022-07-05 20:03:40
 * @LastEditors: Boseny yxy43445@gmail.com
 * @LastEditTime: 2022-07-25 19:45:52
 * @FilePath: /convert-typeScript-to-markdown/pages/_app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

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
        <script src="https://github.com/mde/ejs/releases/download/v3.0.2/ejs.min.js"></script>
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