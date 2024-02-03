import { Post, PostDraft } from '@/types/data/post'
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

  async findAll(token: Token): Promise<Post[]> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json()
      return data
    } catch (err) {
      console.log(err)
      return []
    }
  }

  async createPost(postDraft: PostDraft, token: Token): Promise<Post> {
    const formData = new FormData()
    formData.append('content', postDraft.content)
    formData.append('created_at', postDraft.created_at.toISOString())
    // console.log(formData.get('content'))
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
    // console.log(response)
    if (!response.ok) {
      throw new Error(`Error creating post ${response.status}`)
    }
    const text = await response.text()
    if (!text) {
      throw new Error('Empty response from server')
    }
    const data = JSON.parse(text)
    return data
  }

  async deletePost(id: number, token: Token): Promise<void> {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(id),
      })
    } catch (err) {
      console.error(err)
    }
  }
}
