import { ReactNode } from 'react'

interface ControlRootProps {
  children: ReactNode
}

export function ControlRoot({ children }: ControlRootProps) {
  return <div className="flex flex-col gap-2 w-full">{children}</div>
}
