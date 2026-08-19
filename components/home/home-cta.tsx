import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { BrushLink } from '@/components/brush-button'

export function HomeCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-36">
        <div className="relative overflow-hidden rounded-sm">
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] md:aspect-[16/7]">
            <Image
              src="/images/objeto-mural.png"
              alt="Mural pintado por Ruth Delgado"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-graphite/45" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <Reveal>
              <h2 className="max-w-2xl text-balance font-serif text-3xl font-light leading-tight tracking-tight text-background sm:text-5xl md:text-6xl">
                ¿Imaginás una obra hecha para tu espacio?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-background/80">
                Creemos juntos una pieza única. Desde un cuadro hasta una obra
                en técnica mixta.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9">
                <BrushLink href="/personalizadas" variant="solid">
                  Solicitar obra personalizada
                </BrushLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
