export const site = {
  name: 'Ruth Delgado',
  role: 'Artista Visual',
  whatsapp: '+5491100000000',
  whatsappDisplay: '+54 9 11 0000 0000',
  instagram: 'https://instagram.com',
  instagramHandle: '@ruthdelgado.art',
  facebook: 'https://facebook.com',
  email: 'hola@ruthdelgado.art',
  location: 'Buenos Aires, Argentina',
  tagline: 'El arte transforma espacios, emociones e historias.',
}

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
  price: number
  program: { step: string; detail: string }[]
  learn: string[]
  faq: { q: string; a: string }[]
  reviews: { name: string; text: string }[]
}

export const workshops: Workshop[] = [
  {
    slug: 'intensivo-abstracto',
    title: 'Intensivo de Pintura Abstracta',
    type: 'Próximo taller',
    cover: '/images/taller-1.png',
    short: 'Dos jornadas para encontrar tu gesto propio a través del color y la materia.',
    description:
      'Un intensivo pensado para soltar la mano y confiar en el gesto. Trabajaremos con óleo y acrílico en gran formato, explorando la textura, la capa y el color como lenguaje emocional.',
    duration: '2 jornadas · 8 horas',
    level: 'Todos los niveles',
    materials: 'Incluidos (lienzo, pinturas y pinceles)',
    age: 'Desde 16 años',
    date: '15 y 16 de marzo',
    location: 'Estudio Ruth Delgado, Buenos Aires',
    seats: 12,
    seatsLeft: 4,
    price: 320,
    program: [
      { step: 'Jornada 1 · Mañana', detail: 'El gesto y la mancha. Ejercicios de calentamiento y color.' },
      { step: 'Jornada 1 · Tarde', detail: 'Composición y capas. Primer lienzo en gran formato.' },
      { step: 'Jornada 2 · Mañana', detail: 'Textura y materia. Empaste y herramientas alternativas.' },
      { step: 'Jornada 2 · Tarde', detail: 'Obra final y puesta en común.' },
    ],
    learn: [
      'Construir una obra abstracta con intención',
      'Mezclar una paleta cálida y armónica',
      'Trabajar la textura y el empaste',
      'Confiar en tu propio gesto',
    ],
    faq: [
      { q: '¿Necesito experiencia previa?', a: 'No. El taller está diseñado para acompañar tanto a principiantes como a personas con recorrido.' },
      { q: '¿Los materiales están incluidos?', a: 'Sí, todos los materiales están incluidos en el precio.' },
      { q: '¿Me llevo mi obra?', a: 'Sí, cada participante se lleva las obras realizadas durante el taller.' },
    ],
    reviews: [
      { name: 'Camila R.', text: 'Salí con una obra de la que estoy orgullosa y con ganas de seguir pintando.' },
      { name: 'Diego M.', text: 'Ruth tiene una forma de enseñar que te hace perder el miedo al lienzo en blanco.' },
    ],
  },
  {
    slug: 'acuarela-semanal',
    title: 'Clase Semanal de Acuarela',
    type: 'Clase semanal',
    cover: '/images/taller-2.png',
    short: 'Un espacio semanal para dominar la transparencia y la luz de la acuarela.',
    description:
      'Encuentros semanales en grupo reducido para desarrollar una práctica constante. Cada clase propone un ejercicio nuevo dentro de un recorrido progresivo.',
    duration: '1 encuentro semanal · 2 horas',
    level: 'Inicial e intermedio',
    materials: 'A cargo del alumno (lista provista)',
    age: 'Desde 14 años',
    date: 'Todos los martes · 18 h',
    location: 'Estudio Ruth Delgado, Buenos Aires',
    seats: 8,
    seatsLeft: 2,
    price: 90,
    program: [
      { step: 'Semana 1', detail: 'Aguadas y control del agua.' },
      { step: 'Semana 2', detail: 'Húmedo sobre húmedo.' },
      { step: 'Semana 3', detail: 'Capas y transparencias.' },
      { step: 'Semana 4', detail: 'Composición y obra personal.' },
    ],
    learn: [
      'Controlar el agua y el pigmento',
      'Construir luz con transparencias',
      'Desarrollar una paleta personal',
      'Sostener una práctica constante',
    ],
    faq: [
      { q: '¿Puedo sumarme cualquier semana?', a: 'Sí, el cupo se renueva mensualmente y podés incorporarte al inicio de cada mes.' },
      { q: '¿Qué materiales necesito?', a: 'Te enviamos una lista sencilla al inscribirte.' },
    ],
    reviews: [
      { name: 'Lucía T.', text: 'Espero el martes toda la semana. Es mi momento de desconexión.' },
    ],
  },
  {
    slug: 'seminario-color',
    title: 'Seminario · El Color como Emoción',
    type: 'Seminario',
    cover: '/images/personalizado.png',
    short: 'Una tarde para entender la teoría y la emoción del color cálido.',
    description:
      'Un seminario teórico-práctico donde exploramos cómo el color construye atmósferas y emociones, con foco en la paleta cálida que caracteriza mi obra.',
    duration: '1 jornada · 4 horas',
    level: 'Todos los niveles',
    materials: 'Incluidos',
    age: 'Desde 16 años',
    date: '28 de marzo · 15 h',
    location: 'Estudio Ruth Delgado, Buenos Aires',
    seats: 20,
    seatsLeft: 11,
    price: 140,
    program: [
      { step: 'Bloque 1', detail: 'Teoría del color aplicada a la práctica artística.' },
      { step: 'Bloque 2', detail: 'La paleta cálida: rojo quemado, cobre, mostaza y oliva.' },
      { step: 'Bloque 3', detail: 'Ejercicio guiado de armonías.' },
    ],
    learn: [
      'Comprender las armonías del color',
      'Construir atmósferas emocionales',
      'Dominar la paleta cálida',
    ],
    faq: [
      { q: '¿Es muy teórico?', a: 'Combina teoría con ejercicios prácticos para fijar los conceptos.' },
    ],
    reviews: [
      { name: 'Sofía P.', text: 'Cambió por completo la forma en la que elijo mis colores.' },
    ],
  },
]

export const services = [
  { title: 'Murales', description: 'Intervenciones a gran escala para espacios que quieren respirar arte.' },
  { title: 'Cuadros', description: 'Obras originales sobre lienzo, únicas y firmadas.' },
  { title: 'Decoración', description: 'Piezas y conceptos que dialogan con tu interiorismo.' },
  { title: 'Objetos', description: 'Cerámica, mates, tazas y muebles pintados a mano.' },
  { title: 'Regalos', description: 'Piezas especiales para ocasiones que merecen ser recordadas.' },
  { title: 'Empresas', description: 'Arte corporativo, branding pictórico y espacios de trabajo.' },
  { title: 'Eventos', description: 'Live painting y experiencias artísticas para eventos.' },
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
