import { Divider, VStack } from '@yamada-ui/react'
import { Post } from '@/types/data/post'
import PostContent from './PostContent'
import { NeumoBox } from '../elements/NeumoBox'

interface PostCardsProps {
  posts: Post[]
}

export default function RepliesCard({ posts }: PostCardsProps) {
  return (
    <NeumoBox
      minH="7em"
      mx="md"
      w={{ base: '90%', lg: '90%' }}
      p="lg"
      m="md"
      borderRadius="40px"
    >
      <VStack alignItems="center">
        {posts.map((post) => (
          <>
            <PostContent key={post.id} {...post} />
            <Divider />
          </>
        ))}
      </VStack>
    </NeumoBox>
  )
}
