import { PageTitle } from '@/components/page-title'
import * as Container from '@/components/ui/container'
import { LayerCard } from './components/lawyer-card'
import lawyer from '@/assets/images/lawyer.jpg'

export default function Team() {
  return (
    <>

      {/* Foto da equipe com uma texto */}
      <Container.Root className="hero-img flex items-center sm:py-0 bg-no-repeat bg-center bg-fixed md:min-h-screen">
        <Container.Content >
          <div className="z-10 mt-16 sm:mt-0 w-full md:max-w-2xl flex flex-col justify-center">
            <h1 className="text-gray-50 font-semibold m-0 text-3xl md:text-4xl mb-6 break-words">
              Conheça nosso time
            </h1>
            <h2 className='text-gray-50 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt excepturi sint expedita voluptas quidem adipisci modi deleniti at odit, laborum cumque sit voluptatem nam placeat similique aut soluta itaque facilis.</h2>
          </div>
        </Container.Content>
      </Container.Root>

      {/* Mostrar membros do time com foto */}
      <Container.Root border="borderBottom">
        <Container.Content>
          <div className='flex gap-4'>

            <LayerCard
              avatarUrl={lawyer}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere, dolore sint fugit laborum suscipit officiis harum placeat esse eum libero ad debitis eaque. Quia incidunt asperiores distinctio sequi amet!"
              emailUrl=' contato@consulmagnoassis.com'
              instagramUrl='https://www.instagram.com/consulmagnoassisadv/'
              linkedinUrl='https://www.linkedin.com/company/consulmagnoeassis/about/?viewAsMember=true'
              name='John Doe'
              role='Estagiário'
              phoneNumber='(32) 98834-4973'
              areas={["Direito Civil", "Direito Administrativo"]}
            />

             <LayerCard
              avatarUrl={lawyer}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere, dolore sint fugit laborum suscipit officiis harum placeat esse eum libero ad debitis eaque. Quia incidunt asperiores distinctio sequi amet!"
              emailUrl=' contato@consulmagnoassis.com'
              instagramUrl='https://www.instagram.com/consulmagnoassisadv/'
              linkedinUrl='https://www.linkedin.com/company/consulmagnoeassis/about/?viewAsMember=true'
              name='John Doe'
              role='Estagiário'
              phoneNumber='(32) 98834-4973'
              areas={["Direito Civil", "Direito Administrativo"]}
            />
            
             <LayerCard
              avatarUrl={lawyer}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere, dolore sint fugit laborum suscipit officiis harum placeat esse eum libero ad debitis eaque. Quia incidunt asperiores distinctio sequi amet!"
              emailUrl=' contato@consulmagnoassis.com'
              instagramUrl='https://www.instagram.com/consulmagnoassisadv/'
              linkedinUrl='https://www.linkedin.com/company/consulmagnoeassis/about/?viewAsMember=true'
              name='John Doe'
              role='Estagiário'
              phoneNumber='(32) 98834-4973'
              areas={["Direito Civil", "Direito Administrativo"]}
            />

            
          </div>
        </Container.Content>
      </Container.Root>

      {/* Componente */}
      <Container.Root>
        <Container.Content>veja tambem</Container.Content>
      </Container.Root>
    </>
  )
}
