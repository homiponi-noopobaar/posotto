import { Center, Spacer, Stack, VStack } from '@yamada-ui/react'
import { posts } from '@/constants'
import PostCards from '@/components/posts/PostCards'

export default function Home() {
  return (
    <Stack direction="column" minH="100vh" w="full" bg="#eff2f9">
      <Center w={{ base: 'full', lg: '100%' }}>
        <PostCards posts={posts} />
      </Center>
      <Spacer />
    </Stack>
  )
}
