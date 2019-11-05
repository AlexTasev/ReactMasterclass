import gql from "graphql-tag";

export const ALL_CHARACTERS = gql `
  query AllCharacters($first: Int! = 12, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
      edges {
        node {
          id
          name
          image
        }
      }
    }
  }
`;

export const CHARACTER_QUERY = gql `
  query Character ($characterId: ID!)  {
      person(id: $characterId) {
        id
        name
        image
        height
        mass
        species {
          name
        }
        homeworld {
          name
        }
        starships(first: 20) {
          edges {
            node {
                id
                name
                image
            }
          }
        }
      }
    }
`;