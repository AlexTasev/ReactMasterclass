import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { EPISODE_QUERY } from '../../client/queries/episode-queries';
import EpisodeDetailsComponent from '../../components/episodes/Episode-details-component';

const Episode = () => {
  let { episodeId } = useParams();

  const { data, loading, error, fetchMore } = useQuery(EPISODE_QUERY, {
    variables: { episodeId, first: 5 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Some Error Occured</p>;

  const {
    episode,
    episode: {
      people: {
        pageInfo: { hasNextPage, endCursor },
      },
    },
  } = data;

  const characters = episode.people.edges;

  const loadMoreCharacters = () => {
    fetchMore({
      variables: {
        first: 5,
        after: endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        if (!hasNextPage) {
          return prev;
        }

        return {
          episode: {
            ...episode,
            people: {
              ...prev.episode.people,
              ...episode.people,
              edges: [...prev.episode.people.edges, ...episode.people.edges],
            },
          },
        };
      },
    });
  };

  return (
    <EpisodeDetailsComponent
      episode={episode}
      characters={characters}
      loadMoreCharacters={loadMoreCharacters}
    />
  );
};

export default Episode;
