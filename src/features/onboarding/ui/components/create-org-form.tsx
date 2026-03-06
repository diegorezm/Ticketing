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
import { useForm } from '@tanstack/react-form-start'
import z from 'zod'

const createOrgSchema = z.object({
  name: z.string().min(2).max(256),
})

export function CreateOrgForm() {
  const form = useForm({
    defaultValues: { name: '' },
    validators: { onSubmit: createOrgSchema },
    onSubmit: async ({ value }) => {
      console.log('create org', value)
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">New organization</CardTitle>
        <CardDescription>
          You'll be the admin and can invite others later.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              validators={{ onBlur: createOrgSchema.shape.name }}
            >
              {(field) => (
                <Field>
                  <FieldLabel htmlFor={field.name}>
                    Organization name
                  </FieldLabel>
                  <Input
                    id={field.name}
                    placeholder="Acme Corp"
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
                <Button type="submit" className="w-full" disabled={!canSubmit}>
                  Create organization
                </Button>
              )}
            </form.Subscribe>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
