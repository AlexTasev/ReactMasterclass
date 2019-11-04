import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Box, Heading, Text, Image, Button, Flex, Card } from "rebass";
import { romanize } from "../../utils/helpers";
import { EPISODE_QUERY } from "../../client/queries";

const Episode = () => {
  let { episodeId } = useParams();

  const { data, loading, error, fetchMore } = useQuery(EPISODE_QUERY, {
    variables: { episodeId, first: 5 }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Some Error Occured</p>;

  const {
    episode,
    episode: {
      people: {
        pageInfo: { hasNextPage, endCursor }
      }
    }
  } = data;

  const characters = episode.people.edges;

  const loadMoreCharacters = () => {
    fetchMore({
      variables: {
        first: 5,
        after: endCursor
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
              edges: [...prev.episode.people.edges, ...episode.people.edges]
            }
          }
        };
      }
    });
  };

  return (
    <Card
      width={[400, 600, 800, 1000]}
      height="100%"
      mx="auto"
      backgroundColor="#E8EAED"
    >
      <Box height="100%">
        <Flex bg="white" flexDirection="row">
          <Box width="1/3" p={1} sx={{ borderRadius: 8 }}>
            <Image src={episode.image} width="250" />
          </Box>
          <Box width="2/3" p={5}>
            <Heading fontSize={[3, 4, 5]}>
              Star Wars Episode {romanize(episode.episodeId)}
            </Heading>
            <Heading>{episode.title}</Heading>
          </Box>
        </Flex>
      </Box>
      <Box bg="white" sx={{ width: "100%", marginTop: "10px" }}>
        {episode.openingCrawl}
        <Text pt={3}>Director: {episode.director}</Text>
        <Text pt={1.5}>Release date: {episode.releaseDate}</Text>
      </Box>

      <Box key={characters.id}>
        {characters.map(character => (
          <Flex bg="white" flexDirection="row">
            <Box key={character.node.id} width={1 / 3} p={1}>
              <Image
                src={character.node.image}
                sx={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  marginBottom: 3,
                  width: 150
                }}
              />
              <Text>{character.node.name}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <Button onClick={loadMoreCharacters}>Load more ...</Button>
    </Card>
  );
};

export default Episode;
