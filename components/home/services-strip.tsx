import { Reveal } from '@/components/reveal'
import { services } from '@/lib/data'

export function ServicesStrip() {
  const items = [...services, ...services]
  return (
    <section className="border-y border-border bg-background py-10 md:py-14">
      <div className="mb-6 px-5 md:px-10">
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
          Lo que hago
        </span>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-10 md:gap-16">
          {items.map((s, i) => (
            <div key={i} className="flex items-center gap-10 md:gap-16">
              <span className="whitespace-nowrap font-serif text-4xl font-light tracking-tight text-foreground/90 md:text-6xl">
                {s.title}
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-copper" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
