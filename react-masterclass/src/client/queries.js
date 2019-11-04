import gql from "graphql-tag";

export const ALL_EPISODES_QUERY = gql `
    query AllEpisodesQuery($first: Int!) {
      allEpisodes(first: $first) {
        totalCount
        edges {
          node {
            id
            title
            episodeId
            image
            openingCrawl
          }
        }
      }
    }
  `;

export const EPISODE_QUERY = gql `
    query EpisodeQuery($episodeId: ID!) {
      episode(id: $episodeId) {
        id
        title
        episodeId
        image
        director
        releaseDate
        openingCrawl
        people {
          totalCount
          edges {
            cursor
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