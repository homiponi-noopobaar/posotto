'use client'
import { BG_COLOR } from '@/variants'
import { UserButton, SignedOut, SignInButton, SignedIn } from '@clerk/nextjs'
import { Box, Center, Image, LinkBox, LinkOverlay } from '@yamada-ui/react'
import { NeumoIconButton } from '@/components/elements/NeumoIconButton'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import { faRightToBracket, faPager } from '@fortawesome/free-solid-svg-icons'
import { useCustomRouter } from '@/hooks/useCustomRouter'

export default function Topbar() {
  const { handlePushRouter } = useCustomRouter()
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
          <SignInButton>
            <NeumoIconButton
              size="md"
              iconElem={
                <FontAwesomeIcon icon={faRightToBracket} fontSize="md" />
              }
            />
          </SignInButton>
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
      <Box pos="absolute" right={0} margin="lg">
        <NeumoIconButton
          size="md"
          iconElem={<FontAwesomeIcon icon={faPager} fontSize="md" />}
          handleClick={() => handlePushRouter('/')}
        />
      </Box>
    </Center>
  )
}
