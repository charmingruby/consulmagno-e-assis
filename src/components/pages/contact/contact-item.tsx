import { IconBadge } from '@/components/shared/icon-badge'
import { ElementType } from 'react'

interface ContactItemProps {
  icon: ElementType
  label: string
  field: string
}

export function ContactItem({ icon: Icon, label, field }: ContactItemProps) {
  return (
    <div className="flex gap-4 flex-1 items-center">
      <div className="flex flex-col justify-center items-center">
        <IconBadge icon={Icon} />
      </div>
      <div className="flex flex-col justify-center gap-0.5">
        <strong>{label}</strong>
        <span className="block text-sm">{field}</span>
      </div>
    </div>
  )
}
