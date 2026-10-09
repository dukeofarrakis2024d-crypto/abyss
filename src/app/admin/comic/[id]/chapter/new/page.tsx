import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import ChapterManager from './ChapterManager'

export default async function ChapterManagementPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const comicId = parseInt(resolvedParams.id)

  const comic = await prisma.comic.findUnique({
    where: { id: comicId },
    include: {
      chapters: {
        orderBy: { chapterNumber: 'desc' },
        include: {
          pages: { orderBy: { pageOrder: 'asc' } }
        }
      }
    }
  })

  if (!comic) return notFound()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 border-b border-white/10 pb-4">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <span className="w-3 h-8 bg-[#913FE2] rounded-sm inline-block"></span>
          Chapter Management
        </h1>
        <p className="text-white/50 mt-2 text-sm">Managing chapters for <span className="font-bold text-white">{comic.title}</span></p>
      </div>
      
      <ChapterManager comicId={comicId} initialChapters={comic.chapters} />
    </div>
  )
}
