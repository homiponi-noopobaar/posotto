import { Post } from './post'

export type User = Omit<DBUser, 'posts'> & { posts: Post[] }

export type DBUser = {
  id: string
  img_url?: string
  isPublic: boolean
  link: string
  birthday: Date
  comment: string
  posts: UserPost[]
  nickname: string
}

export type UserPost = Omit<Post, 'user'>
