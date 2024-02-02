import { Input, InputProps } from '@yamada-ui/react'
import { BG_COLOR, BOX_SHADOW_INPUT } from '@/variants'
import React from 'react'

type NeumoInputProps = InputProps & {
  ref?: React.Ref<HTMLInputElement>
}

export const NeumoInput = React.forwardRef<HTMLInputElement, NeumoInputProps>(
  (props, ref) => {
    const { children, ...inputProps } = props
    return (
      <Input
        ref={ref}
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
  },
)
