import {
  Center,
  Drawer,
  DrawerFooter,
  DrawerHeader,
  Spacer,
} from '@yamada-ui/react'
import PostInputDrawer from './PostInputDrawer'

export default function Menubar() {
  return (
    <Center h="6em" w="full" pos="fixed" bottom="0">
      {/* <NeumoIconButton
        iconElem={<FontAwesomeIcon icon={faMicrophone} fontSize="2xl" />}
        // handleClick={onOpen}
        size="lg"
      /> */}
      {/* <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="bottom"
        h="10em"
        bg={BG_COLOR} // ここで背景色を指定しないと、Drawerの背景色が透明になってしまう
      > */}
      <Spacer />
      {/* <DrawerFooter justifyContent="center"> */}
      <PostInputDrawer />
      {/* </DrawerFooter> */}
      {/* </Drawer> */}
    </Center>
  )
}
