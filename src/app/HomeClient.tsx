"use client"
import { useState } from 'react'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import HeroBannerCarousel from '@/components/HeroBannerCarousel'

interface ComicWithChapters {
  id: number
  title: string
  coverUrl: string
  synopsis: string
  author: string
  status: string
  releaseYear: number
  genres: string
  chapters: {
    id: number
    chapterNumber: number
    title: string | null
    releaseDate: Date | string
  }[]
}

interface HomeClientProps {
  featuredComics: ComicWithChapters[]
  latestComics: ComicWithChapters[]
  popularComics: ComicWithChapters[]
}

export default function HomeClient({ featuredComics, latestComics, popularComics }: HomeClientProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([])

  const toggleBookmark = (comicId: number) => {
    setBookmarkedIds((prev) => {
      const exists = prev.includes(comicId)
      const next = exists ? prev.filter((id) => id !== comicId) : [...prev, comicId]
      try {
        const comic = featuredComics.find((c) => c.id === comicId) || latestComics.find((c) => c.id === comicId)
        if (comic) {
          const stored = JSON.parse(localStorage.getItem('abyss_history') || '[]')
          if (exists) {
            const filtered = stored.filter((b: any) => b.comicId !== comicId)
            localStorage.setItem('abyss_history', JSON.stringify(filtered))
          } else {
            stored.unshift({
              comicId: comic.id,
              comicTitle: comic.title,
              coverUrl: comic.coverUrl,
              lastReadChapterId: comic.chapters[0]?.id || 1,
              lastReadChapterNumber: comic.chapters[0]?.chapterNumber || 1,
              timestamp: Date.now()
            })
            localStorage.setItem('abyss_history', JSON.stringify(stored))
          }
        }
      } catch (e) {
        console.error(e)
      }
      return next
    })
  }

  // Filter latest comics by category tab
  const filteredComics = latestComics.filter((comic) => {
    if (activeCategory === 'All') return true
    if (activeCategory === 'Manhwa') return comic.genres.toLowerCase().includes('action') || comic.genres.toLowerCase().includes('fantasy')
    if (activeCategory === 'Manga') return comic.genres.toLowerCase().includes('comedy') || comic.genres.toLowerCase().includes('slice')
    if (activeCategory === 'Manhua') return comic.genres.toLowerCase().includes('murim') || comic.genres.toLowerCase().includes('martial')
    return true
  })

  const rank1 = popularComics[0]
  const rankRest = popularComics.slice(1, 7)

  return (
    <div className="flex flex-col w-full">
      {/* 1. TOP FEATURED COMIC BANNER (SMOOTH AUTO-PLAYING HERO CAROUSEL) */}
      <HeroBannerCarousel comics={featuredComics} title="Popular Today" />

      {/* 2. QUICK GENRE & STATUS CHIP CAROUSEL */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider whitespace-nowrap pl-1 pr-2">
            სწრაფი ფილტრი:
          </span>
          <Link
            href="/comics"
            className="px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md whitespace-nowrap shadow-sm hover:opacity-90 transition-opacity"
          >
            ყველა
          </Link>
          <Link
            href="/comics?genre=Action"
            className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md whitespace-nowrap transition-colors"
          >
            🔥 S-რანგის ბუნაგები
          </Link>
          <Link
            href="/comics?genre=Murim"
            className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md whitespace-nowrap transition-colors"
          >
            კულტივაცია და მურიმი
          </Link>
          <Link
            href="/comics?genre=Regression"
            className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md whitespace-nowrap transition-colors"
          >
            რეინკარნაცია
          </Link>
          <Link
            href="/comics?genre=Fantasy"
            className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md whitespace-nowrap transition-colors"
          >
            რომანტიკა
          </Link>
          <Link
            href="/comics?status=Completed"
            className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md whitespace-nowrap transition-colors"
          >
            დასრულებული სერიები
          </Link>
          <Link
            href="/comics?sort=popular"
            className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high font-label-md text-label-md whitespace-nowrap transition-colors"
          >
            ჩვენი რჩეული ★
          </Link>
        </div>
      </section>

      {/* 3. MAIN DUAL-COLUMN LAYOUT (9 cols Updates + 3 cols Sidebar) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: 9-COLUMN LATEST RELEASES */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
            {/* Section Header with Category Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-surface-container-high/40">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-primary"></span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">ბოლო განახლებები</h2>
                <span className="px-2 py-0.5 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm">
                  {filteredComics.length} სერია
                </span>
              </div>

              {/* Filter Navigation Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-surface-container-low" id="category-tab-group">
                {[
                  { id: 'All', label: 'ყველა' },
                  { id: 'Manhwa', label: 'მანჰვა' },
                  { id: 'Manga', label: 'მანგა' },
                  { id: 'Manhua', label: 'მანჰუა' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`category-btn px-3.5 py-1 rounded-lg font-label-md text-label-md transition-all ${
                      activeCategory === cat.id
                        ? 'bg-surface-container-high text-primary shadow-sm font-bold'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
                <button
                  className="p-1 rounded-lg text-outline hover:text-primary transition-colors ml-1"
                  onClick={() => window.location.reload()}
                  title="Refresh Releases"
                >
                  <span className="material-symbols-outlined text-[18px]">sync</span>
                </button>
              </div>
            </div>

            {/* COMIC CARD GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
              {filteredComics.map((comic, idx) => (
                <div
                  key={comic.id}
                  className="group flex flex-col rounded-2xl bg-surface-container-low overflow-hidden hover:bg-surface-container transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  {/* Entire Top Cover & Title Area Wrapped in Routing Link */}
                  <Link
                    href={`/comic/${comic.id}`}
                    className="block group/card focus:outline-none cursor-pointer"
                  >
                    {/* Cover Poster 3:4 Aspect */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={comic.coverUrl}
                        alt={comic.title}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>

                      {/* Badges */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-amber-400 font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        9.{9 - (idx % 4)}
                      </div>

                      {comic.chapters[0] && (
                        <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-md">
                          Ch. {comic.chapters[0].chapterNumber}
                        </div>
                      )}

                      <div className="absolute bottom-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest/90 text-primary font-label-sm text-label-sm">
                          {comic.genres.includes('Murim') ? 'Murim' : comic.genres.includes('Martial') ? 'Manhua' : 'Manhwa'}
                        </span>
                      </div>
                    </div>

                    {/* Title & Metadata */}
                    <div className="p-3.5 pb-1">
                      <h3 className="font-title-md text-title-md text-on-surface font-bold group-hover:text-primary transition-colors line-clamp-1">
                        {comic.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-outline truncate mt-0.5">
                        {comic.author} • {comic.genres}
                      </p>
                    </div>
                  </Link>

                  {/* Chapter Buttons Section */}
                  <div className="p-3.5 pt-2 flex flex-col flex-1 justify-end">
                      {comic.chapters.slice(0, 2).map((ch, chIdx) => (
                        <Link
                          key={ch.id}
                          className={`flex items-center justify-between rounded-xl transition-colors group/ch ${
                            chIdx === 0
                              ? 'px-3 py-2 bg-surface-container-high/80 hover:bg-secondary-container hover:text-on-secondary-container'
                              : 'px-3 py-1.5 bg-surface-container-high/40 hover:bg-surface-container-high'
                          }`}
                          href={`/comic/${comic.id}/chapter/${ch.id}`}
                        >
                          <span
                            className={`${
                              chIdx === 0
                                ? 'font-label-md text-label-md text-on-surface group-hover/ch:text-primary font-medium'
                                : 'font-label-sm text-label-sm text-on-surface-variant group-hover/ch:text-primary'
                            }`}
                          >
                            თავი {ch.chapterNumber}
                          </span>
                          <span
                            className={`font-label-sm text-label-sm text-outline ${
                              chIdx === 0 ? 'group-hover/ch:text-secondary-fixed-dim' : ''
                            }`}
                          >
                            {formatDistanceToNow(new Date(ch.releaseDate), { addSuffix: true })}
                          </span>
                        </Link>
                      ))}

                      {comic.chapters.length === 0 && (
                        <span className="text-xs text-outline text-center py-2">თავები არ არის დამატებული</span>
                      )}
                    </div>
                  </div>
              ))}
            </div>

            {/* Pagination / Endless Load Trigger */}
            <div className="pt-4 flex items-center justify-center">
              <Link
                href="/comics"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-all shadow-md group"
              >
                <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform duration-500">
                  expand_circle_down
                </span>
                <span>ყველა კომიქსის ნახვა</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: 3-COLUMN SIDEBAR "POPULAR TODAY" */}
          <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6 sticky top-20">
            {/* Sidebar Container Card */}
            <div className="rounded-2xl bg-surface-container-low p-5 shadow-xl flex flex-col gap-5">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/60">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    whatshot
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">დღეს პოპულარული</h3>
                </div>
                <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                  24 სთ ლიდერბორდი
                </span>
              </div>

              {/* Rank List */}
              <div className="flex flex-col gap-3.5">
                {/* RANK #1 EXPANDED HIGHLIGHT */}
                {rank1 && (
                  <Link
                    href={`/comic/${rank1.id}`}
                    className="group relative rounded-xl bg-surface-container p-3 flex gap-3.5 items-center hover:bg-surface-container-high transition-all shadow-md block cursor-pointer"
                  >
                    {/* Giant Rank Badge */}
                    <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-primary text-on-primary font-headline-sm text-headline-sm font-black flex items-center justify-center shadow-[0_0_12px_rgba(221,183,255,0.7)] z-10">
                      1
                    </div>
                    {/* Cover Thumbnail */}
                    <div className="w-16 h-22 rounded-lg overflow-hidden bg-surface-container-lowest shrink-0 shadow">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        src={rank1.coverUrl}
                        alt={rank1.title}
                      />
                    </div>
                    {/* Metadata */}
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                        ტოპ ფენომენი
                      </span>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold truncate group-hover:text-primary transition-colors">
                        {rank1.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 font-body-sm text-body-sm text-on-surface-variant">
                        <span className="inline-flex items-center gap-0.5 text-amber-400 font-medium">
                          <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            star
                          </span>
                          9.9
                        </span>
                        <span>•</span>
                        <span>1.4M ნახვა</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        {rank1.chapters[0] && (
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm">
                            თავი {rank1.chapters[0].chapterNumber}
                          </span>
                        )}
                        <span className="font-label-sm text-label-sm text-emerald-400 font-medium">▲ +4 ადგილი</span>
                      </div>
                    </div>
                  </Link>
                )}

                {/* RANK #2 TO #7 */}
                {rankRest.map((comic, idx) => {
                  const rankNum = idx + 2
                  return (
                    <Link
                      key={comic.id}
                      href={`/comic/${comic.id}`}
                      className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-container transition-colors"
                    >
                      <span
                        className={`w-6 h-6 rounded-md font-label-md text-label-md font-bold flex items-center justify-center shrink-0 shadow-sm ${
                          rankNum === 2
                            ? 'bg-secondary text-on-secondary'
                            : 'bg-surface-container-highest text-on-surface'
                        }`}
                      >
                        {rankNum}
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="font-body-md text-body-md text-on-surface font-semibold truncate block group-hover:text-primary transition-colors">
                          {comic.title}
                        </span>
                        <div className="flex items-center gap-2 font-body-sm text-body-sm text-outline">
                          <span>თავი {comic.chapters[0]?.chapterNumber || 1}</span>
                          <span>•</span>
                          <span className="text-amber-400">9.{9 - idx} ★</span>
                          <span>•</span>
                          <span>{900 - idx * 60}K</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-outline text-[16px] group-hover:text-primary transition-colors">
                        chevron_right
                      </span>
                    </Link>
                  )
                })}
              </div>

              {/* Bottom CTA to Full Rankings */}
              <div className="pt-2">
                <Link
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-semibold transition-all text-center"
                  href="/comics"
                >
                  <span>ყველა რეიტინგის ნახვა (ტოპ 100)</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>


          </aside>
        </div>
      </section>
    </div>
  )
}
