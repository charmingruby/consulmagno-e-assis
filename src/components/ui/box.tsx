import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const box = tv({
  base: 'border flex flex-col border-gray-200 shadow-sm rounded-sm bg-white',
  variants: {
    spacing: {
      default: 'p-6',
      lg: '',
      sm: '',
      spaceless: 'p-0',
    },
  },
  defaultVariants: {
    interaction: 'default',
    spacing: 'default',
  },
})

type BoxProps = ComponentProps<'div'> & VariantProps<typeof box>

export function Box({ spacing, className, ...props }: BoxProps) {
  return (
    <div
      className={box({
        spacing,
        class: className,
      })}
      {...props}
    />
  )
}
