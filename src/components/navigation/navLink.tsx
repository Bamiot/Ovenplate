'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationMenuLink } from '@/components/shadcn/navigation-menu'
import { cn } from '@/lib/utils'

type NavLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
}

export const NavLink = (props: NavLinkProps) => {
  const isActive = usePathname()?.includes(props.href)
  const active = isActive ? '!font-extrabold' : ''

  return (
    <Link href={props.href} passHref>
      <NavigationMenuLink
        asChild={true}
        className={cn('!text-lg', active, props.className)}
      >
        <p>{props.children}</p>
      </NavigationMenuLink>
    </Link>
  )
}
