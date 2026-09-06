import type { Metadata } from 'next'
import { getAllArtworksAdmin } from '@/lib/artworks'
import { AdminArtworkList } from '@/components/admin/artwork-list'

export const metadata: Metadata = { title: 'Obras' }

export default async function AdminHomePage() {
  const artworks = await getAllArtworksAdmin()

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl tracking-tight">Obras ({artworks.length})</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Elegí si cada obra se muestra en el Catálogo, en la Galería, o en ambos. Los cambios se reflejan al instante en la web.
          </p>
        </div>
      </div>

      <AdminArtworkList artworks={artworks} />
    </div>
  )
}
