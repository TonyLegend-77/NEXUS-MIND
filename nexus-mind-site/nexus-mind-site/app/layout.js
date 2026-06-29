import './globals.css'

export const metadata = {
  title: 'NEXUS MIND — PoW-Anchored AI Agent Identity on HACD Stack',
  description: 'NEXUS MIND is a PoW-anchored AI trading agent identity NFT collection, formed through HACD Stack. Each identity is backed by one HACD, with real PoW formation cost and a permanent on-chain identity/archetype.',
  openGraph: {
    title: 'NEXUS MIND',
    description: 'PoW-anchored AI trading agent identity NFT collection, formed through HACD Stack.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg text-textprimary font-display antialiased">
        {children}
      </body>
    </html>
  )
}
