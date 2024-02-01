import { BG_COLOR } from '@/variants'
import { UserButton, SignedOut, SignInButton, SignedIn } from '@clerk/nextjs'
import { Box, Center, Image, LinkBox, LinkOverlay } from '@yamada-ui/react'

export default function Topbar() {
  return (
    <Center
      bg={BG_COLOR}
      h="5em"
      w="full"
      px="lg"
      pos="fixed"
      top="0"
      z={10}
      shadow="0 10px 20px rgba(0, 0, 0, 0.1);"
    >
      <Box pos="absolute" left={0} margin="lg">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </Box>
      <LinkBox>
        <LinkOverlay href="/home" />
        <Center>
          <Image
            src="/posotto_title_3.svg"
            alt="posotto"
            w="50%"
            maxW="300px"
          />
        </Center>
      </LinkBox>
    </Center>
  )
}
