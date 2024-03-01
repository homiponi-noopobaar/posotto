'use client'
import { Post } from '@/types/data/post'
import { VStack } from '@yamada-ui/react'
import { useState } from 'react'
import PostCard from './PostCard'
import { currentUser } from '@clerk/nextjs'
// import { User } from '@clerk/nextjs/server'

type PostCardProps = {
  // user: User
  posts: Post[]
}

export default async function PostCards(props: PostCardProps) {
  const [posts, setPosts] = useState<Post[]>(props.posts)
  const isCurrentUsersPost = true // TODO: implement

  // const user = await currentUser()
  // if (user) {
  // posts.push({
  //   id: 1,
  //   user: {
  //     id: 'user_2bZsg5vIrB06IKeLE7eYyecxop0',
  //     publicId: 'homiponi',
  //     nickname: 'homiponi',
  //     img_url: user?.imageUrl,
  //     isPublic: true,
  //   },
  //   content: 'こんにちは',
  //   created_at: new Date(),
  //   isLiked: false,
  //   _count: {
  //     favorites: 0,
  //     comments: 0,
  //   },
  // })
  // }
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
