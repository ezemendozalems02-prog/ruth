'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { BrushLink } from '@/components/brush-button'
import { RevealText } from '@/components/reveal'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-40%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.7])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
        data-cursor="image"
      >
        <Image
          src="/images/ruth-hero.png"
          alt="Ruth Delgado pintando en su estudio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <motion.div
          className="absolute inset-0 bg-graphite"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-graphite/10 to-graphite/30" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-20 md:px-10 md:pb-28"
        style={{ y: textY }}
      >
        <div className="max-w-5xl">
          <motion.span
            className="mb-6 inline-block text-[0.7rem] font-medium uppercase tracking-[0.45em] text-background/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Ruth Delgado · Artista Visual
          </motion.span>
          <h1 className="text-balance font-serif text-[2.6rem] font-light leading-[0.98] tracking-tight text-background sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <RevealText text="El arte transforma" delay={0.4} />
            <br />
            <span className="italic text-copper">
              <RevealText text="espacios, emociones" delay={0.6} />
            </span>
            <br />
            <RevealText text="e historias." delay={0.8} />
          </h1>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <BrushLink href="/galeria" variant="solid">
              Ver obras
            </BrushLink>
            <BrushLink
              href="/talleres"
              variant="outline"
              className="border-background/40 text-background"
            >
              Conocer talleres
            </BrushLink>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-background/60">
          Descubrir
        </span>
        <div className="relative h-12 w-px overflow-hidden bg-background/25">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-copper"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
