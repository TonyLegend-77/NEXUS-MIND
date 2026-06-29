'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/archetypes', label: 'ARCHETYPES' },
  { href: '/issuance', label: 'ISSUANCE' },
  { href: '/builder', label: 'BUILDER' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 border border-accent flex items-center justify-center">
            <div className="w-2 h-2 bg-accent group-hover:animate-pulse" />
          </div>
          <span className="font-mono text-sm font-semibold text-textprimary tracking-widest">
            NEXUS<span className="text-accent">MIND</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-mono text-xs tracking-widest transition-colors duration-200 ${
                pathname === href
                  ? 'text-accent'
                  : 'text-textmuted hover:text-textprimary'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://hacd.it/launchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest border border-accent text-accent px-3 py-1.5 hover:bg-accent hover:text-bg transition-all duration-200"
          >
            LAUNCHPAD →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-xs text-textmuted"
          onClick={() => setOpen(!open)}
        >
          {open ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-mono text-xs tracking-widest border-b border-border transition-colors ${
                pathname === href ? 'text-accent' : 'text-textmuted'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://hacd.it/launchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 font-mono text-xs tracking-widest text-accent"
          >
            LAUNCHPAD →
          </a>
        </div>
      )}
    </nav>
  )
}
