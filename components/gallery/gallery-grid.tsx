'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArtworkCard } from '@/components/artwork-card'
import type { Product } from '@/lib/data'

const filters = ['Todas', 'Abstracto', 'Contemporáneo', 'Cuadros', 'Obras originales', 'Decoración'] as const

export function GalleryGrid({ works }: { works: Product[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>('Todas')

  const filtered = useMemo(() => {
    if (active === 'Todas') return works
    return works.filter((w) => w.category.includes(active as Product['category'][number]))
  }, [active, works])

  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
      <div className="mb-12 flex flex-wrap gap-2 border-b border-line pb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            data-cursor="button"
            className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
              active === f
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((work, i) => (
            <motion.div
              key={work.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            >
              <ArtworkCard product={work} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">No hay obras en esta categoría por ahora.</p>
      )}
    </div>
  )
}
