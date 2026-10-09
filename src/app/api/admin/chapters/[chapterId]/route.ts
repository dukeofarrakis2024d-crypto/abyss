import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(req: Request, { params }: { params: Promise<{ chapterId: string }> }) {
  try {
    const resolvedParams = await params;
    const chapterId = parseInt(resolvedParams.chapterId)
    const body = await req.json()
    const { chapterNumber, title, pages } = body

    if (!Array.isArray(pages) || pages.length === 0) {
      return NextResponse.json({ error: 'Pages are required' }, { status: 400 })
    }

    // Update chapter and recreate pages
    // Since we are replacing all pages, the easiest way is to delete old ones and create new ones
    await prisma.page.deleteMany({
      where: { chapterId }
    })

    const chapter = await prisma.chapter.update({
      where: { id: chapterId },
      data: {
        chapterNumber,
        title,
        pages: {
          create: pages.map((url: string, index: number) => ({
            imageUrl: url,
            pageOrder: index + 1
          }))
        }
      },
      include: {
        pages: { orderBy: { pageOrder: 'asc' } }
      }
    })
    
    return NextResponse.json(chapter)
  } catch (error: any) {
    console.error('Error updating chapter', error)
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Chapter number already exists' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ chapterId: string }> }) {
  try {
    const resolvedParams = await params;
    const chapterId = parseInt(resolvedParams.chapterId)

    await prisma.chapter.delete({
      where: { id: chapterId }
    })
    
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error deleting chapter', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
