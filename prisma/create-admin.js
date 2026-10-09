const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'cashfree3000@gmail.com';
  const password = await bcrypt.hash('dato2003D@', 10);

  await prisma.user.upsert({
    where: { email },
    update: { role: 'ADMIN', password },
    create: { email, password, role: 'ADMIN' }
  });

  console.log('Admin user created successfully');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
