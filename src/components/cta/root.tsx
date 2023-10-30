import { PropsWithChildren } from 'react'
import * as Container from '@/components/ui/container'

export function Root({ children }: PropsWithChildren) {
  return (
    <Container.Root backgroundColor="primary">
      <Container.Content spacing="spaceless" className="py-10">
        <div className="max-w-2xl mx-auto space-y-8">{children}</div>
      </Container.Content>
    </Container.Root>
  )
}
