import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu'
import { Button } from '@/components/shadcn/button'
import { Languages } from 'lucide-react'

import { locales } from '@/localization'
import { cn } from '@/lib/utils'

export const LangSelect = ({ className }: { className?: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className={cn(className)}>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(locales).map(([key, name]) => (
          <DropdownMenuItem key={key}>{name}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
