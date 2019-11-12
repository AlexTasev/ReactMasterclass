import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Image, Card, Link } from 'rebass';
import { Tiles } from '@rebass/layout';
import { InlineName, InlineValue } from '../common/InlineText';
import { HeadingH1, HeadingH2, HeadingH3 } from '../common/Headings';
import StarshipItemComponent from '../starships/Starship-item-comonent';

const CharacterDetailsComponent = ({
  character: { name, image, height, mass, species, homeworld, starships },
}) => {
  return (
    <Box
      width={[400, 600, 800, 1000]}
      height="100vh"
      mx="auto"
      mt={[1, 2, 4]}
      pb={5}
    >
      <HeadingH1>{name}</HeadingH1>
      <hr sx={theme => theme.lineColor} />
      <Tiles columns={[1, 2]} mt={4}>
        <Card
          width="1/2"
          sx={theme => ({
            backgroundColor: theme.cardBackground,
            border: '1px solid #E8EAED',
            borderRadius: 20,
          })}
          m={2}
          pb={3}
        >
          <HeadingH3>{name}</HeadingH3>
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
        </Card>
        <Box p={3}>
          <HeadingH2>Piloted Starships</HeadingH2>
          <hr sx={theme => theme.lineColor} />
          <Box p={3}>
            {starships.edges.map(({ node: starship }) => (
              <Link
                as={RouterLink}
                variant="nav"
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
              </Link>
            ))}
          </Box>
        </Box>
      </Tiles>
    </Box>
  );
};

export default CharacterDetailsComponent;
