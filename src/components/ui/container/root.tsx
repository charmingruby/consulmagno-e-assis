import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const root = tv({
  variants: {
    border: {
      default: 'border-y border-gray-100',
      borderTop: 'border-t border-gray-100',
      borderBottom: 'border-b border-gray-100',
      borderless: 'border-none',
    },
    backgroundColor: {
      default: 'bg-gray-50',
      gray: 'bg-white',
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
