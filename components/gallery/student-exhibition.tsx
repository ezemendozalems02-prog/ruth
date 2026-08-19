import { Reveal } from '@/components/reveal'

const placeholders = Array.from({ length: 6 })

export function StudentExhibition() {
  return (
    <section className="border-t border-line bg-sand/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
            Alumnos
          </span>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light tracking-tight md:text-5xl">
            Exposición de alumnos
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Un espacio dedicado a las obras y muestras realizadas por quienes forman
            parte de los talleres. Muy pronto vas a poder ver acá las exposiciones de
            nuestros alumnos.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((_, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-sm border border-dashed border-burnt/30 bg-background/60">
                <span className="px-6 text-center text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  Próximamente
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
