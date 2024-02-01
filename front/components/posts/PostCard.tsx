import { PostBodyProps } from './PostBody'
import { NeumoLinkBox } from '../elements/NeumoLinkBox'
import PostBody from './PostBody'

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
        p="lg"
        m="md"
        borderRadius="40px"
        overflow="hidden"
      >
        <PostBody post={post} {...postBodyProps} />
      </NeumoLinkBox>
    </>
  )
}
