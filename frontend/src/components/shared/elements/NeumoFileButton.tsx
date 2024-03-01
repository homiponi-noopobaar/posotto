import { FileButton, FileButtonProps } from '@yamada-ui/react'
import { BG_COLOR, BOX_SHADOW_UNPRESSED } from '@/variants'
import { ReactNode } from 'react'

type NeumoFileButtonProps = FileButtonProps & {
  children?: ReactNode
}

export const NeumoFileButton = (props: NeumoFileButtonProps) => {
  const { children, ...fileButtonProps } = props
  return (
    <FileButton
      bgColor={BG_COLOR}
      boxShadow={BOX_SHADOW_UNPRESSED}
      px="md"
      _focus={{
        bgColor: BG_COLOR,
        boxShadow: BOX_SHADOW_UNPRESSED,
        borderColor: BG_COLOR,
      }}
      {...fileButtonProps}
    >
      {children}
    </FileButton>
  )
}
