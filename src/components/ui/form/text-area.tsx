import { ComponentProps, forwardRef } from 'react'

interface TextAreaInputProps extends ComponentProps<'textarea'> {
  hasError?: boolean
  name: string
}

const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  ({ id, name, hasError = false, placeholder, ...props }, ref) => {
    const inputId = id ?? name

    /* eslint-disable */
    return (
      <div className='relative'>
        <textarea
          {...props}
          ref={ref}
          id={inputId}
          name={name}
          className={`
          w-full bg-white min-h-[8rem] px-3 outline-none box-border placeholder-shown:pt-4 pt-6 peer transition-colors border rounded-lg focus:outline-secondary-main focus:border-gray-50 cursor-pointer
          ${hasError
              ? 'border-danger-300 placeholder-danger-300'
              : 'border-gray-100 placeholder-gray-200 focus:border-primary-300 '
            }
      `}
          placeholder=' '
        />
        <label
          htmlFor={inputId}
          className={`absolute left-[13px] top-2 text-xs pointer-events-none ${hasError ? 'text-danger-300' : 'text-gray-300'} peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all`}
        >
          {placeholder}
        </label>
      </div>
    )
    /* eslint-enable */
  },
)

TextAreaInput.displayName = 'TextAreaInput'

export { TextAreaInput }
