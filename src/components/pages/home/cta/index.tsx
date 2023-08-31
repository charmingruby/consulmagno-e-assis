import { Button } from '@/components/ui/button'
import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
  return (
    <Container.Root backgroundColor="primary">
      <Container.Content>
        <div className="max-w-2xl mx-auto space-y-8">
          <div>
            <strong className="text-4xl text-white">
              Nos diga como podemos te ajudar
            </strong>
          </div>

          <div>
            <Text size="md" align="center" className="text-gray-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              odio veniam ad exercitationem fugit dolorum enim eveniet
              voluptatum laboriosam soluta repellendus fugiat reprehenderit
              velit, ullam libero, cupiditate doloribus perferendis cumque?
            </Text>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="/"
              prefetch={false}
              className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              <Linkedin className=" text-secondary-main h-6 w-6 " />
            </Link>
            <Link
              href="/"
              prefetch={false}
              className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              <Facebook className=" text-secondary-main h-6 w-6 " />
            </Link>
            <Link
              href="/"
              prefetch={false}
              className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              <Instagram className=" text-secondary-main h-6 w-6 " />
            </Link>
          </div>

          <Link href="/" prefetch={false} className="flex justify-center">
            <Button color="secondary" className="flex items-center gap-2">
              <span>Entre em contato</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container.Content>
    </Container.Root>
  )
}
