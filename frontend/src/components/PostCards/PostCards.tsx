'use client'
import { Post } from '@/types/data/post'
import { VStack } from '@yamada-ui/react'
import PostCard from '@/components/PostCards/components/PostCard/PostCard'
import { useQuery } from '@tanstack/react-query'
import { usePosts } from '@/components/PostCards/hooks/usePosts'
// import { User } from '@clerk/nextjs/server'

type PostCardProps = {
  // user: User
  posts: Post[]
}

export default function PostCards(props: PostCardProps) {
  const { posts } = props
  const { findAll } = usePosts()
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: findAll,
    initialData: posts,
  })
  const isCurrentUsersPost = true // TODO: implement

  return (
    <VStack alignItems="center">
      {data?.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          hasLikeButton
          hasCommentButton
          hasDeleteButton={isCurrentUsersPost}
        />
      ))}
    </VStack>
  )
}
