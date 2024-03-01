import { Post } from '@/types/data/post'
import { fetchGet } from '@/utils/fetcher'

export const PostService = () => {
  const findAll = async (token: string | null): Promise<Post[] | null> => {
    try {
      // fetchGetのシグネチャに合わせてtokenがnullの場合はundefinedを渡す
      const posts = await fetchGet<Post[]>('/posts', token ?? undefined);
      return posts;
    } catch (err) {
      console.error(err);
      // エラー時の戻り値としてnullを返すか、適切にハンドリング
      return null;
    }
  }

  return { findAll };
}
