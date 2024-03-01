import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Button, ButtonProps } from '@yamada-ui/react'
import {
  BASE_COLOR,
  BASE_COLOR_DARK,
  BG_COLOR,
  BOX_SHADOW_PRESSED,
  BOX_SHADOW_PRESSED_DARK,
  BOX_SHADOW_UNPRESSED,
  BOX_SHADOW_UNPRESSED_DARK,
  FONT_COLOR,
  ICON_BOX_SHADOW_PRESSED,
  ICON_BOX_SHADOW_UNPRESSED,
} from '@/variants'
import React, { ReactNode } from 'react'

type NeumoButtonProps = ButtonProps & {
  children?: ReactNode
  isPressed?: boolean
  handleClick?: () => void
  isDark?: boolean
}

export const NeumoButton = (props: NeumoButtonProps) => {
  const {
    children,
    isPressed = false,
    handleClick,
    isDark = false,
    ...buttonProps
  } = props
  return (
    <Button
      bgColor={isDark ? BASE_COLOR_DARK : BG_COLOR}
      textColor={isDark ? BASE_COLOR : FONT_COLOR}
      boxShadow={
        isPressed
          ? isDark
            ? BOX_SHADOW_PRESSED_DARK
            : BOX_SHADOW_PRESSED
          : BOX_SHADOW_UNPRESSED
      }
      onClick={handleClick}
      _active={{ bgColor: BASE_COLOR_DARK, boxShadow: BOX_SHADOW_PRESSED }}
      _hover={{
        bgColor: isDark ? BASE_COLOR_DARK : BG_COLOR,
      }}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}
