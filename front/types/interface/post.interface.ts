import { Post } from '../data/post'

export interface PostInterface {
  findAll: () => Promise<Post[]>
}
