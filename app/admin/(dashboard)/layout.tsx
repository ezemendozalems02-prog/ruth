import type { ReactNode } from 'react'
import Link from 'next/link'
import { logout } from '@/app/admin/actions'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-10">
          <Link href="/admin" className="font-serif text-xl tracking-tight">
            Panel · Ruth Delgado
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/admin" className="text-muted-foreground hover:text-foreground">
              Obras
            </Link>
            <Link href="/admin/nueva" className="text-muted-foreground hover:text-foreground">
              + Nueva obra
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground" target="_blank">
              Ver sitio ↗
            </Link>
            <form action={logout}>
              <button type="submit" className="text-muted-foreground hover:text-burnt">
                Salir
              </button>
            </form>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-10">{children}</div>
    </div>
  )
}
