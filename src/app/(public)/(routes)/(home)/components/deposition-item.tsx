import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface DepositionItemProps {
  deposition: string
  avatarUrl?: StaticImport | string
  role: string
  name: string
}

export function DepositionItem(props: DepositionItemProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-base italic text-foreground/70">
        {`"`}
        {props.deposition}
        {`"`}
      </p>

      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          {/* Name */}
          <strong className="text-base text-gray-600">{props.name}</strong>

          {/* Role */}
          <small className="block text-sm text-gray-500">{props.role}</small>
        </div>
      </div>
    </div>
  )
}
