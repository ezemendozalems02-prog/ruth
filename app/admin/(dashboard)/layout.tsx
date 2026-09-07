import type { ReactNode } from 'react'
import Link from 'next/link'
import { logout } from '@/app/admin/actions'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 py-4 md:px-10">
          <Link href="/admin" className="font-serif text-lg tracking-tight sm:text-xl">
            Panel · Ruth Delgado
          </Link>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:gap-x-6">
            <Link href="/admin/nueva" className="py-1 text-muted-foreground hover:text-foreground">
              <span className="sm:hidden">+ Nueva</span>
              <span className="hidden sm:inline">+ Nueva obra</span>
            </Link>
            <Link href="/" className="py-1 text-muted-foreground hover:text-foreground" target="_blank">
              Ver sitio ↗
            </Link>
            <form action={logout}>
              <button type="submit" className="py-1 text-muted-foreground hover:text-burnt">
                Salir
              </button>
            </form>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-[1400px] px-5 py-8 md:px-10 md:py-10">{children}</div>
    </div>
  )
}
