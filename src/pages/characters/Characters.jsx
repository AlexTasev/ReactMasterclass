import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARACTERS } from '../../client/queries/character-queries';
import CharactersComponent from '../../components/characters/Characters-component';
import Loading from '../../components/common/Loading';

const Characters = () => {
  const { data, loading, error, fetchMore } = useQuery(ALL_CHARACTERS);

  if (loading) return <Loading />;
  if (error) return <p>Error on getting all characters</p>;

  const {
    allPeople,
    allPeople: {
      pageInfo: { hasNextPage, endCursor },
    },
  } = data;

  const loadMoreCharacters = () => {
    fetchMore({
      variables: {
        first: 12,
        after: endCursor,
      },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        if (!hasNextPage) {
          return prev;
        }

        return {
          allPeople: {
            ...allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges],
          },
        };
      },
    });
  };

  return (
    <CharactersComponent
      allPeople={allPeople}
      loadMoreCharacters={loadMoreCharacters}
    />
  );
};

export default Characters;
