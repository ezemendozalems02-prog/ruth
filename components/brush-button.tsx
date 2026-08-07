import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'solid' | 'outline' | 'ghost'

const base =
  'group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors duration-500 min-h-11'

const variants: Record<Variant, string> = {
  solid: 'bg-burnt text-background hover:text-background',
  outline: 'border border-foreground/25 text-foreground hover:text-background',
  ghost: 'text-foreground hover:text-burnt',
}

function Inner({ children, variant }: { children: ReactNode; variant: Variant }) {
  return (
    <>
      {variant !== 'ghost' && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100',
            variant === 'solid' ? 'bg-graphite' : 'bg-burnt',
          )}
          style={{ borderRadius: '40% 45% 0 0 / 12px' }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  )
}

export function BrushLink({
  href,
  children,
  variant = 'solid',
  className,
  ...props
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
} & Omit<ComponentProps<typeof Link>, 'href'>) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      <Inner variant={variant}>{children}</Inner>
    </Link>
  )
}

export function BrushButton({
  children,
  variant = 'solid',
  className,
  ...props
}: {
  children: ReactNode
  variant?: Variant
} & ComponentProps<'button'>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      <Inner variant={variant}>{children}</Inner>
    </button>
  )
}

export function BrushAnchor({
  href,
  children,
  variant = 'solid',
  className,
  ...props
}: {
  href: string
  children: ReactNode
  variant?: Variant
} & ComponentProps<'a'>) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...props}>
      <Inner variant={variant}>{children}</Inner>
    </a>
  )
}
