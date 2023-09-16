import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const root = tv({
  variants: {
    border: {
      default: 'border-none',
      borderTop: 'border-t border-gray-100',
      borderBottom: 'border-b border-gray-100',
      borderY: 'border-y border-gray-100',
    },
    backgroundColor: {
      default: 'bg-gray-50',
      white: 'bg-white',
      primary: 'bg-primary-gradient',
    },
  },
  defaultVariants: { backgroundColor: 'default', border: 'default' },
})

type RootProps = ComponentProps<'section'> & VariantProps<typeof root>

export function Root({
  backgroundColor,
  border,
  className,
  ...props
}: RootProps) {
  return (
    <section
      className={root({
        backgroundColor,
        border,
        class: className,
      })}
      {...props}
    />
  )
}
