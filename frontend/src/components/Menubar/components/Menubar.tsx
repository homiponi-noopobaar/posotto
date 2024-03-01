import { Center, Spacer } from '@yamada-ui/react'
import PostInputDrawer from './PostInputDrawer/components/PostInputDrawer'
import { BG_COLOR } from '@/variants'

export default function Menubar() {
  return (
    <Center h="6em" w="full" pos="fixed" bottom="0" bg={BG_COLOR}>
      <Spacer />
      <PostInputDrawer />
    </Center>
  )
}
