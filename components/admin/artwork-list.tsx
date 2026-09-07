'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { toggleField, deleteArtwork } from '@/app/admin/actions'
import type { Artwork } from '@/lib/artworks'

type ToggleField = 'show_in_catalog' | 'show_in_gallery' | 'available' | 'featured'

function ToggleForm({
  slug,
  field,
  value,
  labelOn,
  labelOff,
}: {
  slug: string
  field: ToggleField
  value: boolean
  labelOn: string
  labelOff: string
}) {
  return (
    <form action={toggleField}>
      <input type="hidden" name="slug" value={slug} />
      <input type="hidden" name="field" value={field} />
      <input type="hidden" name="next" value={String(!value)} />
      <button
        type="submit"
        className={`min-h-9 rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] transition-colors ${
          value
            ? 'bg-burnt/10 text-burnt hover:bg-burnt/20'
            : 'bg-muted text-muted-foreground hover:bg-muted/70'
        }`}
      >
        {value ? labelOn : labelOff}
      </button>
    </form>
  )
}

function DeleteForm({ slug, title, className }: { slug: string; title: string; className?: string }) {
  return (
    <form
      action={deleteArtwork}
      onSubmit={(e) => {
        if (!confirm(`¿Eliminar "${title}"? Esta acción no se puede deshacer.`)) {
          e.preventDefault()
        }
      }}
    >
      <input type="hidden" name="slug" value={slug} />
      <button type="submit" className={className ?? 'text-xs text-muted-foreground hover:text-burnt'}>
        Eliminar
      </button>
    </form>
  )
}

const TOGGLES: { field: ToggleField; label: string; get: (a: Artwork) => boolean }[] = [
  { field: 'show_in_catalog', label: 'Catálogo', get: (a) => a.showInCatalog },
  { field: 'show_in_gallery', label: 'Galería', get: (a) => a.showInGallery },
  { field: 'available', label: 'Disponible', get: (a) => a.available },
  { field: 'featured', label: 'Destacada', get: (a) => !!a.featured },
]

function ArtworkCardRow({ a }: { a: Artwork }) {
  return (
    <div className="border-b border-border p-4 last:border-0 md:hidden">
      <div className="flex items-start gap-3">
        <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-sm bg-sand">
          <Image src={a.image} alt={a.title} fill sizes="64px" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium">{a.title}</p>
          <p className="truncate text-xs text-muted-foreground">{a.technique}</p>
          <p className="mt-1 text-sm">{a.price ? `USD ${a.price}` : 'Sin precio'}</p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2 text-right">
          <Link href={`/admin/${a.slug}`} className="text-xs text-burnt hover:underline">
            Editar
          </Link>
          <DeleteForm slug={a.slug} title={a.title} />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {TOGGLES.map((t) => (
          <div key={t.field} className="flex items-center gap-1.5">
            <span className="text-[0.65rem] uppercase tracking-[0.08em] text-muted-foreground">{t.label}</span>
            <ToggleForm slug={a.slug} field={t.field} value={t.get(a)} labelOn="Sí" labelOff="No" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function AdminArtworkList({ artworks }: { artworks: Artwork[] }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return artworks
    return artworks.filter((a) => a.title.toLowerCase().includes(q) || a.slug.includes(q))
  }, [artworks, query])

  return (
    <div>
      <input
        type="search"
        placeholder="Buscar obra por título..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mt-6 w-full max-w-sm rounded-sm border border-border bg-background px-4 py-2.5 text-base outline-none focus:border-burnt sm:text-sm"
      />

      {/* Mobile: tarjetas apiladas */}
      <div className="mt-6 rounded-sm border border-border bg-background md:hidden">
        {filtered.map((a) => (
          <ArtworkCardRow key={a.slug} a={a} />
        ))}
        {filtered.length === 0 && (
          <p className="px-4 py-10 text-center text-muted-foreground">No se encontraron obras.</p>
        )}
      </div>

      {/* Desktop / tablet: tabla */}
      <div className="mt-6 hidden overflow-x-auto rounded-sm border border-border bg-background md:block">
        <table className="w-full min-w-[900px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs uppercase tracking-[0.1em] text-muted-foreground">
              <th className="px-4 py-3 font-medium">Obra</th>
              <th className="px-4 py-3 font-medium">Precio</th>
              <th className="px-4 py-3 font-medium">Catálogo</th>
              <th className="px-4 py-3 font-medium">Galería</th>
              <th className="px-4 py-3 font-medium">Disponible</th>
              <th className="px-4 py-3 font-medium">Destacada</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.slug} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-12 shrink-0 overflow-hidden rounded-sm bg-sand">
                      <Image src={a.image} alt={a.title} fill sizes="48px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-medium">{a.title}</p>
                      <p className="truncate text-xs text-muted-foreground">{a.technique}</p>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3">{a.price ? `USD ${a.price}` : '—'}</td>
                <td className="px-4 py-3">
                  <ToggleForm slug={a.slug} field="show_in_catalog" value={a.showInCatalog} labelOn="Sí" labelOff="No" />
                </td>
                <td className="px-4 py-3">
                  <ToggleForm slug={a.slug} field="show_in_gallery" value={a.showInGallery} labelOn="Sí" labelOff="No" />
                </td>
                <td className="px-4 py-3">
                  <ToggleForm slug={a.slug} field="available" value={a.available} labelOn="Sí" labelOff="No" />
                </td>
                <td className="px-4 py-3">
                  <ToggleForm slug={a.slug} field="featured" value={!!a.featured} labelOn="Sí" labelOff="No" />
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-4">
                    <Link href={`/admin/${a.slug}`} className="text-xs text-burnt hover:underline">
                      Editar
                    </Link>
                    <DeleteForm slug={a.slug} title={a.title} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <p className="px-4 py-10 text-center text-muted-foreground">No se encontraron obras.</p>
        )}
      </div>
    </div>
  )
}
