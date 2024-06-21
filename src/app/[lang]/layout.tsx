import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { locales, getDictionary } from '@/localization'
import { UIProviders } from '@/components/providers/ui.provider'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return Object.keys(locales).map((lang) => ({ lang }))
}

type RootLayoutProps = {
  children: ReactNode
  params: { lang: string }
}

export async function generateMetadata({ params }: RootLayoutProps) {
  const dictionary = await getDictionary(params.lang)

  return {
    title: 'Create Next App',
    description: dictionary.metaDescription,
  } as Metadata
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={cn('p-0 m-0')}>
        <UIProviders>
          <main className={inter.className}>{children}</main>
        </UIProviders>
      </body>
    </html>
  )
}
