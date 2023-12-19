import { FETCH_BLOG_MAIN_PAGE_POSTS } from '@/libs/graphql/queries/fetch-blog-main-page-posts/query'
import { getClient } from '@/libs/graphql/client'
import { revalidationCooldownInSeconds } from '@/libs/graphql/configs'
import { Loader } from '@/components/loader'
import { FetchBlogMainPagePosts } from '@/libs/graphql/queries/fetch-blog-main-page-posts/types'
import { PostCard } from './post-card'

export async function RecentPostsList() {
  const { data, loading } = await getClient().query({
    query: FETCH_BLOG_MAIN_PAGE_POSTS,
    context: {
      fetchOptions: {
        next: { revalidate: revalidationCooldownInSeconds },
      },
    },
  })

  const { posts } = data as FetchBlogMainPagePosts

  if (loading) {
    return (
      <div className="flex w-full justify-center mb-12">
        <Loader />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}
