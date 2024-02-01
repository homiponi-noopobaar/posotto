import { VStack } from '@yamada-ui/react'
import PostCard from './PostCard'
import { Post } from '@/types/data/post'

interface PostCardsProps {
  posts: Post[]
}

export default function PostCards({ posts }: PostCardsProps) {
  console.log(posts)
  return (
    <VStack alignItems="center">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </VStack>
  )
}
