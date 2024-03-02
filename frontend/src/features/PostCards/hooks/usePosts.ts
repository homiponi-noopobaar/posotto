import { PostService } from '@/app/home/_services/post.service';
import { useAuth } from '@clerk/nextjs'



export const usePosts = () => {
  const { getToken  } = useAuth();
  
  const findAll = async () => {
      const token = await getToken()
    try {
      return await PostService().findAll(token)
    } catch (err) {
      console.log(err)
    }
  }

  return { findAll }
}
