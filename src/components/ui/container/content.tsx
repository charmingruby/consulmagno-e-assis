import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const content = tv({
  base: 'sm:max-w-[88rem] px-4 lg:px-6 w-full sm:mx-auto',
  variants: {
    spacing: {
      default: 'py-10 md:py-16',
      spaceless: 'py-0',
      lg: 'py-24',
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
