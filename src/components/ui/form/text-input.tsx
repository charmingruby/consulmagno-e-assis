import { ComponentProps, forwardRef } from 'react'

interface InputProps extends ComponentProps<'input'> {
  hasError?: boolean
  name: string
}

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, hasError = false, placeholder, ...props }, ref) => {
    const inputId = id ?? name

    return (
      <div className="relative w-full">
        <input
          {...props}
          ref={ref}
          id={inputId}
          name={name}
          className={`
          w-full bg-white h-[52px] px-3 outline-none box-border placeholder-shown:pt-0 pt-4 peer transition-all border rounded-lg focus:outline-secondary-main focus:border-gray-50
          ${
            hasError
              ? 'border-danger-300 placeholder-danger-300'
              : 'border-gray-100 placeholder-gray-200 focus:border-primary-300 '
          }
      `}
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          className={`absolute left-[13px] top-2 text-xs pointer-events-none ${
            hasError ? 'text-danger-300' : 'text-gray-300'
          } peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all`}
        >
          {placeholder}
        </label>
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'

export { TextInput }
