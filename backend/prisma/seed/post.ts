import { Post, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const post = async () => {
  const posts = [
    {
      content: 'aaaaaa',
      created_at: new Date(),
      user_id: 'user_2bZsg5vIrB06IKeLE7eYyecxop0',
    },
  ];
  await prisma.post.createMany({
    data: posts.map((post) => post),
  });
};
