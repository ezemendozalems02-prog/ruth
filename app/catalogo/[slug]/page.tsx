import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { BrushAnchor } from '@/components/brush-button'
import { ArtworkCard } from '@/components/artwork-card'
import { products, site } from '@/lib/data'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: product.title,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const related = products
    .filter((p) => p.slug !== product.slug && p.category.some((c) => product.category.includes(c)))
    .slice(0, 3)

  const waMessage = encodeURIComponent(`Hola Ruth! Te escribo por «${product.title}» del catálogo.`)
  const waHref = `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${waMessage}`

  const specs = [
    { label: 'Técnica', value: product.technique },
    { label: 'Dimensiones', value: product.dimensions },
    { label: 'Materiales', value: product.materials },
    { label: 'Tiempo de producción', value: product.productionTime },
    { label: 'Año', value: product.year },
    {
      label: 'Disponibilidad',
      value: product.available
        ? product.stock > 1
          ? `Disponible · ${product.stock} unidades`
          : 'Disponible · pieza única'
        : 'Vendida',
    },
  ]

  return (
    <main>
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-24 pt-32 md:grid-cols-2 md:gap-16 md:px-10 md:pb-32 md:pt-44">
        <Reveal>
          <div className="grid gap-4">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sand"
              data-cursor="image"
            >
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {!product.available && (
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-foreground">
                  Vendida
                </span>
              )}
            </div>
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((src) => (
                  <div key={src} className="relative aspect-square overflow-hidden rounded-sm bg-sand">
                    <Image
                      src={src || '/placeholder.svg'}
                      alt={product.title}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
              {product.category[0]}
            </span>
            <h1 className="mt-4 text-balance font-serif text-4xl font-light leading-[1.02] tracking-tight md:text-5xl">
              {product.title}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-8 text-sm">
              {specs.map((s) => (
                <div key={s.label}>
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-border pt-8">
              {product.price && (
                <span className="font-serif text-3xl tracking-tight">USD {product.price}</span>
              )}
              <BrushAnchor href={waHref} target="_blank" rel="noreferrer" variant="solid">
                Consultar por WhatsApp
              </BrushAnchor>
            </div>
          </Reveal>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-border bg-sand/40">
          <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
            <Reveal>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
                También te puede interesar
              </span>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-3">
              {related.map((p) => (
                <ArtworkCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
