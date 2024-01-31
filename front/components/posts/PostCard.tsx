'use client'
import { LinkBox, LinkOverlay } from '@yamada-ui/react'
import { Post } from '@/types/post'
import PostContent from './PostContent'

export default function PostCard(post: Post) {
  return (
    <>
      <LinkBox
        minH="7em"
        mx="md"
        w={{ base: '90%', lg: '90%' }}
        p="lg"
        m="md"
        borderRadius="40px"
        bg="#eff2f9"
        boxShadow="28px 28px 56px #c4c6cc,
             -28px -28px 56px #ffffff"
        overflow="hidden"
      >
        <LinkOverlay href={`/${post.userName}/${post.id}`} />
        <PostContent {...post} />
      </LinkBox>
    </>
  )
}
