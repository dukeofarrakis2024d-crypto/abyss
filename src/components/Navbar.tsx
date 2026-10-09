"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, Search, Bookmark, Trash2 } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

interface ComicSearchItem {
  id: number
  title: string
  coverUrl: string
  author?: string
  genres?: string
}

import { logoutAction } from '@/app/actions/auth'

interface NavbarProps {
  session?: { id: number; email: string; role: string } | null;
}

export default function Navbar({ session }: NavbarProps = {}) {
  const [open, setOpen] = useState(false)
  const [comics, setComics] = useState<ComicSearchItem[]>([])
  const [bookmarkedComics, setBookmarkedComics] = useState<ComicSearchItem[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  // Log open state changes
  useEffect(() => {
    console.log("Navbar search open state:", open)
  }, [open])

  // Strictly implement requested keyboard listener
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        console.log("Toggle open from keyboard");
        setOpen((open) => !open);
      }
    }
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Fetch comic data for search and bookmarks
  useEffect(() => {
    fetch('/api/comics')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setComics(data)
        }
      })
      .catch((err) => console.error('Failed to load comics for search:', err))
  }, [])

  // Sync / populate bookmarks: use localStorage if present, otherwise fallback to 3 real comics placeholders
  useEffect(() => {
    if (comics.length > 0) {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('abyss_history')
        if (saved) {
          try {
            const parsed = JSON.parse(saved)
            if (Array.isArray(parsed) && parsed.length > 0) {
              setBookmarkedComics(
                parsed.map((p: any) => ({
                  id: p.comicId,
                  title: p.comicTitle,
                  coverUrl: p.coverUrl,
                  author: p.author,
                  genres: p.genres,
                }))
              )
              return
            }
          } catch (e) {
            console.error('Error parsing bookmarks from storage:', e)
          }
        }
      }
      // Populate with 3 actual comics from data as requested
      setBookmarkedComics(comics.slice(0, 3))
    }
  }, [comics])

  const handleRemoveBookmark = (id: number) => {
    setBookmarkedComics((prev) => {
      const updated = prev.filter((item) => item.id !== id)
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('abyss_history')
        if (saved) {
          try {
            const parsed = JSON.parse(saved)
            if (Array.isArray(parsed)) {
              const filtered = parsed.filter((b: any) => b.comicId !== id)
              localStorage.setItem('abyss_history', JSON.stringify(filtered))
            }
          } catch (e) {}
        }
      }
      return updated
    })
  }

  const isHome = pathname === '/'
  const isSeries = pathname.startsWith('/comic')
  const isBookmarks = pathname === '/bookmarks'
  const isAdmin = pathname.startsWith('/admin')

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#131313]/90 backdrop-blur-xl border-b border-[#4d4354]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        {/* Main Navbar container */}
        <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-4 py-3">
          {/* Left: Logo & Title locked to the far left */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              onClick={() => {
                setMobileMenuOpen(false)
                setOpen(false)
                setIsBookmarksOpen(false)
              }}
            >
              <img
                src="/logo.png"
                alt="Abyss Logo"
                className="h-8 w-auto md:h-10 object-contain shrink-0"
              />
              <span className="text-xl md:text-2xl font-bold font-sans tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 select-none">
                ABYSS
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className={`transition-colors ${
                  isHome ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface font-medium'
                }`}
              >
                მთავარი
              </Link>
              <Link
                href="/comics"
                className={`transition-colors ${
                  isSeries ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface font-medium'
                }`}
              >
                კატალოგი
              </Link>
              <Link
                href="/bookmarks"
                className={`transition-colors ${
                  isBookmarks ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface font-medium'
                }`}
              >
                სანიშნეები
              </Link>

            </nav>
          </div>

          {/* Desktop Trigger: wrapped in button with onClick={() => setOpen(true)} */}
          <div className="flex-1 max-w-md mx-6 hidden md:flex">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="w-full bg-[#1c1b1b] border border-[#4d4354]/40 hover:border-primary/40 rounded-full px-4 py-2 text-left text-sm text-outline hover:text-on-surface transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-outline group-hover:text-primary transition-colors" />
                <span className="text-sm text-outline">მანჰუას ძიება...</span>
              </div>
              <kbd className="px-2 py-0.5 rounded bg-[#201f1f] text-xs text-outline border border-[#4d4354]/30 pointer-events-none font-sans">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right: Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/bookmarks"
              className="p-2 text-on-surface-variant hover:text-on-surface transition-colors rounded-full hover:bg-surface-container-high"
              title="Bookmarks"
            >
              <Bookmark className="w-5 h-5" />
            </Link>
            {session ? (
              <>
                {session.role === 'ADMIN' && (
                  <Link href="/admin" className="px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 transition-colors">
                    ადმინ პანელი
                  </Link>
                )}
                <form action={logoutAction}>
                  <button type="submit" className="px-4 py-1.5 text-sm font-semibold rounded-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-error transition-colors">
                    გასვლა
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link href="/login" className="px-4 py-1.5 text-sm font-semibold rounded-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface transition-colors">
                  შესვლა
                </Link>
                <Link href="/signup" className="px-4 py-1.5 text-sm font-semibold rounded-full bg-primary text-[#131313] hover:opacity-90 transition-opacity">
                  რეგისტრაცია
                </Link>
              </>
            )}
          </div>

          {/* Right: Mobile Icons Row */}
          <div className="flex md:hidden items-center gap-1 z-50 relative">
            {/* Mobile Trigger: Magnifying glass button with onClick={() => setOpen(true)} */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="p-2 z-50 relative text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-on-surface" />
            </button>

            {/* Mobile Bookmarks Sheet */}
            <Sheet open={isBookmarksOpen} onOpenChange={setIsBookmarksOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="p-2 z-50 relative text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
                  aria-label="Bookmarks"
                >
                  <Bookmark className="w-5 h-5 text-on-surface" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85%] max-w-sm bg-[#131313]/95 backdrop-blur-2xl border-l border-[#4d4354]/40 p-5 flex flex-col h-full text-white"
              >
                <SheetHeader className="mb-4">
                  <SheetTitle className="text-lg font-bold text-white flex items-center gap-2">
                    <Bookmark className="w-5 h-5 text-primary" />
                    ჩემი სანიშნეები
                  </SheetTitle>
                  <SheetDescription className="text-xs text-white/50">
                    სწრაფი წვდომა თქვენს შენახულ მანჰუაზე
                  </SheetDescription>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                  {bookmarkedComics.length > 0 ? (
                    bookmarkedComics.map((comic) => (
                      <div
                        key={comic.id}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-[#1c1b1b] border border-[#4d4354]/30 hover:border-primary/40 transition-colors group"
                      >
                        <Link
                          href={`/comic/${comic.id}`}
                          onClick={() => setIsBookmarksOpen(false)}
                          className="flex items-center gap-3 min-w-0 flex-1"
                        >
                          <img
                            src={comic.coverUrl}
                            alt={comic.title}
                            className="w-12 h-16 rounded object-cover shrink-0 bg-surface-container"
                          />
                          <div className="flex flex-col min-w-0 flex-1">
                            <span className="font-bold text-sm text-white group-hover:text-primary transition-colors line-clamp-2">
                              {comic.title}
                            </span>
                            <span className="text-xs text-white/40 mt-1">დააჭირეთ წასაკითხად</span>
                          </div>
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleRemoveBookmark(comic.id)}
                          className="p-2 text-white/40 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors shrink-0"
                          title="სანიშნის წაშლა"
                          aria-label="სანიშნის წაშლა"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6 text-white/50 my-auto">
                      <Bookmark className="w-10 h-10 text-white/20 mb-3" />
                      <p className="text-sm font-medium text-white/70">
                        სანიშნეები არ გაქვთ დამატებული.
                      </p>
                      <Link
                        href="/comics"
                        onClick={() => setIsBookmarksOpen(false)}
                        className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-[#131313] hover:opacity-90 transition-opacity"
                      >
                        კატალოგის ნახვა
                      </Link>
                    </div>
                  )}
                </div>

                {bookmarkedComics.length > 0 && (
                  <div className="pt-3 border-t border-[#4d4354]/30 mt-auto">
                    <Link
                      href="/bookmarks"
                      onClick={() => setIsBookmarksOpen(false)}
                      className="w-full block text-center py-2 px-3 text-xs font-semibold rounded-lg bg-[#1c1b1b] hover:bg-[#252424] text-white/80 hover:text-white border border-[#4d4354]/30 transition-colors"
                    >
                      ყველა სანიშნის ნახვა
                    </Link>
                  </div>
                )}
              </SheetContent>
            </Sheet>

            {/* Mobile Menu Icon (hamburger) */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen)
                setOpen(false)
                setIsBookmarksOpen(false)
              }}
              className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high focus:outline-none transition-colors ml-0.5"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-on-surface" />
              ) : (
                <Menu className="w-6 h-6 text-on-surface" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#4d4354]/30 bg-[#131313]/95 backdrop-blur-2xl px-4 py-4 space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2.5 ${
                  isHome ? 'bg-primary/15 text-primary' : 'text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">home</span>
                მთავარი
              </Link>
              <Link
                href="/comics"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2.5 ${
                  isSeries ? 'bg-primary/15 text-primary' : 'text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                კატალოგი
              </Link>
              <Link
                href="/bookmarks"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2.5 ${
                  isBookmarks ? 'bg-primary/15 text-primary' : 'text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">bookmark</span>
                სანიშნეები
              </Link>
              {session ? (
                <>
                  {session.role === 'ADMIN' && (
                    <Link
                      href="/admin"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2.5 bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                      ადმინ პანელი
                    </Link>
                  )}
                  <form action={logoutAction}>
                    <button
                      type="submit"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2.5 text-error hover:bg-error/10 mt-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">logout</span>
                      გასვლა
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2.5 text-on-surface hover:bg-surface-container-high"
                  >
                    <span className="material-symbols-outlined text-[18px]">login</span>
                    შესვლა
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2.5 bg-primary text-[#131313] hover:opacity-90 mt-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">person_add</span>
                    რეგისტრაცია
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* RAW REACT OVERLAY: Guaranteed to render */}
      {open && (
        <div 
          className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-sm flex items-start justify-center p-0 sm:pt-[15vh] sm:px-4 transition-opacity duration-200"
          onClick={() => setOpen(false)}
        >
          <div 
            className="bg-background text-foreground shadow-2xl w-full h-full sm:h-auto sm:max-w-[650px] sm:rounded-xl sm:border sm:border-[#4d4354]/40 overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b border-[#4d4354]/30 bg-[#131313] px-4 relative">
              <Search className="mr-2 h-5 w-5 shrink-0 text-white/50" />
              <input
                autoFocus
                placeholder="მანჰუას ძიება..."
                className="flex h-12 w-full rounded-md bg-transparent py-3 text-base sm:text-sm text-white outline-none placeholder:text-muted-foreground"
                onChange={(e) => {
                  const term = e.target.value.toLowerCase()
                  const results = document.querySelectorAll('.raw-search-item')
                  let found = false
                  results.forEach((row) => {
                    const text = row.getAttribute('data-search')?.toLowerCase() || ''
                    if (text.includes(term)) {
                      (row as HTMLElement).style.display = 'flex'
                      found = true
                    } else {
                      (row as HTMLElement).style.display = 'none'
                    }
                  })
                  const empty = document.getElementById('raw-search-empty')
                  if (empty) empty.style.display = found ? 'none' : 'block'
                }}
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-3 py-1.5 text-sm font-bold text-red-500 hover:text-red-400 shrink-0 cursor-pointer sm:hidden"
              >
                გაუქმება
              </button>
              
              {/* Desktop close button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-3.5 hidden sm:flex text-white/50 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 max-h-[calc(100vh-80px)] sm:max-h-[450px]">
              <div id="raw-search-empty" className="py-12 text-center text-sm text-muted-foreground hidden">
                მანჰუა ვერ მოიძებნა.
              </div>
              <div className="overflow-hidden p-1 text-foreground">
                <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">მანჰუას სერიები</div>
                {comics.map((comic) => (
                  <div
                    key={comic.id}
                    data-search={`${comic.title} ${comic.author || ''} ${comic.genres || ''}`}
                    onClick={() => {
                      router.push(`/comic/${comic.id}`)
                      setOpen(false)
                    }}
                    className="raw-search-item relative flex cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white outline-none hover:bg-white/10 transition-colors"
                  >
                    <img
                      src={comic.coverUrl}
                      alt={comic.title}
                      className="w-10 h-14 rounded object-cover shrink-0 bg-surface-container"
                    />
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="font-bold text-sm text-white truncate">
                        {comic.title}
                      </span>
                      <span className="text-xs text-white/50 truncate mt-0.5">
                        {comic.author} {comic.genres ? `• ${comic.genres.split(',')[0]}` : ''}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
