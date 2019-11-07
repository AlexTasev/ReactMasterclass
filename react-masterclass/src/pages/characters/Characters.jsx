import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Box, Button, Link } from 'rebass';
import { Tiles } from '@rebass/layout';
import { ALL_CHARACTERS } from '../../client/queries/character-queries';
import CharacterItem from './Character-item';

const Characters = () => {
  const { data, loading, error, fetchMore } = useQuery(ALL_CHARACTERS);

  if (loading) return <p>Loading...</p>;
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
    <Box m={[1, 3, 5]}>
      <Tiles columns={[1, 2, 3]} padding="4">
        {allPeople.edges.map(({ node: person }) => (
          <Link
            as={RouterLink}
            variant="nav"
            key={person.id}
            to={`/characters/${person.id}`}
            id={person.id}
            
          >
            <CharacterItem
              key={person.id}
              id={person.id}
              name={person.name}
              image={person.image}
            />
          </Link>
        ))}
      </Tiles>
      <Box mx="40%" pb={5}>
        <Button
          borderRadius={10}
          sx={{
            ':hover': {
              backgroundColor: 'tomato',
            },
            cursor: 'pointer',
          }}
          onClick={loadMoreCharacters}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default Characters;
