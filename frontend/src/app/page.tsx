import { NeumoButton } from '@/components/shared/elements/NeumoButton'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { BASE_COLOR_DARK, BOX_SHADOW_UNPRESSED } from '@/variants'
import { SignIn, SignInButton } from '@clerk/nextjs'
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
    <Center>
      <Stack
        direction="column"
        w={{ base: 'full', md: '40em' }}
        pt="6em"
        px="4em"
        alignItems="center"
      >
        <Box mb="5em" alignSelf="start">
          <VStack alignItems="left">
            <Text fontSize="xl" color={BASE_COLOR_DARK}>
              ほんとに &quot;つぶやく&ldquo; SNS
            </Text>
            <HStack>
              <VStack alignItems="left" w="16em" gap="0">
                <Image src="/posotto_title_3.svg" w="16em" alt="title"/>
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
              <Image src="/posotto_logo.svg" w="3em" mb="1.2em" alt="logo"/>
            </HStack>
          </VStack>
        </Box>
        <Image src="/screen_image.png" w="20em" mb="4em" alt='screen'/>
        <SignInButton>
          <NeumoButton
            w="20em"
            borderRadius="1.5em"
            p="lg"
            letterSpacing="0.3em"
            isDark
          >
            ログインしてはじめる
          </NeumoButton>
        </SignInButton>
      </Stack>
    </Center>
  )
}
