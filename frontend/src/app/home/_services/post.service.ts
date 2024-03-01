import { PostRepository } from '@/repositories/post.repository'

export class PostService {
  constructor(private postRepository: PostRepository) {}
  async findAll(token: string | null) {
    try {
      return await this.postRepository.findAll(token)
    } catch (err) {
      console.log(err)
    }
  }
}
