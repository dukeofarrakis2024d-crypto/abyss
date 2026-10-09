import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const comic = await prisma.comic.create({
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
    console.error('Error creating comic', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
