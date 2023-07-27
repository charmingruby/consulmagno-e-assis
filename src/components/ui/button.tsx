import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'h-10 rounded-full shadow-sm font-medium',
  variants: {
    size: {
      default: 'h-10 px-8 hover:bg-primary-main/90 transition-colors',
      sm: 'h-8 px-3',
      xs: 'h-6 px-2 text-xs',
    },
    color: {
      primary: 'bg-primary-main text-gray-50',
      secondary: 'bg-secondary-main',
      uncolored: 'border',
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
