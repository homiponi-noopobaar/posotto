import { LinkBox, LinkBoxProps, LinkOverlay } from '@yamada-ui/react'
import { ReactNode } from 'react'
import { BG_COLOR, BOX_SHADOW_UNPRESSED } from '@/variants'

type NeumoLinkBoxProps = LinkBoxProps & {
  children: ReactNode
  href: string
}

export const NeumoLinkBox = (props: NeumoLinkBoxProps) => {
  const { children, href, ...linkBoxProps } = props
  return (
    <LinkBox
      bgColor={BG_COLOR}
      boxShadow={BOX_SHADOW_UNPRESSED}
      {...linkBoxProps}
    >
      <LinkOverlay href={href} />
      {children}
    </LinkBox>
  )
}
