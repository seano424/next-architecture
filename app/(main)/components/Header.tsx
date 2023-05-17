import Link from 'next/link'

export default function Header() {
  return (
    <nav className="bg-slate-950 text-slate-50 py-5">
      <ul className="flex gap-8 container">
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/luma'}>Luma Home</Link>
        <Link href={'/luma/about'}>Luma About</Link>
      </ul>
    </nav>
  )
}
