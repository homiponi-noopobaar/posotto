import { Center, Heading, Spacer, Stack, Text, VStack } from '@yamada-ui/react'

export default function Home() {
  return (
    <Stack
      direction="column"
      minH="100vh"
      w="full"
      // bg="#f0f0f0"
      bg="#eff2f9"
    >
      <Center w={{ base: 'full', lg: '100%' }}>
        <Heading as="h1">LP</Heading>
      </Center>
      <Spacer />
    </Stack>
  )
}
