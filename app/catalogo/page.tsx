import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { CatalogGrid } from '@/components/catalogo/catalog-grid'
import { products, categories } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Catálogo',
  description:
    'Catálogo completo de Ruth Delgado: obras originales, objetos pintados a mano, murales y piezas personalizadas.',
}

export default function CatalogoPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Catálogo"
        title="Cada pieza, a un clic de tu casa"
        description="Obras originales, objetos pintados a mano y piezas personalizadas. Filtrá por categoría y encontrá la tuya."
      />
      <CatalogGrid products={products} categories={categories} />
    </main>
  )
}
