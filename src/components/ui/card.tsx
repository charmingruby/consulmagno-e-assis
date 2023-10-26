import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const card = tv({
  base: 'border border-gray-200 shadow-sm rounded-sm bg-white cursor-pointer transition-all hover:bg-white/60',
  variants: {
    spacing: {
      default: '',
    },
  },
  defaultVariants: {
    spacing: 'default',
  },
})

type CardProps = ComponentProps<'div'> & VariantProps<typeof card>

export function Card({ spacing, className, ...props }: CardProps) {
  return (
    <div
      className={card({
        spacing,
        class: className,
      })}
      {...props}
    />
  )
}
