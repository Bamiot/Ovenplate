'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/shadcn/navigation-menu'
import { cn } from '@/lib/utils'
import { useDictionary } from '@/localization'
import { NavLink } from './navLink'
import { ThemeToggle } from '../ui/themeToggle'
import { LangSelect } from '../ui/langSelect'

export function Navbar() {
  const { home } = useDictionary()

  return (
    <nav
      className={cn(
        'bg-primary-foreground',
        'flex justify-between',
        'border rounded m-4 p-3'
      )}
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink href='/'>{home}</NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink href='/test'>test</NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className={cn('childs:mx-1')}>
        <ThemeToggle />
        <LangSelect />
      </div>
    </nav>
  )
}
