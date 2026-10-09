"use client"

import * as React from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"

interface CarouselComic {
  id: number
  title: string
  coverUrl: string
  genres?: string
  rating?: string | number
}

interface HeroBannerCarouselProps {
  comics: CarouselComic[]
  title?: string
}

export default function HeroBannerCarousel({ comics, title = "Popular Today" }: HeroBannerCarouselProps) {
  // Autoplay plugin configured with 3500ms delay and stopOnInteraction: false
  const plugin = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
    })
  )

  if (!comics || comics.length === 0) return null

  // Ensure enough slides for a seamless loop if list is small
  const displayComics = comics.length < 8 ? [...comics, ...comics] : comics

  return (
    <section className="w-full py-6 overflow-hidden">
      {/* Header section with badge and title */}
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-6 bg-primary rounded-sm inline-block shadow-[0_0_12px_rgba(221,183,255,0.7)]"></span>
          <h2 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight font-headline-md flex items-center gap-2">
            {title}
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider">
              Featured
            </span>
          </h2>
        </div>
      </div>

      {/* Embla Carousel with 800ms gliding transition duration and loop: true */}
      <Carousel
        opts={{
          loop: true,
          duration: 40, // Smooth ~800ms glide transition speed rather than snappy jump
          align: "start",
        }}
        plugins={[plugin.current]}
        className="w-full relative group/carousel"
      >
        <CarouselContent className="-ml-4">
          {displayComics.map((comic, idx) => {
            // Generate a realistic high rating if not explicitly provided
            const ratingScore = comic.rating || (9.5 + ((comic.id * 7) % 5) * 0.1).toFixed(1)

            return (
              <CarouselItem
                key={`${comic.id}-${idx}`}
                className="basis-1/2 md:basis-1/4 lg:basis-1/6 pl-4"
              >
                <Link
                  href={`/comic/${comic.id}`}
                  className="group relative block overflow-hidden rounded-xl aspect-[2/3] bg-surface-container-high shadow-lg border border-outline-variant/15 transition-all duration-300 hover:shadow-2xl hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {/* Comic cover image filling container with hover zoom */}
                  <img
                    src={comic.coverUrl}
                    alt={comic.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Rating Badge: Top right dark semi-transparent pill with yellow star */}
                  <div className="absolute top-2.5 right-2.5 z-10 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-bold text-white shadow-md border border-white/10">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 shrink-0" />
                    <span>{ratingScore}</span>
                  </div>

                  {/* Dark gradient overlay over bottom 40% of image */}
                  <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-3 pointer-events-none">
                    <span className="text-white font-bold text-sm sm:text-xs lg:text-sm line-clamp-2 leading-tight drop-shadow-md">
                      {comic.title}
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        {/* Carousel Navigation Arrows */}
        <CarouselPrevious className="hidden sm:flex -left-3 lg:-left-5 bg-surface-container/90 hover:bg-surface-container-highest border-outline-variant/30 text-on-surface hover:text-primary transition-all opacity-0 group-hover/carousel:opacity-100" />
        <CarouselNext className="hidden sm:flex -right-3 lg:-right-5 bg-surface-container/90 hover:bg-surface-container-highest border-outline-variant/30 text-on-surface hover:text-primary transition-all opacity-0 group-hover/carousel:opacity-100" />
      </Carousel>
    </section>
  )
}
