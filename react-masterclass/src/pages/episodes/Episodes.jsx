import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Heading, Link, Text, Image } from 'rebass';
import { Tiles } from '@rebass/layout';
import { ALL_EPISODES_QUERY } from '../../client/queries/episode-queries';

const Episodes = () => {
  const { loading, error, data } = useQuery(ALL_EPISODES_QUERY, {
    variables: { first: 30 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on getting all episodes</p>;

  return (
    <Box>
      <Tiles columns={[1, 2, 3]} padding="4">
        {data.allEpisodes.edges.map(({ node }) => (
          <Link
            as={RouterLink}
            variant="nav"
            key={node.id}
            to={`/episodes/${node.id}`}
            id={node.id}
            backgroundColor="white"
            p={0}
            m={[1, 2, 5]}
            sx={{
              borderRadius: 20,
              ':hover': {
                boxShadow: '20px 20px 20px grey',
              },
            }}
          >
            <Image
              src={node.image}
              sx={{
                width: ['100%'],
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                mb: 3,
              }}
            />
            <Box>
              <Heading fontSize={[3, 4, 5]} color="#4BD5EE" p={[1, 2, 3]}>
                {node.title}
              </Heading>
              <Text
                fontSize={[1, 2, 3]}
                fontWeight="normal"
                color="#4E5B6E"
                p={[1, 2, 3]}
                pt={[2, 3, 4]}
              >
                {node.openingCrawl.substring(0, 300) + '...'}
              </Text>
            </Box>
          </Link>
        ))}
      </Tiles>
    </Box>
  );
};

export default Episodes;
