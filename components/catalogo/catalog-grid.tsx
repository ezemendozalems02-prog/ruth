'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArtworkCard } from '@/components/artwork-card'
import { BrushButton } from '@/components/brush-button'
import type { Category } from '@/lib/data'
import type { Artwork } from '@/lib/artworks'

const PAGE_SIZE = 12

export function CatalogGrid({
  products,
  categories,
}: {
  products: Artwork[]
  categories: Category[]
}) {
  const [active, setActive] = useState<'Todas' | Category>('Todas')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    if (active === 'Todas') return products
    return products.filter((p) => p.category.includes(active))
  }, [active, products])

  const shown = filtered.slice(0, visible)

  const setActiveAndReset = (c: 'Todas' | Category) => {
    setActive(c)
    setVisible(PAGE_SIZE)
  }

  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
      <div className="mb-12 flex flex-wrap gap-2 border-b border-border pb-6">
        <button
          onClick={() => setActiveAndReset('Todas')}
          data-cursor="button"
          className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
            active === 'Todas' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Todas
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveAndReset(c)}
            data-cursor="button"
            className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
              active === c ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((product, i) => (
            <motion.div
              key={product.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: (i % PAGE_SIZE) * 0.04 }}
            >
              <ArtworkCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">
          No hay productos en esta categoría por ahora.
        </p>
      )}

      {visible < filtered.length && (
        <div className="mt-16 flex justify-center">
          <BrushButton variant="outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Ver más obras
          </BrushButton>
        </div>
      )}
    </div>
  )
}
