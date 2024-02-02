import { Post, PostDraft } from '../data/post'
import { Token } from '../token'

export interface PostInterface {
  findAll: (token: Token) => Promise<Post[]>
  createPost: (postDraft: PostDraft, token: Token) => Promise<Post>
  deletePost: (id: number, token: Token) => Promise<void>
}
