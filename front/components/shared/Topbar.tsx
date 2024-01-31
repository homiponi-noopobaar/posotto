import { UserButton, SignedOut, SignInButton, SignedIn } from '@clerk/nextjs'
import {
  Box,
  Button,
  Center,
  Heading,
  LinkBox,
  LinkOverlay,
  Spacer,
} from '@yamada-ui/react'
import Link from 'next/link'

export default function Topbar() {
  return (
    <Center
      // bg="white"
      bg="#eff2f9"
      h="6em"
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
        <Heading as="h2" flexGrow={1} textAlign="center">
          posotto
        </Heading>
      </LinkBox>
      {/* ↑あとでアイコンの画像に変更する */}
    </Center>
  )
}
