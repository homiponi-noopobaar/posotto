import { PrismaClient } from '@prisma/client';
import { user } from './user';
import { post } from './post';
import { follow } from './follow';

const prisma = new PrismaClient();

async function main() {
  await prisma.comment.deleteMany();
  await prisma.favorite.deleteMany();
  await prisma.post.deleteMany();
  await prisma.follow.deleteMany();
  await prisma.user.deleteMany();

  // データ削除後に新しいデータを挿入
  await user();
  await post();
  await follow();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
