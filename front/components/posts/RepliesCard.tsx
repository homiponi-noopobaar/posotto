import { Box, Divider, VStack } from '@yamada-ui/react'
import { Post } from '@/types/data/post'
import PostCard from './PostCard'
import PostContent from './PostContent'

interface PostCardsProps {
  posts: Post[]
}

export default function RepliesCard({ posts }: PostCardsProps) {
  return (
    <Box
      minH="7em"
      mx="md"
      w={{ base: '90%', lg: '90%' }}
      p="lg"
      m="md"
      borderRadius="40px"
      bg="#eff2f9"
      boxShadow="28px 28px 56px #c4c6cc,
             -28px -28px 56px #ffffff"
    >
      <VStack alignItems="center">
        {posts.map((post) => (
          <>
            <PostContent key={post.id} {...post} />
            <Divider />
          </>
        ))}
      </VStack>
    </Box>
  )
}
