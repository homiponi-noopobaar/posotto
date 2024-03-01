import { PostService } from '@/app/home/_services/post.service'
import { PostRepository } from '@/repositories/post.repository'
import { useAuth } from '@clerk/nextjs'



export const usePosts = () => {
  const PostRepo = new PostRepository()
  const PostSev = new PostService(PostRepo)
  const { getToken  } = useAuth();
  
  const findAll = async () => {
      const token = await getToken()
    try {
      return await PostSev.findAll(token)
    } catch (err) {
      console.log(err)
    }
  }

  return { findAll }
}
