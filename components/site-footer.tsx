import Link from 'next/link'
import { InstagramIcon, FacebookIcon } from '@/components/brand-icons'
import { site } from '@/lib/data'

const columns = [
  {
    title: 'Explorar',
    links: [
      { href: '/galeria', label: 'Galería' },
      { href: '/catalogo', label: 'Catálogo' },
      { href: '/talleres', label: 'Talleres' },
      { href: '/servicios', label: 'Servicios' },
    ],
  },
  {
    title: 'Estudio',
    links: [
      { href: '/sobre-mi', label: 'Sobre mí' },
      { href: '/personalizadas', label: 'Obras personalizadas' },
      { href: '/contacto', label: 'Contacto' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-graphite text-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div>
            <p className="font-serif text-4xl leading-tight text-background md:text-5xl">
              El arte que <span className="text-copper">transforma</span> espacios,
              emociones e historias.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background/20 transition-colors hover:border-copper hover:text-copper"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background/20 transition-colors hover:border-copper hover:text-copper"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-background/50">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-background/80 transition-colors hover:text-copper"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-background/15 pt-8 text-xs text-background/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.role}
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  )
}
