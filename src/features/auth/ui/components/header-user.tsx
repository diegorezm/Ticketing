import { authClient } from '#/lib/auth-client'
import { Button } from '#/components/ui/button'
import { Link } from '@tanstack/react-router'

export default function BetterAuthHeader() {
  const { data: session, isPending } = authClient.useSession()

  if (isPending) {
    return <div className="h-8 w-8 bg-muted animate-pulse rounded-sm" />
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        {session.user.image ? (
          <img src={session.user.image} alt="" className="h-8 w-8 rounded-sm" />
        ) : (
          <div className="h-8 w-8 bg-muted flex items-center justify-center rounded-sm">
            <span className="text-xs font-medium text-muted-foreground">
              {session.user.name.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={() => void authClient.signOut()}
        >
          Sign out
        </Button>
      </div>
    )
  }

  return (
    <div className="space-x-2">
      <Button variant="default" size="sm" asChild>
        <Link to="/login">Login</Link>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <Link to="/register">Register</Link>
      </Button>
    </div>
  )
}
