'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { BrushButton } from '@/components/brush-button'
import { Reveal } from '@/components/reveal'

const PAGE_SIZE = 12

export function CatalogWorks({ images }: { images: string[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE)
  const shown = images.slice(0, visible)

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
            Colección completa
          </span>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light tracking-tight md:text-5xl">
            El taller a lo largo del tiempo
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Un recorrido por obras realizadas a lo largo de los años en distintas técnicas y formatos.
          </p>
        </Reveal>

        <motion.div layout className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          <AnimatePresence initial={false}>
            {shown.map((src, i) => (
              <motion.div
                key={src}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % PAGE_SIZE) * 0.03 }}
                className="group relative aspect-square overflow-hidden rounded-sm bg-sand"
                data-cursor="image"
              >
                <Image
                  src={src}
                  alt="Obra del taller de Ruth Delgado"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible < images.length && (
          <div className="mt-12 flex justify-center">
            <BrushButton variant="outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              Ver más obras
            </BrushButton>
          </div>
        )}
      </div>
    </section>
  )
}
