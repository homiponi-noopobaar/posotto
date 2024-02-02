import { Post } from '../data/post'
import { Token } from '../token'

export interface PostInterface {
  findAll: (token:Token) => Promise<Post[]>
  createPost: (post: Post,token:Token) => Promise<Post>
  deletePost: (id: number,token:Token) => Promise<void>
}
