import { LinkBox, LinkBoxProps, LinkOverlay } from '@yamada-ui/react'
import { ReactNode } from 'react'
import { BOX_SHADOW_UNPRESSED } from '@/variants'

type NeumoLinkBoxProps = LinkBoxProps & {
  children: ReactNode
  href: string
}

export const NeumoLinkBox = (props: NeumoLinkBoxProps) => {
  const { children, href, ...linkBoxProps } = props
  return (
    <LinkBox bg="#eff2f9" boxShadow={BOX_SHADOW_UNPRESSED} {...linkBoxProps}>
      <LinkOverlay href={href} />
      {children}
    </LinkBox>
  )
}
