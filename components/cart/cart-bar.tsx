'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/cart/cart-context'
import { BrushAnchor, BrushButton } from '@/components/brush-button'
import { site } from '@/lib/data'

export function CartBar() {
  const { items, remove, clear } = useCart()
  const [open, setOpen] = useState(false)

  if (items.length === 0) return null

  const waMessage = encodeURIComponent(
    `Hola Ruth! Quiero consultar por estas piezas del catálogo:\n${items
      .map((i) => `• ${i.title}`)
      .join('\n')}\n\n¿Podemos coordinar?`,
  )
  const waHref = `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${waMessage}`

  return (
    <>
      <div className="fixed inset-x-0 bottom-5 z-40 flex justify-center px-5 md:justify-end md:px-10">
        <button
          type="button"
          onClick={() => setOpen(true)}
          data-cursor="button"
          className="flex items-center gap-3 rounded-full bg-graphite px-6 py-3.5 text-background shadow-lg transition-transform hover:-translate-y-0.5"
        >
          <ShoppingBag className="h-4 w-4 text-copper" />
          <span className="text-[0.78rem] font-medium uppercase tracking-[0.15em]">
            Ver pedido
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-copper text-xs font-medium text-graphite">
            {items.length}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-graphite/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed inset-x-0 bottom-0 z-50 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-background px-6 pb-8 pt-6 shadow-2xl md:inset-x-auto md:bottom-5 md:right-10 md:w-[420px] md:rounded-sm"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h2 className="font-serif text-2xl tracking-tight">Tu pedido</h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar"
                  data-cursor="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition-colors hover:text-burnt"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="mt-4 space-y-4">
                {items.map((item) => (
                  <li key={item.slug} className="flex items-center gap-4">
                    <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-sm bg-sand">
                      <Image
                        src={item.image || '/placeholder.svg'}
                        alt={item.title}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <p className="flex-1 font-serif text-lg leading-snug">{item.title}</p>
                    <button
                      type="button"
                      onClick={() => remove(item.slug)}
                      aria-label={`Quitar ${item.title} del pedido`}
                      data-cursor="button"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-foreground/50 transition-colors hover:text-burnt"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <BrushAnchor href={waHref} target="_blank" rel="noreferrer" variant="solid" className="w-full">
                  Finalizar pedido por WhatsApp
                </BrushAnchor>
                <BrushButton variant="ghost" onClick={clear} className="w-full">
                  Vaciar pedido
                </BrushButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
