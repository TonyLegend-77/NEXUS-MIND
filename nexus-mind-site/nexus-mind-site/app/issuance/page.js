import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Issuance — NEXUS MIND',
  description: 'NEXUS MIND Stack design, formation rules, supply, and FAQ.',
}

const faqs = [
  {
    q: 'Do I need HACD to participate?',
    a: 'Yes. Each NEXUS MIND requires exactly one HACD diamond per NFT. There is no way to form a NEXUS MIND without providing HACD.',
  },
  {
    q: 'Do I need HAC?',
    a: 'Yes. HAC is required for the stack cost and the Hacash network fee. Both must be available in your wallet before stacking.',
  },
  {
    q: 'How is my archetype assigned?',
    a: "The HACD inscription of the diamond you use maps to one of four archetypes: Momentum, Contrarian, Arbitrageur, or Sentinel. The mapping is published before launch. You cannot choose your archetype — your diamond's name determines it.",
  },
  {
    q: 'Can I form multiple NEXUS MIND agents?',
    a: 'Yes, up to 4 per wallet in the public phase.',
  },
  {
    q: 'What happens if I remove the stack?',
    a: 'The NEXUS MIND NFT is burned and permanently destroyed. The HACD diamond is released. Formation is meant to be permanent.',
  },
  {
    q: 'Is there a reserved or pre-allocated phase?',
    a: 'No. All 256 lots are open to public participation simultaneously. No team allocation, no reserved phase.',
  },
  {
    q: 'Is NEXUS MIND an investment?',
    a: 'No. NEXUS MIND is a HACD Stack Asset — an AI agent identity NFT formed on-chain. No financial return, price floor, liquidity, or listing is guaranteed.',
  },
  {
    q: 'Where can I verify my formed NEXUS MIND?',
    a: 'On explorer.hacash.org and on the HACD Launchpad page after formation is confirmed on-chain.',
  },
]

export default function Issuance() {
  return (
    <main className="min-h-screen bg-bg grid-scanline">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="border-l-2 border-accent pl-6 mb-6">
          <span className="font-mono text-xs text-accent tracking-widest">
            // ISSUANCE & FORMATION RULES
          </span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
          Real PoW formation cost.<br />
          <span className="text-accent">Permanent on-chain identity.</span>
        </h1>
        <p className="font-mono text-textmuted text-sm max-w-lg leading-relaxed">
          NEXUS MIND is a PoW-anchored AI trading agent identity NFT collection
          formed through HACD Stack. Each identity is backed by one HACD with
          real PoW formation cost. Here is exactly how it works.
        </p>
      </section>

      {/* Stack design table */}
      <section className="pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="border border-border bg-surface">
          <div className="border-b border-border px-6 py-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-accent" />
            <span className="font-mono text-xs text-textmuted tracking-widest">STACK_DESIGN.spec</span>
          </div>
          <div className="divide-y divide-border">
            {[
              { key: 'asset_type', value: 'NFT', note: 'Non-fungible — 1 unique identity per HACD' },
              { key: 'total_supply', value: '256', note: 'Hard-capped. No additional issuance ever.' },
              { key: 'hacd_lots', value: '256', note: '1 HACD = 1 Stack lot = 1 NEXUS MIND' },
              { key: 'units_per_lot', value: '1 NFT', note: 'One unique agent identity per diamond' },
              { key: 'stack_cost', value: '[HAC / HACD]', note: 'To be confirmed with HACD Labs' },
              { key: 'network_fee', value: 'Required', note: 'Standard Hacash network fee' },
              { key: 'phase_model', value: 'Public', note: 'All 256 lots open simultaneously' },
              { key: 'max_per_wallet', value: '4 HACD', note: 'Prevents single-wallet dominance' },
              { key: 'designated_address', value: 'None', note: 'No reserved or pre-allocated phase' },
              { key: 'removal_effect', value: 'Burn', note: 'Stack removed = NFT destroyed permanently' },
              { key: 'status', value: 'FORMING SOON', note: 'Pending HACD Labs Launchpad setup' },
            ].map(({ key, value, note }) => (
              <div key={key} className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="font-mono text-xs text-textmuted">{key}</span>
                <span
                  className="font-mono text-xs text-textprimary"
                  style={key === 'status' ? { color: '#FFB800' } : {}}
                >
                  {value}
                </span>
                <span className="font-mono text-xs text-textmuted">{note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formation math */}
      <section className="border-t border-border py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-accent tracking-widest mb-8">// FORMATION MATH</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              formula: 'total_supply',
              equation: '256 lots × 1 NFT',
              result: '= 256 NEXUS MIND',
            },
            {
              formula: 'formation_cost',
              equation: '256 × [stack_cost] HAC',
              result: '= [to be confirmed]',
            },
            {
              formula: 'min_per_participant',
              equation: '1 HACD + [cost] HAC',
              result: '+ network fee',
            },
          ].map(({ formula, equation, result }) => (
            <div key={formula} className="border border-border bg-surface p-5">
              <p className="font-mono text-xs text-textmuted mb-3">{formula}</p>
              <p className="font-mono text-sm text-textprimary mb-1">{equation}</p>
              <p className="font-mono text-sm text-accent">{result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to form */}
      <section className="border-t border-border py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-accent tracking-widest mb-8">// HOW TO FORM A NEXUS MIND</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: '01', label: 'Acquire HACD', desc: 'Get at least one HACD diamond. Your inscription determines your archetype.' },
            { step: '02', label: 'Prepare HAC', desc: 'Ensure you have enough HAC for stack cost and the network fee.' },
            { step: '03', label: 'Go to Launchpad', desc: 'Open the NEXUS MIND collection on the HACD Launchpad.' },
            { step: '04', label: 'Stack your HACD', desc: 'Enter your HACD inscription and confirm the Stack transaction.' },
            { step: '05', label: 'Identity formed', desc: 'Your NEXUS MIND is formed on-chain. Verify on explorer.hacash.org.' },
          ].map(({ step, label, desc }) => (
            <div key={step} className="border border-border bg-surface p-4">
              <div className="font-mono text-accent text-xs mb-3">[{step}]</div>
              <p className="font-display font-semibold text-sm text-textprimary mb-2">{label}</p>
              <p className="font-mono text-xs text-textmuted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Archetype distribution */}
      <section className="border-t border-border py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-accent tracking-widest mb-8">// ARCHETYPE DISTRIBUTION</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Momentum', count: 80, color: '#00FF9C', pct: '31.25%' },
            { name: 'Contrarian', count: 64, color: '#FF6B6B', pct: '25%' },
            { name: 'Arbitrageur', count: 64, color: '#7B61FF', pct: '25%' },
            { name: 'Sentinel', count: 48, color: '#FFB800', pct: '18.75%' },
          ].map(({ name, count, color, pct }) => (
            <div key={name} className="border bg-surface p-4" style={{ borderColor: color + '44' }}>
              <p className="font-mono text-xs mb-3" style={{ color }}>{name.toUpperCase()}</p>
              <p className="font-display font-bold text-2xl text-textprimary">{count}</p>
              <p className="font-mono text-xs text-textmuted mt-1">{pct} of supply</p>
              {/* Bar */}
              <div className="mt-3 h-1 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: pct, background: color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-accent tracking-widest mb-8">// FAQ</p>
        <div className="space-y-0 border border-border divide-y divide-border">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="p-6">
              <p className="font-display font-medium text-sm text-textprimary mb-3">
                <span className="text-accent font-mono mr-2">Q.</span>{q}
              </p>
              <p className="font-mono text-xs text-textmuted leading-relaxed pl-6">
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Risk disclosure */}
      <section className="border-t border-border py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="border border-border/50 bg-surface/50 p-6">
          <p className="font-mono text-xs text-textmuted tracking-widest mb-3">RISK DISCLOSURE</p>
          <p className="font-mono text-xs text-textmuted leading-relaxed">
            NEXUS MIND NFTs are Stack Assets formed through the HACD protocol, not investment products.
            No price, liquidity, listing, trading return, or AI performance outcome is guaranteed.
            Formation cost is non-refundable. Future utility features are planned and not yet live.
            Participants should understand the HACD Stack protocol before participating.
            This is a draft structure pending HACD Labs review and final issuer confirmation.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
