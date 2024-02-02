import { Center, Spacer, Stack } from '@yamada-ui/react'
import { PostService } from './_services/post.service'
import { PostRepository } from '@/repositories/post.repository'
import { Suspense } from 'react'
import PostCards from '@/components/posts/PostCards'
import { auth } from '@clerk/nextjs'

export default async function Home() {
  const PostRepo = new PostRepository()
  const PostSev = new PostService(PostRepo)
  const { getToken } = auth()
  const token = await getToken()
  const posts = await PostSev.findAll(token)
  const isCurrentUsersPost = true // TODO: implement
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
