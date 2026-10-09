import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const comicId = parseInt(resolvedParams.id)
    const body = await req.json()
    const { chapterNumber, title, pages } = body

    if (!Array.isArray(pages) || pages.length === 0) {
      return NextResponse.json({ error: 'Pages are required' }, { status: 400 })
    }

    const chapter = await prisma.chapter.create({
      data: {
        comicId,
        chapterNumber,
        title,
        pages: {
          create: pages.map((url: string, index: number) => ({
            imageUrl: url,
            pageOrder: index + 1
          }))
        }
      }
    })
    
    return NextResponse.json(chapter)
  } catch (error: any) {
    console.error('Error creating chapter', error)
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Chapter number already exists' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
