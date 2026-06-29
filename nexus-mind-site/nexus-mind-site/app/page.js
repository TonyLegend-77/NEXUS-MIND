import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArchetypeCard from '../components/ArchetypeCard'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg grid-scanline">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="border-l-2 border-accent pl-6 mb-8">
          <span className="font-mono text-xs text-accent tracking-widest">
            PoW-ANCHORED AI TRADING AGENT IDENTITY NFT — HACD STACK — 256 UNITS
          </span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-6 animate-flicker">
          PoW-anchored AI agent<br />
          <span className="text-accent">identity. Formed on HACD.</span>
        </h1>

        <p className="font-mono text-textmuted text-sm sm:text-base max-w-xl leading-relaxed mb-10">
          NEXUS MIND is a PoW-anchored AI trading agent identity NFT collection,
          formed through HACD Stack. Each identity is backed by one HACD, with
          real PoW formation cost and a permanent on-chain identity and archetype.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://hacd.it/launchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm tracking-widest bg-accent text-bg px-6 py-3 font-semibold hover:bg-accent/90 transition-all duration-200"
          >
            VIEW ON LAUNCHPAD →
          </a>
          <Link
            href="/issuance"
            className="font-mono text-sm tracking-widest border border-border text-textmuted px-6 py-3 hover:border-textmuted hover:text-textprimary transition-all duration-200"
          >
            FORMATION RULES
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-t border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'TOTAL SUPPLY', value: '256', unit: 'NFTs' },
            { label: 'HACD LOTS', value: '256', unit: '1 per lot' },
            { label: 'ARCHETYPES', value: '4', unit: 'types' },
            { label: 'ASSET TYPE', value: 'NFT', unit: 'on HACD Stack' },
          ].map(({ label, value, unit }) => (
            <div key={label} className="py-2">
              <p className="font-mono text-xs text-textmuted tracking-widest mb-1">{label}</p>
              <p className="font-display font-semibold text-xl text-textprimary">
                {value} <span className="text-xs text-textmuted font-mono">{unit}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What is NEXUS MIND */}
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest mb-4">// WHAT IS NEXUS MIND</p>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl leading-tight mb-6">
              PoW formation cost.<br />Permanent on-chain identity.
            </h2>
            <p className="text-textmuted font-mono text-sm leading-relaxed mb-4">
              NEXUS MIND is a PoW-anchored AI trading agent identity NFT collection,
              formed through HACD Stack. Each identity is backed by one HACD, with
              real PoW formation cost and a permanent on-chain identity and archetype.
            </p>
            <p className="text-textmuted font-mono text-sm leading-relaxed mb-4">
              After launch, these identities will be gradually connected to CycleMind,
              BitEdge, and future HACD/HVM agent functionality.
            </p>
            <p className="text-textprimary font-mono text-sm leading-relaxed">
              The identity layer comes first. That is the right order.
            </p>
          </div>

          {/* Terminal block */}
          <div className="border border-border bg-surface font-mono text-xs">
            <div className="border-b border-border px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-accent/60" />
              <span className="text-textmuted ml-2 tracking-widest">FORMATION_RECORD.log</span>
            </div>
            <div className="p-4 space-y-2 text-textmuted">
              <p><span className="text-accent">→</span> asset_type: NFT</p>
              <p><span className="text-accent">→</span> total_supply: 256</p>
              <p><span className="text-accent">→</span> hacd_lots: 256</p>
              <p><span className="text-accent">→</span> units_per_lot: 1</p>
              <p><span className="text-accent">→</span> stack_cost: [HAC / HACD]</p>
              <p><span className="text-accent">→</span> removal_effect: burn</p>
              <p><span className="text-accent">→</span> phase_model: public</p>
              <p><span className="text-accent">→</span> max_per_wallet: 4</p>
              <p><span className="text-purple">→</span> status: <span className="text-yellow-400">FORMING SOON</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* PoW thesis */}
      <section className="border-t border-border py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-textmuted tracking-widest mb-10 text-center">// THE PoW THESIS</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {[
            {
              label: 'BITCOIN',
              thesis: 'Proved PoW for money.',
              color: '#F7931A',
            },
            {
              label: 'HACD',
              thesis: 'Brings PoW to assets.',
              color: '#00FF9C',
            },
            {
              label: 'NEXUS MIND',
              thesis: 'Brings PoW to AI agent identity.',
              color: '#7B61FF',
            },
          ].map(({ label, thesis, color }, i) => (
            <div
              key={label}
              className={`p-6 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-border' : ''}`}
            >
              <div
                className="font-mono text-xs tracking-widest mb-3"
                style={{ color }}
              >
                {label}
              </div>
              <p className="font-display font-medium text-lg text-textprimary leading-snug">
                {thesis}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Archetypes preview */}
      <section className="border-t border-border py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest mb-2">// AGENT ARCHETYPES</p>
            <h2 className="font-display font-semibold text-2xl">Four souls. One PoW base.</h2>
          </div>
          <Link
            href="/archetypes"
            className="font-mono text-xs text-textmuted hover:text-accent transition-colors tracking-widest"
          >
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Momentum', 'Contrarian', 'Arbitrageur', 'Sentinel'].map((name) => (
            <ArchetypeCard key={name} name={name} compact />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-xs text-textmuted tracking-widest mb-4">// FORM YOUR AGENT</p>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mb-6">
            256 identities.<br />
            <span className="text-accent">Each one permanent.</span>
          </h2>
          <p className="font-mono text-textmuted text-sm leading-relaxed mb-8">
            Your HACD inscription determines your agent's archetype. Your diamond's
            name is your agent's soul. Formation is irreversible. Choose carefully.
          </p>
          <a
            href="https://hacd.it/launchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-sm tracking-widest bg-accent text-bg px-8 py-3 font-semibold hover:bg-accent/90 transition-all duration-200"
          >
            GO TO LAUNCHPAD →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
