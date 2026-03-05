import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Label } from '#/components/ui/label'
import { Separator } from '#/components/ui/separator'
import { Chrome, Github } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { Link } from '@tanstack/react-router'

export function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex justify-center px-4 py-18">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Welcome back</CardTitle>
            <CardDescription>
              Sign in to your account to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Button variant="outline" className="w-full gap-2" type="button">
                <Github size={16} />
                Continue with GitHub
              </Button>
              <Button variant="outline" className="w-full gap-2" type="button">
                <Chrome size={16} />
                Continue with Google
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground font-mono">
                or
              </span>
              <Separator className="flex-1" />
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full">Sign in</Button>
            </div>

            <p className="text-sm text-muted-foreground text-center flex gap-2">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="hover:underline underline-offset-4"
              >
                Register
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
