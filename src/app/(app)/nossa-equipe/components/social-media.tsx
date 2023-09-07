import Link from "next/link";
import { ElementType } from "react";

interface SocialMediaProps {
  icon: ElementType
  url: string
}

export function SocialMedia({ icon: Icon, url }: SocialMediaProps) {
  return (
    <Link href={url} prefetch={false} target="_blank" className="group border border-gray-200 hover:border-primary-main transition-colors p-2 rounded-full">
      <Icon className="text-gray-300 group-hover:text-primary-main h-5 w-5 transition-colors" strokeWidth={1.5} />
    </Link>
  )
}
