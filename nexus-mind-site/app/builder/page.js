import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Builder — NEXUS MIND',
  description: 'The builder behind NEXUS MIND — AI trading infrastructure, CycleMind, BitEdge.',
}

export default function Builder() {
  return (
    <main className="min-h-screen bg-bg grid-scanline">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="border-l-2 border-accent pl-6 mb-6">
          <span className="font-mono text-xs text-accent tracking-widest">
            // THE BUILDER
          </span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">
          Built by someone who<br />
          <span className="text-accent">already ships AI.</span>
        </h1>
        <p className="font-mono text-textmuted text-sm max-w-lg leading-relaxed">
          NEXUS MIND is not a whitepaper project. It comes from a builder
          with two live AI trading platforms, built solo on a tablet.
        </p>
      </section>

      {/* Builder intro */}
      <section className="pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-textmuted text-sm leading-relaxed mb-4">
              I build AI-powered crypto trading tools. Not prototypes — live platforms
              with real backends, real AI agent logic, and real users.
            </p>
            <p className="font-mono text-textmuted text-sm leading-relaxed mb-4">
              I kept asking: where does the AI agent live on-chain? Not just a token.
              An identity. Something with provenance. Something that cannot be inflated
              or duplicated. Something backed by real formation cost.
            </p>
            <p className="font-mono text-textprimary text-sm leading-relaxed mb-6">
              HACD Stack answered that question. NEXUS MIND is the result.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://x.com/cyclemindarc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs border border-border text-textmuted px-3 py-2 hover:border-accent hover:text-accent transition-all duration-200"
              >
                X @cyclemindarc ↗
              </a>
              <a
                href="https://x.com/defitony0x"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs border border-border text-textmuted px-3 py-2 hover:border-accent hover:text-accent transition-all duration-200"
              >
                X @defitony0x ↗
              </a>
              <a
                href="https://t.me/defitony0x"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs border border-border text-textmuted px-3 py-2 hover:border-accent hover:text-accent transition-all duration-200"
              >
                Telegram ↗
              </a>
            </div>
          </div>

          {/* Terminal bio */}
          <div className="border border-border bg-surface font-mono text-xs">
            <div className="border-b border-border px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-accent/60" />
              <span className="text-textmuted ml-2 tracking-widest">BUILDER_PROFILE.log</span>
            </div>
            <div className="p-4 space-y-2 text-textmuted">
              <p><span className="text-accent">→</span> role: Independent AI Builder</p>
              <p><span className="text-accent">→</span> platform: Android tablet, browser-only</p>
              <p><span className="text-accent">→</span> frontend: React / Next.js / Vercel</p>
              <p><span className="text-accent">→</span> backend: FastAPI / Railway</p>
              <p><span className="text-accent">→</span> ai_engine: Claude Sonnet</p>
              <p><span className="text-accent">→</span> crypto_apis: Bitget, CoinGecko</p>
              <p><span className="text-purple">→</span> live_products: CycleMind, BitEdge</p>
              <p><span className="text-accent">→</span> x: @cyclemindarc / @defitony0x</p>
              <p><span className="text-accent">→</span> telegram: @defitony0x</p>
              <p><span className="text-purple">→</span> building: NEXUS MIND on HACD Stack</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live projects */}
      <section className="border-t border-border py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-accent tracking-widest mb-8">// LIVE INFRASTRUCTURE</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CycleMind */}
          <div className="border border-border bg-surface p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-accent tracking-widest">LIVE</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-textprimary">CycleMind</h3>
              </div>
              <a
                href="https://cyclemind.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-textmuted hover:text-accent transition-colors"
              >
                VISIT ↗
              </a>
            </div>
            <p className="font-mono text-xs text-textmuted leading-relaxed mb-4">
              AI-powered crypto trading agent platform. Full-stack FastAPI backend
              on Railway, Vercel frontend. Modules: Dashboard, Perps, Arb Scanner,
              Guardian Mode, Market Pulse, Control Room.
            </p>
            <div className="flex flex-wrap gap-2">
              {['FastAPI', 'Claude Sonnet', 'Bitget API', 'Railway', 'Vercel'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-textmuted border border-border px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* BitEdge */}
          <div className="border border-border bg-surface p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-accent tracking-widest">LIVE</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-textprimary">BitEdge</h3>
              </div>
              <a
                href="https://bitedge.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-textmuted hover:text-accent transition-colors"
              >
                VISIT ↗
              </a>
            </div>
            <p className="font-mono text-xs text-textmuted leading-relaxed mb-4">
              AI crypto backtesting and strategy platform. 5 years of real OHLCV data.
              8-signal AI scoring system: RSI, MACD, EMA, volume, momentum, Fear & Greed,
              Bitget long/short ratio, funding rate.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'FastAPI', 'TradingView Charts', 'Bitget API', 'Claude Sonnet'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-textmuted border border-border px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why NEXUS MIND */}
      <section className="border-t border-border py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-accent tracking-widest mb-8">// WHY I BUILT NEXUS MIND</p>
        <div className="max-w-2xl space-y-6">
          {[
            {
              label: 'The identity problem',
              text: 'AI agents in my trading platforms have personalities, strategies, logic. But on-chain? They are nothing. No identity. No provenance. No formation history. Just a pointer to code.',
            },
            {
              label: 'The air token problem',
              text: 'I watched AI agent tokens launch with zero backing, zero formation cost, massive hype. Gone in weeks. The problem is not AI agents — it is the lack of any credible identity layer.',
            },
            {
              label: 'Why HACD',
              text: 'HACD Stack gives every agent identity a real cost, a real name, a real on-chain history. The formation cost IS the credibility. You cannot print that. You cannot inflate it.',
            },
            {
              label: 'NEXUS MIND',
              text: '256 AI trading agents. 4 archetypes. 1 HACD per identity. Formed permanently on-chain. This is what AI agent identity should look like.',
            },
          ].map(({ label, text }) => (
            <div key={label} className="border-l border-border pl-6">
              <p className="font-mono text-xs text-accent tracking-widest mb-2">{label}</p>
              <p className="font-mono text-sm text-textmuted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HACD Labs */}
      <section className="border-t border-border py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-accent tracking-widest mb-6">// BUILT WITH HACD LABS</p>
        <div className="border border-border bg-surface p-6 max-w-2xl">
          <p className="font-mono text-xs text-textmuted leading-relaxed mb-4">
            NEXUS MIND is being built through the HACD Labs Incubator. The full
            8-document issuance package was prepared using the HACD AI Issuance Skill.
          </p>
          <p className="font-mono text-xs text-textmuted leading-relaxed mb-6">
            Stack configuration and Launchpad setup are being coordinated with HACD Labs.
            The collection launches before July 1, 2026 as part of the HACD Labs
            Incubator Season 2 via GrowStreams.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://hacd.it/incubator"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs border border-accent text-accent px-3 py-2 hover:bg-accent hover:text-bg transition-all duration-200"
            >
              HACD Incubator ↗
            </a>
            <a
              href="https://hacd.it/launchpad"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs border border-border text-textmuted px-3 py-2 hover:border-textmuted hover:text-textprimary transition-all duration-200"
            >
              HACD Launchpad ↗
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
