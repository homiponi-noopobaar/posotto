import { NeumoLinkBox } from '@/components/elements/NeumoLinkBox'
import { BOX_SHADOW_UNPRESSED } from '@/variants'
import { Center, Heading, Image, Spacer, Stack } from '@yamada-ui/react'

export default function Home() {
  return (
    <Stack direction="column" minH="20vh" w="full" pt="6em">
      <Center w="full">
        {/* <NeumoLinkBox href="/home"> */}
        <Image
          src="/login.svg"
          w="80%"
          borderRadius="20px"
          boxShadow={BOX_SHADOW_UNPRESSED}
        />
        {/* </NeumoLinkBox> */}
      </Center>
      <Spacer />
    </Stack>
  )
}
