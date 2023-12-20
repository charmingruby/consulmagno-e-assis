import { Badge } from '@/components/badge'
import { Box } from '@/components/ui/box'
import { AtSign, Instagram, Linkedin, Phone } from 'lucide-react'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { SocialMedia } from './social-media'

interface Area {
  label: string
  url: string
}

interface LawyerCardProps {
  name: string
  description: string
  linkedinUrl?: string
  phoneNumber?: string
  instagramUrl: string
  emailUrl: string
  role: string
  avatarUrl: StaticImport | string
  areas: Area[]
}

export function LayerCard(props: LawyerCardProps) {
  return (
    <Box>
      <div className="flex flex-col items-center">
        {/* Foto  */}
        <div className="p-2 border border-gray-100 rounded-full w-fit">
          <Image
            alt="foto do John"
            src={props.avatarUrl}
            className="rounded-full h-40 w-40"
          />
        </div>

        {/* Nome, Função e descrição  */}
        <div className="flex flex-col text-center mt-4">
          <strong className="text-lg">{props.name}</strong>
          <small className="text-sm font-medium text-gray-400">
            {props.role}
          </small>
        </div>

        <div className="mt-6">
          <p className="text-sm">{props.description}</p>
        </div>

        {/* Áreas */}
        <div className="flex flex-wrap gap-1 w-full mt-4">
          {props.areas.map((area) => (
            <Badge key={area.url} label={area.label} url={area.url} />
          ))}
        </div>

        <div className="flex flex-col w-full mt-8 gap-2 ">
          <div className="flex items-center gap-1">
            <AtSign strokeWidth={1.5} className="w-4 h-4" />
            <small>{props.emailUrl}</small>
          </div>
          {props.phoneNumber && (
            <div className="flex items-center gap-1">
              <Phone strokeWidth={1.5} className="w-4 h-4" />
              <small>{props.phoneNumber}</small>
            </div>
          )}
        </div>

        {/* redes sociais  */}
        <div className="flex justify-evenly gap-4 text-primary-main mt-4">
          <SocialMedia url={props.instagramUrl} icon={Instagram} />
          {props.linkedinUrl && (
            <SocialMedia url={props.linkedinUrl} icon={Linkedin} />
          )}
        </div>
      </div>
    </Box>
  )
}
