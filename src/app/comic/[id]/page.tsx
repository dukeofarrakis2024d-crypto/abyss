import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { formatDistanceToNow } from 'date-fns'

export const instant = false;
export default async function ComicDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const comic = await prisma.comic.findUnique({
    where: { id: parseInt(resolvedParams.id) },
    include: {
      chapters: {
        orderBy: { chapterNumber: 'desc' }
      }
    }
  })

  if (!comic) return notFound()

  const genres = comic.genres.split(',').map(g => g.trim()).filter(Boolean)
  const firstChapter = comic.chapters[comic.chapters.length - 1]
  const latestChapter = comic.chapters[0]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 font-label-md text-label-md text-outline hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>მთავარ გვერდზე დაბრუნება</span>
        </Link>
      </div>

      {/* Hero Header with Ambient Violet Glow */}
      <div className="relative rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/30 mb-8 shadow-2xl">
        {/* Ambient Glow Aura */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary-container/25 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Blurred background backdrop */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 blur-3xl scale-110 pointer-events-none"
          style={{ backgroundImage: `url(${comic.coverUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent pointer-events-none"></div>

        {/* Content Details */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row gap-8 items-start">
          {/* Cover Art */}
          <div className="w-52 sm:w-64 shrink-0 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-outline-variant/40 bg-surface-container">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src={comic.coverUrl}
                alt={comic.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-primary text-on-primary font-label-sm text-label-sm font-bold px-2.5 py-0.5 rounded-full shadow-md uppercase">
                  მანჰვა
                </span>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="flex-1 w-full flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`font-label-sm text-label-sm px-3 py-1 rounded-full font-bold ${
                comic.status === 'Completed'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-primary text-on-primary shadow-sm'
              }`}>
                {comic.status === 'Completed' ? 'დასრულებული' : 'მიმდინარე'}
              </span>
              <span className="font-label-sm text-label-sm bg-surface-container-high/90 text-on-surface-variant px-3 py-1 rounded-full backdrop-blur-md">
                {comic.releaseYear}
              </span>
              <div className="flex items-center gap-1 font-label-sm text-label-sm bg-surface-container-highest/80 text-primary px-3 py-1 rounded-full backdrop-blur-md font-bold">
                <span className="material-symbols-outlined text-amber-400 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span>9.{80 + (comic.id % 19)} რეიტინგი</span>
              </div>
            </div>

            <h1 className="font-display text-display text-on-surface font-extrabold tracking-tight drop-shadow-md">
              {comic.title}
            </h1>
            
            <p className="font-body-md text-body-md text-outline">
              ავტორი: <span className="text-on-surface font-semibold">{comic.author}</span>
            </p>

            {/* Genre tags */}
            <div className="flex flex-wrap gap-2">
              {genres.map((g, i) => (
                <span key={i} className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant">
                  {g}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {firstChapter && (
                <Link
                  href={`/comic/${comic.id}/chapter/${firstChapter.id}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-[0_0_24px_rgba(221,183,255,0.45)] hover:bg-primary-container transition-all transform hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined">auto_stories</span>
                  პირველი თავის წაკითხვა
                </Link>
              )}
              {latestChapter && latestChapter.id !== firstChapter?.id && (
                <Link
                  href={`/comic/${comic.id}/chapter/${latestChapter.id}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-surface-container-high text-on-surface hover:text-primary font-label-lg text-label-lg transition-all hover:bg-surface-container-highest"
                >
                  ბოლო (თავი {latestChapter.chapterNumber})
                </Link>
              )}
            </div>

            {/* Synopsis */}
            <div className="bg-surface-container-lowest/80 rounded-2xl p-5 border border-outline-variant/20 mt-2">
              <h3 className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-2">
                აღწერა
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line">
                {comic.synopsis}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapters Section */}
      <div className="bg-surface-container-low rounded-2xl border border-outline-variant/20 p-6 md:p-8 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-surface-container-high/40 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 rounded-full bg-primary"></span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              თავები ({comic.chapters.length})
            </h2>
          </div>
          <span className="font-label-sm text-label-sm text-outline">დალაგებულია ახლიდან ძველისკენ</span>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {comic.chapters.map(chap => (
            <Link
              key={chap.id}
              href={`/comic/${comic.id}/chapter/${chap.id}`}
              className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container border border-outline-variant/10 hover:border-primary/40 hover:bg-surface-container-high transition-all group shadow-sm"
            >
              <div className="min-w-0 pr-2">
                <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors block truncate">
                  თავი {chap.chapterNumber}
                </span>
                {chap.title && (
                  <span className="font-body-sm text-body-sm text-outline block truncate">
                    {chap.title}
                  </span>
                )}
              </div>
              <span className="font-label-sm text-label-sm text-outline shrink-0">
                {formatDistanceToNow(new Date(chap.releaseDate), { addSuffix: true })}
              </span>
            </Link>
          ))}
          {comic.chapters.length === 0 && (
            <div className="col-span-full py-12 text-center text-outline font-body-md">
              თავები არ არის დამატებული.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
