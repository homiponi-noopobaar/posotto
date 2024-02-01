import { Post } from '@/types/data/post'

export const posts: Post[] = [
  {
    id: 1,
    user: {
      nickname: 'user1',
      img_url: 'https://placehold.jp/150x150.png',
      isPublic: true,
      id: 1,
      public_id: 'public_id1',
    },
    content:
      'posotoの中身そのいちposotoの中身そのいちposotoの中身そのいちposotoの中身そのいちposotoの中身そのいちposotoの中身そのいちposotoの中身そのいちposotoの中身そのいち',
    created_at: new Date(),
  },
  {
    id: 2,
    user: {
      nickname: 'user2',
      img_url: 'https://placehold.jp/150x150.png',
      isPublic: true,
      id: 2,
      public_id: 'public_id2',
    },
    content: 'コンテンツその2',
    created_at: new Date(),
  },
]
