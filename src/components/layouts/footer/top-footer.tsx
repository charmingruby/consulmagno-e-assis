import { Separator } from '../../ui/separator'
import { BrandPresentation } from './brand-presentation'
import { InternalLinkList } from './internal-link-list'
import { SocialMedias } from './social-medias'

export function TopFooter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left */}
      <div>
        <BrandPresentation />
        <InternalLinkList />
      </div>

      <Separator />

      {/* Right */}
      <div className="flex items-start md:justify-end">
        <SocialMedias />
      </div>
    </div>
  )
}
