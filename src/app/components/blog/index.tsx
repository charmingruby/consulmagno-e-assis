import { Container } from '@/components/ui/container'
import PostsTabMenu from './posts-tab-menu'

export function Blog() {
  return (
    <section className="bg-gray-75 border-t border-gray-200 py-12">
      <Container>
        blog
        <PostsTabMenu />
      </Container>
    </section>
  )
}
