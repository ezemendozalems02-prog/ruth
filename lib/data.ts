const mapsQuery = 'M. Moreno 29, Local 14, Galería Imperio, Ramos Mejía, Buenos Aires, Argentina'

export const site = {
  name: 'Ruth Delgado',
  role: 'Artista Visual',
  whatsapp: '+5491100000000',
  whatsappDisplay: '+54 9 11 0000 0000',
  instagram: 'https://instagram.com',
  instagramHandle: '@ruthdelgado.art',
  facebook: 'https://facebook.com',
  email: 'hola@ruthdelgado.art',
  location: 'Ramos Mejía, Buenos Aires, Argentina',
  address: 'M. Moreno 29, Local 14, Galería Imperio, Ramos Mejía',
  mapsEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
  tagline: 'El arte transforma espacios, emociones e historias.',
  quote: 'El que pinta con el corazón, crea con el alma.',
}

export const education = [
  {
    title: 'Profesorado de Artes Visuales',
    place: 'Conservatorio de Artes «Mabel Blanco»',
  },
]

export type Exhibition = { name: string; place?: string }

export const exhibitions: Exhibition[] = [
  { name: 'Palacio Barolo', place: 'Buenos Aires' },
  { name: 'Casa de la Cultura de Ramos Mejía', place: 'Ramos Mejía, Buenos Aires' },
  { name: '365 Expo' },
  { name: '«Pintar», de Ezequiel Orué' },
  { name: 'Lazo Rosa', place: 'Misiones' },
]

export const workshopGroupNote =
  'Trabajamos en grupos reducidos de hasta 4 personas, para un proceso más personalizado y atento al interés de cada alumno.'

export type Category =
  | 'Abstracto'
  | 'Contemporáneo'
  | 'Decoración'
  | 'Obras originales'
  | 'Cuadros'
  | 'Objetos pintados'
  | 'Muebles'
  | 'Macetas'
  | 'Mates'
  | 'Tazas'
  | 'Personalizados'

export const categories: Category[] = [
  'Abstracto',
  'Contemporáneo',
  'Decoración',
  'Obras originales',
  'Cuadros',
  'Objetos pintados',
  'Muebles',
  'Macetas',
  'Mates',
  'Tazas',
  'Personalizados',
]

export type Product = {
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
}

export const products: Product[] = [
  {
    slug: 'territorio-cobre',
    title: 'Territorio Cobre',
    category: ['Abstracto', 'Obras originales', 'Cuadros'],
    technique: 'Óleo y acrílico sobre lienzo',
    dimensions: '120 × 120 cm',
    materials: 'Lienzo de lino, óleo, acrílico, pan de oro',
    productionTime: 'Obra disponible — entrega inmediata',
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
    productionTime: 'Obra disponible — entrega inmediata',
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
    productionTime: 'Obra disponible — entrega inmediata',
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
    productionTime: 'Obra disponible — entrega inmediata',
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
    productionTime: 'Obra disponible — entrega inmediata',
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
    productionTime: 'Obra disponible — entrega inmediata',
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
    productionTime: '7 a 10 días',
    stock: 6,
    available: true,
    price: 85,
    year: '2024',
    image: '/images/objeto-maceta.png',
    gallery: ['/images/objeto-maceta.png'],
    description:
      'Maceta de cerámica pintada a mano con patrones gestuales en rojo quemado y cobre. Cada pieza es única e irrepetible.',
  },
  {
    slug: 'taza-pintada-oliva',
    title: 'Taza Pintada «Oliva»',
    category: ['Objetos pintados', 'Tazas', 'Decoración'],
    technique: 'Pintura sobre cerámica',
    dimensions: '9 × 8 cm — 300 ml',
    materials: 'Cerámica, esmalte apto para alimentos',
    productionTime: '5 a 7 días',
    stock: 12,
    available: true,
    price: 38,
    year: '2024',
    image: '/images/objeto-taza.png',
    gallery: ['/images/objeto-taza.png'],
    description:
      'Taza de cerámica con diseño de pinceladas en mostaza y verde oliva. Pintada y barnizada a mano, apta para uso diario.',
  },
  {
    slug: 'mural-personalizado',
    title: 'Mural a Medida',
    category: ['Decoración', 'Personalizados', 'Contemporáneo'],
    technique: 'Pintura mural in situ',
    dimensions: 'A medida del espacio',
    materials: 'Pintura mural profesional, acabado mate',
    productionTime: '3 a 6 semanas según superficie',
    stock: 1,
    available: true,
    year: '2024',
    image: '/images/objeto-mural.png',
    gallery: ['/images/objeto-mural.png'],
    description:
      'Murales creados especialmente para tu espacio. Un diálogo entre la arquitectura y el gesto pictórico, pensado a medida de cada ambiente.',
  },
]

export const featuredProducts = products.filter((p) => p.featured)

export type Workshop = {
  slug: string
  title: string
  type: 'Próximo taller' | 'Clase semanal' | 'Workshop' | 'Seminario'
  cover: string
  short: string
  description: string
  duration: string
  level: string
  materials: string
  age: string
  date: string
  location: string
  seats: number
  seatsLeft: number
  groupNote?: string
  price: number
  program: { step: string; detail: string }[]
  learn: string[]
  faq: { q: string; a: string }[]
  reviews: { name: string; text: string }[]
}

export const workshops: Workshop[] = [
  {
    slug: 'taller-acrilico',
    title: 'Taller de Acrílico',
    type: 'Clase semanal',
    cover: '/images/taller-1.png',
    short: 'Un espacio para explorar el color y la textura a través del acrílico.',
    description:
      'Un taller pensado para experimentar con el acrílico en todas sus posibilidades: capas, empastes y transparencias. Trabajamos en grupo reducido de hasta 4 personas, acompañando el proceso de cada alumno.',
    duration: '2 horas por encuentro',
    level: 'Todos los niveles',
    materials: 'Incluidos (lienzo, pinturas y pinceles)',
    age: 'Desde 14 años',
    date: 'Días a confirmar',
    location: 'Estudio Ruth Delgado, Ramos Mejía, Buenos Aires',
    seats: 4,
    seatsLeft: 4,
    groupNote: 'Grupo reducido de hasta 4 personas',
    price: 90,
    program: [
      { step: 'Encuentro 1', detail: 'Introducción al color y mezcla de acrílicos.' },
      { step: 'Encuentro 2', detail: 'Capas, veladuras y secado rápido.' },
      { step: 'Encuentro 3', detail: 'Empastes y texturas.' },
      { step: 'Encuentro 4', detail: 'Composición y obra personal.' },
    ],
    learn: [
      'Mezclar y controlar el acrílico',
      'Trabajar capas y transparencias',
      'Construir textura con empaste',
      'Desarrollar tu propia paleta',
    ],
    faq: [
      { q: '¿Necesito experiencia previa?', a: 'No. El taller está diseñado para acompañar tanto a principiantes como a personas con recorrido.' },
      { q: '¿Los materiales están incluidos?', a: 'Sí, todos los materiales están incluidos en el precio.' },
    ],
    reviews: [],
  },
  {
    slug: 'taller-oleo',
    title: 'Taller de Óleo',
    type: 'Clase semanal',
    cover: '/images/taller-2.png',
    short: 'Un recorrido por la técnica clásica del óleo, con tiempo para la pausa y la capa.',
    description:
      'Encuentros para adentrarse en el óleo: su tiempo de secado, sus veladuras y su cuerpo. Un espacio en grupo reducido de hasta 4 personas, para trabajar con calma según el interés de cada alumno.',
    duration: '2 horas por encuentro',
    level: 'Inicial e intermedio',
    materials: 'A cargo del alumno (lista provista)',
    age: 'Desde 16 años',
    date: 'Días a confirmar',
    location: 'Estudio Ruth Delgado, Ramos Mejía, Buenos Aires',
    seats: 4,
    seatsLeft: 4,
    groupNote: 'Grupo reducido de hasta 4 personas',
    price: 110,
    program: [
      { step: 'Encuentro 1', detail: 'Materiales, medios y primeros mezclas.' },
      { step: 'Encuentro 2', detail: 'Veladuras y tiempos de secado.' },
      { step: 'Encuentro 3', detail: 'Empaste y cuerpo del color.' },
      { step: 'Encuentro 4', detail: 'Composición y obra personal.' },
    ],
    learn: [
      'Manejar los tiempos del óleo',
      'Construir profundidad con veladuras',
      'Trabajar el empaste y la textura',
      'Desarrollar una paleta propia',
    ],
    faq: [
      { q: '¿Puedo sumarme sin experiencia?', a: 'Sí, el taller acompaña tanto a principiantes como a quienes ya tienen recorrido.' },
      { q: '¿Qué materiales necesito?', a: 'Te enviamos una lista sencilla al inscribirte.' },
    ],
    reviews: [],
  },
  {
    slug: 'taller-mix-media',
    title: 'Taller de Mix Media',
    type: 'Workshop',
    cover: '/images/obra-4.png',
    short: 'Un taller para combinar materiales, texturas y técnicas en una misma obra.',
    description:
      'Un espacio para romper con la técnica única: papel, óleo, acrílico, grafito y collage conviven en una misma superficie. Trabajamos en grupo reducido de hasta 4 personas, explorando el gesto y el material como lenguaje.',
    duration: '2 horas por encuentro',
    level: 'Todos los niveles',
    materials: 'Incluidos',
    age: 'Desde 16 años',
    date: 'Días a confirmar',
    location: 'Estudio Ruth Delgado, Ramos Mejía, Buenos Aires',
    seats: 4,
    seatsLeft: 4,
    groupNote: 'Grupo reducido de hasta 4 personas',
    price: 130,
    program: [
      { step: 'Encuentro 1', detail: 'Materiales y collage como punto de partida.' },
      { step: 'Encuentro 2', detail: 'Capas: papel, pintura y textura.' },
      { step: 'Encuentro 3', detail: 'Incorporación de grafito y empaste.' },
      { step: 'Encuentro 4', detail: 'Composición final y puesta en común.' },
    ],
    learn: [
      'Combinar materiales y técnicas con intención',
      'Trabajar el collage como base compositiva',
      'Construir textura con capas mixtas',
      'Confiar en tu propio gesto',
    ],
    faq: [
      { q: '¿Necesito saber técnicas específicas?', a: 'No, el taller está pensado para explorar libremente combinando materiales.' },
      { q: '¿Los materiales están incluidos?', a: 'Sí, todos los materiales están incluidos en el precio.' },
    ],
    reviews: [],
  },
  {
    slug: 'seminarios-mensuales',
    title: 'Seminarios mensuales',
    type: 'Seminario',
    cover: '/images/personalizado.png',
    short: 'Encuentros mensuales para profundizar en técnica, color y proceso creativo.',
    description:
      'Un espacio de formato seminario, a sala completa, donde profundizamos cada mes en un aspecto distinto de la práctica pictórica. Ideal para quienes ya atravesaron un primer taller y quieren seguir creciendo.',
    duration: '1 jornada por mes',
    level: 'Todos los niveles',
    materials: 'Incluidos',
    age: 'Desde 16 años',
    date: 'Días a confirmar',
    location: 'Estudio Ruth Delgado, Ramos Mejía, Buenos Aires',
    seats: 20,
    seatsLeft: 20,
    groupNote: 'Formato seminario a sala completa (no es clase personalizada)',
    price: 140,
    program: [
      { step: 'Bloque 1', detail: 'Teoría aplicada a la práctica artística.' },
      { step: 'Bloque 2', detail: 'Ejercicio guiado sobre el tema del mes.' },
      { step: 'Bloque 3', detail: 'Puesta en común y devolución.' },
    ],
    learn: [
      'Profundizar en un tema por mes',
      'Compartir proceso con otros alumnos',
      'Sostener una práctica constante',
    ],
    faq: [
      { q: '¿Con qué frecuencia son?', a: 'Se realizan una vez por mes. Los días se confirman con antelación.' },
    ],
    reviews: [],
  },
]

export const services = [
  { title: 'Cuadros', description: 'Obras originales sobre lienzo, únicas y firmadas.' },
  { title: 'Arte Mix Media', description: 'Piezas que combinan texturas, materiales y técnicas en una misma superficie.' },
  { title: 'Collage', description: 'Composiciones que combinan papel, textura y color en capas superpuestas.' },
  { title: 'Decoración', description: 'Piezas y conceptos que dialogan con tu interiorismo.' },
  { title: 'Objetos', description: 'Cerámica, mates y tazas pintados a mano.' },
  { title: 'Regalos', description: 'Piezas especiales para ocasiones que merecen ser recordadas.' },
  { title: 'Empresas', description: 'Arte corporativo, branding pictórico y espacios de trabajo.' },
  { title: 'Eventos', description: 'Live painting y experiencias artísticas para eventos.' },
  { title: 'Seminarios mensuales', description: 'Encuentros mensuales para profundizar técnica, color y proceso creativo.' },
]

export const testimonials = [
  {
    name: 'Valentina Ríos',
    role: 'Coleccionista',
    image: '/images/ruth-portrait.png',
    text: 'La obra de Ruth transformó por completo la energía de mi living. No es un cuadro, es una presencia.',
  },
  {
    name: 'Estudio Aravena',
    role: 'Arquitectura',
    image: '/images/objeto-mural.png',
    text: 'Trabajar con Ruth en el mural del lobby fue una experiencia impecable. Entendió el espacio como pocos.',
  },
  {
    name: 'Martina Coll',
    role: 'Alumna de taller',
    image: '/images/taller-1.png',
    text: 'Sus talleres son mucho más que aprender a pintar. Son un espacio para reencontrarse con una misma.',
  },
]

export const faqs = [
  { q: '¿Realizás envíos a todo el país?', a: 'Sí, coordinamos envíos nacionales e internacionales con embalaje profesional para obras y objetos.' },
  { q: '¿Puedo encargar una obra personalizada?', a: 'Por supuesto. Trabajamos juntos desde la idea hasta la entrega. Podés iniciar el proceso desde la sección de Obras personalizadas.' },
  { q: '¿Las obras vienen con certificado?', a: 'Todas las obras originales incluyen certificado de autenticidad firmado.' },
  { q: '¿Cómo reservo un taller?', a: 'Desde la página de cada taller podés completar el formulario de inscripción y coordinaremos el pago para confirmar tu cupo.' },
  { q: '¿Puedo visitar el estudio?', a: 'Sí, con cita previa. Escribime por WhatsApp o Instagram para coordinar una visita.' },
]

export const galleryWorks = products.filter((p) =>
  p.category.some((c) => ['Obras originales', 'Cuadros', 'Abstracto'].includes(c)),
)
