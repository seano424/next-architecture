import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <nav className="p-4 flex justify-between">
      <Link href="/luma" className="text-stone-500 font-medium tracking-tight">
        luma
      </Link>
      <ul className="flex gap-5 items-center">
        <span className="text-stone-400">2:45 PM CST</span>
        <Link
          href="/luma"
          className="rounded-full px-2 py-1 text-sm text-stone-600 bg-stone-200"
        >
          Sign In
        </Link>
      </ul>
    </nav>
  )
}
