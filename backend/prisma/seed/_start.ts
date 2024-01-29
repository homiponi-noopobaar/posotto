import { PrismaClient } from '@prisma/client';
import { user } from './user';
import { post } from './post';

const prisma = new PrismaClient();

async function main() {
  await prisma.comment.deleteMany()
  await prisma.favorite.deleteMany()
  await prisma.post.deleteMany()
  await prisma.follow.deleteMany()
  await prisma.user.deleteMany()
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
user()
post()