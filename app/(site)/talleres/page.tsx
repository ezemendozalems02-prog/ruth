import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageIntro } from '@/components/page-intro'
import { Reveal } from '@/components/reveal'
import { workshops, workshopGroupNote } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Talleres',
  description:
    'Talleres y clases de pintura con Ruth Delgado en Ramos Mejía. Grupos reducidos de hasta 4 personas para un aprendizaje personalizado.',
}

export default function TalleresPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Talleres"
        title="Un taller no se toma. Se vive."
        description={workshopGroupNote}
      />

      <div className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
          {workshops.map((w, i) => (
            <Reveal key={w.slug} delay={(i % 2) * 0.08}>
              <Link href={`/talleres/${w.slug}`} className="group block" data-cursor="image">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand">
                  <Image
                    src={w.cover || '/placeholder.svg'}
                    alt={w.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-copper">
                      {w.type}
                    </span>
                    <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {w.seatsLeft} cupos
                    </span>
                  </div>
                  <h2 className="mt-2 font-serif text-2xl tracking-tight transition-colors group-hover:text-burnt md:text-3xl">
                    {w.title}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {w.short}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {w.date} · {w.location}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}
