import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  return (
    <section className="bg-graphite py-24 text-background md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-copper">
            Testimonios
          </span>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-[1.02] tracking-tight md:text-6xl">
            Historias que el arte dejó escritas.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-28">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.05}>
              <figure
                className={`grid items-center gap-8 md:grid-cols-[1fr_1.5fr] md:gap-16 ${
                  i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="relative aspect-[5/6] max-w-xs overflow-hidden rounded-sm" data-cursor="image">
                  <Image
                    src={t.image || '/placeholder.svg'}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 80vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-balance font-serif text-2xl font-light leading-snug text-background md:text-4xl">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 text-sm">
                    <span className="h-px w-8 bg-copper" />
                    <span className="font-medium">{t.name}</span>
                    <span className="text-background/50">· {t.role}</span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
