import { PostBodyProps } from './components/PostBody/PostBody'
import { NeumoLinkBox } from '@/components/shared/elements/NeumoLinkBox'
import PostBody from './components/PostBody/PostBody'

type PostCardProps = PostBodyProps & {}

export default function PostCard(props: PostCardProps) {
  const { post, ...postBodyProps } = props
  return (
    <>
      <NeumoLinkBox
        href={`/${post.user.publicId}/${post.id}`}
        minH="7em"
        mx="md"
        w="90%"
        p="1.5em"
        m="sm"
        borderRadius="40px"
        overflow="hidden"
      >
        <PostBody post={post} {...postBodyProps} />
      </NeumoLinkBox>
    </>
  )
}
