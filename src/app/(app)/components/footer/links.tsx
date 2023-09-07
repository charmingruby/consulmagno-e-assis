import { LinkSection, LinkSectionProps } from "./link-section"

const productSection: LinkSectionProps = {
  title: 'Produto',
  links: [
    {
      label: 'Áreas de atuação',
      url: '/areas-de-atuacao'
    },
    {
      label: 'Blog',
      url: '/blog'
    }
  ]
}

const entepriseSection: LinkSectionProps = {
  title: 'Empresa',
  links: [
    {
      label: 'Relatos',
      url: '/relatos'
    },
    {
      label: 'Equipe',
      url: '/nossa-equipe'
    },
    {
      label: 'Contato',
      url: '/contato'
    }
  ]
}

const socialSection: LinkSectionProps = {
  title: 'Redes',
  links: [
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/company/consulmagnoeassis/'
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/consulmagnoassisadv/'
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/ConsulmagnoAssis'
    }
  ]
}


export function Links() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-end gap-6 lg:gap-12">
      <LinkSection title={productSection.title} links={productSection.links} />
      <LinkSection title={entepriseSection.title} links={entepriseSection.links} />
      <LinkSection title={socialSection.title} links={socialSection.links} />
    </div>
  )
}
