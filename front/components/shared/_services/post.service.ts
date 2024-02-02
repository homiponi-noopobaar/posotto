import { PostDraft } from '@/types/data/post'
import { PostRepository } from '@/repositories/post.repository'

export class PostService {
  constructor(private postRepository: PostRepository) {
    this.postRepository = PostRepository.getInstance()
  }
  async createPost(postDraft: PostDraft) {
    try {
      return await this.postRepository.createPost(postDraft)
    } catch (err) {
      console.log(err)
    }
  }
}
