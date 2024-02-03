import { PostDraft } from '@/types/data/post'
import { PostRepository } from '@/repositories/post.repository'
import { Token } from '@/types/token'

export class PostService {
  constructor(private postRepository: PostRepository) {
    this.postRepository = PostRepository.getInstance()
  }
  async convertVoiceToText(file: Blob,token:Token) {
    try {
      return await this.postRepository.convertVoiceToText(file,token)
    } catch (err) {
      console.log(err)
    }
  }
  async createPost(postDraft: PostDraft, token: string | null) {
    try {
      return await this.postRepository.createPost(postDraft, token)
    } catch (err) {
      console.log(err)
    }
  }
}
