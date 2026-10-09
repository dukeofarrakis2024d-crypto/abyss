const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const demoData = [
  {
    title: 'The Regressor and the Blind Saint',
    author: 'Papago',
    synopsis: 'Bera, once a beggar, would trample over others and resort to even the most despicable deals if it means he\'d stay alive.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/the-regressor-and-the-blind-saint.309616.webp',
    status: 'Ongoing',
    releaseYear: 2024,
    genres: 'Action, Fantasy, Romance'
  },
  {
    title: 'Solo Swordmaster',
    author: 'Chugong',
    synopsis: 'In an age when everyone draws upon the power of Constellations, there is but one man who believes in the sword.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/solo-swordmaster.467196.webp',
    status: 'Ongoing',
    releaseYear: 2024,
    genres: 'Action, Adventure'
  },
  {
    title: 'Pick Up a Grimoire, Become a Mage',
    author: 'Studio',
    synopsis: 'A college student forms a contract with an invisible vampire that tears people apart and kills them.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/pick-up-a-grimoire-become-a-mage.1bf474.webp',
    status: 'New',
    releaseYear: 2024,
    genres: 'Action, Magic'
  },
  {
    title: 'Revenge of the Iron-Blooded Sword Hound',
    author: 'Lee',
    synopsis: 'Vikir is the faithful hound of the Baskerville family. But his reward for his loyalty is execution.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/revenge-of-the-iron-blooded-sword-hound-2.6105f5.webp',
    status: 'Ongoing',
    releaseYear: 2023,
    genres: 'Action, Drama'
  },
  {
    title: 'Return of the Mount Hua Sect',
    author: 'Biga',
    synopsis: 'Chung Myung, the 13th generation disciple of the Mount Hua Sect, falls down after defeating the Heavenly Demon.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/return-of-the-mount-hua-sect-2.b75960.webp',
    status: 'Ongoing',
    releaseYear: 2021,
    genres: 'Action, Martial Arts'
  },
  {
    title: 'The Greatest Estate Developer',
    author: 'Moon Baek Dong',
    synopsis: 'Suho Kim was a civil engineering student who fell asleep reading a fantasy novel, only to wake up as Lloyd Frontera.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/the-greatest-estate-developer.27bf21.webp',
    status: 'Ongoing',
    releaseYear: 2021,
    genres: 'Comedy, Fantasy'
  },
  {
    title: 'SSS-Class Suicide Hunter',
    author: 'Shin Noah',
    synopsis: 'I want an S-Rank skill too! I want it so badly, I could die for it!',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/sss-class-suicide-hunter.08cbba.webp',
    status: 'Ongoing',
    releaseYear: 2020,
    genres: 'Action, Fantasy'
  },
  {
    title: 'Doom Breaker',
    author: 'Cheong Dam',
    synopsis: 'Zephyr is the last human fighting evil in a world abandoned by the gods.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/reincarnation-of-the-suicidal-battle-god.24bd90.webp',
    status: 'Ongoing',
    releaseYear: 2021,
    genres: 'Action, Fantasy'
  }
]

async function main() {
  for (const comicData of demoData) {
    const existing = await prisma.comic.findFirst({ where: { title: comicData.title } })
    if (existing) continue;

    await prisma.comic.create({
      data: {
        ...comicData,
        chapters: {
          create: [
            { chapterNumber: 1, title: 'The Beginning', pages: { create: [{ imageUrl: 'https://cdn.pixabay.com/photo/2016/11/14/03/40/rocks-1822501_1280.jpg', pageOrder: 1 }] } },
            { chapterNumber: 2, title: 'Awakening', pages: { create: [{ imageUrl: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg', pageOrder: 1 }] } },
            { chapterNumber: 3, title: 'The Trial', pages: { create: [{ imageUrl: 'https://cdn.pixabay.com/photo/2023/12/28/08/38/mountains-8473722_1280.jpg', pageOrder: 1 }] } },
          ]
        }
      }
    })
    console.log(`Added ${comicData.title}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
