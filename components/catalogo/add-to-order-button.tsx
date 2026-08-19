'use client'

import { Check, Plus } from 'lucide-react'
import { useCart } from '@/components/cart/cart-context'
import { BrushButton } from '@/components/brush-button'

export function AddToOrderButton({
  slug,
  title,
  image,
}: {
  slug: string
  title: string
  image: string
}) {
  const { has, toggle } = useCart()
  const inCart = has(slug)

  return (
    <BrushButton
      variant="outline"
      onClick={() => toggle({ slug, title, image })}
      aria-pressed={inCart}
    >
      {inCart ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      {inCart ? 'Agregado al pedido' : 'Agregar al pedido'}
    </BrushButton>
  )
}
