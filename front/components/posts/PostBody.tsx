'use client'
import { Box, Text, Avatar, VStack, HStack, Spacer } from '@yamada-ui/react'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'
import {
  faHeart as faRegularHeart,
  faTrashCan,
  faComment,
} from '@fortawesome/free-regular-svg-icons'
import { Post } from '@/types/data/post'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { useLike } from './hooks/useLike'
import { NeumoIconButton } from '../elements/NeumoIconButton'
import { postBodyInfo } from './postBodyInfo'

export type PostBodyProps = {
  post: Post
  hasDeleteButton?: boolean
  hasLikeButton?: boolean
  hasCommentButton?: boolean
}

export default function PostBody(props: PostBodyProps) {
  const { post, hasDeleteButton, hasLikeButton, hasCommentButton } = props
  const { isLiked, handleClickLike } = useLike()
  const { handlePushRouter } = useCustomRouter()
  const handleDeletePost = (postId: number) => {} // TODO: implement
  const { contentOpacity, timeSinceText } = postBodyInfo(post)
  return (
    <>
      <HStack gap="0" mb="0.5em" alignItems="start" w="full">
        <VStack gap="1em" ps="md">
          <HStack gap="1em" justify="space-between">
            <Avatar size="sm" opacity={contentOpacity} />
            <VStack gap="0">
              <Text fontWeight="bold" opacity={contentOpacity}>
                {post.user.nickname}
              </Text>
              <Text fontSize="2xs" opacity={contentOpacity}>
                {timeSinceText}
              </Text>
            </VStack>
            <Spacer />
            {hasDeleteButton && (
              <NeumoIconButton
                iconElem={
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    fontSize="md"
                    opacity={contentOpacity}
                  />
                }
                handleClick={() => handleDeletePost(post.id)}
              />
            )}
          </HStack>
          <Box w={{ base: 'full', lg: '90%' }} pe="md">
            <Text
              opacity={contentOpacity}
              wordBreak="keep-all"
              overflowWrap="anywhere"
            >
              {post.content}
            </Text>
          </Box>
          <HStack>
            {hasLikeButton && (
              <NeumoIconButton
                isPressed={isLiked}
                handleClick={() => handleClickLike(post.id)}
                iconElem={
                  <FontAwesomeIcon
                    icon={isLiked ? faSolidHeart : faRegularHeart}
                    fontSize="sm"
                    opacity={contentOpacity}
                  />
                }
              />
            )}
            {hasCommentButton && (
              <NeumoIconButton
                handleClick={() =>
                  handlePushRouter(`/${post.user.publicId}/${post.id}`)
                }
                iconElem={
                  <FontAwesomeIcon
                    icon={faComment}
                    fontSize="sm"
                    opacity={contentOpacity}
                  />
                }
              />
            )}
          </HStack>
        </VStack>
      </HStack>
    </>
  )
}
