const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const richComics = [
  {
    title: 'Solo Leveling',
    author: 'Chugong',
    synopsis: 'In a world where hunters, humans with supernatural abilities, battle monsters from gates, twenty-year-old Sung Jinwoo is notoriously known as the "Weakest Hunter of All Mankind". After a brutal encounter in a double dungeon, he awakens with the unique ability to "level up" through a mysterious game-like quest system.',
    coverUrl: 'https://m.media-amazon.com/images/I/81xU+7V-aCL._AC_UF1000,1000_QL80_.jpg',
    status: 'Completed',
    releaseYear: 2018,
    genres: 'Action, Adventure, Fantasy, Supernatural',
    chaptersCount: 5
  },
  {
    title: 'The Regressor and the Blind Saint',
    author: 'Papago',
    synopsis: 'Bera, once a beggar, would trample over others and resort to even the most despicable deals if it meant surviving. Even when the Demon King appeared, he hid in darkness. In his dying moments, only Renée, the blind saintess, showed him unconditional kindness. Now, regressed to the past, he will burn down the world to protect her.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/the-regressor-and-the-blind-saint.309616.webp',
    status: 'Ongoing',
    releaseYear: 2024,
    genres: 'Action, Fantasy, Romance, Drama',
    chaptersCount: 4
  },
  {
    title: 'Solo Swordmaster',
    author: 'Limón',
    synopsis: 'In an age where everyone draws upon the blessing of Constellations and relies on flashy skills, only one man reaches the absolute summit with nothing but pure swordsmanship. "Skills? I don\'t need them. All I need is my sword."',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/solo-swordmaster.467196.webp',
    status: 'Ongoing',
    releaseYear: 2024,
    genres: 'Action, Adventure, Fantasy',
    chaptersCount: 4
  },
  {
    title: 'Pick Up a Grimoire, Become a Mage',
    author: 'Redice Studio',
    synopsis: 'A single grimoire found in an old antique bookshop changed his mundane college life forever. Forming a blood pact with an ancient invisible entity, he hides his terrifying identity while navigating a modern occult fantasy world.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/pick-up-a-grimoire-become-a-mage.1bf474.webp',
    status: 'Ongoing',
    releaseYear: 2024,
    genres: 'Action, Magic, Modern Fantasy',
    chaptersCount: 3
  },
  {
    title: 'Pick Me Up, Infinite Gacha',
    author: 'Loki Master',
    synopsis: 'The mobile gacha game Pick Me Up is known for being brutally unforgiving. Loki, the 5th highest-ranked master worldwide, blackouts and wakes up trapped inside the game as "Islat Han", a lowly 1-star disposable hero. Now he must command rookie masters and clear the 100th floor to return home.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/pick-me-up-infinite-gacha.3ebe61.webp',
    status: 'Ongoing',
    releaseYear: 2023,
    genres: 'Action, Adventure, Fantasy, System',
    chaptersCount: 6
  },
  {
    title: 'Return of the Mount Hua Sect',
    author: 'Biga',
    synopsis: 'Chung Myung, the 13th Disciple of Mount Hua Sect and the legendary Plum Blossom Sword Saint, defeated the Heavenly Demon with his final breath. Reborn a century later in the body of a beggar child, he is horrified to find that his beloved Mount Hua Sect has fallen into ruin. He vows to restore it to the pinnacle of Murim.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/return-of-the-mount-hua-sect.c0cbf9.webp',
    status: 'Ongoing',
    releaseYear: 2021,
    genres: 'Action, Martial Arts, Comedy, Murim',
    chaptersCount: 5
  },
  {
    title: 'Revenge of the Iron-Blooded Sword Hound',
    author: 'Lee Won-Ho',
    synopsis: 'He was the faithful hound of the Baskerville clan: Vikir. Yet his reward was the cold blade of a guillotine. Betrayed and framed, he wakes up reincarnated back into his infancy, armed with future memories and razor-sharp vengeance.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/revenge-of-the-iron-blooded-sword-hound.41b6fb.webp',
    status: 'Ongoing',
    releaseYear: 2023,
    genres: 'Action, Fantasy, Regression, Revenge',
    chaptersCount: 4
  },
  {
    title: 'The Greatest Estate Developer',
    author: 'Moon Baek-Deok',
    synopsis: 'Suho Kim, a civil engineering student in modern Korea, wakes up inside a fantasy novel as Lloyd Frontera, the useless son of an indebted noble. Using his modern engineering acumen and trusty summons, he begins terraforming the realm to build an empire.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/the-greatest-estate-developer.27bf21.webp',
    status: 'Ongoing',
    releaseYear: 2021,
    genres: 'Comedy, Fantasy, Isekai',
    chaptersCount: 5
  },
  {
    title: 'Nano Machine',
    author: 'Hanjung Wolya',
    synopsis: 'Yeo-un, an illegitimate prince born to a lowly concubine in the Demonic Cult, lives each day in fear of assassination. When a descendant from the distant future injects him with advanced nanomachines, his martial journey undergoes an unprecedented metamorphosis.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/nano-machine.e31bdb.webp',
    status: 'Ongoing',
    releaseYear: 2020,
    genres: 'Action, Martial Arts, Sci-Fi, Murim',
    chaptersCount: 5
  },
  {
    title: 'SSS-Class Suicide Hunter',
    author: 'Shin Noah',
    synopsis: 'Confucius Kim desires an S-Rank skill so intensely that he would die for it. When he awakens a skill that allows him to copy an ability upon dying, he uses it to regress and conquer the Babylon Tower floor by floor.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/sss-class-suicide-hunter.08cbba.webp',
    status: 'Ongoing',
    releaseYear: 2021,
    genres: 'Action, Fantasy, Psychological',
    chaptersCount: 4
  },
  {
    title: 'Shadow Slave',
    author: 'Guiltythree',
    synopsis: 'Growing up impoverished in the outskirts, Sunny never anticipated getting chosen by the Nightmare Spell. Blessed with an unusual shadow aspect and a peculiar flaw, he enters forgotten ancient realms to defy fate itself.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/shadow-slave.aa19df.webp',
    status: 'Ongoing',
    releaseYear: 2023,
    genres: 'Action, Adventure, Dark Fantasy',
    chaptersCount: 4
  },
  {
    title: 'Surviving The Game as a Barbarian',
    author: 'Jung Yoon-Kang',
    synopsis: 'After playing the punishing hardcore RPG "Dungeon and Stone" for 9 years and finally reaching the boss, Lee Hansoo is reincarnated into the game as Bjorn Jandel, a savage barbarian. In this cruel city, a barbarian who does not fight is considered trash.',
    coverUrl: 'https://cdn.asurascans.com/asura-images/covers/surviving-the-game-as-a-barbarian.86af24.webp',
    status: 'Ongoing',
    releaseYear: 2023,
    genres: 'Action, Adventure, Fantasy, Survival',
    chaptersCount: 4
  }
]

const samplePages = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80'
]

async function main() {
  console.log('Seeding rich comic library...')
  
  for (const c of richComics) {
    let comic = await prisma.comic.findFirst({ where: { title: c.title } })
    if (!comic) {
      comic = await prisma.comic.create({
        data: {
          title: c.title,
          author: c.author,
          synopsis: c.synopsis,
          coverUrl: c.coverUrl,
          status: c.status,
          releaseYear: c.releaseYear,
          genres: c.genres
        }
      })
    } else {
      comic = await prisma.comic.update({
        where: { id: comic.id },
        data: {
          coverUrl: c.coverUrl,
          synopsis: c.synopsis,
          status: c.status,
          genres: c.genres
        }
      })
    }

    // Ensure chapters
    for (let i = 1; i <= c.chaptersCount; i++) {
      const existingChap = await prisma.chapter.findFirst({
        where: { comicId: comic.id, chapterNumber: i }
      })
      if (!existingChap) {
        await prisma.chapter.create({
          data: {
            comicId: comic.id,
            chapterNumber: i,
            title: `Chapter ${i}`,
            releaseDate: new Date(Date.now() - (c.chaptersCount - i) * 86400000 * 2),
            pages: {
              create: samplePages.map((url, idx) => ({
                imageUrl: url,
                pageOrder: idx + 1
              }))
            }
          }
        })
      }
    }
    console.log(`✓ Processed: ${c.title}`)
  }
  console.log('Finished seeding!')
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
