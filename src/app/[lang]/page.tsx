import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/themeToggle'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <Button>Click me</Button>
      <ThemeToggle />
    </main>
  )
}
