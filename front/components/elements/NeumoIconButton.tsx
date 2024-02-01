import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { IconButton, IconButtonProps } from '@yamada-ui/react'
import {
  BG_COLOR,
  ICON_BOX_SHADOW_PRESSED,
  ICON_BOX_SHADOW_UNPRESSED,
} from '@/variants'
import React from 'react'

type NeumoIconButtonProps = IconButtonProps & {
  iconElem: React.ReactElement<IconDefinition>
  isPressed?: boolean
  handleClick: () => void
}

export const NeumoIconButton = (props: NeumoIconButtonProps) => {
  const {
    iconElem,
    isPressed = false,
    handleClick,
    size = 'sm',
    ...iconButtonProps
  } = props
  return (
    <IconButton
      size={size}
      borderRadius="50%"
      bgColor={BG_COLOR}
      boxShadow={
        isPressed ? ICON_BOX_SHADOW_PRESSED : ICON_BOX_SHADOW_UNPRESSED
      }
      onClick={handleClick}
      icon={iconElem}
      _active={{ boxShadow: ICON_BOX_SHADOW_PRESSED }}
      {...iconButtonProps}
    />
  )
}
