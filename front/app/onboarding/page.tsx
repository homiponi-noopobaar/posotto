'use client'
import { NeumoButton } from '@/components/elements/NeumoButton'
import { NeumoFileButton } from '@/components/elements/NeumoFileButton'
import { NeumoInput } from '@/components/elements/NeumoInput'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { BOX_SHADOW_UNPRESSED } from '@/variants'
import {
  Center,
  FileButton,
  FormControl,
  Heading,
  Image,
  Input,
  Spacer,
  Stack,
  VStack,
  useFormControl,
} from '@yamada-ui/react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type userInfo = {
  publicId: string
  nickname: string
  // img_url: string
}

export default function Page() {
  const {
    // control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userInfo>()
  const { handlePushRouter } = useCustomRouter()

  const onSubmit: SubmitHandler<userInfo> = (data) => {
    console.log('submit:', data)
    handlePushRouter('/home')
  }

  return (
    <Stack direction="column" minH="20vh" w="full" pt="6em">
      <VStack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="full"
        alignItems="center"
      >
        {/* あとで実装 */}
        {/* <FormControl
          label="img_url"
          width="20em"
          helperMessage="すべてのユーザーに表示される名前です"
          isInvalid={!!errors.nickname}
        >
          <Controller
            control={control}
            render={({ field: { ref, name, onChange, onBlur } }) => (
              <NeumoFileButton {...{ ref, name, onChange, onBlur }}>
                Upload
              </NeumoFileButton>
            )}
          />
        </FormControl> */}
        <FormControl
          label="Nickname"
          width="20em"
          helperMessage="すべてのユーザーに表示される名前です"
          isInvalid={!!errors.nickname}
        >
          <NeumoInput
            type="text"
            placeholder="ニックネーム"
            {...register('nickname', {
              // required: { value: true, message: 'This is required.' },
            })}
          />
        </FormControl>
        <FormControl
          label="アカウントID"
          width="20em"
          helperMessage="英数字のみからなる一意のIDです"
          isInvalid={!!errors.publicId}
        >
          <NeumoInput
            type="text"
            placeholder="アカウントID"
            {...register('publicId', {
              // required: { value: true, message: 'This is required.' },
            })}
          />
        </FormControl>
        <NeumoButton type="submit" size="md" mt="3em" fontWeight="normal">
          ぽそっと始める
        </NeumoButton>
      </VStack>
      <Spacer />
    </Stack>
  )
}
