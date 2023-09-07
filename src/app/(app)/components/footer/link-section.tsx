import Link from "next/link"

interface LinkItem {
  label: string
  url: string
}

export interface LinkSectionProps {
  title: string
  links: LinkItem[]
}

export function LinkSection({ title, links }: LinkSectionProps) {
  return (
    <div>
      <strong>{title}</strong>
      <div className="flex flex-col mt-4 gap-1 lg:gap-2">
        {
          links.map(link => (
            <Link prefetch={false} href={link.url} target="_blank">
              <small key={link.label} className="text-sm font-medium text-gray-400 hover:text-primary-main hover:underline transition-all">
                {link.label}
              </small>
            </Link>
          ))
        }

      </div>
    </div>
  )
}
