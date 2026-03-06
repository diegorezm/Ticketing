import { DashboardPage } from '#/features/dashboard/ui/views/dashboard-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/dashboard')({
  component: DashboardPage,
})
