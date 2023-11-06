import { PrismaClient } from '@prisma/client';

// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient | null = null;

if (process.env.NODE_ENV === 'production') {
  // In production, use a single Prisma instance
  prisma = new PrismaClient();
} else if (!prisma) {
  // In development and testing, create a new Prisma instance for each request
  prisma = new PrismaClient();
}

export default prisma as PrismaClient;
