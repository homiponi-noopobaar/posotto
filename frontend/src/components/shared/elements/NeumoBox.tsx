import { Box, BoxProps } from '@yamada-ui/react'
import { BG_COLOR, BOX_SHADOW_UNPRESSED } from '@/variants'
import { ReactNode } from 'react'

type NeumoBoxProps = BoxProps & {
  children: ReactNode
}

export const NeumoBox = (props: NeumoBoxProps) => {
  const { children, ...boxProps } = props
  return (
    <Box bgColor={BG_COLOR} boxShadow={BOX_SHADOW_UNPRESSED} {...boxProps}>
      {children}
    </Box>
  )
}
