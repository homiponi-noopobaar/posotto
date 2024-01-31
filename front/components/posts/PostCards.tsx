import {
  Box,
  Text,
  Avatar,
  VStack,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from '@yamada-ui/react'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { Post } from '@/lib/types'
import PostCard from './PostCard'

interface PostCardsProps {
  posts: Post[]
}

export default function PostCards({ posts }: PostCardsProps) {
  return (
    <VStack alignItems="center">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </VStack>
  )
}
