import { authClient } from '#/features/auth/lib/auth-client'
import { UserButton } from '#/features/auth/ui/components/user-button'
import { Button } from '#/components/ui/button'
import { Link } from '@tanstack/react-router'

type Props = {
  mobile?: boolean
}

export function NavbarUserHeader({ mobile = false }: Props) {
  const { data: session, isPending } = authClient.useSession()

  if (isPending) {
    return <div className="h-8 w-8 bg-muted animate-pulse rounded-md" />
  }

  if (session?.user) {
    return <UserButton />
  }

  if (mobile) {
    return (
      <div className="flex flex-col gap-2 w-full">
        <Button asChild className="w-full">
          <Link to="/login">Login</Link>
        </Button>
        <Button variant="outline" asChild className="w-full">
          <Link to="/register">Register</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/login">Login</Link>
      </Button>
      <Button size="sm" asChild>
        <Link to="/register">Register</Link>
      </Button>
    </div>
  )
}
