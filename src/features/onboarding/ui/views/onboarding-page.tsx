import { AppLogo } from '#/components/logo'
import { OrgTabs } from '../components/org-tabs'

export function OnboardingPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
      {/* Image side */}
      <div className="hidden lg:flex flex-col bg-muted items-center justify-center relative overflow-hidden">
        <img src="/undraw_cabin_7fei.svg" alt="Cabin" className="size-92" />
        <a
          href="https://undraw.co"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 text-xs  text-muted-foreground transition-colors font-mono"
        >
          Illustration by <span className="text-primary">unDraw</span>
        </a>
      </div>

      {/* Form side */}
      <div className="flex flex-col items-center justify-center px-8 py-16">
        <div className="w-full max-w-sm">
          <AppLogo />
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-foreground tracking-tight mb-1">
              You're not part of an organization yet
            </h1>
            <p className="text-sm text-muted-foreground">
              Create a new one or join an existing one with an invite code.
            </p>
          </div>

          <OrgTabs />
        </div>
      </div>
    </div>
  )
}
