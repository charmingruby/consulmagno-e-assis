import { ChevronDown } from 'lucide-react'

interface infoServiceProps {
  name: string
  description: string
}

export function AreaAccordionItem({ name, description }: infoServiceProps) {
  return (
    <div className="grid grid-row-2 px-4 py-2">
      <div className="flex items-center gap-2">
        <span className="justify-center text-lg font-medium text-primary-main">
          {name}
        </span>
        <ChevronDown className="ml-auto h-5 w-5 text-primary-main" />
      </div>
    </div>
  )
}
