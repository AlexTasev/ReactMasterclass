import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Text, Image } from 'rebass';

import { Tiles } from '@rebass/layout';
import { LinkWrapper } from '../common/Containers';
import { HeadingH1 } from '../common/Headings';

const EpisodesComponent = ({ data }) => {
  return (
    <Box>
      <Tiles columns={[1, 2, 3]} padding="4">
        {data.allEpisodes.edges.map(({ node }) => (
          <LinkWrapper
            key={node.id}
            to={`/episodes/${node.id}`}
            id={node.id}
            p={0}
            m={[1, 2, 3, 4, 5]}
          >
            <Box
              height="100%"
              sx={theme => ({
                backgroundColor: theme.cardBackground,
                border: '1px solid #E8EAED',
                borderRadius: 20,
              })}
            >
              <Image
                src={node.image}
                sx={{
                  width: ['100%'],
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
              />
              <HeadingH1>{node.title}</HeadingH1>
              <Text
                fontSize={[1, 2, 3]}
                fontWeight="normal"
                p={[1, 2, 3]}
                pt={[2, 3, 4]}
                sx={theme => ({ color: theme.fontColor })}
              >
                {node.openingCrawl.substring(0, 300) + '...'}
              </Text>
            </Box>
          </LinkWrapper>
        ))}
      </Tiles>
    </Box>
  );
};

export default EpisodesComponent;
