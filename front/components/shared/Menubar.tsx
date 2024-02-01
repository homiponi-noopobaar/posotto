'use client'
import {
  Avatar,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  HStack,
  Spacer,
  Text,
  VStack,
  useDisclosure,
} from '@yamada-ui/react'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { currentUser } from '@clerk/nextjs'
import { BG_COLOR } from '@/variants'

interface Props {
  user: {
    id: string
    name: string
    imageUrl: string
  }
}

export default function Menubar({ user }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(currentUser)
  return (
    <Center h="6em" w="full" pos="fixed" bottom="0">
      <Button
        onClick={onOpen}
        h="4em"
        w="4em"
        borderRadius="50%"
        boxShadow="28px 28px 56px #c4c6cc,
             -28px -28px 56px #ffffff"
      >
        <FontAwesomeIcon icon={faMicrophone} fontSize="2em" color="gray.600" />
      </Button>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="bottom"
        h="30em"
        bg={BG_COLOR} // ここで背景色を指定しないと、Drawerの背景色が透明になってしまう
      >
        <DrawerHeader>ぽそっと、つぶやく</DrawerHeader>
        <DrawerBody justifyContent="center">
          <Box
            minH="7em"
            mx="md"
            w={{ base: '90%', lg: '600px' }}
            p="sm"
            borderRadius="10px"
          >
            <HStack gap="0" mb="0.5em" alignItems="start">
              <Avatar src={user.imageUrl} />
              <VStack gap="3px" ps="md">
                <HStack gap="0" justify="space-between">
                  <VStack gap="0">
                    <Text fontWeight="bold">ユーザー</Text>
                  </VStack>
                  <Spacer />
                </HStack>
                <Box w={{ base: 'full', md: '600px' }} pe="md">
                  <Text wordBreak="keep-all" overflowWrap="anywhere">
                    入力内容。
                    こんな感じで、入力内容を表示する。こんな感じで、入力内容を表示する。こんな感じで入力内容を表示する。いい感じに折り返す機能としてwordBreak=keepallとoverflowWrap=anywhereつけてるけど実際これどうですかね
                  </Text>
                </Box>
              </VStack>
            </HStack>
          </Box>
        </DrawerBody>
        <Spacer />
        <DrawerFooter justifyContent="center">
          <Button variant="ghost" onClick={onClose}>
            posotto
          </Button>
        </DrawerFooter>
      </Drawer>
    </Center>
  )
}
