import { Outlet } from '@tanstack/react-router'
import { Navbar } from './navbar'
import { Footer } from './footer'

export function PublicLayout() {
  return (
    <main className="min-h-screen bg-background text-foreground font-serif">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}
