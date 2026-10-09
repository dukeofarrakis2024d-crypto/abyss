import { PrismaClient } from '@prisma/client';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';

// For local Node.js environment, we need to polyfill WebSocket for Neon
if (typeof WebSocket === 'undefined') {
  const ws = require('ws');
  neonConfig.webSocketConstructor = ws;
}

const connectionString = process.env.DATABASE_URL || '';

// Create connection pool and Prisma adapter
const pool = new Pool({ connectionString });
// @ts-ignore
const adapter = new PrismaNeon(pool);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // @ts-ignore
    adapter,
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
