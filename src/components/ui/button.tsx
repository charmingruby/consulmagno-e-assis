import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'h-12 rounded-sm uppercase text-sm shadow-sm font-semibold',
  variants: {
    size: {
      default: 'px-8',
      sm: 'h-10 px-4',
      xs: 'h-6 px-2 text-xs',
    },
    color: {
      primary:
        'bg-primary-main text-gray-50 hover:bg-primary-main/90 transition-colors',
      secondary:
        'bg-secondary-main hover:bg-secondary-main/90 transition-colors',
      uncolored:
        'border border-primary-main text-gray-50 hover:bg-primary-main transition-colors',
      outline:
        'border border-primary-main text-primary-main hover:bg-primary-main transition-colors hover:text-gray-50',
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    children: ReactNode
    className?: string
  }

export function Button({
  children,
  size,
  color,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ color, size, class: className })} {...props}>
      {children}
    </button>
  )
}
