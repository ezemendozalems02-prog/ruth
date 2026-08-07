import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { BrushLink } from '@/components/brush-button'
import { site } from '@/lib/data'

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
        <Reveal className="order-2 md:order-1">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
            Sobre Ruth
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.05] tracking-tight md:text-6xl">
            Pinto lo que las palabras no alcanzan a decir.
          </h2>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Hace más de quince años que dedico mi vida al color. Cada obra nace de
            un gesto honesto y de la búsqueda de una belleza cálida, imperfecta y
            profundamente humana.
          </p>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Trabajo entre el lienzo, el mural y el objeto, convencida de que el
            arte no debe quedarse en las galerías, sino habitar la vida cotidiana.
          </p>
          <p className="mt-6 max-w-md font-serif text-lg italic leading-snug text-foreground">
            «{site.quote}»
          </p>
          <div className="mt-10">
            <BrushLink href="/sobre-mi" variant="outline">
              Conocer mi historia
            </BrushLink>
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2" blur delay={0.1}>
          <div className="relative">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
              data-cursor="image"
            >
              <Image
                src="/images/ruth-portrait.png"
                alt="Retrato de Ruth Delgado en su estudio"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 items-center justify-center rounded-full bg-burnt text-background md:flex">
              <span className="text-center font-serif text-sm leading-tight">
                15+ años
                <br />
                pintando
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
