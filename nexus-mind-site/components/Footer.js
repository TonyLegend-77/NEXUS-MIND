import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 border border-accent flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-accent" />
              </div>
              <span className="font-mono text-sm font-semibold tracking-widest">
                NEXUS<span className="text-accent">MIND</span>
              </span>
            </div>
            <p className="text-textmuted text-xs font-mono leading-relaxed">
              AI agent identity,<br />formed through PoW.
            </p>
            <p className="text-textmuted text-xs font-mono mt-4 leading-relaxed">
              256 unique agents.<br />
              Formed on HACD Stack.<br />
              Not deployed. Formed.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-xs text-textmuted tracking-widest mb-4">NAVIGATE</p>
            <div className="flex flex-col gap-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/archetypes', label: 'Archetypes' },
                { href: '/issuance', label: 'Issuance' },
                { href: '/builder', label: 'Builder' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-mono text-xs text-textmuted hover:text-textprimary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <p className="font-mono text-xs text-textmuted tracking-widest mb-4">ECOSYSTEM</p>
            <div className="flex flex-col gap-2">
              {[
                { href: 'https://hacd.it', label: 'HACD Labs' },
                { href: 'https://hacd.it/launchpad', label: 'HACD Launchpad' },
                { href: 'https://explorer.hacash.org', label: 'Hacash Explorer' },
                { href: 'https://cyclemind.vercel.app', label: 'CycleMind' },
                { href: 'https://bitedge.vercel.app', label: 'BitEdge' },
                { href: 'https://x.com/cyclemindarc', label: 'X / Twitter' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-textmuted hover:text-accent transition-colors"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-xs text-textmuted">
            © 2026 NEXUS MIND. Built on HACD Stack.
          </p>
          <p className="font-mono text-xs text-textmuted max-w-sm leading-relaxed">
            Not financial advice. NEXUS MIND NFTs are Stack Assets, not investment products. No return, listing, or price is guaranteed.
          </p>
        </div>
      </div>
    </footer>
  )
}
