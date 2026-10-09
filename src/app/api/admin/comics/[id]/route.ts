import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id)
    const body = await req.json()
    
    const comic = await prisma.comic.update({
      where: { id },
      data: {
        title: body.title,
        author: body.author,
        synopsis: body.synopsis,
        coverUrl: body.coverUrl,
        status: body.status,
        releaseYear: body.releaseYear,
        genres: body.genres
      }
    })
    
    return NextResponse.json(comic)
  } catch (error) {
    console.error('Error updating comic', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id)
    await prisma.comic.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting comic', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
