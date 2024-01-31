import { Post } from '@/types/data/post'
import { PostInterface } from '@/types/interface/post.interface'

export class PostRepository implements PostInterface {
  private static instance: PostRepository

  public static getInstance(): PostRepository {
    if (!PostRepository.instance) {
      PostRepository.instance = new PostRepository()
    }
    return PostRepository.instance
  }

  async findAll(): Promise<Post[]> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      const data = await response.json()
      return data
    } catch (err) {
      console.log(err)
      return []
    }
  }

  async createPost(post: Post): Promise<Post> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(post),
    })
    const data = await response.json()
    return data
  }
}
