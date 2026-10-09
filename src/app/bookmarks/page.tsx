"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bookmark } from '@/components/ReaderHistoryTracker'
import { formatDistanceToNow } from 'date-fns'
import { Bookmark as BookmarkIcon, Trash2, BookOpen, Clock } from 'lucide-react'

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const historyJson = localStorage.getItem('abyss_history')
    if (historyJson) {
      try {
        setBookmarks(JSON.parse(historyJson))
      } catch (e) {
        console.error(e)
      }
    }
  }, [])

  const removeBookmark = (comicId: number) => {
    const updated = bookmarks.filter(b => b.comicId !== comicId)
    setBookmarks(updated)
    localStorage.setItem('abyss_history', JSON.stringify(updated))
  }

  const clearAll = () => {
    if (confirm('ნამდვილად გსურთ ისტორიის გასუფთავება?')) {
      setBookmarks([])
      localStorage.removeItem('abyss_history')
    }
  }

  if (!mounted) return null

  return (
    <div className="max-w-[1285px] mx-auto px-2">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#24212B]">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-[#913FE2] rounded-sm inline-block"></span>
            ისტორია და სანიშნეები
          </h1>
          <p className="text-xs text-white/50 mt-1">
            ლოკალურად შენახული ({bookmarks.length} სათაური)
          </p>
        </div>

        {bookmarks.length > 0 && (
          <button
            onClick={clearAll}
            className="text-xs text-white/50 hover:text-red-400 font-medium transition-colors"
          >
            ისტორიის გასუფთავება
          </button>
        )}
      </div>
      
      {bookmarks.length === 0 ? (
        <div className="bg-[#1C1924] border border-white/5 rounded-xl p-16 text-center max-w-lg mx-auto my-12">
          <BookOpen size={48} className="mx-auto text-white/20 mb-3" />
          <p className="text-white/70 font-semibold mb-1">თქვენი სანიშნეები ცარიელია.</p>
          <p className="text-xs text-white/40 mb-5">
            წაკითხული თავები ავტომატურად ინახება აქ, რათა განაგრძოთ კითხვა იქიდან სადაც გაჩერდით.
          </p>
          <Link
            href="/comics"
            className="bg-[#913FE2] hover:bg-[#7c33c3] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-colors inline-block"
          >
            კატალოგის ნახვა
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bookmarks.map((bookmark) => (
            <div
              key={bookmark.comicId}
              className="bg-[#1C1924] border border-white/5 hover:border-[#913FE2]/30 rounded-lg p-3 flex gap-3.5 relative group transition-all"
            >
              <Link href={`/comic/${bookmark.comicId}`} className="w-[75px] aspect-[3/4.2] shrink-0 rounded overflow-hidden bg-[#13111A]">
                <img src={bookmark.coverUrl} alt={bookmark.comicTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </Link>
              
              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <Link href={`/comic/${bookmark.comicId}`} className="font-bold text-white text-xs sm:text-sm hover:text-[#913FE2] line-clamp-1 mb-1 transition-colors">
                    {bookmark.comicTitle}
                  </Link>
                  <div className="text-xs text-white/60 mb-2">
                    ბოლო წაკითხული: <Link href={`/comic/${bookmark.comicId}/chapter/${bookmark.lastReadChapterId}`} className="text-[#A966E9] font-bold hover:underline">თავი {bookmark.lastReadChapterNumber}</Link>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-white/40">
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {formatDistanceToNow(bookmark.timestamp, { addSuffix: true })}
                  </span>
                  
                  <Link
                    href={`/comic/${bookmark.comicId}/chapter/${bookmark.lastReadChapterId}`}
                    className="bg-[#913FE2] text-white px-2 py-0.5 rounded text-[10px] font-bold hover:bg-[#7c33c3]"
                  >
                    გაგრძელება
                  </Link>
                </div>
              </div>

              <button 
                onClick={() => removeBookmark(bookmark.comicId)}
                className="absolute top-2 right-2 p-1.5 text-white/30 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                title="ისტორიიდან წაშლა"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
