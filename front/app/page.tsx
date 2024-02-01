import { Center, Heading, Spacer, Stack } from '@yamada-ui/react'

export default function Home() {
  return (
    <Stack direction="column" minH="20vh" w="full">
      <Center w="full">
        <Heading as="h1">LP</Heading>
      </Center>
      <Spacer />
    </Stack>
  )
}
