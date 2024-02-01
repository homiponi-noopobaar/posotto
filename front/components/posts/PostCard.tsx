import { Post } from '@/types/data/post'
import PostContent from './PostContent'
import { NeumoLinkBox } from '../elements/NeumoLinkBox'

export default function PostCard(post: Post) {
  return (
    <>
      <NeumoLinkBox
        href={`/${post.user.publicId}/${post.id}`}
        minH="7em"
        mx="md"
        w="90%"
        p="lg"
        m="md"
        borderRadius="40px"
        overflow="hidden"
      >
        <PostContent {...post} />
      </NeumoLinkBox>
    </>
  )
}
