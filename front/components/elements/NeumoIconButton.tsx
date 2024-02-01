import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { IconButton } from '@yamada-ui/react'
import { Icon as FontAwesomeIcon } from '@yamada-ui/fontawesome'
import {
  BG_COLOR,
  ICON_BOX_SHADOW_PRESSED,
  ICON_BOX_SHADOW_UNPRESSED,
} from '@/variants'

type NeumoIconButtonProps = {
  icon: IconDefinition
  isPressed?: boolean
  handleClick: () => void
}

export const NeumoIconButton = ({
  icon,
  isPressed = false,
  handleClick,
}: NeumoIconButtonProps) => {
  return (
    <IconButton
      size="sm"
      borderRadius="50%"
      bgColor={BG_COLOR}
      boxShadow={
        isPressed ? ICON_BOX_SHADOW_PRESSED : ICON_BOX_SHADOW_UNPRESSED
      }
      onClick={handleClick}
      icon={<FontAwesomeIcon icon={icon} fontSize="sm" />}
    />
  )
}
