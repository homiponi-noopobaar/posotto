import { PostDraft } from '@/types/data/post'
import { PostRepository } from '@/repositories/post.repository'

export class PostService {
  constructor(private postRepository: PostRepository) {
    this.postRepository = PostRepository.getInstance()
  }
  async createPost(postDraft: PostDraft, token: string | null) {
    try {
      return await this.postRepository.createPost(postDraft, token)
    } catch (err) {
      console.log(err)
    }
  }
}