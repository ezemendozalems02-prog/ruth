'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArtworkCard } from '@/components/artwork-card'
import { BrushButton } from '@/components/brush-button'
import type { Artwork } from '@/lib/artworks'

const filters = ['Todas', 'Abstracto', 'Contemporáneo', 'Cuadros', 'Obras originales', 'Decoración'] as const
const PAGE_SIZE = 12

export function GalleryGrid({ works }: { works: Artwork[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>('Todas')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    if (active === 'Todas') return works
    return works.filter((w) => w.category.includes(active as Artwork['category'][number]))
  }, [active, works])

  const shown = filtered.slice(0, visible)

  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
      <div className="mb-12 flex flex-wrap gap-2 border-b border-line pb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => {
              setActive(f)
              setVisible(PAGE_SIZE)
            }}
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
          {shown.map((work, i) => (
            <motion.div
              key={work.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: (i % PAGE_SIZE) * 0.04 }}
            >
              <ArtworkCard product={work} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-muted-foreground">No hay obras en esta categoría por ahora.</p>
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
