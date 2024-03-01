import {
  Post,
  PostDraft,
  RequestAudioText,
  ResponseAudioText,
} from '@/types/data/post'
import { Token } from '@/types/token'
import { fetchPost } from '@/utils/fetcher'

export const PostService = () => {
  const convertText = async (text: string, token: Token) => {
    try {
      const result = await fetchPost<ResponseAudioText, RequestAudioText>(
        '/posts/voice',
        { text: text },
        token ?? undefined,
      )
      console.log(result)
      return result
    } catch (err) {
      console.log(err)
      return null
    }
  }
  const createPost = async (postDraft: PostDraft, token: Token) => {
    try {
      const post = await fetchPost<Post, PostDraft>(
        '/posts',
        postDraft,
        token ?? undefined,
      )
      return post
    } catch (err) {
      console.log(err)
      return null
    }
  }

  return { convertText, createPost }
}
