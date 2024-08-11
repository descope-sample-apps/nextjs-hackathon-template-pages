import './globals.css'

import type { AppProps } from "next/app";
import { Session } from "next-auth";

import Navbar from '../components/Navbar'

import LogoBlack from "../assets/logo/icons8-pixel-heart-100 (black).png"
import LogoWhite from "../assets/logo/icons8-pixel-heart-100.png"

import Bottom from '../components/Bottom'
import { SocialList } from '../template_data/Social'

import { SessionProvider } from "next-auth/react"
import Head from 'next/head';


<Head>
  <link rel="shortcut icon" href="/images/favicon.ico" />
</Head>


export default function App({ Component, pageProps,}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar Logo={LogoBlack.src} />
      <div>
        <Component {...pageProps} />
      </div>
      <Bottom Logo={LogoWhite.src} SocialList={SocialList}  />
    </SessionProvider>
  )
}


