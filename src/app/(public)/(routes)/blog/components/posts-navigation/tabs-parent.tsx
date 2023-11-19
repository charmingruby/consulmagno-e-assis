import { PostsTabs } from './tabs'
import { RelatedPosts } from './related-posts'

export function TabsParent() {
  return (
    <PostsTabs>
      <RelatedPosts slug="9" />
    </PostsTabs>
  )
}
