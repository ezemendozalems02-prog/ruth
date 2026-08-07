import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { Reveal } from '@/components/reveal'
import { BrushAnchor } from '@/components/brush-button'
import { InstagramIcon, FacebookIcon, WhatsappIcon } from '@/components/brand-icons'
import { site } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    `Escribime por WhatsApp o Instagram, o visitá el estudio en ${site.location}. Coordinamos encargos, talleres y visitas con cita previa.`,
}

export default function ContactoPage() {
  const waMessage = encodeURIComponent('Hola Ruth! Te escribo desde la web.')
  const waHref = `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${waMessage}`

  const channels = [
    {
      icon: WhatsappIcon,
      label: 'WhatsApp',
      value: site.whatsappDisplay,
      href: waHref,
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: site.instagramHandle,
      href: site.instagram,
    },
    {
      icon: FacebookIcon,
      label: 'Facebook',
      value: site.name,
      href: site.facebook,
    },
  ]

  return (
    <main>
      <PageIntro
        eyebrow="Contacto"
        title="Hablemos de tu próxima obra"
        description="Escribime para encargos, talleres o simplemente para conocer más. Con cita previa también podés visitar el estudio."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <ul className="space-y-px">
                {channels.map((c) => (
                  <li key={c.label} className="border-t border-border py-6 first:border-t-0">
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-5"
                      data-cursor="button"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition-colors group-hover:border-burnt group-hover:text-burnt">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="mt-1 block font-serif text-xl transition-colors group-hover:text-burnt">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
                <li className="border-t border-border py-6">
                  <a href={`mailto:${site.email}`} className="group flex items-center gap-5" data-cursor="button">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-[0.6rem] font-medium uppercase tracking-[0.1em] transition-colors group-hover:border-burnt group-hover:text-burnt">
                      Mail
                    </span>
                    <span>
                      <span className="block text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                        Email
                      </span>
                      <span className="mt-1 block font-serif text-xl transition-colors group-hover:text-burnt">
                        {site.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="border-t border-border py-6">
                  <div className="flex items-center gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-[0.6rem] font-medium uppercase tracking-[0.1em]">
                      Estudio
                    </span>
                    <span>
                      <span className="block text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                        Ubicación
                      </span>
                      <span className="mt-1 block font-serif text-xl">{site.address}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        Visitas con cita previa — coordiná por WhatsApp o Instagram.
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10">
                <BrushAnchor href={waHref} target="_blank" rel="noreferrer" variant="solid">
                  Escribir por WhatsApp
                </BrushAnchor>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-sm border border-border">
              <div className="relative aspect-[4/3] w-full">
                <iframe
                  title={`Ubicación del estudio en ${site.location}`}
                  src={site.mapsEmbedSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-border bg-sand/40 px-6 py-4">
                <p className="text-sm text-muted-foreground">{site.location}</p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium uppercase tracking-[0.15em] text-burnt hover:underline"
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
