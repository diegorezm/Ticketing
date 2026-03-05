import { Ticket } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border px-10 py-5 flex items-center justify-between">
      <span className="text-primary font-semibold text-sm flex items-center gap-2">
        <Ticket size={15} /> Ticketing
      </span>
      <p className="font-mono text-xs text-muted-foreground">
        Built with TanStack Start · TypeScript
      </p>
    </footer>
  )
}
