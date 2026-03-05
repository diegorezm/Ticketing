import BetterAuthHeader from '#/features/auth/ui/components/header-user'
import { Ticket } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-primary font-semibold tracking-tight">
        <Ticket size={18} />
        <span>Ticketing</span>
      </div>
      <ul className="flex gap-8 list-none font-mono text-sm text-muted-foreground">
        <li>
          <a href="#" className="hover:text-primary transition-colors">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary transition-colors">
            Docs
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-primary transition-colors">
            Pricing
          </a>
        </li>
      </ul>
      <BetterAuthHeader />
    </nav>
  )
}
