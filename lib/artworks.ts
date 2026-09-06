import 'server-only'
import { getPublicClient, getAdminClient } from '@/lib/supabase/server'
import type { Category } from '@/lib/data'

export type Artwork = {
  slug: string
  title: string
  category: Category[]
  technique: string
  dimensions: string
  materials: string
  productionTime: string
  stock: number
  available: boolean
  price?: number
  year: string
  image: string
  gallery: string[]
  description: string
  featured?: boolean
  showInCatalog: boolean
  showInGallery: boolean
}

type ArtworkRow = {
  slug: string
  title: string
  category: string[]
  technique: string
  dimensions: string
  materials: string
  production_time: string
  stock: number
  available: boolean
  price: number | null
  year: string
  image: string
  gallery: string[]
  description: string
  featured: boolean
  show_in_catalog: boolean
  show_in_gallery: boolean
}

function toArtwork(row: ArtworkRow): Artwork {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category as Category[],
    technique: row.technique,
    dimensions: row.dimensions,
    materials: row.materials,
    productionTime: row.production_time,
    stock: row.stock,
    available: row.available,
    price: row.price ?? undefined,
    year: row.year,
    image: row.image,
    gallery: row.gallery,
    description: row.description,
    featured: row.featured,
    showInCatalog: row.show_in_catalog,
    showInGallery: row.show_in_gallery,
  }
}

const COLUMNS =
  'slug, title, category, technique, dimensions, materials, production_time, stock, available, price, year, image, gallery, description, featured, show_in_catalog, show_in_gallery'

export async function getCatalogArtworks(): Promise<Artwork[]> {
  const supabase = getPublicClient()
  const { data, error } = await supabase
    .from('artworks')
    .select(COLUMNS)
    .eq('show_in_catalog', true)
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data as ArtworkRow[]).map(toArtwork)
}

export async function getGalleryArtworks(): Promise<Artwork[]> {
  const supabase = getPublicClient()
  const { data, error } = await supabase
    .from('artworks')
    .select(COLUMNS)
    .eq('show_in_gallery', true)
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data as ArtworkRow[]).map(toArtwork)
}

export async function getFeaturedArtworks(): Promise<Artwork[]> {
  const supabase = getPublicClient()
  const { data, error } = await supabase
    .from('artworks')
    .select(COLUMNS)
    .eq('featured', true)
    .order('created_at', { ascending: false })
  if (error) throw error
  return (data as ArtworkRow[]).map(toArtwork)
}

export async function getArtworkBySlug(slug: string): Promise<Artwork | null> {
  const supabase = getPublicClient()
  const { data, error } = await supabase.from('artworks').select(COLUMNS).eq('slug', slug).maybeSingle()
  if (error) throw error
  return data ? toArtwork(data as ArtworkRow) : null
}

export async function getRelatedArtworks(slug: string, category: Category[], limit = 3): Promise<Artwork[]> {
  const supabase = getPublicClient()
  const { data, error } = await supabase
    .from('artworks')
    .select(COLUMNS)
    .neq('slug', slug)
    .overlaps('category', category)
    .limit(limit)
  if (error) throw error
  return (data as ArtworkRow[]).map(toArtwork)
}

/** Todas las obras, incluidas las ocultas — sólo para el panel de admin. */
export async function getAllArtworksAdmin(): Promise<Artwork[]> {
  const supabase = getAdminClient()
  const { data, error } = await supabase.from('artworks').select(COLUMNS).order('created_at', { ascending: false })
  if (error) throw error
  return (data as ArtworkRow[]).map(toArtwork)
}
