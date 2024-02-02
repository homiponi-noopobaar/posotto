import { Center, Spacer, Stack, VStack } from '@yamada-ui/react'
import { PostService } from './_services/post.service'
import { PostRepository } from '@/repositories/post.repository'
import { Suspense } from 'react'
import PostCard from '@/components/posts/PostCard'
import { auth } from '@clerk/nextjs'

// import { posts } from '@/constants'

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
          <VStack alignItems="center">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                hasLikeButton
                hasCommentButton
                hasDeleteButton={isCurrentUsersPost}
              />
            ))}
          </VStack>
        </Suspense>
      </Center>
      <Spacer />
    </Stack>
  )
}
