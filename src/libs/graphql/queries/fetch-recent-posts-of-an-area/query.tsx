import { gql } from '@apollo/client'

export const FETCH_RECENT_POSTS_OF_AN_AREA = gql`
  query FetchRecentPostsOfAnArea {
    categories(where: { name: "Direito Civil" }) {
      id
      posts(first: 4, orderBy: publishedAt_DESC) {
        id
        subjects
        title
        slug
      }
    }
  }
`
