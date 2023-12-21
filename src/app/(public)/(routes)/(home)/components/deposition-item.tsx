import exampleImage from '@/assets/images/lawyer.jpg'
import Image from 'next/image'

interface DepositionItemProps {
  deposition: string
  avatarUrl: string
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
        <div className="p-0.5 border-2 border-gray-100 rounded-full w-12 h-12 ">
          <Image
            src={props.avatarUrl}
            alt="Example deposition image"
            className=" rounded-full h-12 w-12"
            layout="responsive"
            height={500}
            width={500}
          />
        </div>

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
