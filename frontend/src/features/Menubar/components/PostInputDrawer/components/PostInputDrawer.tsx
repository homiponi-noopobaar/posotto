import { auth } from '@clerk/nextjs'
import PostInput from './PostInput/components/PostInput'

export default async function PostInputDrawer() {
  const { getToken } = auth()
  const token = await getToken()
  return <PostInput token={token} />
}
