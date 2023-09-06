import { Box } from "@/components/ui/box"
import { AtSign, Instagram, Linkedin, Phone } from "lucide-react"

import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from 'next/image'
import Link from "next/link"

interface LawyerCardProps {
    name: string
    description: string
    linkedinUrl: string
    phoneNumber: string
    instagramUrl: string
    emailUrl: string
    role: string
    avatarUrl: StaticImport | string
    areas: string[]
}

export function LayerCard(props: LawyerCardProps) {
    return (
        <Box >
            <div className="grid-rows-5">

                {/* Foto  */}
                <div>
                    <Image alt="foto do John" src={props.avatarUrl} />
                </div>

                {/* Nome, Função e descrição  */}
                <div className="mt-4 mb-4" >
                    <div className="flex gap-2 items-center pb-2">
                        <strong>{props.name}</strong>
                        <small>{props.role}</small>
                    </div>

                    <div>
                        <p>{props.description}</p>
                    </div>
                </div>

                {/* Áreas  */}
                <div >
                    <p >{props.areas.map((area) => (
                        <Link prefetch={false} href="/">
                            <span key={area}>{area}</span>
                        </Link>
                    ))}</p>
                </div>

                {/* Contato  */}
                <div className="mt-4 mb-4" >
                    <div className="flex gap-2 ">{/* email  */}
                        <AtSign className=" text-primary-main" />
                        <span>{props.emailUrl}</span>
                    </div>
                    <div className="flex gap-2">{/* telefone  */}
                        <Phone className=" text-primary-main" />
                        <span>{props.phoneNumber}</span>
                    </div>
                </div>

                {/* redes sociais  */}
                <div className="flex justify-center gap-4 text-primary-main " >
                    <Link href={props.linkedinUrl} prefetch={false} target="_blank"><Linkedin className=" hover:text-secondary-main" /></Link>
                    <Link href={props.instagramUrl} prefetch={false} target="_blank"><Instagram className=" hover:text-secondary-main" /></Link>
                </div>

            </div>
        </Box>
    )
}