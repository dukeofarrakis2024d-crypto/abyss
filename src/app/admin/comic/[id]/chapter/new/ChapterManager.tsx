"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2, Edit } from 'lucide-react'

type Chapter = {
  id: number
  chapterNumber: number
  title: string | null
  pages: { imageUrl: string, pageOrder: number }[]
}

export default function ChapterManager({ comicId, initialChapters }: { comicId: number, initialChapters: Chapter[] }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [chapters, setChapters] = useState<Chapter[]>(initialChapters)
  const [editChapterId, setEditChapterId] = useState<number | null>(null)
  
  const [formData, setFormData] = useState({
    chapterNumber: '',
    title: '',
    pageUrls: ''
  })

  const resetForm = () => {
    setEditChapterId(null)
    setFormData({
      chapterNumber: '',
      title: '',
      pageUrls: ''
    })
  }

  const handleEditClick = (chapter: Chapter) => {
    setEditChapterId(chapter.id)
    setFormData({
      chapterNumber: chapter.chapterNumber.toString(),
      title: chapter.title || '',
      pageUrls: chapter.pages.map(p => p.imageUrl).join('\n')
    })
  }

  const handleDeleteClick = async (chapterId: number) => {
    if (confirm("Are you sure you want to delete this chapter?")) {
      // Optimistic update
      setChapters(prev => prev.filter(c => c.id !== chapterId))
      
      try {
        const res = await fetch(`/api/admin/chapters/${chapterId}`, {
          method: 'DELETE'
        })
        if (!res.ok) {
          throw new Error('Failed to delete chapter')
        }
        router.refresh()
      } catch (err) {
        console.error(err)
        alert('Error deleting chapter')
        // We could revert the state here if needed
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Parse the URLs
    const urls = formData.pageUrls
      .split(/[\n,]+/)
      .map(url => url.trim())
      .filter(url => url.length > 0)
      
    try {
      if (editChapterId) {
        const res = await fetch(`/api/admin/chapters/${editChapterId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chapterNumber: parseFloat(formData.chapterNumber),
            title: formData.title || null,
            pages: urls
          })
        })
        
        if (res.ok) {
          const updatedChapter = await res.json()
          setChapters(prev => prev.map(c => c.id === editChapterId ? updatedChapter : c).sort((a, b) => b.chapterNumber - a.chapterNumber))
          resetForm()
          router.refresh()
        } else {
          const data = await res.json()
          alert(data.error || 'Error updating chapter')
        }
      } else {
        const res = await fetch(`/api/admin/comics/${comicId}/chapters`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chapterNumber: parseFloat(formData.chapterNumber),
            title: formData.title || null,
            pages: urls
          })
        })
        
        if (res.ok) {
          const newChapter = await res.json()
          setChapters(prev => [...prev, newChapter].sort((a, b) => b.chapterNumber - a.chapterNumber))
          resetForm()
          router.refresh()
        } else {
          const data = await res.json()
          alert(data.error || 'Error creating chapter')
        }
      }
    } catch (err) {
      console.error(err)
      alert(editChapterId ? 'Error updating chapter' : 'Error creating chapter')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Chapter List */}
      <div>
        <h2 className="text-xl font-bold mb-4">Existing Chapters</h2>
        <div className="bg-[#1C1924] rounded-xl border border-white/5 overflow-hidden">
          <ul className="divide-y divide-white/5">
            {chapters.length === 0 ? (
              <li className="p-8 text-center text-white/40 text-sm">No chapters found for this series.</li>
            ) : (
              chapters.map(chapter => (
                <li key={chapter.id} className="p-4 flex items-center justify-between hover:bg-[#24212B]/50 transition-colors">
                  <div>
                    <div className="font-bold text-sm text-white">Chapter {chapter.chapterNumber}</div>
                    <div className="text-xs text-white/50">{chapter.title || 'No Title'} &bull; {chapter.pages.length} pages</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleEditClick(chapter)}
                      className="p-1.5 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded transition-colors"
                      title="Edit Chapter"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDeleteClick(chapter.id)}
                      className="p-1.5 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded transition-colors"
                      title="Delete Chapter"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* Chapter Form */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          {editChapterId ? 'Edit Chapter' : 'Add New Chapter'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Chapter Number</label>
              <input required type="number" step="0.1" className="w-full bg-zinc-900 border border-zinc-800 rounded p-2"
                value={formData.chapterNumber} onChange={e => setFormData({...formData, chapterNumber: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Chapter Title (Optional)</label>
              <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded p-2"
                value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Bulk Image URLs</label>
            <p className="text-xs text-zinc-400 mb-2">Paste multiple image URLs separated by commas or line breaks. They will be ordered sequentially.</p>
            <textarea required rows={10} className="w-full bg-zinc-900 border border-zinc-800 rounded p-2 font-mono text-sm"
              placeholder="https://example.com/img1.jpg&#10;https://example.com/img2.jpg"
              value={formData.pageUrls} onChange={e => setFormData({...formData, pageUrls: e.target.value})} />
          </div>
          
          <div className="flex justify-end gap-4">
            {editChapterId && (
              <button type="button" onClick={resetForm} className="px-4 py-2 text-zinc-400 hover:text-white">Cancel Edit</button>
            )}
            <button type="button" onClick={() => router.back()} className="px-4 py-2 text-zinc-400 hover:text-white">Back to List</button>
            <button type="submit" disabled={loading} className="px-5 py-2.5 bg-[#913FE2] text-white rounded-lg font-bold hover:bg-[#7c33c3] shadow-md shadow-[#913FE2]/20 disabled:opacity-50 transition-colors">
              {loading ? 'Saving...' : (editChapterId ? 'Save Changes' : 'Add Chapter')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
