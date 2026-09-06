import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { StudentExhibition } from '@/components/gallery/student-exhibition'
import { getGalleryArtworks } from '@/lib/artworks'

export const metadata: Metadata = {
  title: 'Galería',
  description:
    'Obras originales de Ruth Delgado: pintura abstracta y contemporánea en una paleta cálida de tierra y fuego.',
}

export default async function GaleriaPage() {
  const works = await getGalleryArtworks()

  return (
    <main>
      <PageIntro
        eyebrow="Galería"
        title="Obras que respiran color"
        description="Una selección de piezas originales. Cada obra es única, firmada y acompañada de su certificado de autenticidad."
      />
      <GalleryGrid works={works} />
      <StudentExhibition />
    </main>
  )
}
