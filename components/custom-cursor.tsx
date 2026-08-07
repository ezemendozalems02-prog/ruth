'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState<'default' | 'link' | 'image'>('default')
  const [hidden, setHidden] = useState(true)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springConfig = { damping: 28, stiffness: 400, mass: 0.4 }
  const cx = useSpring(x, springConfig)
  const cy = useSpring(y, springConfig)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canHover) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-none-desktop')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHidden(false)

      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setVariant('link')
      } else if (target.closest('[data-cursor="image"]')) {
        setVariant('image')
      } else {
        setVariant('default')
      }
    }

    const leave = () => setHidden(true)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('cursor-none-desktop')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full mix-blend-multiply"
        style={{
          x: cx,
          y: cy,
          translateX: '-50%',
          translateY: '-50%',
          border: '1px solid var(--burnt)',
        }}
        animate={{
          width: variant === 'image' ? 88 : variant === 'link' ? 54 : 34,
          height: variant === 'image' ? 88 : variant === 'link' ? 54 : 34,
          opacity: hidden ? 0 : variant === 'default' ? 0.5 : 0.9,
          backgroundColor:
            variant === 'link' ? 'rgba(166,58,36,0.08)' : 'rgba(0,0,0,0)',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
      >
        {variant === 'image' && (
          <span className="flex h-full w-full items-center justify-center text-[9px] font-medium uppercase tracking-[0.2em] text-burnt">
            Ver
          </span>
        )}
      </motion.div>

      {/* Dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-burnt"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: hidden || variant !== 'default' ? 0 : 1 }}
      />
    </>
  )
}
