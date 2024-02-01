import { Post, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const post = async () => {
  const posts = [
    {
      id: 1,
      content: 'sample1-user1',
      created_at: new Date(),
      user_id: 'user_2bZsg5vIrB06IKeLE7eYyecxop0',
    },
    {
      id: 2,
      content: 'sample2-user1',
      created_at: new Date(),
      user_id: 'user_2bZsg5vIrB06IKeLE7eYyecxop0',
    },
    {
      id: 3,
      content: 'sample1-user2',
      created_at: new Date(),
      user_id: 'user_2bZsg5vIrB06IKeLE7eYyecxoq1',
    },
    {
      id: 4,
      content: 'sample2-user2',
      created_at: new Date(),
      user_id: 'user_2bZsg5vIrB06IKeLE7eYyecxoq1',
    },
    {
      id: 5,
      content: 'sample1-user3',
      created_at: new Date(),
      user_id: 'user_2bZsg5vIrB06IKeLE7eYyecxoq2',
    },
    {
      id: 6,
      content: 'sample2-user3',
      created_at: new Date(),
      user_id: 'user_2bZsg5vIrB06IKeLE7eYyecxoq2',
    },
  ];
  await prisma.post.createMany({
    data: posts.map((post) => post),
  });
};
