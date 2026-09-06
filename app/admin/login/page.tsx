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
    <main className="flex min-h-screen items-center justify-center bg-sand/40 px-5">
      <form
        action={login}
        className="w-full max-w-sm rounded-sm border border-border bg-background p-8 shadow-sm"
      >
        <h1 className="font-serif text-2xl tracking-tight">Panel de administración</h1>
        <p className="mt-2 text-sm text-muted-foreground">Ingresá la contraseña para continuar.</p>

        {error && (
          <p className="mt-4 rounded-sm bg-burnt/10 px-3 py-2 text-sm text-burnt">
            Contraseña incorrecta. Probá de nuevo.
          </p>
        )}

        <label className="mt-6 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          required
          autoFocus
          className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2.5 text-foreground outline-none focus:border-burnt"
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
