import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const comics = await prisma.comic.findMany({
      select: {
        id: true,
        title: true,
        coverUrl: true,
        genres: true,
        author: true,
      },
      orderBy: { updatedAt: 'desc' },
    })
    return NextResponse.json(comics)
  } catch (error) {
    console.error('Error fetching comics:', error)
    return NextResponse.json({ error: 'Failed to fetch comics' }, { status: 500 })
  }
}
