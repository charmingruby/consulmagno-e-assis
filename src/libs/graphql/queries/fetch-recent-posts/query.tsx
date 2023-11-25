import { gql } from '@apollo/client'

export const FETCH_RECENT_POSTS = gql`
  query FetchAllPosts {
    posts(orderBy: createdAt_DESC, first: 3) {
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
