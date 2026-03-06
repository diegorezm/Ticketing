import { authClient } from '#/features/auth/lib/auth-client'
import { Avatar, AvatarFallback, AvatarImage } from '#/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'
import { Link } from '@tanstack/react-router'
import { ChevronsUpDown, LogOut, Settings, User } from 'lucide-react'
import { Button } from '#/components/ui/button'

export function UserButton() {
  const { data: session, isPending } = authClient.useSession()

  if (isPending) {
    return <div className="h-8 w-full bg-muted animate-pulse rounded-md" />
  }

  if (!session?.user) return null

  const { name, email, image } = session.user
  const initials = name
    ? name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full outline-none" asChild>
        <Button variant={'secondary'} className="p-6">
          <Avatar className="h-7 w-7 rounded-md shrink-0">
            <AvatarImage src={image ?? undefined} alt={name ?? ''} />
            <AvatarFallback className="rounded-md text-xs bg-primary text-primary-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col text-left overflow-hidden flex-1">
            <span className="text-sm font-medium leading-none truncate">
              {name}
            </span>
            <span className="text-xs text-muted-foreground truncate mt-0.5">
              {email}
            </span>
          </div>
          <ChevronsUpDown
            size={14}
            className="shrink-0 text-muted-foreground"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="top" align="start" className="w-56">
        <DropdownMenuLabel className="flex flex-col gap-0.5">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-muted-foreground font-normal">
            {email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="gap-2">
          <Link to="/">
            <User size={14} />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="gap-2">
          <Link to="/">
            <Settings size={14} />
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2 text-destructive focus:text-destructive"
          onClick={() => void authClient.signOut()}
        >
          <LogOut size={14} />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
