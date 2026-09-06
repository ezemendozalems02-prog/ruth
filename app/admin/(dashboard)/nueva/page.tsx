import type { Metadata } from 'next'
import { createArtwork } from '@/app/admin/actions'
import { ArtworkForm } from '@/components/admin/artwork-form'

export const metadata: Metadata = { title: 'Nueva obra' }

export default function NuevaObraPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl tracking-tight">Nueva obra</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Subí la foto y completá los datos. Podés elegir si aparece en el Catálogo, en la Galería, o en ambos.
      </p>
      <div className="mt-8 rounded-sm border border-border bg-background p-6 md:p-8">
        <ArtworkForm action={createArtwork} submitLabel="Publicar obra" />
      </div>
    </div>
  )
}
