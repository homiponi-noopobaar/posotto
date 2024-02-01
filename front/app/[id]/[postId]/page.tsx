'use client'
import { Center, Spacer, Stack, VStack } from '@yamada-ui/react'

import PostCards from '@/components/posts/PostCards'
import { useParams } from 'next/navigation'
import PostCard from '@/components/posts/PostCard'
import RepliesCard from '@/components/posts/RepliesCard'

export default function PostDetail() {
  const params = useParams()
  // params.postIdからpostを取得するapiを叩く
  // const post = posts[0]
  return (
    <Stack direction="column" minH="100vh" w="full" alignItems="center">
      {/* <PostCard {...post} />
      <RepliesCard posts={posts} /> */}
      <Spacer />
    </Stack>
  )
}
