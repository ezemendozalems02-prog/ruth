import { Reveal } from './reveal'

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <header className="mx-auto max-w-[1400px] px-5 pb-12 pt-32 md:px-10 md:pb-20 md:pt-44">
      <Reveal>
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-burnt">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="mt-5 max-w-4xl text-balance font-serif text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          {title}
        </h1>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </header>
  )
}
