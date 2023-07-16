import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { UserAuthContextProvider } from "../src/context/UserAuthContext";
import ToasterContext from '@/src/context/ToasterContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion',
  description: 'Notion clone app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <UserAuthContextProvider>
        <body className={inter.className}>
          <ToasterContext />
          {children}
        </body>
      </UserAuthContextProvider>
    </html>
  )
}
