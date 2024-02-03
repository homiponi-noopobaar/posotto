import { NeumoLinkBox } from '@/components/elements/NeumoLinkBox'
import { BASE_COLOR_DARK, BOX_SHADOW_UNPRESSED } from '@/variants'
import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@yamada-ui/react'

export default function Home() {
  return (
    <Stack direction="column" minH="100vh" w="full" pt="6em" px="4em">
      {/* <Center w="full"> 
        <VStack alignItems="left"> */}
      <Box mb="5em">
        <VStack alignItems="left">
          <Text fontSize="xl" color={BASE_COLOR_DARK}>
            ほんとに "つぶやく" SNS
          </Text>
          <HStack>
            <VStack alignItems="left" w="20em" gap="0">
              <Image src="/posotto_title_3.svg" w="20em" />
              <Text
                fontSize="0.8em"
                align="center"
                mt="-0.5em"
                ml="2em"
                color={BASE_COLOR_DARK}
                letterSpacing="0.8em"
              >
                ぽそっと
              </Text>
            </VStack>
            <Image src="/posotto_logo.svg" w="4em" mb="1.6em" />
          </HStack>
        </VStack>
      </Box>
      {/* <NeumoLinkBox href="/home"> */}

      {/* </NeumoLinkBox> */}
      <Image
        src="/login.svg"
        w="100%"
        borderRadius="20px"
        boxShadow={BOX_SHADOW_UNPRESSED}
      />
      {/* </VStack>
      </Center>*/}
      <Spacer />
    </Stack>
  )
}
