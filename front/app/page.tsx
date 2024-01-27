import Posoto, { PosotoProps } from '@/components/Posoto'
import { Center, Spacer, Stack, VStack } from '@yamada-ui/react'
import { posotos } from '@/constants'

export default function Home() {
  return (
    <Stack direction="column" minH="100vh" w="full">
      <Center w="full">
        <VStack>
          {posotos.map((posoto: PosotoProps) => (
            <Posoto
              key={posoto.id}
              id={posoto.id}
              userName={posoto.userName}
              content={posoto.content}
            />
          ))}
        </VStack>
      </Center>
      <Spacer />
    </Stack>
  )
}
