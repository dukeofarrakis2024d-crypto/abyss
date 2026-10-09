import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Plus, Edit, BookOpen, Layers } from 'lucide-react'

export const instant = false;
export default async function AdminDashboard() {
  const comics = await prisma.comic.findMany({
    orderBy: { updatedAt: 'desc' },
    include: { _count: { select: { chapters: true } } }
  })

  return (
    <div className="max-w-[1285px] mx-auto px-2">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#24212B]">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#913FE2] rounded-sm inline-block"></span>
            Abyss Admin Panel
          </h1>
          <p className="text-xs text-white/50 mt-1">Manage series library, chapters, and bulk URL pages</p>
        </div>
        <Link
          href="/admin/comic/new"
          className="bg-[#913FE2] hover:bg-[#7c33c3] text-white px-4 py-2 rounded-lg font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-lg shadow-[#913FE2]/20"
        >
          <Plus size={18} /> New Series
        </Link>
      </div>

      <div className="bg-[#1C1924] rounded-xl border border-white/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#24212B] border-b border-white/5 text-[11px] uppercase tracking-wider text-white/50 font-bold">
              <th className="p-4">Series Title</th>
              <th className="p-4">Status</th>
              <th className="p-4">Year</th>
              <th className="p-4">Chapters</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs">
            {comics.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-12 text-center text-white/40">
                  No series found. Click "New Series" above to create one.
                </td>
              </tr>
            ) : (
              comics.map(comic => (
                <tr key={comic.id} className="hover:bg-[#24212B]/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-14 rounded overflow-hidden bg-[#13111A] shrink-0">
                        <img src={comic.coverUrl} alt={comic.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-white text-sm line-clamp-1">{comic.title}</div>
                        <div className="text-[11px] text-white/40">{comic.author} &bull; {comic.genres.split(',')[0]}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full ${
                      comic.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-[#913FE2]/10 text-[#A966E9] border border-[#913FE2]/20'
                    }`}>
                      {comic.status}
                    </span>
                  </td>
                  <td className="p-4 text-white/60 font-medium">{comic.releaseYear}</td>
                  <td className="p-4 text-white font-bold">{comic._count.chapters}</td>
                  <td className="p-4">
                    <div className="flex justify-end gap-1.5">
                      <Link
                        href={`/admin/comic/${comic.id}/chapter/new`}
                        className="px-2.5 py-1.5 bg-[#13111A] hover:bg-[#913FE2] text-white/80 hover:text-white rounded border border-white/5 font-semibold text-[11px] flex items-center gap-1 transition-colors"
                        title="Add Chapter with Bulk URLs"
                      >
                        <BookOpen size={13} /> +Chapter
                      </Link>
                      <Link
                        href={`/admin/comic/${comic.id}/edit`}
                        className="p-1.5 bg-[#13111A] hover:bg-white/10 text-white/70 hover:text-white rounded border border-white/5 transition-colors"
                        title="Edit Series"
                      >
                        <Edit size={14} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
