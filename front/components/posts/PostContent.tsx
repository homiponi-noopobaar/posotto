'use client'
import {
  Box,
  Text,
  Avatar,
  VStack,
  HStack,
  Spacer,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  AvatarGroup,
} from '@yamada-ui/react'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import {
  faEllipsis,
  faHeart as faSolidHeart,
} from '@fortawesome/free-solid-svg-icons'
import {
  faHeart as faRegularHeart,
  faComment,
} from '@fortawesome/free-regular-svg-icons'
import { Post } from '@/types/data/post'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { useLike } from './hooks/useLike'
import { NeumoIconButton } from '../elements/NeumoIconButton'

export default function PostContent(post: Post) {
  const { isLiked, handleClickLike } = useLike()
  const { handlePushRouter } = useCustomRouter()

  return (
    <>
      <HStack gap="0" mb="0.5em" alignItems="start" w="full">
        <VStack gap="1em" ps="md">
          <HStack gap="1em" justify="space-between">
            <Avatar size="sm" />
            <VStack gap="0">
              <Text fontWeight="bold">{post.user.nickname}</Text>
              <Text fontSize="2xs">1時間前</Text>
            </VStack>
            <Spacer />
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <Button size="md" variant="ghost" alignSelf="flex-start">
                  <FontAwesomeIcon icon={faEllipsis} fontSize="xl" />
                </Button>
              </PopoverTrigger>
              <PopoverContent w="10em">
                <PopoverBody>
                  <Button size="md" variant="ghost" alignSelf="flex-start">
                    <Text fontSize="md">削除する</Text>
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
          <Box w={{ base: 'full', lg: '90%' }} pe="md">
            <Text wordBreak="keep-all" overflowWrap="anywhere">
              {post.content}
            </Text>
          </Box>
          <HStack>
            <NeumoIconButton
              isPressed={isLiked}
              handleClick={() => handleClickLike(post.id)}
              icon={isLiked ? faSolidHeart : faRegularHeart}
            />
            <NeumoIconButton
              handleClick={() =>
                handlePushRouter(`/${post.user.public_id}/${post.id}`)
              }
              icon={faComment}
            />
            <AvatarGroup size="sm" max={3}>
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
            </AvatarGroup>
          </HStack>
        </VStack>
      </HStack>
    </>
  )
}
