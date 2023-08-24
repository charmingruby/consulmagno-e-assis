import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { SocialLinkItem } from './social-link-item'

export function SocialLinkList() {
  return (
    <div className="flex gap-4">
      <SocialLinkItem icon={Twitter} url="/" />
      <SocialLinkItem icon={Instagram} url="/" />
      <SocialLinkItem icon={Facebook} url="/" />
      <SocialLinkItem icon={Linkedin} url="/" />
    </div>
  )
}
