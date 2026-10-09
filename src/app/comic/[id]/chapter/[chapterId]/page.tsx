import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import ReaderHistoryTracker from '@/components/ReaderHistoryTracker'

export default async function ChapterReader({ params }: { params: Promise<{ id: string, chapterId: string }> }) {
  const resolvedParams = await params
  const comicId = parseInt(resolvedParams.id)
  const chapterId = parseInt(resolvedParams.chapterId)

  const [chapter, allChapters] = await Promise.all([
    prisma.chapter.findUnique({
      where: { id: chapterId },
      include: {
        comic: true,
        pages: { orderBy: { pageOrder: 'asc' } }
      }
    }),
    prisma.chapter.findMany({
      where: { comicId },
      orderBy: { chapterNumber: 'desc' },
      select: { id: true, chapterNumber: true, title: true }
    })
  ])

  if (!chapter) return notFound()

  // Get previous and next chapters
  const prevChapter = await prisma.chapter.findFirst({
    where: { comicId, chapterNumber: { lt: chapter.chapterNumber } },
    orderBy: { chapterNumber: 'desc' }
  })
  
  const nextChapter = await prisma.chapter.findFirst({
    where: { comicId, chapterNumber: { gt: chapter.chapterNumber } },
    orderBy: { chapterNumber: 'asc' }
  })

  const renderNavBar = (isTop = true) => (
    <div className={`bg-surface-container-low border-x border-outline-variant/30 p-3 sm:p-4 flex items-center justify-between gap-2 max-w-[540px] mx-auto ${
      isTop ? 'sticky top-16 z-40 border-b shadow-2xl backdrop-blur-md bg-surface-container-low/95' : 'border-t mt-6 rounded-b-2xl'
    }`}>
      {/* Prev button */}
      <Link
        href={prevChapter ? `/comic/${comicId}/chapter/${prevChapter.id}` : '#'}
        className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full font-label-md text-label-md font-bold transition-all ${
          prevChapter
            ? 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest hover:text-primary'
            : 'opacity-30 text-outline pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
        <span className="hidden sm:inline">Prev Chapter</span>
      </Link>

      {/* Middle info & Series Link */}
      <div className="flex items-center gap-2">
        <Link
          href={`/comic/${comicId}`}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-surface-container text-on-surface hover:text-primary hover:bg-surface-container-high font-label-md text-label-md transition-colors"
          title="Back to series"
        >
          <span className="material-symbols-outlined text-[16px] text-primary">menu_book</span>
          <span className="truncate max-w-[140px] sm:max-w-[220px]">
            Ch. {chapter.chapterNumber}
          </span>
        </Link>
      </div>

      {/* Next button */}
      <Link
        href={nextChapter ? `/comic/${comicId}/chapter/${nextChapter.id}` : '#'}
        className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full font-label-md text-label-md font-bold transition-all ${
          nextChapter
            ? 'bg-primary text-on-primary hover:bg-primary-container shadow-lg shadow-primary/30'
            : 'opacity-30 text-outline pointer-events-none bg-surface-container'
        }`}
      >
        <span className="hidden sm:inline">Next Chapter</span>
        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </Link>
    </div>
  )

  return (
    <div className="max-w-[540px] mx-auto -mt-6 px-2 sm:px-0">
      <ReaderHistoryTracker 
        comicId={comicId} 
        comicTitle={chapter.comic.title} 
        chapterId={chapterId} 
        chapterNumber={chapter.chapterNumber} 
        coverUrl={chapter.comic.coverUrl}
      />
      
      {/* Header Info */}
      <div className="py-6 text-center">
        <Link
          href={`/comic/${comicId}`}
          className="font-label-sm text-label-sm text-outline hover:text-primary uppercase tracking-widest inline-flex items-center gap-1 mb-1 transition-colors"
        >
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          <span>{chapter.comic.title}</span>
        </Link>
        <h1 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
          Chapter {chapter.chapterNumber} {chapter.title ? `- ${chapter.title}` : ''}
        </h1>
      </div>
      
      {renderNavBar(true)}
      
      {/* Webtoon Vertical Reader - 540px Native Sharpness */}
      <div 
        className="bg-[#0e0e0e] min-h-screen border-x border-outline-variant/30 shadow-2xl p-0 m-0 overflow-hidden"
        style={{
          maxWidth: '540px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {chapter.pages.map(page => (
          <img 
            key={page.id} 
            src={page.imageUrl} 
            alt={`Page ${page.pageOrder}`} 
            className="reader-page-image select-none"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
            decoding="async"
          />
        ))}
        {chapter.pages.length === 0 && (
          <div className="py-24 text-center text-outline font-body-md">
            <span className="material-symbols-outlined text-[48px] text-outline mb-2">auto_stories</span>
            <p>No pages uploaded for this chapter yet.</p>
          </div>
        )}
      </div>
      
      {renderNavBar(false)}

      {/* Quick Chapter Selector at Bottom */}
      <div className="bg-surface-container-low rounded-2xl p-5 mt-6 border border-outline-variant/20 text-center shadow-lg">
        <h3 className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-3">
          Jump to Chapter
        </h3>
        <div className="flex flex-wrap justify-center gap-2 max-h-48 overflow-y-auto p-1">
          {allChapters.map(ch => (
            <Link
              key={ch.id}
              href={`/comic/${comicId}/chapter/${ch.id}`}
              className={`font-label-md text-label-md px-3 py-1.5 rounded-full font-semibold transition-colors ${
                ch.id === chapterId
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high hover:text-primary'
              }`}
            >
              Ch. {ch.chapterNumber}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
