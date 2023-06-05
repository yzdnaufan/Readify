import { SessionProvider } from "next-auth/react"
import { useRouter } from "next/router"
import React from "react"
import './globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}