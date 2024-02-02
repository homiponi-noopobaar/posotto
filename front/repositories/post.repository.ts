import { Post } from '@/types/data/post'
import { PostInterface } from '@/types/interface/post.interface'
import { Token } from '@/types/token'

export class PostRepository implements PostInterface {
  private static instance: PostRepository

  public static getInstance(): PostRepository {
    if (!PostRepository.instance) {
      PostRepository.instance = new PostRepository()
    }
    return PostRepository.instance
  }

  async findAll(token:Token): Promise<Post[]> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: 'GET',
        headers:{
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      return data
    } catch (err) {
      console.log(err)
      return []
    }
  }

  async createPost(post: Post,token:Token): Promise<Post> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: 'POST',
      headers:{
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(post),
    })
    const data = await response.json()
    return data
  }

  async deletePost(id: number,token:Token): Promise<void> {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
        method: 'DELETE',
        headers:{
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(id),
      })
    } catch (err) {
      console.error(err)
    }
  }
}
