import { Post } from '../../posts/types/Post';

export type User = {
  id: string;
  img_url?: string;
  isPublic: boolean;
  link: string;
  birthday: Date;
  comment: string;
  posts: UserPost[];
  nickname: string;
};

export type UserPost = Omit<Post, 'user'>;
