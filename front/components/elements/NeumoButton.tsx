import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Button, ButtonProps } from '@yamada-ui/react'
import {
  BASE_COLOR,
  BASE_COLOR_DARK,
  BG_COLOR,
  ICON_BOX_SHADOW_PRESSED,
  ICON_BOX_SHADOW_UNPRESSED,
} from '@/variants'
import React, { ReactNode } from 'react'

type NeumoButtonProps = ButtonProps & {
  children?: ReactNode
  isPressed?: boolean
  handleClick?: () => void
}

export const NeumoButton = (props: NeumoButtonProps) => {
  const { children, isPressed = false, handleClick, ...buttonProps } = props
  return (
    <Button
      bgColor={BG_COLOR}
      boxShadow={
        isPressed ? ICON_BOX_SHADOW_PRESSED : ICON_BOX_SHADOW_UNPRESSED
      }
      onClick={handleClick}
      _active={{ boxShadow: ICON_BOX_SHADOW_PRESSED }}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}
