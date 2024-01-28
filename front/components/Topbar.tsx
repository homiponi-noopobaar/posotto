import { Center, Heading } from '@yamada-ui/react'

export default function Topbar() {
  return (
    <Center bg="amber.50" h="4em" w="full" pos="fixed" top="0" z={10}>
      <Heading as="h2">Posotto</Heading>
    </Center>
  )
}
