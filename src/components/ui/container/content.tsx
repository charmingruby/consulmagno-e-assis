import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const content = tv({
  base: 'sm:max-w-7xl px-4 lg:px-6 w-full sm:mx-auto',
  variants: {
    spacing: {
      default: 'py-12',
      spaceless: 'py-0',
    },
  },
  defaultVariants: {
    spacing: 'default',
  },
})

type ContentProps = ComponentProps<'div'> & VariantProps<typeof content>

export function Content({ spacing, className, ...props }: ContentProps) {
  return (
    <div
      className={content({
        class: className,
        spacing,
      })}
      {...props}
    />
  )
}
