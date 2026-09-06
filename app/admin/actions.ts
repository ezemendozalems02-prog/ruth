'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { randomUUID } from 'crypto'
import { ADMIN_COOKIE_NAME, ADMIN_COOKIE_MAX_AGE, createSessionValue, verifySessionValue } from '@/lib/auth'
import { getAdminClient } from '@/lib/supabase/server'
import { slugify } from '@/lib/utils'
import type { Category } from '@/lib/data'

async function requireAdmin() {
  const cookieStore = await cookies()
  const value = cookieStore.get(ADMIN_COOKIE_NAME)?.value
  if (!verifySessionValue(value)) {
    redirect('/admin/login')
  }
}

function revalidateArtworkPaths(slug?: string) {
  revalidatePath('/catalogo')
  revalidatePath('/galeria')
  revalidatePath('/')
  revalidatePath('/admin')
  if (slug) revalidatePath(`/catalogo/${slug}`)
}

export async function login(formData: FormData) {
  const password = String(formData.get('password') ?? '')
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    redirect('/admin/login?error=1')
  }

  const cookieStore = await cookies()
  cookieStore.set(ADMIN_COOKIE_NAME, createSessionValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_COOKIE_MAX_AGE,
  })
  redirect('/admin')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_COOKIE_NAME)
  redirect('/admin/login')
}

async function uploadImageIfPresent(formData: FormData): Promise<string | null> {
  const file = formData.get('image')
  if (!(file instanceof File) || file.size === 0) return null

  const supabase = getAdminClient()
  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase()
  const path = `${randomUUID()}.${ext}`
  const buffer = Buffer.from(await file.arrayBuffer())

  const { error } = await supabase.storage.from('artworks').upload(path, buffer, {
    contentType: file.type || 'image/jpeg',
    upsert: false,
  })
  if (error) throw new Error(`No se pudo subir la imagen: ${error.message}`)

  const { data } = supabase.storage.from('artworks').getPublicUrl(path)
  return data.publicUrl
}

function readCategories(formData: FormData): Category[] {
  return formData.getAll('category').map((c) => String(c)) as Category[]
}

export async function createArtwork(formData: FormData) {
  await requireAdmin()
  const supabase = getAdminClient()

  const title = String(formData.get('title') ?? '').trim()
  if (!title) throw new Error('El título es obligatorio')

  const imageUrl = await uploadImageIfPresent(formData)
  if (!imageUrl) throw new Error('La foto de la obra es obligatoria')

  let slug = slugify(title)
  const { data: existing } = await supabase.from('artworks').select('slug').eq('slug', slug).maybeSingle()
  if (existing) slug = `${slug}-${randomUUID().slice(0, 6)}`

  const priceRaw = String(formData.get('price') ?? '').trim()

  const { error } = await supabase.from('artworks').insert({
    slug,
    title,
    description: String(formData.get('description') ?? '').trim(),
    technique: String(formData.get('technique') ?? '').trim(),
    dimensions: String(formData.get('dimensions') ?? '').trim(),
    materials: String(formData.get('materials') ?? '').trim(),
    production_time: String(formData.get('production_time') ?? '').trim() || 'Obra disponible — entrega inmediata',
    year: String(formData.get('year') ?? '').trim(),
    price: priceRaw ? Number(priceRaw) : null,
    stock: Number(formData.get('stock') ?? 1) || 1,
    available: formData.get('available') === 'on',
    image: imageUrl,
    gallery: [imageUrl],
    category: readCategories(formData),
    show_in_catalog: formData.get('show_in_catalog') === 'on',
    show_in_gallery: formData.get('show_in_gallery') === 'on',
    featured: formData.get('featured') === 'on',
  })
  if (error) throw new Error(error.message)

  revalidateArtworkPaths()
  redirect('/admin')
}

export async function updateArtwork(formData: FormData) {
  await requireAdmin()
  const supabase = getAdminClient()

  const slug = String(formData.get('slug') ?? '')
  if (!slug) throw new Error('Falta el identificador de la obra')

  const imageUrl = await uploadImageIfPresent(formData)
  const priceRaw = String(formData.get('price') ?? '').trim()

  const update: Record<string, unknown> = {
    title: String(formData.get('title') ?? '').trim(),
    description: String(formData.get('description') ?? '').trim(),
    technique: String(formData.get('technique') ?? '').trim(),
    dimensions: String(formData.get('dimensions') ?? '').trim(),
    materials: String(formData.get('materials') ?? '').trim(),
    production_time: String(formData.get('production_time') ?? '').trim(),
    year: String(formData.get('year') ?? '').trim(),
    price: priceRaw ? Number(priceRaw) : null,
    stock: Number(formData.get('stock') ?? 1) || 1,
    available: formData.get('available') === 'on',
    category: readCategories(formData),
    show_in_catalog: formData.get('show_in_catalog') === 'on',
    show_in_gallery: formData.get('show_in_gallery') === 'on',
    featured: formData.get('featured') === 'on',
  }
  if (imageUrl) {
    update.image = imageUrl
    update.gallery = [imageUrl]
  }

  const { error } = await supabase.from('artworks').update(update).eq('slug', slug)
  if (error) throw new Error(error.message)

  revalidateArtworkPaths(slug)
  redirect('/admin')
}

export async function deleteArtwork(formData: FormData) {
  await requireAdmin()
  const supabase = getAdminClient()
  const slug = String(formData.get('slug') ?? '')
  if (!slug) return

  const { error } = await supabase.from('artworks').delete().eq('slug', slug)
  if (error) throw new Error(error.message)

  revalidateArtworkPaths(slug)
}

export async function toggleField(formData: FormData) {
  await requireAdmin()
  const supabase = getAdminClient()
  const slug = String(formData.get('slug') ?? '')
  const field = String(formData.get('field') ?? '')
  const next = String(formData.get('next') ?? '') === 'true'

  if (!slug || (field !== 'show_in_catalog' && field !== 'show_in_gallery' && field !== 'available' && field !== 'featured')) {
    return
  }

  const { error } = await supabase.from('artworks').update({ [field]: next }).eq('slug', slug)
  if (error) throw new Error(error.message)

  revalidateArtworkPaths(slug)
}
