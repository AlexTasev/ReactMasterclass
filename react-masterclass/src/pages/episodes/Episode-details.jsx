import React from 'react';
import { useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Tiles } from '@rebass/layout';
import { Box, Heading, Text, Image, Button, Flex, Link } from 'rebass';
import { romanize } from '../../utils/helpers';
import { EPISODE_QUERY } from '../../client/queries/episode-queries';
import CharacterItem from '../characters/Character-item';

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
    <Box width={[400, 600, 800, 1000]} height="100%" mx="auto" my={[1, 2, 4]}>
      <Box
        sx={{
          borderRadius: 20,
        }}
      >
        <Flex
          bg="white"
          flexDirection="row"
          alignItems="center"
          sx={{
            borderRadius: 20,
          }}
        >
          <Image
            src={episode.image}
            sx={{
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            maxWidth={350}
          />
          <Box width="2/3" mx="auto">
            <Heading fontSize={[3, 4, 5]}>
              Star Wars Episode {romanize(episode.episodeId)}
            </Heading>
            <Heading>{episode.title}</Heading>
          </Box>
        </Flex>
      </Box>

      <Box bg="white" my={30} p={30}>
        {episode.openingCrawl}
        <Text pt={3}>Director: {episode.director}</Text>
        <Text pt={1.5}>Release date: {episode.releaseDate}</Text>
      </Box>

      <Box>
        <Tiles columns={[1, 2, 3]}>
          {characters.map(character => (
            <Link
              as={RouterLink}
              variant="nav"
              key={character.node.id}
              to={`/characters/${character.node.id}`}
              id={character.node.id}
            >
              <CharacterItem
                key={character.node.id}
                id={character.node.id}
                name={character.node.name}
                image={character.node.image}
              />
            </Link>
          ))}
        </Tiles>
        <Box mx="40%" pb={5} pt={4}>
          <Button
            borderRadius={10}
            sx={{
              ':hover': {
                backgroundColor: 'tomato',
              },
              cursor:"pointer"
            }}
            onClick={loadMoreCharacters}
          >
            Load More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Episode;
