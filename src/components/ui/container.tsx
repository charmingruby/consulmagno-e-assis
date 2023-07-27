import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="max-w-7xl px-4 lg:px-6 w-full mx-auto">{children}</div>
}
