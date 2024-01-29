import { Post, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const post = async () => {
  const posts: Post[] = [
    {
      content: 'aaaaaa',
      created_at: new Date(),
      id: BigInt('1'),
      user_id: '1',
    },
  ];
  await prisma.post.createMany({
    data: posts.map((post) => post),
  });
};
