import { ComponentProps } from 'react'

type TextInputProps = ComponentProps<'input'>

export function TextInput({ ...props }: TextInputProps) {
  return (
    <input
      className="px-2 py-3 placeholder:text-gray-200 rounded-sm border bg-gray-50 active:bg-gray-50 hover:bg-gray-50 transition-colors cursor-pointer border-gray-100 outline-none hover:border-primary-main"
      {...props}
    />
  )
}

type TextAreaInput = ComponentProps<'textarea'> & {
  placeholder: string
}

export function TextAreaInput({ ...props }: TextAreaInput) {
  return (
    <textarea
      className="resize-none px-2 py-3 h-32 rounded-sm placeholder:text-gray-200 border bg-gray-50 active:bg-gray-50 hover:bg-gray-50 transition-colors cursor-pointer border-gray-100 active:border-primary-main outline-none hover:border-primary-main"
      {...props}
    />
  )
}
