'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

const links = [
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/galeria', label: 'Galería' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/talleres', label: 'Talleres' },
  { href: '/personalizadas', label: 'Personalizadas' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/contacto', label: 'Contacto' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-border/60 bg-background/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'group relative text-[0.8rem] font-medium uppercase tracking-[0.15em] transition-colors',
                    active ? 'text-burnt' : 'text-foreground/70 hover:text-foreground',
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      'absolute -bottom-1.5 left-0 h-px bg-burnt transition-all duration-500',
                      active ? 'w-full' : 'w-0 group-hover:w-full',
                    )}
                  />
                </Link>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span
              className={cn(
                'h-px w-6 bg-foreground transition-all duration-300',
                open && 'translate-y-[6px] rotate-45',
              )}
            />
            <span
              className={cn(
                'h-px w-6 bg-foreground transition-all duration-300',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'h-px w-6 bg-foreground transition-all duration-300',
                open && '-translate-y-[6px] -rotate-45',
              )}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-sand lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-1 flex-col justify-center gap-2 px-6 pt-16">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.5 }}
                >
                  <Link
                    href={l.href}
                    className={cn(
                      'block border-b border-border/50 py-4 font-serif text-3xl tracking-tight',
                      pathname === l.href ? 'text-burnt' : 'text-foreground',
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
