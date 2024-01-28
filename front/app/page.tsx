'use client'
import { useEffect } from 'react'
import Posoto, { PosotoProps } from '@/components/Posoto'
import { Center, Spacer, Stack, VStack } from '@yamada-ui/react'
import { posotos } from '@/constants'

export default function Home() {
 useEffect(() => {
   const test = async () => {
      try {
        await fetch('http://localhost:8000/sample')
          .then((res) => res.json())
          .then((res) => console.log(res))
      } catch (e) {
        console.log(e)
      }
    }
    test()
  }, [])
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