import { InternalLinkItem } from './internal-link-item'

export interface LinkProps {
  label: string
  url: string
}

const links: LinkProps[] = [
  { label: 'Soluções', url: '/' },
  { label: 'Equipe', url: '/' },
  { label: 'Contato', url: '/' },
  { label: 'Blog', url: '/' },
]

export function InternalLinkList() {
  return (
    <div className="flex mt-6 gap-4 flex-wrap">
      {links.map(({ label, url }, index) => (
        <InternalLinkItem
          key={url}
          label={label}
          url={url}
          isTheLast={index === links.length - 1}
        />
      ))}
    </div>
  )
}
