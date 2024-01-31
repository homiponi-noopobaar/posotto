import { Box, BoxProps } from '@yamada-ui/react'
import { BOX_SHADOW_UNPRESSED } from '@/variants'
import { ReactNode } from 'react'

type NeumoBoxProps = BoxProps & {
  children: ReactNode
}

export const NeumoBox = (props: NeumoBoxProps) => {
  const { children, ...boxProps } = props
  return (
    <Box bg="#eff2f9" boxShadow={BOX_SHADOW_UNPRESSED} {...boxProps}>
      {children}
    </Box>
  )
}
