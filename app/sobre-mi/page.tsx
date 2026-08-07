import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { PageIntro } from '@/components/page-intro'
import { BrushLink } from '@/components/brush-button'
import { Testimonials } from '@/components/testimonials'
import { site, education, exhibitions } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Ruth Delgado, artista visual. Formada en el Conservatorio de Artes Mabel Blanco, con obra exhibida en el Palacio Barolo, la Casa de la Cultura de Ramos Mejía y más.',
}

const timeline = [
  { year: '2009', title: 'Los primeros gestos', text: 'Dejo el diseño gráfico para dedicarme por completo a la pintura.' },
  { year: '2014', title: 'Primera muestra individual', text: '«Territorios» reúne mi obra abstracta en una galería de Buenos Aires.' },
  { year: '2018', title: 'Del lienzo al muro', text: 'Comienzo a trabajar murales y arte a gran escala para espacios y empresas.' },
  { year: '2021', title: 'El estudio abierto', text: 'Abro mi estudio a talleres y clases para compartir el oficio.' },
  { year: 'Hoy', title: 'Arte que habita', text: 'Obra, objeto y enseñanza conviven en una misma práctica cotidiana.' },
]

const values = [
  { title: 'Gesto honesto', text: 'Cada obra nace de un movimiento sincero, sin artificio.' },
  { title: 'Belleza cálida', text: 'Una paleta de tierra, fuego y luz que abraza el espacio.' },
  { title: 'Arte que habita', text: 'Creo para que el arte viva la vida cotidiana, no solo la galería.' },
]

export default function SobreMiPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Sobre Ruth"
        title="Pinto lo que las palabras no alcanzan a decir."
        description="Más de quince años de oficio, color y búsqueda. Esta es mi historia."
      />

      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-24 md:grid-cols-2 md:gap-20 md:px-10 md:pb-32">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/ruth-portrait.png"
              alt="Retrato de Ruth Delgado en su estudio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="font-serif text-2xl font-light leading-relaxed md:text-3xl">
              Hace más de quince años que dedico mi vida al color.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Empecé pintando para mí, casi en secreto, buscando una manera de decir
                lo que no encontraba en las palabras. Con el tiempo entendí que ese gesto
                íntimo podía convertirse en un lenguaje compartido.
              </p>
              <p>
                Trabajo entre el lienzo, el mural y el objeto. Me interesa el arte que se
                integra a la vida: una obra que cambia la energía de una casa, un mural que
                transforma una empresa, una taza pintada a mano que acompaña las mañanas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <blockquote className="mt-10 border-l-2 border-burnt pl-6 font-serif text-2xl italic leading-snug text-foreground md:text-3xl">
              «{site.quote}»
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <BrushLink href="/galeria">Ver mi obra</BrushLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
              Trayectoria
            </span>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light tracking-tight md:text-5xl">
              Un recorrido hecho de capas
            </h2>
          </Reveal>
          <div className="mt-16 space-y-px">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <div className="group grid grid-cols-1 gap-2 border-t border-line py-8 md:grid-cols-[160px_1fr] md:gap-10">
                  <span className="font-serif text-2xl text-burnt md:text-3xl">{item.year}</span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <Reveal>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
                Formación
              </span>
              <h2 className="mt-5 max-w-md font-serif text-3xl font-light tracking-tight md:text-4xl">
                Una base construida con oficio
              </h2>
              <ul className="mt-8 space-y-6">
                {education.map((e) => (
                  <li key={e.title} className="border-t border-line pt-4">
                    <p className="font-serif text-xl">{e.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
                Exposiciones
              </span>
              <h2 className="mt-5 max-w-md font-serif text-3xl font-light tracking-tight md:text-4xl">
                Obra exhibida en
              </h2>
              <ul className="mt-8 space-y-4">
                {exhibitions.map((ex) => (
                  <li key={ex.name} className="flex items-baseline gap-3 border-t border-line pt-4">
                    <span className="mb-1 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    <span>
                      <span className="font-serif text-lg">{ex.name}</span>
                      {ex.place && (
                        <span className="ml-2 text-sm text-muted-foreground">— {ex.place}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="border-t border-burnt/40 pt-6">
                <h3 className="font-serif text-2xl">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Testimonials />
    </main>
  )
}
