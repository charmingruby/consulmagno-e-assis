import { Metadata } from 'next'

interface GenerateStaticSeoProps {
  title: string
  description: string
}

export function generateStaticSeo({
  title,
  description,
}: GenerateStaticSeoProps) {
  const metadata: Metadata = { title, description }
  return metadata
}
