import { VStack } from '@yamada-ui/react'
import { Post } from '@/types/post'
import PostCard from './PostCard'

interface PostCardsProps {
  posts: Post[]
}

export default function PostCards({ posts }: PostCardsProps) {
  return (
    <VStack alignItems="center">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </VStack>
  )
}
