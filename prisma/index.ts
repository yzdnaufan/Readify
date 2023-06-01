import { prisma } from './queries';

async function main() {
  try {
    await prisma.$connect();
    // Use Prisma functions here
    // ...
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
