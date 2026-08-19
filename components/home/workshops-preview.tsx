import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { BrushLink } from '@/components/brush-button'
import { workshops } from '@/lib/data'

export function WorkshopsPreview() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
            Talleres
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.02] tracking-tight md:text-6xl">
            Un taller no se toma. <span className="italic text-copper">Se vive.</span>
          </h2>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Espacios íntimos y cuidados para que descubras tu propio lenguaje.
            Desde talleres de acrílico y óleo hasta propuestas en técnica
            mixta.
          </p>
          <div className="mt-10">
            <BrushLink href="/talleres" variant="outline">
              Ver todos los talleres
            </BrushLink>
          </div>
        </Reveal>

        <div className="flex flex-col divide-y divide-border">
          {workshops.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.08}>
              <Link
                href={`/talleres/${w.slug}`}
                className="group flex items-center gap-5 py-5"
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-sm md:h-24 md:w-32">
                  <Image
                    src={w.cover || '/placeholder.svg'}
                    alt={w.title}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-copper">
                    {w.type}
                  </span>
                  <h3 className="mt-1 truncate font-serif text-2xl tracking-tight transition-colors group-hover:text-burnt">
                    {w.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{w.date}</p>
                </div>
                <span className="hidden shrink-0 text-sm text-muted-foreground sm:block">
                  {w.seatsLeft} cupos
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
