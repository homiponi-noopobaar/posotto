import { Box, BoxProps, Input, InputProps } from '@yamada-ui/react'
import {
  BG_COLOR,
  BOX_SHADOW_INPUT,
  BOX_SHADOW_PRESSED,
  BOX_SHADOW_UNPRESSED,
} from '@/variants'

type NeumoInputProps = InputProps & {}

export const NeumoInput = (props: NeumoInputProps) => {
  const { children, ...inputProps } = props
  return (
    <Input
      bgColor={BG_COLOR}
      boxShadow={BOX_SHADOW_INPUT}
      px="md"
      _focus={{
        bgColor: BG_COLOR,
        boxShadow: BOX_SHADOW_INPUT,
        borderColor: BG_COLOR,
      }}
      {...inputProps}
    />
  )
}
