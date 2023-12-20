import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Quote, PersonStanding } from 'lucide-react'
import Image from 'next/image'
import exampleLogo from '@/assets/images/logo.svg'

interface CustomerStoryProps {
  category: string
  problem: string
  reporter: string
  companyName: string
  name: string
  office: string
}

export function CustomerStory(props: CustomerStoryProps) {
  return (
    <Box>
      {/* Tags */}
      <div className="flex text-gray-400 items-center gap-1 mb-8 border border-gray-100 rounded-full w-fit px-3 py-1.5">
        <PersonStanding className="h-4 w-4" />
        <small className="text-sm">{props.category}</small>
      </div>

      {/* Nome do cliente */}
      <div className="flex items-center gap-3 mb-8">
        {/* Logo */}
        <div className="border-2 border-primary-main h-14 w-14 rounded-full flex items-center justify-center p-0.5">
          <Image src={exampleLogo} alt="Logo" />
        </div>

        {/* Nome */}
        <div className="flex flex-col">
          <strong className="text-xl">{props.companyName}</strong>
          <small className="text-sm">{props.problem}</small>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Quote className="text-primary-main h-5 w-5" />
        <Text opacity="low" className="italic">
          {props.reporter}
        </Text>
        <div className="flex justify-end">
          <Quote className="text-secondary-main h-5 w-5" />
        </div>
      </div>

      <div className="flex flex-col w-fit">
        <small className="text-sm font-medium">{props.name}</small>
        <small className="text-xs text-gray-500">{props.office}</small>
        <div className="h-[0.5px] w-1/3 bg-primary-main rounded-full mt-3" />
      </div>
    </Box>
  )
}
