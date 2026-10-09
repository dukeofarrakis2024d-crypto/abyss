const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const comic = await prisma.comic.create({
    data: {
      title: 'Solo Leveling',
      author: 'Chugong',
      synopsis: 'Ten years ago, "the Gate" appeared and connected the real world with the realm of magic and monsters. To combat these vile beasts, ordinary people received superhuman powers and became known as "Hunters." Twenty-year-old Sung Jin-Woo is one such Hunter, but he is known as the "World\'s Weakest," owing to his pathetic power compared to even a measly E-Rank.',
      coverUrl: 'https://m.media-amazon.com/images/I/81xU+7V-aCL._AC_UF1000,1000_QL80_.jpg',
      status: 'Completed',
      releaseYear: 2018,
      genres: 'Action, Fantasy, Adventure',
      chapters: {
        create: [
          {
            chapterNumber: 1,
            title: 'Prologue',
            pages: {
              create: [
                { imageUrl: 'https://cdn.pixabay.com/photo/2023/12/28/08/38/mountains-8473722_1280.jpg', pageOrder: 1 },
                { imageUrl: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg', pageOrder: 2 }
              ]
            }
          },
          {
            chapterNumber: 2,
            title: 'The Double Dungeon',
            pages: {
              create: [
                { imageUrl: 'https://cdn.pixabay.com/photo/2016/11/14/03/40/rocks-1822501_1280.jpg', pageOrder: 1 }
              ]
            }
          }
        ]
      }
    }
  })
  
  console.log('Added demo comic:', comic.title)
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
