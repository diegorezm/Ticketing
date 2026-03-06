import { Button } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { Separator } from '#/components/ui/separator'
import { loginSchema } from '#/features/auth/schemas/auth-schemas'
import { useForm } from '@tanstack/react-form-start'
import { Link, useNavigate } from '@tanstack/react-router'
import { authClient } from '../../lib/auth-client'
import { WithSocialsSignup } from '../components/with-socials-signup'
import { toast } from 'sonner'

export function LoginPage() {
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: { email: '', password: '' },
    validators: {
      onSubmit: loginSchema,
    },

    onSubmit: async ({ value }) => {
      const { data, error } = await authClient.signIn.email({
        ...value,
      })

      if (error) {
        toast.error(error.message ?? 'Something went wrong!')
        return
      }

      toast.success(`Hello ${data.user.name}! Welcome back!`)
      navigate({
        to: '/dashboard',
      })
    },
  })

  return (
    <div className="bg-background flex justify-center px-4 py-18">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Welcome back</CardTitle>
            <CardDescription>
              Sign in to your account to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <WithSocialsSignup />
            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground font-mono">
                or
              </span>
              <Separator className="flex-1" />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
              }}
            >
              <FieldGroup>
                <form.Field name="email">
                  {(field) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        type="email"
                        placeholder="you@example.com"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                      />
                      {field.state.meta.errors.length > 0 && (
                        <FieldDescription className="text-destructive">
                          {field.state.meta.errors[0]?.message}
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                </form.Field>

                <form.Field name="password">
                  {(field) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        id={field.name}
                        type="password"
                        placeholder="••••••••"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                      />
                      {field.state.meta.errors.length > 0 && (
                        <FieldDescription className="text-destructive">
                          {field.state.meta.errors[0]?.message}
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                </form.Field>

                <form.Subscribe selector={(s) => s.canSubmit}>
                  {(canSubmit) => (
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={!canSubmit}
                    >
                      Sign in
                    </Button>
                  )}
                </form.Subscribe>
              </FieldGroup>
            </form>

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
