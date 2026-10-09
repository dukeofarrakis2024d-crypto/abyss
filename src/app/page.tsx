import { prisma } from '@/lib/prisma'
import HomeClient from './HomeClient'

export const instant = false;
export default async function Home() {
  const comics = await prisma.comic.findMany({
    include: {
      chapters: {
        orderBy: { chapterNumber: 'desc' },
      },
    },
    orderBy: { updatedAt: 'desc' },
  })

  // Format dates so they can serialize cleanly to client component if needed
  const serializedComics = comics.map((c) => ({
    ...c,
    chapters: c.chapters.map((ch) => ({
      ...ch,
      releaseDate: ch.releaseDate.toISOString(),
    })),
  }))

  const featured = serializedComics.slice(0, 12)
  const latest = serializedComics
  const popular = [...serializedComics].reverse()

  return (
    <HomeClient
      featuredComics={featured}
      latestComics={latest}
      popularComics={popular}
    />
  )
}
