export interface FetchPostBySlugResponse {
  id: string
  subjects: string[]
  title: string
  slug: string
  subtitle: string
  coverImage: {
    id: string
    url: string
  }
  content: {
    html: string
  }
  author: {
    id: string
    name: string
    avatarImage: { id: string; url: string }
  }
  categories: {
    id: string
    name: string
  }[]
}
