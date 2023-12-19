import { gql } from '@apollo/client'

export const FETCH_BLOG_MAIN_PAGE_POSTS = gql`
  query FetchHomePosts {
    posts(orderBy: createdAt_DESC, first: 6) {
      id
      title
      subtitle
      author {
        name
        avatarImage {
          url
        }
      }
      coverImage {
        url
      }
      categories(first: 1) {
        name
      }
      slug
      createdAt
    }
  }
`
