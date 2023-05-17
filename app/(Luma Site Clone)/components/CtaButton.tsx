import Link from 'next/link'

export type CtaButtonProps = {
  href: string
  text: string
}

export default function CtaButton({ href, text }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className="bg-orange-600/80 text-stone-50 text-xl font-medium tracking-tight px-4 py-2 rounded-lg"
    >
      {text}
    </Link>
  )
}
