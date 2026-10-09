"use client"
import { useEffect } from 'react'

export interface Bookmark {
  comicId: number
  comicTitle: string
  coverUrl: string
  lastReadChapterId: number
  lastReadChapterNumber: number
  timestamp: number
}

interface ReaderHistoryTrackerProps {
  comicId: number
  comicTitle: string
  chapterId: number
  chapterNumber: number
  coverUrl: string
}

export default function ReaderHistoryTracker({ 
  comicId, comicTitle, chapterId, chapterNumber, coverUrl 
}: ReaderHistoryTrackerProps) {
  
  useEffect(() => {
    try {
      const historyJson = localStorage.getItem('abyss_history')
      let history: Bookmark[] = historyJson ? JSON.parse(historyJson) : []
      
      // Remove existing entry for this comic if it exists
      history = history.filter(h => h.comicId !== comicId)
      
      // Add new entry at the beginning
      history.unshift({
        comicId,
        comicTitle,
        coverUrl,
        lastReadChapterId: chapterId,
        lastReadChapterNumber: chapterNumber,
        timestamp: Date.now()
      })
      
      // Keep only last 50 items to prevent unbounded growth
      if (history.length > 50) {
        history = history.slice(0, 50)
      }
      
      localStorage.setItem('abyss_history', JSON.stringify(history))
    } catch (err) {
      console.error('Failed to save reading history', err)
    }
  }, [comicId, comicTitle, chapterId, chapterNumber, coverUrl])

  return null // Renderless component
}
