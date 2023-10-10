/* eslint-disable */
import { ComponentProps, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const box = tv({
  base: 'border border-gray-200 shadow-sm rounded-sm bg-white',
  variants: {
    spacing: {
      default: 'p-6',
      lg: '',
      sm: '',
      spaceless: 'p-0'
    },
    interaction: {
      default: 'hover:shadow-md cursor-pointer transition-all hover:bg-white/60 hover:border-primary-main',
      noInteraction: ''
    }
  },
  defaultVariants: {
    interaction: 'default',
    spacing: 'default'
  }
})

type BoxProps = ComponentProps<'div'> & VariantProps<typeof box>

export function Box({ interaction, spacing, className, ...props }: BoxProps) {
  return (
    <div className={box({
      interaction: interaction, spacing, class: className

    })} {...props} />
  )
}
