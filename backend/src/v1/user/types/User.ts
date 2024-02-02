import { User } from '@prisma/client';
import { Post } from '../../posts/types/Post';

export type ResponseProfileUser = {
  id: string;
  publicId: string;
  img_url?: string;
  isPublic: boolean;
  link: string;
  birthday: Date;
  comment: string;
  posts: UserPost[];
  nickname: string;
};

export type RequestCreateUser = Pick<User, "id" | "publicId" | "nickname"> & { img_url?: string };

export type ResponseCreateUser = User

export type UserPost = Omit<Post, 'user'>;
