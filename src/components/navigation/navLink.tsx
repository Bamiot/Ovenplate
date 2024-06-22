'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationMenuLink } from '@/components/shadcn/navigation-menu'
import { cn } from '@/lib/utils'
import { getPathnameWithoutLocale, getLocale } from '@/lib/localPath'

type NavLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
}

export const NavLink = (props: NavLinkProps) => {
  const pathNameWithoutLocale = getPathnameWithoutLocale(usePathname())
  const locale = getLocale(usePathname())
  return (
    <Link href={`/${locale}${props.href}`} passHref>
      <NavigationMenuLink
        asChild={true}
        className={cn(
          '!text-lg',
          pathNameWithoutLocale === props.href && '!font-extrabold',
          props.className
        )}
      >
        <p>{props.children}</p>
      </NavigationMenuLink>
    </Link>
  )
}
