import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import exampleHeader from '@/assets/images/lawyers.png'
import Image from 'next/image'
import { Badge } from '@/components/badge'

export function CustomerCase() {
  return (
    <Box spacing="spaceless">
      <header className="flex items-center gap-2 border-gray-100">
        <Image src={exampleHeader} alt="" className=" rounded-t-md" />
      </header>

      <div className="p-6 mt-4">
        <div>
          {/* Tags */}
          <div>
            <Badge label="Direito Civil" />
          </div>

          {/* Titulo */}
          <strong className="text-xl mb-4 block">
            Como `Marca` ajudou na resoluçao dos problemas civis bla bla
          </strong>
          {/* Explicaçao */}
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            animi perspiciatis et blanditiis aut. Eligendi maxime doloremque
            praesentium eius minima. Tenetur illo quos sit corporis sapiente
            eius fuga in laudantium.
          </Text>
        </div>
      </div>
    </Box>
  )
}
