import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ArtworkCard({
  product,
  className,
  priority,
}: {
  product: Product
  className?: string
  priority?: boolean
}) {
  return (
    <Link
      href={`/catalogo/${product.slug}`}
      className={cn('group block', className)}
      data-cursor="image"
    >
      <div className="relative overflow-hidden rounded-sm bg-sand">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-graphite/0 transition-colors duration-500 group-hover:bg-graphite/10" />
        </div>
        {!product.available && (
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-foreground">
            Vendida
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 pt-4">
        <div>
          <h3 className="font-serif text-xl leading-tight tracking-tight transition-colors group-hover:text-burnt">
            {product.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.technique}</p>
        </div>
        <span className="whitespace-nowrap pt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {product.dimensions}
        </span>
      </div>
    </Link>
  )
}
