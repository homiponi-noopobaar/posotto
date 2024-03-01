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

  async convertVoiceToText(file: Blob, token: Token): Promise<string> {
    const formData = new FormData()
    formData.append('content', file)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/voice`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      },
    )
    const text = await response.text()
    return text
  }

  async createPost(postDraft: PostDraft, token: Token): Promise<Post> {
    console.log('====postDraft=====')
    console.log(postDraft)
    console.log(JSON.stringify(postDraft))
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postDraft),
    })
    if (!response.ok) {
      throw new Error(`Error creating post ${response.status}`)
    }
    console.log(response)
    const text = await response.text()

    if (!text) {
      throw new Error('Empty response from server')
    }
    console.log(text)
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
