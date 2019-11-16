import React from 'react';
import { Box, Image } from 'rebass';
import { Tiles } from '@rebass/layout';
import { InlineName, InlineValue } from '../common/InlineText';
import { HeadingH1, HeadingH2, HeadingH3 } from '../common/Headings';
import { BoxWrapper, LinkWrapper, CardDetails } from '../common/Containers';
import StarshipItemComponent from '../starships/Starship-item-component';

const CharacterDetailsComponent = ({
  character: { name, image, height, mass, species, homeworld, starships },
}) => {
  return (
    <BoxWrapper>
      <HeadingH1>{name}</HeadingH1>
      <Tiles columns={[1, 2]} mt={4}>
        <CardDetails>
          <HeadingH3 py={3}>{name}</HeadingH3>
          <Box
            px={4}
            sx={theme => ({
              color: theme.fontColor,
            })}
          >
            <Image src={image} mb={3} />
            <br />
            <InlineName>Height: </InlineName>
            <InlineValue>{height}</InlineValue>
            <br />
            <InlineName>Weight: </InlineName>
            <InlineValue>{mass}</InlineValue>
            <br />
            <InlineName>Species: </InlineName>
            <InlineValue>{species.name}</InlineValue>
            <br />
            <InlineName>Homeworld: </InlineName>
            <InlineValue>{homeworld.name}</InlineValue>
          </Box>
        </CardDetails>
        <Box p={3}>
          <HeadingH2>Piloted Starships</HeadingH2>
          <Box p={3}>
            {starships.edges.map(({ node: starship }) => (
              <LinkWrapper
                key={starship.id}
                to={`/starships/${starship.id}`}
                id={starship.id}
              >
                <StarshipItemComponent
                  key={starship.id}
                  id={starship.id}
                  name={starship.name}
                  image={starship.image}
                />
              </LinkWrapper>
            ))}
          </Box>
        </Box>
      </Tiles>
    </BoxWrapper>
  );
};

export default CharacterDetailsComponent;
