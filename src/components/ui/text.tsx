import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const text = tv({
  base: 'leading-relaxed text-gray-700 text-lg',
  variants: {
    align: {
      default: '',
      center: 'text-center',
    },
    size: {
      default: '',
      md: 'text-base',
    },
  },
  defaultVariants: {
    align: 'default',
    size: 'default',
  },
})

type TextProps = ComponentProps<'p'> & VariantProps<typeof text>

export function Text({ className, align, size, ...props }: TextProps) {
  return (
    <div
      className={text({
        class: className,
        align,
        size,
      })}
      {...props}
    />
  )
}
