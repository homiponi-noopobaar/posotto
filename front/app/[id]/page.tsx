import { Center, Spacer, Stack, Text, VStack } from '@yamada-ui/react'
import { auth, currentUser, UserProfile } from '@clerk/nextjs'
import PostCards from '@/components/posts/PostCards'
import { posts } from '@/constants'

export default async function Home() {
  // const posts = getPosts(user="all", num=10, )
  const { userId } = auth()
  if (userId) {
    const user = await currentUser()
    console.log(user)
  }
  return (
    <Stack direction="column" minH="100vh" w="full">
      <UserProfile />
      <PostCards posts={posts} />
    </Stack>
  )
}
