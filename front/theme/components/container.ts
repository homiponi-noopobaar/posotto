import { ComponentStyle } from '@yamada-ui/react'

export const Container: ComponentStyle = {
  baseStyle: {
    bg: 'green.100',
  },
  sizes: {
    sm: { p: 'sm', fontSize: 'sm' },
    md: { p: 'md', fontSize: 'md' },
    lg: { p: 'lg', fontSize: 'lg' },
  },
  variants: {
    'wtih-border-solid': {
      borderWidth: '1px',
    },
    'wtih-border-dotted': {
      borderWidth: '1px',
      borderStyle: 'dotted',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'wtih-border-solid',
  },
}
