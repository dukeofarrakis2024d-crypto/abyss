const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const sketchComics = [
  {
    title: 'Solo Necromancer: Monarch of the Deep',
    author: 'Sung-Woo',
    synopsis: "When the subterranean rifts tore the continent in two, Sung-Woo awoke not with a warrior's blade, but the eternal authority to bind fallen legions. Now descending into the 99th floor of the Tartarus trench, the monarch claims his throne before the old gods awaken.",
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr21yC4IplET-3vE587UKJLJobT9LI02CHtO-bbe-aBr9_ckMvS0cjLanKnBIAkhgLX3uvOy8MQeSJ8AL58VM1eU_1JFbFY16G4UiBMFmcCu4sGbw0KjCjHtH9Gf7z5Z9ttYwrVAtZ6sEeN4tEhfsVz2L84tSOQSTjdwIf7nka6J9S_gVyFiMi1FSH_Nr9MX1j-nu-HM99XoXYIjBP7c_8iUJ_X-SyI-uI1FpX-2w',
    status: 'Ongoing',
    releaseYear: 2024,
    genres: 'Action, Fantasy, Necromancy'
  },
  {
    title: 'Return of the S-Rank Hunter',
    author: 'Redice Studio',
    synopsis: 'A high-action dynamic tale of a futuristic dungeon hunter with dual blazing spectral katanas standing amid crumbling high-rise Seoul ruins.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByE1DWSSJLGVD2bb2AXyjBwrEADJyz1gFw1bsygRpljL_Y6LRxCln0qqNz2UB3Dx9edgsXVtAEd9LePF6qb9Xm1l-lU7qGeFlQLmfLQLHV8tlG38flQznmZMfRgCrRqE5kqOMw0c3Kyj4RLOjxDCwaGTq3A2idXgGrq1I4mr_LsrFs6hOtp_BQwFgyYEJnUOWgrirDNH24D35TA0uRUhTTxZZ7BHAWefe1Mo2_yKQ',
    status: 'Ongoing',
    releaseYear: 2024,
    genres: 'Action, Regression, Dungeons'
  },
  {
    title: 'Heavenly Demon Normal Life',
    author: 'San-Cheon',
    synopsis: 'Imposing Heavenly Demon martial artist in ornate obsidian robes with demonic red aura eyes, overlooking ancient misty mountain peaks in a peaceful life.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_1Odv5qSvWOWa8EA7rLWlnP67mpTcGnYUzKhzVffLrzCcXKz29_1yq3M50SH4yGiqMuSnL1Xowiz19RXBGgmv6X0UX0qdPipi-GCHK_ZbwpgGibb0v_nk_tMkFNQm0xKKy6ifTJ1tAq4ZkbmeRFdW7LinSJajeclzOp3ix_njKRs2esj0-MuvtAuzTxdyNr9Z3bDNp3xVSCGPaLY1f7P50tGLeMlQYWmfA53YpPg',
    status: 'Ongoing',
    releaseYear: 2023,
    genres: 'Murim, Rebirth, Martial Arts'
  },
  {
    title: 'Chronicles of the Martial God',
    author: 'Myung-Jin',
    synopsis: 'Long-haired wandering swordsman with a bamboo hat standing beside a calm reflective river under a blood moon with a glowing violet blade reflection.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm8t8Kh9Rtp1a9gX226UrBTAKa88lVVnKlJTY2P9f-WPw8pQfXluNR_qzZyFSQSqA0sw9EHdJvk6DCKG71-jXLqwdUdZFlc8wombfungyte7dtjdBPXLEwaCc-WGOvY2huT11aO-F8rHmxUVUiZFOZS5yc31G9CNwDLDwcS3uBSVtw4wu0QKuIdpCvpLcja56zMCEZe1Rvd2jCCz7OfkhfYpKTNmrNcCwnavQnF-M',
    status: 'Ongoing',
    releaseYear: 2023,
    genres: 'Historical, Action, Manhua'
  },
  {
    title: 'Reaper of the Drifting Moon',
    author: 'Woo-Gak',
    synopsis: 'Pale assassin with silver hair and snake daggers coiled in shadows of deep underground cavern, hypnotic purple venom glow, dark thriller revenge.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKw8xG3kfBLf3Y3-72uFlFar7v1oAiK41F0cPiM578sqHIIoEM__lnnjkdJW1IrFswlDGhQuLlZ-ANLJwPbmL_dJXbXgruBsz2t_eaaPAtgv6dedi2iR0ujYM5it3U1hcLWtfs7P52vTRuI-fos5h1gx3HjwQTOeTL_iSKnNsMsPV4Js_AWt5z0NxjfowBBqGbAyoS1dGDFDOpr61jBsk_PKQV4eyNqK2PoWn6_-Q',
    status: 'Ongoing',
    releaseYear: 2022,
    genres: 'Dark Murim, Revenge, Action'
  },
  {
    title: 'Magic Emperor',
    author: 'Wuer Manhua',
    synopsis: 'Cunning demonic sorcerer smirking while orchestrating black and purple lightning runes above an imperial palace, power scaling fantasy.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrnNAjcAhxNKt08emUzLkNUsNvdcFAc4ZDijEEcY-RL8PipW3Rglve57kQpr-juU34hR7gbx4kPRcWl2VlYQ5yi_S2zEo-v8elu35NphL2pwlsqeGLbaAVZDjQc-ncvpsatgM1D0Ot9VTpFVq9lHj7tyA7rtq8M-Fo9sYuEgnM62QMIktfYej-nDk5bH_i8b5vB-iHaA_iavNwzERl32YXEfqNUHPkLP6CeqOGZxw',
    status: 'Ongoing',
    releaseYear: 2020,
    genres: 'Reincarnation, Scheme, Action'
  },
  {
    title: 'Doom Breaker (Suicidal Battle God)',
    author: 'Cheongdam',
    synopsis: 'Armored lone crusader with a cracked glowing blue dragon gauntlet standing facing colossal demonic shadows on ruined fortress ramparts.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrBPq8zK8kP57WUCcqPDTuuB2n7KS8dEzERn7XlA_o-ybdl1QlIK02kEPUu-u5Wwa3hpWdU80EAFjMsWLyF6KXvyACrQKVDnOt9GbkXtLR9Er47tEUUeGv6F5_UZoRqUs4IzPdoLdPzasFRPg2PEYFIYiVA7T-fDN1KSTmOO5_QyV4aijZTkZE0nTMZSv41ITtZOr2iizeAG9A2Qi0RZPmHzPCK-iye3E0V1fDU2g',
    status: 'Ongoing',
    releaseYear: 2021,
    genres: 'Regression, Raid, Action, Fantasy'
  }
]

const samplePages = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80'
]

async function main() {
  console.log('Seeding Sketch comics from user template...')
  
  for (const c of sketchComics) {
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

    // Ensure 3 chapters with pages
    for (let i = 1; i <= 3; i++) {
      const existingChap = await prisma.chapter.findFirst({
        where: { comicId: comic.id, chapterNumber: i * 20 }
      })
      if (!existingChap) {
        await prisma.chapter.create({
          data: {
            comicId: comic.id,
            chapterNumber: i * 20,
            title: `Chapter ${i * 20}`,
            releaseDate: new Date(Date.now() - (4 - i) * 3600000 * 3),
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
    console.log(`✓ Added/Updated: ${c.title}`)
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
