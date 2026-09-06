import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { BrushAnchor } from '@/components/brush-button'
import { workshops, site, workshopGroupNote } from '@/lib/data'

export function generateStaticParams() {
  return workshops.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const workshop = workshops.find((w) => w.slug === slug)
  if (!workshop) return {}
  return {
    title: workshop.title,
    description: workshop.short,
  }
}

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const workshop = workshops.find((w) => w.slug === slug)
  if (!workshop) notFound()

  const waMessage = encodeURIComponent(`Hola Ruth! Quiero reservar mi lugar en «${workshop.title}».`)
  const waHref = `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${waMessage}`

  const facts = [
    { label: 'Duración', value: workshop.duration },
    { label: 'Nivel', value: workshop.level },
    { label: 'Materiales', value: workshop.materials },
    { label: 'Edad', value: workshop.age },
    { label: 'Fecha', value: workshop.date },
    { label: 'Lugar', value: workshop.location },
  ]

  return (
    <main>
      <div className="relative h-[52vh] min-h-[380px] w-full overflow-hidden md:h-[62vh]">
        <Image
          src={workshop.cover || '/placeholder.svg'}
          alt={workshop.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-graphite/10 to-graphite/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-5 pb-10 md:px-10 md:pb-16">
          <Reveal>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-copper">
              {workshop.type}
            </span>
            <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-light leading-[1.02] tracking-tight text-background md:text-6xl">
              {workshop.title}
            </h1>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:gap-20 md:px-10 md:py-32">
        <div>
          <Reveal>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {workshop.description}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-8 rounded-sm border border-burnt/30 bg-sand/40 px-6 py-5">
              <p className="text-sm leading-relaxed text-foreground">
                {workshop.groupNote ?? workshopGroupNote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-16 font-serif text-2xl tracking-tight md:text-3xl">Programa</h2>
            <div className="mt-8 space-y-px">
              {workshop.program.map((p, i) => (
                <div key={p.step} className="grid grid-cols-1 gap-1 border-t border-border py-6 md:grid-cols-[200px_1fr] md:gap-8">
                  <span className="text-sm font-medium uppercase tracking-[0.1em] text-burnt">
                    {p.step}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <h2 className="mt-16 font-serif text-2xl tracking-tight md:text-3xl">Vas a aprender a</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {workshop.learn.map((l) => (
                <li key={l} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  {l}
                </li>
              ))}
            </ul>
          </Reveal>

          {workshop.faq.length > 0 && (
            <Reveal delay={0.18}>
              <h2 className="mt-16 font-serif text-2xl tracking-tight md:text-3xl">Preguntas frecuentes</h2>
              <div className="mt-8 space-y-px">
                {workshop.faq.map((f) => (
                  <div key={f.q} className="border-t border-border py-6">
                    <p className="font-medium">{f.q}</p>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {workshop.reviews.length > 0 && (
            <Reveal delay={0.22}>
              <h2 className="mt-16 font-serif text-2xl tracking-tight md:text-3xl">Lo que dicen</h2>
              <div className="mt-8 space-y-8">
                {workshop.reviews.map((r) => (
                  <blockquote key={r.name} className="border-l-2 border-burnt pl-6">
                    <p className="font-serif text-xl italic leading-snug">“{r.text}”</p>
                    <footer className="mt-3 text-sm text-muted-foreground">{r.name}</footer>
                  </blockquote>
                ))}
              </div>
            </Reveal>
          )}
        </div>

        <div>
          <Reveal delay={0.1}>
            <div className="sticky top-28 rounded-sm border border-border p-8">
              <p className="font-serif text-4xl tracking-tight">USD {workshop.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {workshop.seatsLeft} de {workshop.seats} cupos disponibles
              </p>
              <dl className="mt-8 space-y-4 border-t border-border pt-6 text-sm">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">{f.label}</dt>
                    <dd className="text-right">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <BrushAnchor href={waHref} target="_blank" rel="noreferrer" variant="solid" className="w-full">
                  Reservar mi lugar
                </BrushAnchor>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  )
}
