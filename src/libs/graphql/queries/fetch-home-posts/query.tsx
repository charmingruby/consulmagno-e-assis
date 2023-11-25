import { gql } from '@apollo/client'

export const FETCH_HOME_POSTS = gql`
  query FetchHomePosts {
    posts(orderBy: createdAt_DESC, first: 4) {
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
