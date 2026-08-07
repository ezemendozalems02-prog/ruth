import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Ruth Delgado — Inicio"
      className={cn('group inline-flex items-baseline gap-2 leading-none', className)}
    >
      <span className="font-serif text-2xl font-medium tracking-tight text-foreground transition-colors">
        Ruth
        <span className="text-burnt">.</span>
      </span>
      <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.35em] text-muted-foreground sm:inline">
        Delgado
      </span>
    </Link>
  )
}
