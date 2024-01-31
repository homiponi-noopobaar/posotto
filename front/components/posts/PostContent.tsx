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
} from '@yamada-ui/react'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { Post } from '@/types/data/post'

export default function PostContent(post: Post) {
  return (
    <>
      <HStack gap="0" mb="0.5em" alignItems="start">
        <Avatar />
        <VStack gap="3px" ps="md">
          <HStack gap="0" justify="space-between">
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
          <HStack>{/* いいねボタンとリプボタンを入れる */}</HStack>
        </VStack>
      </HStack>
    </>
  )
}
