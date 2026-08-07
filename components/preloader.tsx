'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export function Preloader() {
  const [done, setDone] = useState(false)
  const [mounted, setMounted] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    setMounted(true)
    // Only show once per session
    if (typeof window !== 'undefined' && sessionStorage.getItem('rd_intro')) {
      setDone(true)
      return
    }
    document.body.style.overflow = 'hidden'
    const total = reduce ? 600 : 2900
    const t = setTimeout(() => {
      setDone(true)
      sessionStorage.setItem('rd_intro', '1')
      document.body.style.overflow = ''
    }, total)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [reduce])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-sand"
          exit={{
            clipPath: reduce ? undefined : 'inset(0 0 100% 0)',
            opacity: reduce ? 0 : 1,
          }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="relative flex flex-col items-center">
            {/* Brushstroke that draws behind the R */}
            <svg
              width="220"
              height="180"
              viewBox="0 0 220 180"
              fill="none"
              className="absolute -z-0"
              aria-hidden="true"
            >
              <motion.path
                d="M28 128 C 60 40, 150 40, 190 118 C 150 150, 70 158, 40 96"
                stroke="var(--burnt)"
                strokeWidth="26"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 0.9,
                  stroke: ['#a63a24', '#c26a34', '#c99a2e', '#a63a24'],
                }}
                transition={{
                  pathLength: { duration: 1.1, ease: [0.65, 0, 0.35, 1] },
                  opacity: { duration: 0.4 },
                  stroke: { duration: 2.4, times: [0, 0.4, 0.7, 1] },
                }}
                style={{ mixBlendMode: 'multiply' }}
              />
            </svg>

            {/* Letter R */}
            <motion.span
              className="relative z-10 font-serif text-[8rem] font-light leading-none text-graphite"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              R
            </motion.span>
          </div>

          <motion.div
            className="mt-6 flex flex-col items-center gap-1 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-serif text-2xl tracking-tight text-graphite">
              Ruth Delgado
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-muted-foreground">
              Artista Visual
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
