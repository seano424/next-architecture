import CtaButton from './CtaButton'

export type HeroProps = {
  title: string
  subtitle?: string
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="text-center flex flex-col items-center gap-5 max-w-2xl mx-auto py-20">
      <h1 className="text-stone-950 font-bold text-5xl tracking-tight">
        {title}
      </h1>
      <p className="text-stone-500 text-xl">{subtitle}</p>
      <CtaButton text="Get Started" href="/" />
    </div>
  )
}
