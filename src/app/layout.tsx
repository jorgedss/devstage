import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'devstage',
}

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})
const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-[url(/background.png)] bg-gray-900 bg-no-repeat bg-top md:bg-right-top text-gray-100 antialiased">
        <main className="mx-auto px-5 py-8 md:py-0 max-w-[1240px]">
          {children}
        </main>
      </body>
    </html>
  )
}
