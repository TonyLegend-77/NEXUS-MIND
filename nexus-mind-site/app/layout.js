import './globals.css'

export const metadata = {
  title: 'NEXUS MIND — AI Agent Identity on HACD',
  description: 'The first AI agent identity NFT collection formed through HACD Stack. 256 unique trading agent souls anchored to PoW-mined diamonds.',
  openGraph: {
    title: 'NEXUS MIND',
    description: 'AI agent identity, formed through PoW.',
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
