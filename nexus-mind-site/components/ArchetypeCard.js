'use client'

const archetypeConfig = {
  Momentum: {
    color: '#00FF9C',
    symbol: '▲',
    trait: 'Trend-following. High conviction. Rides the wave.',
    count: 80,
    signal: 'BULLISH BIAS',
  },
  Contrarian: {
    color: '#FF6B6B',
    symbol: '◆',
    trait: 'Mean-reversion. Counter-narrative. Fades the crowd.',
    count: 64,
    signal: 'INVERSE BIAS',
  },
  Arbitrageur: {
    color: '#7B61FF',
    symbol: '⟷',
    trait: 'Cross-market. Efficiency-seeking. Closes the gap.',
    count: 64,
    signal: 'NEUTRAL BIAS',
  },
  Sentinel: {
    color: '#FFB800',
    symbol: '◉',
    trait: 'Risk-monitoring. Defensive posture. Guards the position.',
    count: 48,
    signal: 'RISK BIAS',
  },
}

export default function ArchetypeCard({ name, compact = false }) {
  const config = archetypeConfig[name]
  if (!config) return null

  return (
    <div
      className="relative border bg-surface overflow-hidden group"
      style={{ borderColor: config.color + '33' }}
    >
      {/* Scan line animation */}
      <div
        className="absolute top-0 bottom-0 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${config.color}22, transparent)`,
          animation: 'scan 2s linear infinite',
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2"
        style={{ borderColor: config.color }}
      />
      <div
        className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2"
        style={{ borderColor: config.color }}
      />

      <div className={compact ? 'p-4' : 'p-6'}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="font-mono text-2xl"
              style={{ color: config.color }}
            >
              {config.symbol}
            </span>
            <h3
              className={`font-display font-semibold tracking-wider mt-1 ${compact ? 'text-base' : 'text-lg'}`}
              style={{ color: config.color }}
            >
              {name.toUpperCase()}
            </h3>
          </div>
          <div
            className="font-mono text-xs px-2 py-0.5 border"
            style={{
              color: config.color,
              borderColor: config.color + '44',
              background: config.color + '11',
            }}
          >
            {config.signal}
          </div>
        </div>

        {/* Trait */}
        <p className={`text-textmuted font-mono leading-relaxed mb-4 ${compact ? 'text-xs' : 'text-sm'}`}>
          {config.trait}
        </p>

        {/* Supply */}
        <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: config.color + '22' }}>
          <span className="font-mono text-xs text-textmuted">SUPPLY</span>
          <span className="font-mono text-xs" style={{ color: config.color }}>
            {config.count} / 256 AGENTS
          </span>
        </div>
      </div>
    </div>
  )
}

export { archetypeConfig }
