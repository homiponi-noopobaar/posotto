import { Box, Text, Avatar, VStack, Grid, GridItem } from '@yamada-ui/react'

export type PosotoProps = {
  id: number
  userName: string
  content: string
}

export default function Posoto({ id, userName, content }: PosotoProps) {
  return (
    <Box
      bg="amber.50"
      minH="7em"
      mx="md"
      border="1px solid"
      borderColor="gray.400"
      p="sm"
      borderRadius="10px"
    >
      <Grid w="full" templateColumns="auto 1fr" templateRows="auto 1fr" gap="0">
        <Avatar />
        <GridItem ms="sm">
          <VStack gap="0">
            <Text>{userName}</Text>
            <Text fontSize="2xs">1時間前</Text>
          </VStack>
        </GridItem>
        <GridItem />
        <GridItem ms="sm">
          <Text>{content}</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}
