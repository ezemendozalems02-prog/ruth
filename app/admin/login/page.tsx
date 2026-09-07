import type { Metadata } from 'next'
import { login } from '@/app/admin/actions'

export const metadata: Metadata = {
  title: 'Admin — Ingresar',
  robots: { index: false, follow: false },
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <main className="flex min-h-screen items-center justify-center bg-sand/40 px-5 py-10">
      <form
        action={login}
        className="w-full max-w-sm rounded-sm border border-border bg-background p-6 shadow-sm sm:p-8"
      >
        <h1 className="font-serif text-2xl tracking-tight">Panel de administración</h1>
        <p className="mt-2 text-sm text-muted-foreground">Ingresá tu usuario y contraseña para continuar.</p>

        {error && (
          <p className="mt-4 rounded-sm bg-burnt/10 px-3 py-2 text-sm text-burnt">
            Usuario o contraseña incorrectos. Probá de nuevo.
          </p>
        )}

        <label className="mt-6 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Usuario
        </label>
        <input
          type="text"
          name="username"
          required
          autoFocus
          autoCapitalize="none"
          autoCorrect="off"
          className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2.5 text-base text-foreground outline-none focus:border-burnt"
        />

        <label className="mt-5 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          required
          className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2.5 text-base text-foreground outline-none focus:border-burnt"
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-burnt px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] text-background transition-opacity hover:opacity-90"
        >
          Ingresar
        </button>
      </form>
    </main>
  )
}
