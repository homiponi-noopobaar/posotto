import { Spacer, Stack } from '@yamada-ui/react'
import { auth } from '@clerk/nextjs'
import UserInitForm from './components/UserInitForm'

export default async function Page() {
  const { getToken } = auth()
  const token = await getToken()
  return (
    <Stack direction="column" minH="20vh" w="full" pt="6em">
      <UserInitForm token={token} />
      <Spacer />
    </Stack>
  )
}
