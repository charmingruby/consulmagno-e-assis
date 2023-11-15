import { CheckCircle } from 'lucide-react'

interface ServiceItemProps {
  content: string
}

export function ServiceItem({ content }: ServiceItemProps) {
  return (
    <div className="flex justify-center items-center gap-2  border border-gray-100 rounded-xl px-4 py-4 shadow-sm">
      <CheckCircle className="h-5 w-5 text-secondary-main" />
      <span className="font-medium text-xl text-primary-main">{content}</span>
    </div>
  )
}
