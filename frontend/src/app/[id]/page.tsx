import { Stack, VStack } from '@yamada-ui/react'
import { auth, currentUser, UserProfile } from '@clerk/nextjs'
import { UserRepository } from '@/repositories/user.repository'
import { UserService } from './_services/user.service'

import { Suspense } from 'react'
import PostCard from '@/features/PostCards/components/PostCard/PostCard'

type Props = {
  params: { id: string }
}

export default async function Home(props: Props) {
  const { id } = props.params
  const UserRepo = new UserRepository()
  const UserSev = new UserService(UserRepo)
  const { getToken } = auth()
  const token = await getToken()

  const dbUser = await UserSev.findByPublicId(id, token)

  const { userId } = auth()
  if (userId) {
    const user = await currentUser()
  }
  if (!dbUser?.posts) return <div>Loading...</div>
  return (
    <Stack direction="column" minH="100vh" w="full">
      {/* <UserProfile /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <VStack alignItems="center">
          {dbUser.posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              hasLikeButton
              hasCommentButton
              hasDeleteButton
            />
          ))}
        </VStack>
      </Suspense>
    </Stack>
  )
}
