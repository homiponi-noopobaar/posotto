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
import PostContent from './PostContent'

export default function PostCard(post: Post) {
  return (
    <>
      <Box
        minH="7em"
        mx="md"
        w={{ base: '90%', lg: '90%' }}
        p="lg"
        m="md"
        borderRadius="40px"
        bg="#eff2f9"
        boxShadow="28px 28px 56px #c4c6cc,
             -28px -28px 56px #ffffff"
      >
        <PostContent {...post} />
      </Box>
    </>
  )
}
