import { Box } from '@/components/ui/box'
import { GraduationCap } from 'lucide-react'

export function ReasonCard() {
  return (
    <Box interaction>
      <div className="flex flex-col gap-4">
        <div className="bg-gray-75 h-12 w-12 flex items-center justify-center rounded-sm">
          <GraduationCap size={32} className="text-primary-main" />
        </div>
        <h2 className="text-primary-main font-semibold text-xl">
          Profissionais de ponta
        </h2>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id
          molestias quibusdam! Rem commodi quos animi hic cumque facere laborum
          itaque est tenetur provident et ea, velit, libero dolor iste.
        </p>
      </div>
    </Box>
  )
}
