import './globals.css';

import { Session } from "next-auth";
import type { AppProps } from "next/app";

import Navbar from '../components/Navbar';

import LogoBlack from "../assets/logo/icons8-pixel-heart-100 (black).png";
import LogoWhite from "../assets/logo/icons8-pixel-heart-100.png";

import Bottom from '../components/Bottom';
import { SocialList } from '../template_data/Social';

import { SessionProvider, useSession } from "next-auth/react";
import Head from 'next/head';
import { useEffect } from 'react';
import { AuthProvider } from '@descope/nextjs-sdk';

<Head>
  <link rel="shortcut icon" href="/images/favicon.ico" />
</Head>


const SessionManager = () => {

  const {data: session, status} = useSession();
  
  useEffect(() => {
      if(status === "loading") return;

      if(!session){
        console.log()
        localStorage.removeItem("DSR")

        return;
      }

      const sessionData = session as Session & {refreshToken: string};

      if(sessionData.refreshToken){
        localStorage.setItem("DSR", sessionData.refreshToken)
      }
  }, [session, status])

  return null;
}

export default function App({ Component, pageProps,}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider projectId={process.env.DESCOPE_PROJECT_ID || ''}>
        <>
          <SessionManager />
          <Navbar Logo={LogoBlack.src} />
          <div>
            <Component {...pageProps} />
          </div>
          <Bottom Logo={LogoWhite.src} SocialList={SocialList}  />
        </>
      </AuthProvider>
    </SessionProvider>
  )
}
