"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewComic() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    synopsis: '',
    coverUrl: '',
    status: 'Ongoing',
    releaseYear: new Date().getFullYear().toString(),
    genres: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const res = await fetch('/api/admin/comics', {
        method: 'POST',
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
        alert('Error creating comic')
      }
    } catch (err) {
      console.error(err)
      alert('Error creating comic')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Create New Series</h1>
      
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
            <input required type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded p-2" placeholder="Action, Fantasy"
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
          <button type="submit" disabled={loading} className="px-5 py-2.5 bg-[#913FE2] text-white rounded-lg font-bold hover:bg-[#7c33c3] shadow-md shadow-[#913FE2]/20 disabled:opacity-50 transition-colors">
            {loading ? 'Saving...' : 'Create Series'}
          </button>
        </div>
      </form>
    </div>
  )
}
