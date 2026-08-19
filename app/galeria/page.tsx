import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { CatalogWorks } from '@/components/gallery/catalog-works'
import { StudentExhibition } from '@/components/gallery/student-exhibition'
import { products, catalogWorksImages } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Galería',
  description:
    'Obras originales de Ruth Delgado: pintura abstracta y contemporánea en una paleta cálida de tierra y fuego.',
}

export default function GaleriaPage() {
  const works = products.filter((p) =>
    p.category.some((c) => ['Obras originales', 'Cuadros', 'Abstracto', 'Contemporáneo'].includes(c)),
  )

  return (
    <main>
      <PageIntro
        eyebrow="Galería"
        title="Obras que respiran color"
        description="Una selección de piezas originales. Cada obra es única, firmada y acompañada de su certificado de autenticidad."
      />
      <GalleryGrid works={works} />
      <CatalogWorks images={catalogWorksImages} />
      <StudentExhibition />
    </main>
  )
}
