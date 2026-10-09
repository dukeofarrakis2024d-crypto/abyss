import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatDistanceToNow } from 'date-fns'

export const instant = false;
export default async function ComicsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; genre?: string; status?: string; sort?: string }>
}) {
  const params = await searchParams
  const search = params.search || ''
  const selectedGenre = params.genre || ''
  const selectedStatus = params.status || ''
  const sort = params.sort || 'latest'

  const genresList = [
    'All',
    'Action',
    'Adventure',
    'Fantasy',
    'Comedy',
    'Murim',
    'Martial Arts',
    'Regression',
    'Revenge',
    'Supernatural',
    'Magic',
    'Necromancy',
    'Romance'
  ]

  const statusList = ['All', 'Ongoing', 'Completed']

  // Query conditions
  const whereClause: any = {}
  if (search) {
    whereClause.title = { contains: search }
  }
  if (selectedGenre && selectedGenre !== 'All') {
    whereClause.genres = { contains: selectedGenre }
  }
  if (selectedStatus && selectedStatus !== 'All') {
    whereClause.status = selectedStatus
  }

  let orderBy: any = { updatedAt: 'desc' }
  if (sort === 'title') {
    orderBy = { title: 'asc' }
  } else if (sort === 'oldest') {
    orderBy = { createdAt: 'asc' }
  }

  const comics = await prisma.comic.findMany({
    where: whereClause,
    include: {
      chapters: {
        orderBy: { chapterNumber: 'desc' },
        take: 3
      }
    },
    orderBy
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Page Header */}
      <div className="mb-6 pb-4 border-b border-surface-container-high/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 rounded-full bg-primary"></span>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              სერიების კატალოგი
            </h1>
            <span className="px-2 py-0.5 rounded-md bg-surface-container-high text-primary font-label-sm text-label-sm">
              {comics.length} სათაური
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-outline mt-1">
            დაათვალიერეთ ჩვენი მანჰვას, მანგასა და მანჰუას სრული კოლექცია სწრაფი განახლებებით
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-2">
          {statusList.map(s => {
            const isSelected = (!selectedStatus && s === 'All') || selectedStatus === s
            const href = s === 'All'
              ? (selectedGenre ? `/comics?genre=${encodeURIComponent(selectedGenre)}` : '/comics')
              : `/comics?status=${encodeURIComponent(s)}${selectedGenre ? `&genre=${encodeURIComponent(selectedGenre)}` : ''}`

            return (
              <Link
                key={s}
                href={href}
                className={`px-3.5 py-1.5 rounded-full font-label-md text-label-md transition-colors ${
                  isSelected
                    ? 'bg-secondary-container text-on-secondary-container font-semibold shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {s}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Genre Pills Filter */}
      <div className="mb-8 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/20 shadow-md">
        <div className="flex items-center gap-2 font-label-sm text-label-sm text-outline uppercase tracking-wider mb-3">
          <span className="material-symbols-outlined text-[16px] text-primary">filter_alt</span>
          <span>ჟანრის მიხედვით ფილტრი:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {genresList.map(g => {
            const isSelected = (g === 'All' && !selectedGenre) || selectedGenre === g
            const href = g === 'All' 
              ? (selectedStatus ? `/comics?status=${encodeURIComponent(selectedStatus)}` : '/comics')
              : `/comics?genre=${encodeURIComponent(g)}${selectedStatus ? `&status=${encodeURIComponent(selectedStatus)}` : ''}`
            
            return (
              <Link
                key={g}
                href={href}
                className={`font-label-md text-label-md px-3.5 py-1.5 rounded-full transition-all ${
                  isSelected
                    ? 'bg-primary text-on-primary font-bold shadow-md shadow-primary/30'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                }`}
              >
                {g === 'All' ? 'ყველა' : g}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Grid of Comics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {comics.map((comic, idx) => (
          <div
            key={comic.id}
            className="group flex flex-col rounded-2xl bg-surface-container-low overflow-hidden hover:bg-surface-container transition-all duration-300 hover:-translate-y-1 shadow-lg border border-outline-variant/10"
          >
            {/* Clickable Cover & Title Header */}
            <Link
              href={`/comic/${comic.id}`}
              className="block group/card focus:outline-none cursor-pointer"
            >
              <div className="relative block aspect-[3/4] overflow-hidden bg-surface-container">
                <img
                  src={comic.coverUrl}
                  alt={comic.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-amber-400 font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  9.{9 - (idx % 3)}
                </div>

                {comic.chapters[0] && (
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-md">
                    თავი {comic.chapters[0].chapterNumber}
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

            {/* Stacked Chapter Buttons with Timestamps */}
            <div className="p-3.5 pt-2 flex flex-col flex-1 justify-end">
              <div className="flex flex-col gap-1.5 mt-auto">
                {comic.chapters.slice(0, 2).map((ch, chIdx) => (
                  <Link
                    key={ch.id}
                    href={`/comic/${comic.id}/chapter/${ch.id}`}
                    className={`flex items-center justify-between rounded-xl transition-colors group/ch ${
                      chIdx === 0
                        ? 'px-3 py-2 bg-surface-container-high/80 hover:bg-secondary-container hover:text-on-secondary-container'
                        : 'px-3 py-1.5 bg-surface-container-high/40 hover:bg-surface-container-high'
                    }`}
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
                  <span className="text-[10px] text-outline block py-1 text-center">თავები არ არის დამატებული</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {comics.length === 0 && (
        <div className="bg-surface-container-low rounded-2xl p-16 text-center border border-outline-variant/20 my-8">
          <span className="material-symbols-outlined text-[48px] text-outline mb-2">menu_book</span>
          <p className="font-title-md text-title-md text-on-surface font-semibold mb-2">თქვენ მიერ არჩეული ფილტრით კომიქსები ვერ მოიძებნა.</p>
          <Link href="/comics" className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold inline-block mt-2">
            ფილტრის გასუფთავება
          </Link>
        </div>
      )}
    </div>
  )
}
