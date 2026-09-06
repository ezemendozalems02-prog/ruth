import type { ReactNode } from 'react'
import Image from 'next/image'
import { categories } from '@/lib/data'
import type { Artwork } from '@/lib/artworks'

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}

const inputClass =
  'w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-burnt'

export function ArtworkForm({
  action,
  artwork,
  submitLabel,
}: {
  action: (formData: FormData) => void
  artwork?: Artwork
  submitLabel: string
}) {
  return (
    <form action={action} className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
      {artwork && <input type="hidden" name="slug" value={artwork.slug} />}

      <div>
        <Field label={artwork ? 'Reemplazar foto (opcional)' : 'Foto de la obra'}>
          <input
            type="file"
            name="image"
            accept="image/*"
            required={!artwork}
            className="block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-burnt file:px-4 file:py-2 file:text-xs file:font-medium file:uppercase file:tracking-[0.1em] file:text-background"
          />
        </Field>
        {artwork && (
          <div className="relative mt-4 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm bg-sand">
            <Image src={artwork.image} alt={artwork.title} fill sizes="320px" className="object-cover" />
          </div>
        )}
      </div>

      <div className="grid gap-5">
        <Field label="Título">
          <input type="text" name="title" required defaultValue={artwork?.title} className={inputClass} />
        </Field>

        <Field label="Descripción">
          <textarea
            name="description"
            rows={4}
            defaultValue={artwork?.description}
            className={inputClass}
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Técnica">
            <input type="text" name="technique" defaultValue={artwork?.technique} className={inputClass} />
          </Field>
          <Field label="Dimensiones">
            <input type="text" name="dimensions" defaultValue={artwork?.dimensions} className={inputClass} />
          </Field>
          <Field label="Materiales">
            <input type="text" name="materials" defaultValue={artwork?.materials} className={inputClass} />
          </Field>
          <Field label="Tiempo de producción">
            <input
              type="text"
              name="production_time"
              defaultValue={artwork?.productionTime}
              className={inputClass}
            />
          </Field>
          <Field label="Año">
            <input type="text" name="year" defaultValue={artwork?.year} className={inputClass} />
          </Field>
          <Field label="Precio (USD)">
            <input
              type="number"
              name="price"
              min="0"
              step="1"
              defaultValue={artwork?.price}
              className={inputClass}
            />
          </Field>
          <Field label="Stock">
            <input
              type="number"
              name="stock"
              min="0"
              step="1"
              defaultValue={artwork?.stock ?? 1}
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Categorías">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {categories.map((c) => (
              <label key={c} className="flex items-center gap-1.5 text-sm">
                <input
                  type="checkbox"
                  name="category"
                  value={c}
                  defaultChecked={artwork?.category.includes(c)}
                  className="accent-burnt"
                />
                {c}
              </label>
            ))}
          </div>
        </Field>

        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="show_in_catalog"
              defaultChecked={artwork ? artwork.showInCatalog : true}
              className="accent-burnt"
            />
            Mostrar en Catálogo
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="show_in_gallery"
              defaultChecked={artwork ? artwork.showInGallery : true}
              className="accent-burnt"
            />
            Mostrar en Galería
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="available"
              defaultChecked={artwork ? artwork.available : true}
              className="accent-burnt"
            />
            Disponible
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="featured"
              defaultChecked={artwork?.featured}
              className="accent-burnt"
            />
            Destacada en home
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="rounded-full bg-burnt px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-background transition-opacity hover:opacity-90"
          >
            {submitLabel}
          </button>
        </div>
      </div>
    </form>
  )
}
