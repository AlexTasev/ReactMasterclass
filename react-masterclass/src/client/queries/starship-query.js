import gql from "graphql-tag";

export const STARSHIP_QUERY = gql`
    query Starship($starshipId: ID!) {
      starship(id: $starshipId) {
        id
        name
        model
        image
        starshipClass
        cost
        maxAtmosphericSpeed
        maxMLPerHour
        hyperdriveRating
        crew
      }
    }
`;

export const STATS_QUERY = gql `
  query Stats($starshipClass: String) {
    allStarships(first: 20, filter: { starshipClass: $starshipClass }) {
      totalCount
      edges {
        node {
          cost
          maxAtmosphericSpeed
          crew
          hyperdriveRating
          maxMLPerHour
        }
      }
    }
  }
`;