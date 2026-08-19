import Image from 'next/image'
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
      className={cn('group inline-flex items-center leading-none', className)}
    >
      <span className="relative block h-12 w-12 shrink-0 md:h-14 md:w-14">
        <Image
          src="/images/logo.png"
          alt="Ruth Delgado Art — Taller de Arte"
          fill
          sizes="56px"
          priority
          className="object-contain"
        />
      </span>
    </Link>
  )
}
