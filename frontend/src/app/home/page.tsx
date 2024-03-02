import { Center, Spacer, Stack } from '@yamada-ui/react'
import { PostService } from '@/app/home/_services/post.service'
import { Suspense } from 'react'
import PostCards from '@/features/PostCards/PostCards'
import { auth } from '@clerk/nextjs'

export default async function Home() {
  const { getToken } = auth()
  const token = await getToken()
  const posts = await PostService().findAll(token)

  const isCurrentUsersPost = false // TODO: implement
  if (!posts) return <div>Loading...</div>

  return (
    <Stack direction="column" minH="100vh" w="full">
      <Center w="full">
        <Suspense fallback={<div>Loading...</div>}>
          <PostCards posts={posts} />
        </Suspense>
      </Center>
      <Spacer />
    </Stack>
  )
}
