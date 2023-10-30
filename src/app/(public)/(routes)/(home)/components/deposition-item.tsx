import exampleImage from '@/assets/images/lawyer.jpg'
import Image from 'next/image'

interface DepositionItemProps {
  deposition: string
  avatarUrl: string
  role: string
  name: string
}

export function DepositionItem() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-base italic text-foreground/70">
        {`"`}Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem
        soluta deleniti cum, possimus doloribus iste sint sequi cumque beatae
        molestiae corporis nam error nisi deserunt, perspiciatis officia ex
        nobis?{`"`}
      </p>

      <div className="flex items-center gap-2">
        <div className="p-0.5 border-2 border-gray-100 rounded-full ">
          <Image
            src={exampleImage}
            alt="Example deposition image"
            className="rounded-full h-12 w-12"
          />
        </div>

        <div className="flex flex-col">
          {/* Name */}
          <strong className="text-base text-gray-600">Paulo Renato</strong>

          {/* Role */}
          <small className="block text-sm text-gray-500">
            Fundador do Consulmagno & Assis
          </small>
        </div>
      </div>
    </div>
  )
}