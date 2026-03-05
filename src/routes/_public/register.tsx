import { RegisterPage } from '#/features/auth/ui/views/register-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/register')({
  component: RegisterPage,
})
