import Image from 'next/image'
import { InstagramIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/data'

const feed = [
  '/images/obra-1.png',
  '/images/objeto-taza.png',
  '/images/obra-3.png',
  '/images/taller-1.png',
  '/images/obra-6.png',
  '/images/objeto-maceta.png',
]

export function InstagramFeed() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
            Instagram
          </span>
          <h2 className="mt-5 font-serif text-4xl font-light tracking-tight md:text-6xl">
            Últimos trabajos
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:text-burnt"
          >
            <InstagramIcon className="h-4 w-4" />
            {site.instagramHandle}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
        {feed.map((src, i) => (
          <Reveal key={i} delay={(i % 6) * 0.05}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-sm"
              data-cursor="image"
              aria-label="Ver en Instagram"
            >
              <Image
                src={src || '/placeholder.svg'}
                alt="Publicación de Instagram"
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-burnt/0 opacity-0 transition-all duration-500 group-hover:bg-burnt/40 group-hover:opacity-100">
                <InstagramIcon className="h-6 w-6 text-background" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
