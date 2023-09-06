import * as Container from '@/components/ui/container'
import { Text } from '@/components/ui/text'

export default function Contact() {
  return (
    <>

      <Container.Root className="hero-img flex items-center sm:py-0 bg-no-repeat bg-center bg-fixed md:min-h-screen">
        <Container.Content >
          <div className="z-10 mt-16 sm:mt-0 w-full md:max-w-2xl flex flex-col justify-center ">
            khero com foto
          </div>
        </Container.Content>
      </Container.Root>

      <Container.Root border="borderBottom">
        <Container.Content className='grid grid-cols-2 '>
          <div>

            <h2>Entre em contato</h2>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi, commodi minus incidunt sunt recusandae ut? Asperiores quis aperiam vero doloribus, harum eligendi. Ipsa recusandae, eum placeat ducimus non a?</Text>


            <div>

            </div>
          </div>

          <div>
            form
          </div>
        </Container.Content>
      </Container.Root>

      <Container.Root>
        <Container.Content>veja tambem</Container.Content>
      </Container.Root>
    </>
  )
}
