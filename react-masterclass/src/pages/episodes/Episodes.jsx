import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Link, Text, Image, Button } from "rebass";
import { Tiles } from "@rebass/layout";
import { ALL_EPISODES_QUERY } from "../../client/queries";

const Episodes = () => {
  const hasMore = false;

  const { loading, error, data } = useQuery(ALL_EPISODES_QUERY, {
    variables: { first: 6 }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error on getting all episodes</p>;

  // const loadMoreEpisodes = () => {
  //   fetchMore({
  //     variables: {
  //       after: cursor
  //     },
  //     updateQuery: (prev, { fetchMoreResult: { allEpisodes } }) => {
  //       if (!allEpisodes.episodes.length) {
  //         return prev;
  //       }

  //       return {
  //         allEpisodes: {
  //           ...allEpisodes,
  //           episodes: [...prev.allEpisodes.episodes, ...allEpisodes.episodes]
  //         }
  //       };
  //     }
  //   });

  return (
    <Box backgroundColor="#E8EAED">
      <Tiles columns={[1, 2, 3]} padding="4">
        {data.allEpisodes.edges.map(({ node }) => (
          <Link
            as={RouterLink}
            variant="nav"
            key={node.id}
            to={`/episodes/${node.id}`}
            id={node.id}
            backgroundColor="white"
            margin="4"
          >
            <Image
              src={node.image}
              sx={{
                width: ["100%", "100%"],
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                marginBottom: 3
              }}
            />
            <Heading
              fontSize={[2, 3, 4]}
              color="#4BD5EE"
              sx={{ marginBottom: 3 }}
            >
              {node.title}
            </Heading>
            <Text fontSize={[0.5, 0.7, 1]} fontWeight="normal" color="#4E5B6E">
              {node.openingCrawl.substring(0, 220) + "..."}
            </Text>
          </Link>
        ))}
      </Tiles>
      {hasMore && (
        <Box m={3} textAlign="center">
          {/* <Button onClick={loadMoreEpisodes}>Load More</Button> */}
        </Box>
      )}
    </Box>
  );
};

export default Episodes;
