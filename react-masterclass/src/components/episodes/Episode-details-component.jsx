import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Tiles } from '@rebass/layout';
import { Box, Image, Flex, Link } from 'rebass';
import { InlineName, InlineValue } from '../common/InlineText';
import { HeadingH1, HeadingH2 } from '../common/Headings';
import { LinkWrapper } from '../common/Containers';
import { romanize } from '../../utils/helpers';
import CharacterItemComponent from '../characters/Character-item-component';
import ButtonSW from '../common/ButtonSW';

const EpisodeDetailsComponent = ({
  episode,
  characters,
  loadMoreCharacters,
}) => {
  return (
    <Box width={[500, 600, 800, 1000]} height="100%" mx="auto" mt={[1, 2, 4]}>
      <Box
        sx={theme => ({
          backgroundColor: theme.cardBackground,
          border: '1px solid #E8EAED',
          borderRadius: 20,
        })}
      >
        <Flex flexDirection="row" alignItems="center">
          <Image
            src={episode.image}
            sx={{
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            maxWidth={350}
          />
          <Box width="2/3" mx="auto">
            <HeadingH1>
              Star Wars Episode {romanize(episode.episodeId)}
            </HeadingH1>
            <HeadingH2>{episode.title}</HeadingH2>
          </Box>
        </Flex>
      </Box>

      <Box
        my={30}
        p={30}
        sx={theme => ({
          color: theme.fontColor,
          backgroundColor: theme.cardBackground,
        })}
      >
        {episode.openingCrawl}
        <Box py={3}>
          <InlineName>Director: </InlineName>
          <InlineValue
          >
            {episode.director}
          </InlineValue>
          <br />
          <InlineName>Release date: </InlineName>
          <InlineValue
          >
            {episode.releaseDate}
          </InlineValue>
        </Box>
      </Box>

      <Box>
        <Tiles columns={[1, 2, 3]}>
          {characters.map(character => (
            <LinkWrapper
              as={RouterLink}
              variant="nav"
              key={character.node.id}
              to={`/characters/${character.node.id}`}
              id={character.node.id}
            >
              <CharacterItemComponent
                key={character.node.id}
                id={character.node.id}
                name={character.node.name}
                image={character.node.image}
              />
            </LinkWrapper>
          ))}
        </Tiles>
        <Box mx="40%" pb={5} pt={4}>
          <ButtonSW onClick={loadMoreCharacters}>Load More</ButtonSW>
        </Box>
      </Box>
    </Box>
  );
};

export default EpisodeDetailsComponent;
