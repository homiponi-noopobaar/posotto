'use client'

import { UserRepository } from '@/repositories/user.repository'
import { UserInit } from '@/types/data/user'
import { FormControl, VStack } from '@yamada-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserService } from '../_services/user.service'
import { NeumoInput } from '@/components/shared/elements/NeumoInput'
import { NeumoButton } from '@/components/shared/elements/NeumoButton'
import { Token } from '@/types/token'
import { useCustomRouter } from '@/hooks/useCustomRouter'
import { Sign } from 'crypto'
import { SignIn } from '@clerk/nextjs'

type UserInitFormProps = {
  token: Token
}

export default function UserInitForm(props: UserInitFormProps) {
  const { token } = props
  const { handlePushRouter } = useCustomRouter()

  const {
    // control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInit>()

  const onSubmit: SubmitHandler<UserInit> = async (data) => {
    try {
      const UserRepo = new UserRepository()
      const UserSev = new UserService(UserRepo)
      const res = await UserSev.createUser(data, token)
      if (!res) {
        throw new Error('Failed to create user')
      }
      handlePushRouter('/home')
    } catch (err) {
      console.error(err)
    }
  }

  return (
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
      {/* <SignIn /> */}
      <NeumoButton type="submit" size="md" mt="3em" fontWeight="normal" isDark>
        ぽそっとはじめる
      </NeumoButton>
    </VStack>
  )
}
