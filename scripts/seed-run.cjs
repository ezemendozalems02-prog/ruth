// Carga inicial de la tabla `artworks` en Supabase:
// - Los 9 productos ya curados del sitio (se mantienen tal cual estaban).
// - Las 147 fotos de public/images/obras-catalogo, con precio y
//   dimensiones aleatorios "por ahora" (se pueden editar desde /admin).
//
// Uso: node scripts/seed-run.cjs   (con SUPABASE_DB_URL en el entorno)

const { Client } = require('pg')
const { BASE, catalogWorks } = require('./seed-data.cjs')

const existingProducts = [
  {
    slug: 'territorio-cobre',
    title: 'Territorio Cobre',
    category: ['Abstracto', 'Obras originales', 'Cuadros'],
    technique: 'Óleo y acrílico sobre lienzo',
    dimensions: '120 × 120 cm',
    materials: 'Lienzo de lino, óleo, acrílico, pan de oro',
    production_time: 'Obra disponible — entrega inmediata',
    stock: 1,
    available: true,
    price: 2800,
    year: '2024',
    image: '/images/obra-1.png',
    gallery: ['/images/obra-1.png', '/images/obra-4.png', '/images/texture-brush.png'],
    description:
      'Una exploración de la tierra y el fuego. Los gestos en rojo quemado y cobre construyen un territorio emocional donde cada capa revela una memoria distinta.',
    featured: true,
  },
  {
    slug: 'silencio-olivo',
    title: 'Silencio Olivo',
    category: ['Abstracto', 'Contemporáneo', 'Obras originales', 'Cuadros'],
    technique: 'Acrílico sobre lienzo',
    dimensions: '90 × 140 cm',
    materials: 'Lienzo de algodón, acrílico',
    production_time: 'Obra disponible — entrega inmediata',
    stock: 1,
    available: true,
    price: 2200,
    year: '2024',
    image: '/images/obra-2.png',
    gallery: ['/images/obra-2.png', '/images/obra-6.png'],
    description:
      'El vacío como protagonista. Una única pincelada roja atraviesa el silencio de los tonos oliva y arena, invitando a la contemplación.',
    featured: true,
  },
  {
    slug: 'aguas-ambar',
    title: 'Aguas Ámbar',
    category: ['Abstracto', 'Contemporáneo', 'Obras originales'],
    technique: 'Acuarela y pan de oro sobre papel',
    dimensions: '70 × 100 cm',
    materials: 'Papel de algodón, acuarela, pan de oro',
    production_time: 'Obra disponible — entrega inmediata',
    stock: 1,
    available: true,
    price: 1500,
    year: '2023',
    image: '/images/obra-3.png',
    gallery: ['/images/obra-3.png'],
    description:
      'Lavados de cobre y mostaza que sangran sobre el papel. Los detalles en pan de oro capturan la luz como reflejos sobre el agua.',
    featured: true,
  },
  {
    slug: 'grafito-y-fuego',
    title: 'Grafito y Fuego',
    category: ['Abstracto', 'Obras originales', 'Cuadros'],
    technique: 'Técnica mixta sobre lienzo',
    dimensions: '100 × 100 cm',
    materials: 'Lienzo, óleo, grafito, empaste',
    production_time: 'Obra disponible — entrega inmediata',
    stock: 1,
    available: false,
    price: 2600,
    year: '2023',
    image: '/images/obra-4.png',
    gallery: ['/images/obra-4.png'],
    description:
      'La tensión entre el negro grafito y el rojo quemado. Un empaste texturado que se percibe tanto con la vista como con el tacto.',
    featured: true,
  },
  {
    slug: 'campo-mostaza',
    title: 'Campo Mostaza',
    category: ['Abstracto', 'Contemporáneo', 'Decoración', 'Cuadros'],
    technique: 'Óleo sobre lienzo',
    dimensions: '80 × 120 cm',
    materials: 'Lienzo de lino, óleo, pan de oro',
    production_time: 'Obra disponible — entrega inmediata',
    stock: 1,
    available: true,
    price: 1900,
    year: '2024',
    image: '/images/obra-5.png',
    gallery: ['/images/obra-5.png'],
    description:
      'Un campo de color mostaza atravesado por marcas oliva y rojas. Sutiles acentos dorados aportan calidez y profundidad.',
    featured: true,
  },
  {
    slug: 'arco-de-cobre',
    title: 'Arco de Cobre',
    category: ['Abstracto', 'Contemporáneo', 'Decoración', 'Obras originales'],
    technique: 'Acrílico sobre lienzo',
    dimensions: '110 × 110 cm',
    materials: 'Lienzo de algodón, acrílico',
    production_time: 'Obra disponible — entrega inmediata',
    stock: 1,
    available: true,
    price: 2400,
    year: '2024',
    image: '/images/obra-6.png',
    gallery: ['/images/obra-6.png'],
    description:
      'Minimalismo puro. Un único arco de color cobre recorre el lienzo blanco roto, un gesto que respira en el espacio.',
    featured: true,
  },
  {
    slug: 'maceta-pintada-tierra',
    title: 'Maceta Pintada «Tierra»',
    category: ['Objetos pintados', 'Macetas', 'Decoración'],
    technique: 'Pintura sobre cerámica',
    dimensions: '22 × 20 cm',
    materials: 'Cerámica esmaltada, pintura acrílica, barniz',
    production_time: '7 a 10 días',
    stock: 6,
    available: true,
    price: 85,
    year: '2024',
    image: '/images/objeto-maceta.png',
    gallery: ['/images/objeto-maceta.png'],
    description:
      'Maceta de cerámica pintada a mano con patrones gestuales en rojo quemado y cobre. Cada pieza es única e irrepetible.',
    featured: false,
  },
  {
    slug: 'taza-pintada-oliva',
    title: 'Taza Pintada «Oliva»',
    category: ['Objetos pintados', 'Tazas', 'Decoración'],
    technique: 'Pintura sobre cerámica',
    dimensions: '9 × 8 cm — 300 ml',
    materials: 'Cerámica, esmalte apto para alimentos',
    production_time: '5 a 7 días',
    stock: 12,
    available: true,
    price: 38,
    year: '2024',
    image: '/images/objeto-taza.png',
    gallery: ['/images/objeto-taza.png'],
    description:
      'Taza de cerámica con diseño de pinceladas en mostaza y verde oliva. Pintada y barnizada a mano, apta para uso diario.',
    featured: false,
  },
  {
    slug: 'mural-personalizado',
    title: 'Mural a Medida',
    category: ['Decoración', 'Personalizados', 'Contemporáneo'],
    technique: 'Pintura mural in situ',
    dimensions: 'A medida del espacio',
    materials: 'Pintura mural profesional, acabado mate',
    production_time: '3 a 6 semanas según superficie',
    stock: 1,
    available: true,
    price: null,
    year: '2024',
    image: '/images/objeto-mural.png',
    gallery: ['/images/objeto-mural.png'],
    description:
      'Murales creados especialmente para tu espacio. Un diálogo entre la arquitectura y el gesto pictórico, pensado a medida de cada ambiente.',
    featured: false,
  },
]

const GALLERY_CATEGORIES = ['Obras originales', 'Cuadros', 'Abstracto', 'Contemporáneo']

function slugify(title, fallback) {
  const base = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return base || fallback
}

function yearFromFilename(file) {
  const m = file.match(/(20\d{2})/)
  return m ? m[1] : ''
}

const DIMENSION_POOL = [
  '40 × 50 cm',
  '50 × 70 cm',
  '60 × 80 cm',
  '70 × 100 cm',
  '80 × 100 cm',
  '80 × 120 cm',
  '90 × 120 cm',
  '100 × 100 cm',
]

function seededRandom(seed) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return () => {
    h = (h * 1664525 + 1013904223) >>> 0
    return h / 0xffffffff
  }
}

async function main() {
  const client = new Client({
    connectionString: process.env.SUPABASE_DB_URL,
    ssl: { rejectUnauthorized: false },
  })
  await client.connect()

  const rows = []

  for (const p of existingProducts) {
    rows.push({
      slug: p.slug,
      title: p.title,
      description: p.description,
      technique: p.technique,
      dimensions: p.dimensions,
      materials: p.materials,
      production_time: p.production_time,
      year: p.year,
      price: p.price,
      stock: p.stock,
      available: p.available,
      image: p.image,
      gallery: p.gallery,
      category: p.category,
      show_in_catalog: true,
      show_in_gallery: p.category.some((c) => GALLERY_CATEGORIES.includes(c)),
      featured: p.featured,
    })
  }

  const usedSlugs = new Set(rows.map((r) => r.slug))

  for (const [file, title, description, technique, category] of catalogWorks) {
    let slug = slugify(title, file.replace(/\.[^.]+$/, '').toLowerCase())
    let n = 2
    while (usedSlugs.has(slug)) {
      slug = `${slugify(title, file)}-${n++}`
    }
    usedSlugs.add(slug)

    const rand = seededRandom(file)
    const price = Math.round((150 + rand() * 2350) / 10) * 10
    const dimensions = DIMENSION_POOL[Math.floor(rand() * DIMENSION_POOL.length)]

    rows.push({
      slug,
      title,
      description,
      technique,
      dimensions,
      materials: '',
      production_time: 'Obra disponible — entrega inmediata',
      year: yearFromFilename(file),
      price,
      stock: 1,
      available: true,
      image: BASE + file,
      gallery: [BASE + file],
      category,
      show_in_catalog: true,
      show_in_gallery: true,
      featured: false,
    })
  }

  console.log(`Insertando ${rows.length} obras...`)

  for (const r of rows) {
    await client.query(
      `insert into public.artworks
        (slug, title, description, technique, dimensions, materials, production_time,
         year, price, stock, available, image, gallery, category, show_in_catalog,
         show_in_gallery, featured)
       values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)
       on conflict (slug) do update set
         title = excluded.title,
         description = excluded.description,
         technique = excluded.technique,
         dimensions = excluded.dimensions,
         materials = excluded.materials,
         production_time = excluded.production_time,
         year = excluded.year,
         price = excluded.price,
         stock = excluded.stock,
         available = excluded.available,
         image = excluded.image,
         gallery = excluded.gallery,
         category = excluded.category,
         show_in_catalog = excluded.show_in_catalog,
         show_in_gallery = excluded.show_in_gallery,
         featured = excluded.featured`,
      [
        r.slug,
        r.title,
        r.description,
        r.technique,
        r.dimensions,
        r.materials,
        r.production_time,
        r.year,
        r.price,
        r.stock,
        r.available,
        r.image,
        r.gallery,
        r.category,
        r.show_in_catalog,
        r.show_in_gallery,
        r.featured,
      ],
    )
  }

  const { rows: countRows } = await client.query('select count(*)::int as n from public.artworks')
  console.log(`Listo. Total en la tabla: ${countRows[0].n}`)

  await client.end()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
