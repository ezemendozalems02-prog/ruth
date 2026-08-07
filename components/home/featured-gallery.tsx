import { Reveal } from '@/components/reveal'
import { ArtworkCard } from '@/components/artwork-card'
import { BrushLink } from '@/components/brush-button'
import { featuredProducts } from '@/lib/data'

export function FeaturedGallery() {
  const works = featuredProducts.slice(0, 5)

  return (
    <section className="bg-sand/40 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
              Galería destacada
            </span>
            <h2 className="mt-5 max-w-xl text-balance font-serif text-4xl font-light leading-[1.02] tracking-tight md:text-6xl">
              Obras seleccionadas
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <BrushLink href="/galeria" variant="ghost">
              Ver galería completa →
            </BrushLink>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 3) * 0.08}
              className={i === 0 ? 'lg:row-span-2 lg:col-span-1' : ''}
            >
              <ArtworkCard product={p} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
