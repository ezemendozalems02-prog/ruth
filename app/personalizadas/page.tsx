import type { Metadata } from 'next'
import Image from 'next/image'
import { PageIntro } from '@/components/page-intro'
import { Reveal } from '@/components/reveal'
import { BrushAnchor } from '@/components/brush-button'
import { site, faqs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Obras personalizadas',
  description:
    'Encargá una obra, mural u objeto pintado a medida con Ruth Delgado. Un proceso acompañado desde la idea hasta la entrega.',
}

const steps = [
  {
    step: '01',
    title: 'Contamos la idea',
    text: 'Me escribís por WhatsApp o Instagram y conversamos sobre el espacio, los colores y lo que querés transmitir.',
  },
  {
    step: '02',
    title: 'Propuesta y boceto',
    text: 'Te presento una propuesta de paleta y composición antes de empezar a pintar, para que la obra sea realmente tuya.',
  },
  {
    step: '03',
    title: 'Creación',
    text: 'Trabajo la pieza en el estudio, con seguimiento fotográfico de todo el proceso.',
  },
  {
    step: '04',
    title: 'Entrega',
    text: 'Coordinamos el envío o la instalación, junto con el certificado de autenticidad firmado.',
  },
]

const options = [
  { title: 'Cuadro a medida', text: 'Obra original en el formato, la paleta y la técnica que elijas.' },
  { title: 'Objeto pintado', text: 'Macetas, mates o tazas pintados a mano para regalar o regalarte.' },
]

export default function PersonalizadasPage() {
  const waMessage = encodeURIComponent('Hola Ruth! Quiero encargar una obra personalizada.')
  const waHref = `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${waMessage}`

  return (
    <main>
      <PageIntro
        eyebrow="Obras personalizadas"
        title="Creemos juntos una pieza única"
        description="Desde un cuadro para tu living hasta un mural completo. Un proceso cercano, pensado para tu espacio y tu historia."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-6">
          {options.map((o) => (
            <Reveal key={o.title}>
              <div className="border-t border-burnt/40 pt-6">
                <h2 className="font-serif text-2xl">{o.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-sand/40">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
              Cómo funciona
            </span>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-light tracking-tight md:text-5xl">
              De la idea a la pared
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.06}>
                <span className="font-serif text-3xl text-burnt">{s.step}</span>
                <h3 className="mt-3 font-serif text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <div className="relative overflow-hidden rounded-sm">
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] md:aspect-[16/7]">
              <Image
                src="/images/objeto-mural.png"
                alt="Mural personalizado pintado por Ruth Delgado"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-graphite/45" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <Reveal>
                <h2 className="max-w-2xl text-balance font-serif text-3xl font-light leading-tight tracking-tight text-background sm:text-5xl">
                  Contame tu idea y la hacemos realidad
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-9">
                  <BrushAnchor href={waHref} target="_blank" rel="noreferrer" variant="solid">
                    Empezar por WhatsApp
                  </BrushAnchor>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
        <Reveal>
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
            Preguntas frecuentes
          </span>
        </Reveal>
        <div className="mt-8 space-y-px">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className="border-t border-border py-6">
                <p className="font-medium">{f.q}</p>
                <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
