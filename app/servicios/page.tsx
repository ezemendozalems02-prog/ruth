import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { Reveal } from '@/components/reveal'
import { BrushLink } from '@/components/brush-button'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Murales, cuadros, decoración, objetos pintados, regalos, arte corporativo y eventos con Ruth Delgado, artista visual.',
}

export default function ServiciosPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Servicios"
        title="Arte pensado para cada espacio"
        description="Desde un cuadro para tu living hasta un mural para tu empresa. Así es como el arte puede habitar tu día a día."
      />

      <div className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <div className="border-t border-burnt/40 pt-6">
                <span className="font-serif text-2xl text-burnt">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="mt-3 font-serif text-3xl tracking-tight">{s.title}</h2>
                <p className="mt-3 max-w-xs text-pretty leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-start gap-6 rounded-sm border border-border bg-sand/40 px-8 py-10 md:mt-28 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
                ¿Tenés un proyecto en mente?
              </h2>
              <p className="mt-2 max-w-md text-muted-foreground">
                Contame tu idea y armamos juntas la propuesta a medida de tu espacio o evento.
              </p>
            </div>
            <BrushLink href="/contacto" variant="solid">
              Hablemos
            </BrushLink>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
