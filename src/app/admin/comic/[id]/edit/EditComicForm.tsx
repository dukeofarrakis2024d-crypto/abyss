"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditComicForm({ comic }: { comic: any }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: comic.title,
    author: comic.author,
    synopsis: comic.synopsis,
    coverUrl: comic.coverUrl,
    status: comic.status,
    releaseYear: comic.releaseYear.toString(),
    genres: comic.genres
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const res = await fetch(`/api/admin/comics/${comic.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          releaseYear: parseInt(formData.releaseYear)
        })
      })
      
      if (res.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        alert('Error updating comic')
      }
    } catch (err) {
      console.error(err)
      alert('Error updating comic')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Title</label>
        <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded p-2"
          value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Author</label>
          <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded p-2"
            value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Status</label>
          <select className="w-full bg-zinc-900 border border-zinc-800 rounded p-2"
            value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
            <option>Ongoing</option>
            <option>Completed</option>
            <option>Hiatus</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Release Year</label>
          <input required type="number" className="w-full bg-zinc-900 border border-zinc-800 rounded p-2"
            value={formData.releaseYear} onChange={e => setFormData({...formData, releaseYear: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Genres (comma separated)</label>
          <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded p-2"
            value={formData.genres} onChange={e => setFormData({...formData, genres: e.target.value})} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Cover Image URL</label>
        <input required type="url" className="w-full bg-zinc-900 border border-zinc-800 rounded p-2"
          value={formData.coverUrl} onChange={e => setFormData({...formData, coverUrl: e.target.value})} />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Synopsis</label>
        <textarea required rows={5} className="w-full bg-zinc-900 border border-zinc-800 rounded p-2"
          value={formData.synopsis} onChange={e => setFormData({...formData, synopsis: e.target.value})} />
      </div>
      
      <div className="flex justify-end gap-4">
        <button type="button" onClick={() => router.back()} className="px-4 py-2 text-zinc-400 hover:text-white">Cancel</button>
        <button type="submit" disabled={loading} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50">
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  )
}
