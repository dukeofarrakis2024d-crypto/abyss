import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ABYSS - Read Manga, Manhwa & Manhua Online',
  description: 'Next-generation sanctuary for webtoons, manga, and manhua enthusiasts. Distraction-free, nocturnal reading experience.',
}

export const instant = false;

import { getSession } from './actions/auth'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Outfit:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
        <Navbar session={session} />
        <main className="w-full pt-16 bg-background min-h-screen flex-grow">
          {children}
        </main>

        {/* Footer exactly from the user's design */}
        <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2.5">
                <img
                  src="/logo.png"
                  alt="Abyss Logo"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-extrabold tracking-wide text-xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  ABYSS
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-outline max-w-sm text-center md:text-left">
                Next-generation sanctuary for webtoons, manga, and manhua enthusiasts. Distraction-free, nocturnal reading experience.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/about">
                About Us
              </Link>
              <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/contact">
                Contact Us
              </Link>
              <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/terms">
                Terms of Service
              </Link>
              <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/copyright">
                Copyright policy
              </Link>
              <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/dmca">
                DMCA
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <a aria-label="Community Discord" className="p-2 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all" href="#">
                <span className="material-symbols-outlined">forum</span>
              </a>
              <a aria-label="Community Discussions" className="p-2 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all" href="#">
                <span className="material-symbols-outlined">groups</span>
              </a>
              <a aria-label="Feed & Updates" className="p-2 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all" href="#">
                <span className="material-symbols-outlined">rss_feed</span>
              </a>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-outline-variant/10 text-center font-body-sm text-body-sm text-outline">
            &copy; 2026 Abyss Comics. All rights reserved. Content belongs to their respective scanlators and creators.
          </div>
        </footer>
      </body>
    </html>
  )
}
