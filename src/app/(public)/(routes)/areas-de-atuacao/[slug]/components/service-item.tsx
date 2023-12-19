import { CheckCircle } from 'lucide-react'

interface ServiceItemProps {
  content: string
}

export function ServiceItem({ content }: ServiceItemProps) {
  return (
    <div className="flex gap-2  border border-gray-100 rounded-sm px-2 py-3 shadow-sm">
      <CheckCircle className="h-4 w-4 text-secondary-main mt-1.5" />
      <span className="font-medium text-lg text-primary-main">{content}</span>
    </div>
  )
}
