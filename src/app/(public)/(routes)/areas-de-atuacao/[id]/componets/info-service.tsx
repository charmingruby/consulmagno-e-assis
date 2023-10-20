import { Plus } from 'lucide-react'

interface infoServiceProps {
  name: string
  description: string
}

export function InfoService(props: infoServiceProps) {
  return (
    <div className="grid grid-row-2">
      <div className="flex gap-2">
        <Plus className="bg-gray-50 border text-secondary-main cursor-pointer"></Plus>
        <span className="justify-center text-xl ">{props.name}</span>
      </div>
      <div>
        <span className=" justify-center">{props.description}</span>
      </div>
    </div>
  )
}
