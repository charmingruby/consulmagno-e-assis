import { Metadata } from 'next'

interface GenerateStaticSeoProps {
  rawTitle: string
  description: string
  hasPrefix?: boolean
}

const prefix = 'ConsulMagno e Assis Advocacia |'

export function generateStaticSeo({
  rawTitle,
  description,
  hasPrefix = true,
}: GenerateStaticSeoProps) {
  const title = hasPrefix ? `${prefix} ${rawTitle}` : rawTitle

  const metadata: Metadata = { title, description }
  return metadata
}
