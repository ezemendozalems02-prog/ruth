'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type CartItem = {
  slug: string
  title: string
  image: string
}

type CartContextValue = {
  items: CartItem[]
  add: (item: CartItem) => void
  remove: (slug: string) => void
  toggle: (item: CartItem) => void
  has: (slug: string) => boolean
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'ruth-delgado-pedido'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {
      // localStorage no disponible: el pedido simplemente no persiste.
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // idem
    }
  }, [items, hydrated])

  const add = (item: CartItem) =>
    setItems((prev) => (prev.some((i) => i.slug === item.slug) ? prev : [...prev, item]))

  const remove = (slug: string) => setItems((prev) => prev.filter((i) => i.slug !== slug))

  const toggle = (item: CartItem) =>
    setItems((prev) =>
      prev.some((i) => i.slug === item.slug)
        ? prev.filter((i) => i.slug !== item.slug)
        : [...prev, item],
    )

  const has = (slug: string) => items.some((i) => i.slug === slug)
  const clear = () => setItems([])

  return (
    <CartContext.Provider value={{ items, add, remove, toggle, has, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}
