import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="sm:max-w-7xl px-4 lg:px-6 w-full sm:mx-auto">
      {children}
    </div>
  )
}
