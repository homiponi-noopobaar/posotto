import { PostRepository } from '@/repositories/post.repository'

export class PostService {
  constructor(private postRepository: PostRepository) {
    this.postRepository = PostRepository.getInstance()
  }
  async findAll() {
    try {
      return await this.postRepository.findAll()
    } catch (err) {
      console.log(err)
    }
  }
}
