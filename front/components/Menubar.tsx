import { Center, Heading } from '@yamada-ui/react'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

export default function Menubar() {
  return (
    <Center bg="white" h="4em" w="full" pos="fixed" bottom="0">
      <FontAwesomeIcon icon={faMicrophone} fontSize="3xl" />
    </Center>
  )
}
