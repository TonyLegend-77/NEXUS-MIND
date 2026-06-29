import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ArchetypeCard from '../../components/ArchetypeCard'

export const metadata = {
  title: 'Archetypes — NEXUS MIND',
  description: 'Four AI trading agent archetypes formed on HACD Stack. Momentum, Contrarian, Arbitrageur, Sentinel.',
}

const archetypeDetails = [
  {
    name: 'Momentum',
    color: '#00FF9C',
    symbol: '▲',
    count: 80,
    signal: 'BULLISH BIAS',
    trait: 'Trend-following. High conviction. Rides the wave.',
    description:
      'The Momentum agent reads the market as a directional force. It identifies trending conditions, locks onto the dominant flow, and holds with conviction. Momentum agents are not reactive — they are committed. When the trend is alive, the Momentum agent is in position. When it breaks, the agent reassesses. No second-guessing. No noise.',
    characteristics: [
      'Trend confirmation before entry',
      'High time-frame bias alignment',
      'Conviction holding under pullbacks',
      'Exits on trend structure break',
    ],
  },
  {
    name: 'Contrarian',
    color: '#FF6B6B',
    symbol: '◆',
    count: 64,
    signal: 'INVERSE BIAS',
    trait: 'Mean-reversion. Counter-narrative. Fades the crowd.',
    description:
      'The Contrarian agent thrives where consensus is wrong. It watches for overextension, euphoria, and capitulation — and acts in the opposite direction. Where the crowd sees certainty, the Contrarian sees opportunity. It operates on the thesis that extreme moves revert, narratives overshoot, and the market is always wrong at the edges.',
    characteristics: [
      'Overextension and exhaustion signals',
      'Counter-trend entry at extremes',
      'Mean-reversion target logic',
      'Tight risk management on failed reversals',
    ],
  },
  {
    name: 'Arbitrageur',
    color: '#7B61FF',
    symbol: '⟷',
    count: 64,
    signal: 'NEUTRAL BIAS',
    trait: 'Cross-market. Efficiency-seeking. Closes the gap.',
    description:
      'The Arbitrageur agent has no directional bias — it has a structural bias. It identifies mispricings, spreads, and inefficiencies across markets, timeframes, and instruments, and positions to profit when the gap closes. It does not predict direction. It identifies imbalance. The market always corrects itself. The Arbitrageur is simply first in line.',
    characteristics: [
      'Cross-market spread monitoring',
      'Funding rate and basis tracking',
      'Market-neutral position construction',
      'Fast execution on convergence signals',
    ],
  },
  {
    name: 'Sentinel',
    color: '#FFB800',
    symbol: '◉',
    count: 48,
    signal: 'RISK BIAS',
    trait: 'Risk-monitoring. Defensive posture. Guards the position.',
    description:
      'The Sentinel agent does not trade. It protects. It monitors portfolio risk, macro signals, liquidity conditions, and volatility regimes — and intervenes when exposure exceeds acceptable parameters. The rarest archetype in the collection. A Sentinel is not about making money. It is about not losing it.',
    characteristics: [
      'Portfolio-level risk monitoring',
      'Volatility regime detection',
      'Drawdown threshold alerts',
      'Macro and liquidity event scanning',
    ],
  },
]

export default function Archetypes() {
  return (
    <main className="min-h-screen bg-bg grid-scanline">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="border-l-2 border-accent pl-6 mb-6">
          <span className="font-mono text-xs text-accent tracking-widest">
            // AGENT ARCHETYPES
          </span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
          Four archetypes.<br />
          <span className="text-accent">One PoW-anchored identity.</span>
        </h1>
        <p className="font-mono text-textmuted text-sm max-w-lg leading-relaxed">
          Every NEXUS MIND is a PoW-anchored AI trading agent identity formed
          through HACD Stack. Each identity carries a permanent on-chain archetype
          determined by the inscription of the HACD diamond it was formed on.
        </p>
      </section>

      {/* Archetype cards grid */}
      <section className="pb-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {['Momentum', 'Contrarian', 'Arbitrageur', 'Sentinel'].map((name) => (
            <ArchetypeCard key={name} name={name} compact />
          ))}
        </div>
      </section>

      {/* Detailed archetype sections */}
      <section className="border-t border-border px-4 sm:px-6 max-w-6xl mx-auto">
        {archetypeDetails.map((archetype, i) => (
          <div
            key={archetype.name}
            className={`py-16 ${i < archetypeDetails.length - 1 ? 'border-b border-border' : ''}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl" style={{ color: archetype.color }}>
                    {archetype.symbol}
                  </span>
                  <div>
                    <h2
                      className="font-display font-bold text-2xl tracking-wider"
                      style={{ color: archetype.color }}
                    >
                      {archetype.name.toUpperCase()}
                    </h2>
                    <span
                      className="font-mono text-xs px-2 py-0.5 border"
                      style={{
                        color: archetype.color,
                        borderColor: archetype.color + '44',
                        background: archetype.color + '11',
                      }}
                    >
                      {archetype.signal}
                    </span>
                  </div>
                </div>

                <p className="font-mono text-textmuted text-xs italic mb-4">
                  "{archetype.trait}"
                </p>

                <p className="font-mono text-textmuted text-sm leading-relaxed mb-6">
                  {archetype.description}
                </p>

                <div
                  className="font-mono text-xs px-3 py-1 border inline-block"
                  style={{
                    color: archetype.color,
                    borderColor: archetype.color + '44',
                  }}
                >
                  {archetype.count} of 256 agents
                </div>
              </div>

              {/* Right: characteristics */}
              <div
                className="border bg-surface p-6"
                style={{ borderColor: archetype.color + '33' }}
              >
                <p
                  className="font-mono text-xs tracking-widest mb-4"
                  style={{ color: archetype.color }}
                >
                  AGENT CHARACTERISTICS
                </p>
                <div className="space-y-3">
                  {archetype.characteristics.map((char, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span
                        className="font-mono text-xs mt-0.5 shrink-0"
                        style={{ color: archetype.color }}
                      >
                        [{String(idx + 1).padStart(2, '0')}]
                      </span>
                      <p className="font-mono text-xs text-textmuted leading-relaxed">
                        {char}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Inscription note */}
      <section className="border-t border-border py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="font-mono text-xs text-accent tracking-widest mb-4">// HOW ARCHETYPES ARE ASSIGNED</p>
          <h3 className="font-display font-semibold text-xl mb-4">
            Your inscription is your destiny.
          </h3>
          <p className="font-mono text-textmuted text-sm leading-relaxed mb-4">
            HACD diamonds carry unique 6-letter inscriptions generated from the
            characters WTYUIAHXVMEKBSZN. These inscriptions are determined by
            the PoW mining process — they cannot be chosen or predicted.
          </p>
          <p className="font-mono text-textmuted text-sm leading-relaxed">
            The inscription sequence maps to one of the four NEXUS MIND
            archetypes. This mapping is published before launch. Your diamond's
            name is your agent's soul.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
