import { Outlet } from '@tanstack/react-router'
import { Navbar } from './navbar'
import { Footer } from './footer'

export function PublicLayout() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto bg-background text-foreground font-serif">
      <Navbar />
      <div className="px-10">
        <Outlet />
        <Footer />
      </div>
    </main>
  )
}
