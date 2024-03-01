import { NeumoButton } from '@/components/shared/elements/NeumoButton'
import { HStack, Box, Text } from '@yamada-ui/react'

type Props = {
  draftText?: string
  handlePostButtonClick: () => void
}

export const DraftLayout = (props: Props) => {
  const { draftText, handlePostButtonClick } = props
  return (
    <HStack my="md" mx="lg" justify="space-between">
      <Box>
        <Text>{draftText}</Text>
      </Box>
      <NeumoButton
        handleClick={handlePostButtonClick}
        w="6em"
        fontWeight="md"
        isDark
      >
        ぽそっ
      </NeumoButton>
    </HStack>
  )
}
