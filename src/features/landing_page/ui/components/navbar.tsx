import { Button } from '#/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '#/components/ui/sheet'
import { Separator } from '#/components/ui/separator'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { AppLogo } from '#/components/logo'
import { NavbarUserHeader } from './navbar-user-header'

const links = [
  { label: 'Features', href: '#' },
  { label: 'Docs', href: '#' },
  { label: 'Pricing', href: '#' },
]

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background px-6 md:px-10 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <AppLogo short />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none font-mono text-sm text-muted-foreground">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop auth */}
      <div className="hidden md:block">
        <NavbarUserHeader />
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col pt-10 px-2 w-64">
            <ul className="flex flex-col gap-4 list-none font-mono text-sm text-muted-foreground">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    <Button variant={'outline'} className="w-full">
                      {link.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
            <Separator className="my-6" />
            <NavbarUserHeader mobile />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
