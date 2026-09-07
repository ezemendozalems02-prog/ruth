import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArtworkBySlug } from '@/lib/artworks'
import { updateArtwork } from '@/app/admin/actions'
import { ArtworkForm } from '@/components/admin/artwork-form'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const artwork = await getArtworkBySlug(slug)
  return { title: artwork ? `Editar — ${artwork.title}` : 'Editar obra' }
}

export default async function EditarObraPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const artwork = await getArtworkBySlug(slug)
  if (!artwork) notFound()

  return (
    <div>
      <h1 className="font-serif text-2xl tracking-tight sm:text-3xl">Editar obra</h1>
      <p className="mt-1 text-sm text-muted-foreground">{artwork.title}</p>
      <div className="mt-8 rounded-sm border border-border bg-background p-5 sm:p-6 md:p-8">
        <ArtworkForm action={updateArtwork} artwork={artwork} submitLabel="Guardar cambios" />
      </div>
    </div>
  )
}
