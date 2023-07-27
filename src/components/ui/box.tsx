import { ReactNode } from 'react'

interface BoxProps {
  interaction?: boolean
  children: ReactNode
}

export function Box({ interaction = false, children }: BoxProps) {
  return (
    <div
      className={`p-6 border border-gray-200 rounded-sm bg-gray-50 ${
        interaction ? 'hover:shadow-md cursor-pointer transition-shadow' : ''
      }`}
    >
      {children}
    </div>
  )
}
