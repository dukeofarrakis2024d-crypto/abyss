import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import EditComicForm from './EditComicForm'

export default async function EditComic({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const comic = await prisma.comic.findUnique({
    where: { id: parseInt(resolvedParams.id) }
  })

  if (!comic) return notFound()

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Edit Series: {comic.title}</h1>
      <EditComicForm comic={comic} />
    </div>
  )
}
