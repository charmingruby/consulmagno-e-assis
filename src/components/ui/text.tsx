import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
}

export function Text({ children }: TextProps) {
  return <p className="leading-relaxed text-gray-70 text-lg">{children}</p>
}
