'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/themeToggle'
import { cn } from '@/lib/utils'
import { useDictionary } from '@/localization'

export default function Home() {
  const { hello } = useDictionary()

  return (
    <main className={cn('flex flex-col items-center childs:m-2 mt-16')}>
      <Button>{hello}</Button>
      <ThemeToggle />
    </main>
  )
}
