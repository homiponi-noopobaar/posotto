import { Center, Spacer, Stack, VStack } from '@yamada-ui/react'
import PostCards from '@/components/posts/PostCards'
import { PostService } from './_services/post.service'
import { PostRepository } from '@/repositories/post.repository'
import { Suspense } from 'react'

export default async function Home() {
  const PostRepo = new PostRepository()
  const PostSev = new PostService(PostRepo)
  const posts = await PostSev.findAll()
  if (!posts) return <div>Loading...</div>

  return (
    <Stack direction="column" minH="100vh" w="full" bg="#eff2f9">
      <Center w={{ base: 'full', lg: '100%' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <PostCards posts={posts} />
        </Suspense>
      </Center>
      <Spacer />
    </Stack>
  )
}
