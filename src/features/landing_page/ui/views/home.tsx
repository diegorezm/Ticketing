import { Button } from '#/components/ui/button'
import { ArrowRight, BarChart3, Shield, Zap } from 'lucide-react'

const FEATURES = [
  {
    icon: <Zap size={16} />,
    title: 'Fast by default',
    desc: 'Built on TanStack Start for instant navigations and zero layout shift. Performance is not an afterthought.',
  },
  {
    icon: <BarChart3 size={16} />,
    title: 'Clear visibility',
    desc: 'See ticket status, assignees, and history at a glance. Your team stays in sync without extra meetings.',
  },
  {
    icon: <Shield size={16} />,
    title: 'Reliable & typed',
    desc: 'TypeScript end-to-end. Fewer bugs, better refactoring, and confidence in every deploy.',
  },
]

const MOCKET_TICKETS = [
  {
    title: 'Login page returns 500 error',
    meta: '#1042 · 12m ago',
    status: 'Open',
    dot: 'bg-primary',
  },
  {
    title: 'Export to CSV not working',
    meta: '#1041 · 1h ago',
    status: 'Pending',
    dot: 'bg-muted-foreground',
  },
  {
    title: 'Update billing address form',
    meta: '#1039 · 3h ago',
    status: 'Closed',
    dot: 'bg-border',
  },
]

export function HomePage() {
  return (
    <>
      <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-sm mb-6">
            <Zap size={10} />
            Built for performance
          </span>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight mb-5">
            Support tickets,{' '}
            <em className="text-primary not-italic">handled fast.</em>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
            A lightweight ticketing system built with TanStack Start. Resolve
            issues quickly, keep your team aligned, and never lose track of what
            matters.
          </p>
          <div className="flex items-center gap-3">
            <Button className="gap-1.5">
              Open the app <ArrowRight size={14} />
            </Button>
            <Button variant="outline">View docs</Button>
          </div>
        </div>

        {/* Ticket preview */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Recent tickets
            </span>
            <span className="font-mono text-xs text-primary">3 open</span>
          </div>
          <div className="space-y-3">
            {MOCKET_TICKETS.map((ticket) => (
              <div
                key={ticket.meta}
                className="flex items-start gap-3 bg-background border border-border rounded-md px-4 py-3 hover:shadow-sm transition-shadow"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${ticket.dot}`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {ticket.title}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">
                    {ticket.meta}
                  </p>
                </div>
                <span
                  className="font-mono text-xs px-2 py-0.5 rounded-sm border shrink-0
                     border-border text-muted-foreground bg-muted"
                >
                  {ticket.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-border">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-10">
          Why Ticketing
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-sm transition-shadow"
            >
              <div className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-20">
        <div className="bg-primary rounded-lg px-14 py-12 flex items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary-foreground mb-1 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Set up your workspace in minutes. No credit card required.
            </p>
          </div>
          <Button variant="secondary" className="shrink-0 gap-1.5">
            Start for free <ArrowRight size={14} />
          </Button>
        </div>
      </section>
    </>
  )
}
