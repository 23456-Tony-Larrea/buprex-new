import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BUPREX® | Rápido y efectivo alivio del dolor, fiebre e inflamación',
  description:
    'BUPREX® con ibuprofeno alivia el dolor de cabeza, muscular, dental, menstrual, la fiebre y la inflamación. 32 años tratando el dolor. Laboratorios LIFE.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0a1b6b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
