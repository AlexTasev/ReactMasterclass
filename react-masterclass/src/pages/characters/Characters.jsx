import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Box, Button, Link } from "rebass";
import { Tiles } from "@rebass/layout";
import { ALL_CHARACTERS } from "../../client/queries/character-queries";
import CardItem from "../../components/common/Card-item";

const Characters = () => {
  const { data, loading, error, fetchMore } = useQuery(ALL_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on getting all characters</p>;

  const {
    allPeople,
    allPeople: {
      pageInfo: { hasNextPage, endCursor }
    }
  } = data;

  const loadMoreCharacters = () => {
    fetchMore({
      variables: {
        first: 12,
        after: endCursor
      },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        if (!hasNextPage) {
          return prev;
        }

        return {
          allPeople: {
            ...allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges]
          }
        };
      }
    });
  };

  return (
    <Box backgroundColor="#E8EAED">
      <Tiles columns={[1, 2, 3]} padding="4">
        {allPeople.edges.map(({ node: person }) => (
          <Link
            as={RouterLink}
            variant="nav"
            key={person.id}
            to={`/characters/${person.id}`}
            id={person.id}
          >
            <CardItem
              key={person.id}
              id={person.id}
              name={person.name}
              image={person.image}
            />
          </Link>
        ))}
        <Button onClick={loadMoreCharacters}>Load more ...</Button>
      </Tiles>
    </Box>
  );
};

export default Characters;
