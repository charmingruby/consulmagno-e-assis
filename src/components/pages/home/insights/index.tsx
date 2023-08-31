import * as Container from '@/components/ui/container'
import { InsightCard } from './insight-card'
import { ArrowRight, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Insights() {
  return (
    <Container.Root className="bg-white">
      <Container.Content>
        <div className="mb-8 flex items-center gap-2">
          <Lightbulb className="h-8 w-8 text-secondary-main" />

          <div className="text-4xl text-primary-main">
            <span>Últimas</span> <strong>publicações</strong>
          </div>
        </div>

        <div className="mb-8 grid-cols-3 ">
          <InsightCard
            imageUrl=""
            title="Novo direito civil"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laboriosam sequi ipsam eligendi labore animi est, aut asperiores nesciunt ducimus alias illo ut aliquam minus, numquam exercitationem velit natus nostrum."
            url="Novo direito civil"
            horizontal
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InsightCard
            imageUrl=""
            title="Novo direito civil"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laboriosam sequi ipsam eligendi labore animi est, aut asperiores nesciunt ducimus alias illo ut aliquam minus, numquam exercitationem velit natus nostrum."
            url="Novo direito civil"
          />
          <InsightCard
            imageUrl=""
            title="Novo direito civil"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laboriosam sequi ipsam eligendi labore animi est, aut asperiores nesciunt ducimus alias illo ut aliquam minus, numquam exercitationem velit natus nostrum."
            url="Novo direito civil"
          />
          <InsightCard
            imageUrl=""
            title="Novo direito civil"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, laboriosam sequi ipsam eligendi labore animi est, aut asperiores nesciunt ducimus alias illo ut aliquam minus, numquam exercitationem velit natus nostrum."
            url="test"
          />
        </div>
        <div className="w-full flex justify-center mt-6">
          <Button>
            <div className="flex gap-2 items-center">
              Blog <ArrowRight size={18} className="text-secondary-main" />
            </div>
          </Button>
        </div>
      </Container.Content>
    </Container.Root>
  )
}
