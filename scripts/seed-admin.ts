import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'cashfree3000@gmail.com'
  const password = 'dato2003D@'
  
  const hashedPassword = await bcrypt.hash(password, 10)
  
  const user = await prisma.user.upsert({
    where: { email },
    update: {
      password: hashedPassword,
      role: 'ADMIN'
    },
    create: {
      email,
      password: hashedPassword,
      role: 'ADMIN'
    }
  })
  
  console.log('Admin user created:', user.email)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
