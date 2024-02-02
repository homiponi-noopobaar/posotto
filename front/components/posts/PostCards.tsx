'use client'
import { Post } from '@/types/data/post'
import { VStack } from '@yamada-ui/react'
import { useState } from 'react'
import PostCard from './PostCard'

type PostCardProps = {
  posts: Post[]
}

export default async function PostCards(props: PostCardProps) {
  const [posts, setPosts] = useState<Post[]>(props.posts)
  const isCurrentUsersPost = true // TODO: implement
  return (
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
  )
}
